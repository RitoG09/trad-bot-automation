"use client";

import { NodeProps } from "@xyflow/react";
import { BaseTriggerNode } from "../base-trigger-node";
import { MousePointer2Icon } from "lucide-react";
import { memo, useState } from "react";
import { ManualTriggerDialog } from "./dialog";
import { useNodeStatus } from "@/app/features/executions/hooks/use-node-status";
import { fetchInternalImage } from "next/dist/server/image-optimizer";
import { fetchManualTriggerRealtimeToken } from "./actions";

export const ManualTriggerNode = memo((props: NodeProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const nodeStatus = useNodeStatus({
    nodeId: props.id,
    channel: "manual-trigger-execution",
    topic: "status",
    refreshToken: fetchManualTriggerRealtimeToken,
  });
  const handleOpenSettings = () => setDialogOpen(true);
  return (
    <>
      <ManualTriggerDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <BaseTriggerNode
        {...props}
        icon={MousePointer2Icon}
        name="When clicking 'Execute workflow'"
        status={nodeStatus}
        desc="Trigger workflow manually"
        onSettings={handleOpenSettings}
        onDoubleClick={handleOpenSettings}
      />
    </>
  );
});
