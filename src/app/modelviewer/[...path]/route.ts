const UPSTREAM = "https://wow.zamimg.com/modelviewer/";

// Same-origin proxy for Wowhead's model viewer assets (the browser can't
// fetch wow.zamimg.com cross-origin). A plain rewrite is not enough: zamimg
// intermittently 400s files it serves fine moments later, and its error
// responses carry `cache-control: max-age=3600` — pass one through and the
// browser replays the failure for an hour (a hero model with floating
// armor pieces and no body). So retry upstream errors here, and never let
// an error reach the browser with a cacheable header.
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const url = UPSTREAM + path.map(encodeURIComponent).join("/");

  let res: Response | null = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt > 0) await new Promise((r) => setTimeout(r, 500 * attempt));
    try {
      res = await fetch(url, { cache: "no-store" });
      if (res.ok) break;
    } catch {
      res = null;
    }
  }

  if (!res || !res.ok) {
    return new Response(`upstream ${res?.status ?? "unreachable"} for ${url}`, {
      status: 502,
      headers: { "cache-control": "no-store" },
    });
  }

  return new Response(res.body, {
    headers: {
      "content-type":
        res.headers.get("content-type") ?? "application/octet-stream",
      "cache-control": "public, max-age=86400",
    },
  });
}
