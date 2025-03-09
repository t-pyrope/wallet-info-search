import type { Handler, HandlerEvent } from "@netlify/functions";

// @ts-expect-error - is actually used
const handler: Handler = async (event: HandlerEvent) => {
  console.log("event", event);
  return await fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${event.body}/extended`,
    {
      headers: {
        Project_id: process.env.PROJECT_ID ?? "",
      },
    },
  );
};

export { handler };
