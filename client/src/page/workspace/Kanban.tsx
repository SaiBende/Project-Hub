import CreateTaskDialog from "@/components/workspace/task/create-task-dialog";
import  KanbanBoard  from "@/components/workspace/task/kanban/kanban-board"


function Kanban() {
  return (
    <div className="w-full h-full flex-col space-y-8 pt-3">
    <div className="flex items-center justify-between space-y-2">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">KanBan Board Tasks Assigned to You</h2>
        <p className="text-muted-foreground">
          Here&apos;s the Kanban Board of all tasks for this workspace! Drag and drop to move tasks between columns.
        </p>
      </div>
      <CreateTaskDialog />
    </div>
    {/* {Kanban Table} */}
    <div>
      <KanbanBoard />
    </div>
  </div>
  )
}

export default Kanban