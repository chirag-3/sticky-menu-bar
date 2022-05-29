window.addEventListener('scroll',function(){
  console.log("eiubiruriub");
  let navbar = document.getElementById("navbar");  
  if(window.pageYOffset>168)
  {
      navbar.classList.add("sticky");
  }
  else
  {
      navbar.classList.remove("sticky");
  }
});