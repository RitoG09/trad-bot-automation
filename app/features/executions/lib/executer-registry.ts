import { NodeType } from "@/lib/generated/prisma/enums";
import { NodeExecutor } from "../types";
import { manualTriggerExecutor } from "../../triggers/components/manual-trigger/executor";
import { httpRequestExecutor } from "../components/http-request/executor";
import { GoogleFormTriggerExecutor } from "../../triggers/components/google-form-trigger/executor";
import { StripeTriggerExecutor } from "../../triggers/components/stripe-trigger/executor";

// export const executorRegistry: Record<NodeType, NodeExecutor> = {
//   [NodeType.INITIAL]: manualTriggerExecutor,
//   [NodeType.MANUAL_TRIGGER]: manualTriggerExecutor,
//   [NodeType.HTTP_REQUEST]: httpRequestExecutor,
// };

export const executorRegistry: Record<NodeType, NodeExecutor> = {
  [NodeType.INITIAL]: manualTriggerExecutor,
  [NodeType.MANUAL_TRIGGER]: manualTriggerExecutor,
  [NodeType.HTTP_REQUEST]: httpRequestExecutor, //fix types here
  [NodeType.GOOGLE_FORM_TRIGGER]: GoogleFormTriggerExecutor,
  [NodeType.STRIPE_TRIGGER]: StripeTriggerExecutor,
};

export const getExecutor = (type: NodeType): NodeExecutor => {
  const executor = executorRegistry[type];
  if (!executor) {
    throw new Error(`No executor found for type: ${type}`);
  }
  return executor;
};
