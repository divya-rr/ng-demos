function changeBG(ele,color){
    var element =document.getElementById(ele);
element.style.transition = "background 1.0s linear 0s";
element.style.background = color;

}
function fadeIn(elem){
    var element=document.getElementById(elem);
    element.style.height="100px";
    element.style.transition = "opacity 0.1s linear 0s";
    element.style.opacity =1;

}
function fadeOut(elem){
    var element=document.getElementById(elem)
    element.style.transition = "opacity 0.1s linear 0s";
    element.style.opacity =0;

}
function slideIn(elem){
    var element=document.getElementById(elem)
    // element.style.left="-120px"
    
   
    
    element.style.transition = "width 1s ease-out 0s";
     element.style.width="0px";
     element.style.height="100px";

}
function slideOut(elem){
    var element=document.getElementById(elem)
    element.style.transition = "left 1s ease-out 0s";
    element.style.left="-120px";

}
function slideOpen(elem){
    var element=document.getElementById(elem)
    element.style.height="0px"
    element.style.transition = "height 1.0s linear 0s";
    element.style.height="100px";

}
function slideClosed(elem){
    var element=document.getElementById(elem)
    element.style.transition = "height 1.0s linear 0s";
    
    element.style.height="0px";
    

}
