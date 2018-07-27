
//Global Vars
$HvrContainer = $(".container-hover ,.transition-hover,.transition h3");

function setTransition(id, prop, delay, style) {
  $(id).css({ "-webkit-transition": prop + " " + delay + " " + style });
  $(id).css({ "-moz-transition": prop + " " + delay + " " + style });
  $(id).css({ "-o-transition": prop + " " + delay + " " + style });
  $(id).css({ transition: prop + " " + delay + " " + style });
}

//Module Controller for Sweep Classes
$($HvrContainer).each(function() {

   $selector = $HvrContainer //Class or Id
   $transition = "all";  //Sets Option for Transition 
   $speed = ".3s"; //Sets Option for Speed  
   $FX =  "ease-in-out"; //Sets Option for Easing   
 
   setTransition ($selector, $transition, $speed ,$FX);
});