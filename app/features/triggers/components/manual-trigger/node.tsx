"use client";

import { NodeProps } from "@xyflow/react";
import { BaseTriggerNode } from "../base-trigger-node";
import { MousePointer2Icon } from "lucide-react";
import { memo } from "react";

export const ManualTriggerNode = memo((props: NodeProps) => {
  return (
    <>
      <BaseTriggerNode
        {...props}
        icon={MousePointer2Icon}
        name="When clicking 'Execute workflow'"
        desc="Trigger workflow manually"
        // status={nodeStatus} TODO
        // onSettings={() => {}} TODO
        // onDoubleClick={() => {}} TODO
      />
    </>
  );
});
