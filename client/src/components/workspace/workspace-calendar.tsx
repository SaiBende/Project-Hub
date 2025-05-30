import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useWorkspaceId from "@/hooks/use-workspace-id";
import { getAllTasksQueryFn } from "@/lib/api";
import { TaskType } from "@/types/api.type";
import { Calendar as BigCalendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip as ReactTooltip } from "react-tooltip";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);
const statusColorMap: Record<string, string> = {
  todo: "#facc15", // yellow
  in_progress: "#60a5fa", // blue
  done: "#4ade80", // green
  backlog: "#f87171", // red
};

const getEventStyle = (task: TaskType) => {
  const color = statusColorMap[task.status.toLowerCase()]; // default gray
  return {
    style: {
      backgroundColor: color,
      borderRadius: "6px",
      padding: "4px",
      color: "#000",
      border: "none",
    },
  };
};




const CalendarBox: FC = () => {
  const params = useParams();
  const projectId = params.projectId as string;
  const workspaceId = useWorkspaceId();

  const { data, isLoading } = useQuery({
    queryKey: ["all-tasks", workspaceId, projectId],
    queryFn: () =>
      getAllTasksQueryFn({
        workspaceId,
        projectId,
        pageNumber: 1,
        pageSize: 100,
      }),
    staleTime: 0,
  });

  const tasks: TaskType[] = data?.tasks || [];

  const calendarEvents: Event[] = tasks
    .filter((task) => task.dueDate && task.createdAt)
    .map((task) => ({
      title: `${task.title} (${task.status})`,
      start: new Date(task.createdAt),
      end: new Date(task.dueDate),
      allDay: false,
      resource: task,
    }));

  return (
    <div className="p-4 space-y-4">
      {isLoading ? (
        <Skeleton className="w-full h-[500px]" />
      ) : (
        <>
          <BigCalendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["month"]}
            style={{ height: 600 }}
            popup
            popupOffset={{ x: 30, y: 20 }} // so "more" popup doesn't look cramped
            components={{
              event: CustomEvent,
            }}
            eventPropGetter={(event) => getEventStyle(event.resource)}
          />


          <ReactTooltip anchorSelect="[data-tip]" place="top" />
        </>
      )}
    </div>
  );
};

const CustomEvent = ({ event }: { event: Event }) => {
  const task = event.resource as TaskType;

  return (
    <>
      <div
        data-tip
        data-for={`tooltip-${task._id}`}
        className="px-2 py-1 rounded-md text-xs font-medium truncate"
        style={{
          backgroundColor: getEventStyle(task).style.backgroundColor,
          color: "#1f2937", // dark gray text
        }}
      >
         {task.title}
      </div>

      <ReactTooltip id={`tooltip-${task._id}`} place="top">
        <div className="text-sm max-w-[200px] break-words">
          <strong>{task.title}</strong>
          <div>{task.description}</div>
          <div>Status: {task.status}</div>
          <div>Priority: {task.priority}</div>
        </div>
      </ReactTooltip>
    </>
  );
};


export default CalendarBox;
