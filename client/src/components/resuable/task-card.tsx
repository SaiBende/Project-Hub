import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

import React from "react";
import { TaskType } from "@/types/api.type";

interface TaskCardProps {
  task: TaskType;
  onClose?: () => void;
}

const TaskCardBig: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <Card className="relative w-full max-w-md shadow-lg">
     
      <CardHeader>
        <CardTitle className="text-lg">{task.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-xs font-semibold text-muted-foreground">
            Priority: {task.priority}
          </span>
          <span className="text-xs font-semibold text-muted-foreground">
            Status: {task.status}
          </span>
          {task.project && (
            <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
              Project: <span>{task.project.emoji}</span> {task.project.name}
            </span>
          )}
          <span className="text-xs font-semibold text-muted-foreground">
            Task Code: {task.taskCode}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        {task.description && (
          <CardDescription className="mb-2">{task.description}</CardDescription>
        )}
        <div className="flex flex-col gap-1 text-sm">
          <div>
            <span className="font-semibold">Assigned To: </span>
            {task.assignedTo
              ? (
                <>
                  <span>{task.assignedTo.name}</span>
                  {task.assignedTo.profilePicture && (
                    <img
                      src={task.assignedTo.profilePicture}
                      alt={task.assignedTo.name}
                      className="inline-block w-5 h-5 rounded-full ml-2"
                    />
                  )}
                </>
              )
              : <span>Unassigned</span>
            }
          </div>
          <div>
            <span className="font-semibold">Due Date: </span>
            {new Date(task.dueDate).toLocaleDateString()}
          </div>
          <div>
            <span className="font-semibold">Workspace ID: </span>
            {task.workspaceId}
          </div>
          <div>
            <span className="font-semibold">Created At: </span>
            {new Date(task.createdAt).toLocaleString()}
          </div>
          {task.updatedAt && (
            <div>
              <span className="font-semibold">Updated At: </span>
              {new Date(task.updatedAt).toLocaleString()}
            </div>
          )}
          {task.createdBy && (
            <div>
              <span className="font-semibold">Created By: </span>
              {task.createdBy}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCardBig;