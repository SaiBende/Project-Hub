// Example: TaskCardDialog.tsx
import { Dialog, DialogContent } from "@/components/ui/dialog";
import TaskCardBig from "@/components/resuable/task-card";
import { TaskType } from "@/types/api.type";

export default function TaskCardDialog({
  open,
  onOpenChange,
  task,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  task: TaskType | null;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        {task && <TaskCardBig task={task} onClose={() => onOpenChange(false)} />}
      </DialogContent>
    </Dialog>
  );
}