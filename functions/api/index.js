export async function onRequest() {

  const api =
  "https://script.google.com/macros/s/AKfycbzJH4pDm8u2jOE9-inWxV5-qf0b1_VHylZr1d5X9X5Uo47SDK141umlw8sJMxyA1yDJ/exec?callback=recibirDatos";

  const r = await fetch(api);

  const text = await r.text();

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
