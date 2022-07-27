

var menubtn = document.getElementById('menubtn')
var menu = document.getElementById('menu')
var sidenav = document.getElementById('side-nav')

sidenav.style.right = "-250px";
menubtn.onclick = function(){
    if(sidenav.style.right == "-250px"){
         sidenav.style.right = "0";
         menu.src = "./Barber_Shop_img/close.png";
    }
    else{
        sidenav.style.right = "-250px";
        menu.src = "./Barber_Shop_img/menu.png";
    }
}