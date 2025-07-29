var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closesidenavbar = document.getElementById("close-sidenavbar")
menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})
closesidenavbar.addEventListener("click", function(){
    sidenav.style.right = "-50%"
})