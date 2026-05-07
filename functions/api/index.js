export async function onRequest(context) {

  const request = context.request;

  const API =
  "https://script.google.com/macros/s/AKfycbwJGiaovAM65aBjhM6ZRoUZjuGMsJ0JExyMiqjH7pRWbWV6zvT9f59VwirJaPm_Ylp6/exec";

  if(request.method === "GET"){

    const url = new URL(request.url);

    const action =
    url.searchParams.get("action");

    const password =
    url.searchParams.get("password");

    const r = await fetch(
      `${API}?action=${action}&password=${password}`
    );

    const text = await r.text();

    return new Response(text, {

      headers:{
        "Content-Type":"application/json"
      }

    });

  }

  if(request.method === "POST"){

    const body = await request.text();

    const r = await fetch(API, {

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body

    });

    const text = await r.text();

    return new Response(text, {

      headers:{
        "Content-Type":"application/json"
      }

    });

  }

  return new Response("Método no permitido");

}
