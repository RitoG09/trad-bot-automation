import { useQueryStates } from "nuqs";
import { workflowsParamas } from "../params";

export const useWorkflowsParams = () => {
  return useQueryStates(workflowsParamas);
};
