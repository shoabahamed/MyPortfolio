const sideMenu = document.querySelector('.sidemenu');
console.log(sideMenu);
function openMenu(){
  sideMenu.style.right = "0";
}

function closeMenu(){
  sideMenu.style.right = "-200px";
}