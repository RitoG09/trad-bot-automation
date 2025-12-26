import {
  WorkflowsContainer,
  WorkflowsList,
} from "@/app/features/workflows/components/workflows";
import { prefetchWorkflows } from "@/app/features/workflows/server/prefetch";
import { HydrateClient } from "@/app/trpc/server";
import { requireAuth } from "@/lib/auth-utils";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Page = async () => {
  await requireAuth();
  prefetchWorkflows();
  return (
    <WorkflowsContainer>  
      <HydrateClient>
        <ErrorBoundary fallback={<p>Error!</p>} />
        <Suspense fallback={<p>Loading...</p>}>
          <WorkflowsList />
        </Suspense>
      </HydrateClient>
    </WorkflowsContainer>
  );
};

export default Page;
