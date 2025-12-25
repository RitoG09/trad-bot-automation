import { email, z } from "zod";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import { prisma } from "@/lib/db";
import { inngest } from "@/app/inggest/client";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { TRPCError } from "@trpc/server";

export const appRouter = createTRPCRouter({
  testAi: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
    });
    return { success: true, message: "AI Job queued." };
  }),
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    console.log({ userId: ctx.auth.user.id });
    return prisma.workflow.findMany();
  }),
  createWorkflows: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "test@egmail.com",
      },
    });
    return { success: true, message: "Job queued." };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
