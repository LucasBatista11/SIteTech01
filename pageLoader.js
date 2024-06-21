
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  setTimeout(function() {
    loader.style.opacity = "0";
    setTimeout(function() {
      loader.style.display = "none";
    }, 3000);
  }, 3000);
});

lottie.loadAnimation({
  container: document.getElementById("lottie-loader"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "imagens/pageloader.json",
  rendererSettings: {
    progressiveLoad: false
  },
  animationData: null,
  renderer: 'canvas',
  images: null,
  events: {
    complete: function() {console.log('Animation Loaded')},
    error: function(e) {console.error(e)}
  }
});