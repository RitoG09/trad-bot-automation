import { prefetchSingleWorkflow } from "@/app/features/workflows/server/prefetch";
import { HydrateClient } from "@/app/trpc/server";
import { requireAuth } from "@/lib/auth-utils";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import {
  EditoError,
  Editor,
  EditorLoading,
} from "@/app/features/editor/components/editor";
import { EditorHeader } from "@/app/features/editor/components/editor-header";

interface PageProps {
  params: Promise<{ workflowId: string }>;
}

const page = async ({ params }: PageProps) => {
  await requireAuth();
  const { workflowId } = await params;

  prefetchSingleWorkflow(workflowId);

  return (
    <HydrateClient>
      <ErrorBoundary fallback={<EditoError />}>
        <Suspense fallback={<EditorLoading />}>
          <EditorHeader workflowId={workflowId} />
          <main className="flex-1">
            <Editor workflowId={workflowId} />
          </main>
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
};

export default page;
