function redirectToHome(){
    document.getElementById("transition-overlay").style.opacity = "1";
    document.getElementById("transition-overlay").style.zIndex = "2";
    setTimeout(function(){
      window.location='/';
    }, 1000);
}

// Reveal bouncing arrow
window.setTimeout(function(){
  document.getElementById("arrow").style.opacity = "1";
  document.getElementById("arrow").classList = "animated bounce";
}, 100)

// Hide arrow
window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if(scrollTop != 0){
    document.getElementById("arrow").classList = "animated fadeOutUp";
  } else {
    document.getElementById("arrow").classList = "animated bounce";
  }
}, false);
