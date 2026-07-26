self.addEventListener("install", function(event) {
  console.log("Farming App installed");
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response("Internet connection नाही.");
    })
  );
});
