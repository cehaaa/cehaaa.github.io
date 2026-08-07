["fontshare-preload", "jbmono-preload"].forEach(function (id) {
  var link = document.getElementById(id);
  link.addEventListener("load", function () {
    link.rel = "stylesheet";
  });
});
