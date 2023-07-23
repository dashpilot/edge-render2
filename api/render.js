import { render } from "../modules/category.js";

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const r = await fetch("./data.json");
  var data = await r.json();
  data.category = category;

  var result = render(data);

  return new Response(result, {
    status: 200,
    headers: {
      "content-type": "text/html",
    },
  });
}
