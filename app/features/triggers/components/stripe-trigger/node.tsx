"use client";

import { NodeProps } from "@xyflow/react";
import { BaseTriggerNode } from "../base-trigger-node";
import { memo, useState } from "react";
import { StripeTriggerDialog } from "./dialog";
import { useNodeStatus } from "@/app/features/executions/hooks/use-node-status";
import { fetchStripeTriggerRealtimeToken } from "./actions";

export const StripeTriggerNode = memo((props: NodeProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const nodeStatus = useNodeStatus({
    nodeId: props.id,
    channel: "stripe-trigger-execution",
    topic: "status",
    refreshToken: fetchStripeTriggerRealtimeToken,
  });
  const handleOpenSettings = () => setDialogOpen(true);

  return (
    <>
      <StripeTriggerDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <BaseTriggerNode
        {...props}
        icon="/stripe.svg"
        name="Stripe"
        desc="When a stripe event is captured"
        status={nodeStatus}
        onSettings={handleOpenSettings}
        onDoubleClick={handleOpenSettings}
      />
    </>
  );
});
