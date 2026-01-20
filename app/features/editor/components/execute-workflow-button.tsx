import { Button } from "@/components/ui/button";
import { FlaskConicalIcon } from "lucide-react";
import { useExecuteWorkflow } from "../../workflows/hooks/use-workflows";

export const ExecuteWorkflowButton = ({
  workflowId,
}: {
  workflowId: string;
}) => {
  const executeWorkflow = useExecuteWorkflow();
  const handleSubmit = () => {
    executeWorkflow.mutate({ id: workflowId }); 
  };
  return (
    <Button
      size={"lg"}
      onClick={handleSubmit}
      disabled={executeWorkflow.isPending}
    >
      <FlaskConicalIcon />
      Execute workflow
    </Button >
  );
};
