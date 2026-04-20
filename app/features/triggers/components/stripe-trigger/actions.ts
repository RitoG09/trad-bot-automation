"use server";

import { getSubscriptionToken, type Realtime } from "@inngest/realtime";
import { inngest } from "@/app/inggest/client";
import { stripeTriggerChannel } from "@/app/inggest/channels/stripe-trigger";

export type StripeTriggerToken = Realtime.Token<
  typeof stripeTriggerChannel,
  ["status"]
>;

export async function fetchStripeTriggerRealtimeToken(): Promise<StripeTriggerToken> {
  const token = await getSubscriptionToken(inngest, {
    channel: stripeTriggerChannel(),
    topics: ["status"],
  });
  return token;
}
