var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closesidenavbar = document.getElementById("close-sidenavbar")
var searchcontainer = document.getElementById("searchcontainer")
var prodsearch = document.getElementById("prodsearch")
var prodlist = document.querySelectorAll("div")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})
closesidenavbar.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})
prodsearch.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()
    for (count = 0; count < prodlist.length; count++)
        if (prodlist[count].textContent.toUpperCase().indexOf(enteredvalue) < 0) {
            prodlist[count].style.display = "none"
          
        }
        else {
            prodlist[count].style.display = "block"
            
        }
})