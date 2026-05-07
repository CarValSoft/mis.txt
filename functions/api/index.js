export async function onRequest() {

  return new Response(
    JSON.stringify({
      ok:true,
      mensaje:"API funcionando"
    }),
    {
      headers:{
        "Content-Type":"application/json"
      }
    }
  );

}
