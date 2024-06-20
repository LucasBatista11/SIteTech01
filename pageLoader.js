window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    setTimeout(function() {
      loader.style.opacity = "0";
      setTimeout(function() {
        loader.style.display = "none";
      }, 2000);
    }, 2000);
  });

  lottie.loadAnimation({
    container: document.getElementById("lottie-loader"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "imagens/pageLoader.js",
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