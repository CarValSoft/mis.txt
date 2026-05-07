export async function onRequest() {

  const api =
  "https://script.google.com/macros/s/AKfycbwJGiaovAM65aBjhM6ZRoUZjuGMsJ0JExyMiqjH7pRWbWV6zvT9f59VwirJaPm_Ylp6/exec?callback=recibirDatos";

  const r = await fetch(api);

  const text = await r.text();

  // JSONP -> JSON
  const clean =
    text
    .replace(/^recibirDatos\(/, "")
    .replace(/\);?$/, "");

  return new Response(clean, {

    headers:{
      "Content-Type":"application/json"
    }

  });

}
