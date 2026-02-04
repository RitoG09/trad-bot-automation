"use client";

import { NodeProps } from "@xyflow/react";
import { BaseTriggerNode } from "../base-trigger-node";
import { MousePointer2Icon } from "lucide-react";
import { memo, useState } from "react";
import { ManualTriggerDialog } from "./dialog";
import { useNodeStatus } from "@/app/features/executions/hooks/use-node-status";
import { fetchManualTriggerRealtimeToken } from "./actions";

export const GoogleFormTrigger = memo((props: NodeProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const nodeStatus = "initial";
  const handleOpenSettings = () => setDialogOpen(true);
  return (
    <>
      <ManualTriggerDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <BaseTriggerNode
        {...props} 
        icon="/googleform.svg"
        name="Google Form"
        desc="When a form is submitted"
        status={nodeStatus}
        onSettings={handleOpenSettings}
        onDoubleClick={handleOpenSettings}
      />
    </>
  );
});
