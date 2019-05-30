var tcontents = document.getElementsByClassName("tcontent");
var tcontainers = document.getElementsByClassName("tcontainer");


for (var i = 0; i < tcontents.length; i++){
    tcontents[i].addEventListener("mouseout", hover.bind(event, 0, i));
    tcontents[i].addEventListener("mouseover", hover.bind(event, 1, i));
}


function hover(state, i){
    switch(state){
        case 0:
            if(tcontainers[i].classList.value.includes("leftlight")){
                tcontainers[i].classList = "tcontainer left";
            } else {
                tcontainers[i].classList = "tcontainer right";
            }
            break;
        case 1:
            if(tcontainers[i].classList.value.includes("left")){
                tcontainers[i].classList = "tcontainer left leftlight";
            } else {
                tcontainers[i].classList = "tcontainer right rightlight";
            }
            break;
    }
}

function redirectToHome(){
    document.getElementById("transition-overlay").style.opacity = "1";
    document.getElementById("transition-overlay").style.zIndex = "2";
    setTimeout(function(){
      window.location='/';
    }, 1000);
  }
