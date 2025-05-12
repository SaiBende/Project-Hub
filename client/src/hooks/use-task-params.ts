import { useParams } from 'react-router-dom';

const useTaskParams = () => {
  const params = useParams();

  return {
    taskId: params.taskId as string,
    workspaceId: params.workspaceId as string,
    projectId: params.projectId as string,
  };
};

export default useTaskParams;