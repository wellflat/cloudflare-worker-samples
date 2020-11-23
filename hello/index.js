addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const content = await test.get("test_key");
  return new Response(content, {
    headers: { 'content-type': 'text/plain' },
  })
}
