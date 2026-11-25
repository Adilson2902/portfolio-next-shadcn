const CANONICAL_HOST = "adilson.toolspace.com.br";

export async function onRequest(context: {
  request: Request;
  next: () => Promise<Response>;
}): Promise<Response> {
  const url = new URL(context.request.url);
  if (url.hostname.endsWith(".pages.dev")) {
    const target = `https://${CANONICAL_HOST}${url.pathname}${url.search}`;
    return new Response(null, {
      status: 301,
      headers: {
        Location: target,
        "X-Robots-Tag": "noindex",
        "Cache-Control": "public, max-age=3600",
      },
    });
  }
  return context.next();
}
