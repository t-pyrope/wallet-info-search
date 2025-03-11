import { ResponseAborted } from "next/dist/server/web/spec-extension/adapters/next-request";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const address = url.searchParams.get("address");

  const response = await fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}/extended`,
    {
      headers: {
        Project_id: process.env.PROJECT_ID ?? "",
      },
    },
  );

  if (!response.ok) {
    throw new ResponseAborted(response.statusText);
  }

  const info = await response.json();
  return Response.json(info);
}
