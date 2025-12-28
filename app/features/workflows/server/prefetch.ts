import type { inferInput } from "@trpc/tanstack-react-query";
import { prefetch, trpc } from "@/app/trpc/server";

type Input = inferInput<typeof trpc.workflows.getMany>;

//prefetch all workflows
export const prefetchWorkflows = (params: Input) => {
  return prefetch(trpc.workflows.getMany.queryOptions(params));
};

// prefetch a signle workflow
export const prefetchSingleWorkflow = (id: string) => {
  return prefetch(trpc.workflows.getOne.queryOptions({ id }));
};
