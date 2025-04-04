import { renderHtml } from "./renderHtml";

export default {
  async fetch(request: Request, env: Env) {
    const stmt = env.DB.prepare("SELECT * FROM courses LIMIT 5");
    const { results } = await stmt.all();

    return new Response(renderHtml(JSON.stringify(results, null, 2)), {
      headers: {
        "content-type": "text/html",
      },
    });
  },
} satisfies ExportedHandler<Env>;
