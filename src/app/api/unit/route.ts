import { ResponseAborted } from "next/dist/server/web/spec-extension/adapters/next-request";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const unit = url.searchParams.get("unit");

    const response = await fetch(
      `https://cardano-mainnet.blockfrost.io/api/v0/assets/${unit}`,
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
  } catch (err: unknown) {
    console.error(err);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message:
          typeof err === "object" && err && "message" in err ? err.message : "",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
