"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "./trpc/client";

function Client() {
  const trpc = useTRPC();
  const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions());
  return <div>client component: {JSON.stringify(users)}</div>;
}

export default Client;
