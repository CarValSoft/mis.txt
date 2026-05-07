export async function onRequest() {

  const url =
  "https://script.google.com/macros/s/AKfycbwJGiaovAM65aBjhM6ZRoUZjuGMsJ0JExyMiqjH7pRWbWV6zvT9f59VwirJaPm_Ylp6/exec";

  const r = await fetch(url);

  const html = await r.text();

  return new Response(html, {

    headers:{
      "Content-Type":"text/html;charset=UTF-8"
    }

  });

}
