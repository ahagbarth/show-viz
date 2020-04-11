let toggleState = false;

function test(){
    
    if(toggleState){
        $(".hamburger").removeClass("is-active")
        closeNav();
    } else{
        $(".hamburger").addClass("is-active");
        openNav();
    }
    toggleState = !toggleState;

}
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  } 