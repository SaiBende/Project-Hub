import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DndContext, closestCenter, useDraggable, useDroppable } from "@dnd-kit/core";
import { getAllTasksQueryFn, updateTaskStatusMutationFn } from "@/lib/api";
import useWorkspaceId from "@/hooks/use-workspace-id";
import { TaskType } from "@/types/api.type";
import { Info } from "lucide-react";
import type { DragEndEvent } from "@dnd-kit/core";
import CreateTaskDialog from "../create-task-dialog";


const columns = ["BACKLOG", "TODO", "IN_PROGRESS", "IN_REVIEW", "DONE"];

function KanbanBoard() {
  const workspaceId = useWorkspaceId();
  const queryClient = useQueryClient();

  

  const { data: tasksData } = useQuery({
    queryKey: ["all-tasks", workspaceId],
    queryFn: () =>
      getAllTasksQueryFn({
        workspaceId,
        pageNumber: 1,
        pageSize: 100,
      }),
    enabled: !!workspaceId,
  });

  const tasks: TaskType[] = tasksData?.tasks || [];

  const mutation = useMutation({
    mutationFn: updateTaskStatusMutationFn,

    onMutate: async ({ taskId, data }) => {
      await queryClient.cancelQueries({ queryKey: ["all-tasks", workspaceId] });

      const previousTasks = queryClient.getQueryData<{ tasks: TaskType[] }>([
        "all-tasks",
        workspaceId,
      ]);

      queryClient.setQueryData<{ tasks: TaskType[] }>(
        ["all-tasks", workspaceId],
        (old) => {
          if (!old) return old;

          return {
            tasks: old.tasks.map((task) =>
              task._id === taskId
                ? {
                  ...task,
                  status: data.status as TaskType["status"],
                }
                : task
            ),
          };
        }
      );

      return { previousTasks };
    },

    onError: (context: { previousTasks?: { tasks: TaskType[] } }) => {
      queryClient.setQueryData(
        ["all-tasks", workspaceId],
        context?.previousTasks
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["all-tasks", workspaceId],
      });
    },
  });

  const groupedTasks = columns.reduce((acc, status) => {
    acc[status] = tasks.filter((task) => task.status === status);
    return acc;
  }, {} as Record<string, TaskType[]>);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.data.current?.status === over.id) return;

    mutation.mutate({
      workspaceId,
      taskId: active.id as string,
      data: { status: over.id as string },
    });
  };

 
 

  return (
    <>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {columns.map((status) => (
            <Column
              key={status}
              id={status}
              tasks={groupedTasks[status] || []}
              
            />
          ))}
        </div>
      </DndContext>
      
    </>
  );
}

function Column({
  id,
  tasks,

}: {
  id: string;
  tasks: TaskType[];
  
}) {
  const { setNodeRef } = useDroppable({ id });

   
  return (
    <div ref={setNodeRef} className="bg-gray-100 rounded-lg p-3 shadow-sm min-h-[200px]">
      <h2 className="text-lg font-semibold mb-2">{id}</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div className="">
          <TaskCard key={task._id} task={task}  />
         <CreateTaskDialog />
        </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-full space-y-2">
        <p className="text-sm text-gray-400">No tasks</p>
        <CreateTaskDialog  />
        </div>
      )}
    </div>
  );
}

function getPriorityColor(priority: TaskType["priority"]) {
  switch (priority) {
    case "HIGH":
      return "bg-red-100 text-red-600";
    case "MEDIUM":
      return "bg-yellow-100 text-yellow-600";
    case "LOW":
      return "bg-green-100 text-green-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

function TaskCard({
  task,
  onClick,
}: {
  task: TaskType;
  onClick?: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task._id,
      data: { status: task.status },
    });

  // Prevent click when dragging
  const handleClick = () => {
    if (isDragging) return;
    if (onClick) onClick();
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`rounded-2xl border p-4 mb-1 bg-white shadow transition-transform cursor-grab ${isDragging ? "opacity-50" : ""
        }`}
      style={{
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
      }}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={`Open details for ${task.title}`}
    >
      {/* Task Title */}
      <h3 className="text-base font-semibold text-gray-800 mb-1">
        {task.title}
      </h3>

      {/* Description */}
      {task.description && (
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">
          {task.description}
        </p>
      )}

      {/* Project Info */}
      {task.project && (
        <div className="text-xs text-gray-500 flex items-center gap-1 mb-2">
          <Info className="w-3 h-3" />
          <span>
            {task.project.emoji} {task.project.name}
          </span>
        </div>
      )}

      {/* Priority */}
      <div className="flex justify-end">
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${getPriorityColor(
            task.priority
          )}`}
        >
          {task.priority}
        </span>
      </div>
    </div>
  );
}

export default KanbanBoard;
