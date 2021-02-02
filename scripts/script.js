function openNav() {
    var width = document.documentElement.clientWidth
    if (width <500){
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("main").style.marginLeft = "20%";
    }
    else if (width < 1100){
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    else {
      document.getElementById("mySidenav").style.width = "25%";
      document.getElementById("main").style.marginLeft = "25%";
    }
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function closeOnClick() {
    var width = document.documentElement.clientWidth
    if (width <500){
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    }
} 

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
  
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    });
}

var width = document.documentElement.clientWidth
if (width < 500){
  document.getElementById("figure1inner").style.cssText = "position:relative;padding-top:0%;";
  document.getElementById("figure1inner").innerHTML = "<img src=\"images/figure1.png\" class=\"center responsive\">"

  document.getElementById("figure2inner").style.cssText = "position:relative;padding-top:0%;";
  document.getElementById("figure2inner").innerHTML = "<img src=\"images/figure2.png\" class=\"center responsive\">"

  document.getElementById("figure3inner").style.cssText = "position:relative;padding-top:0%;";
  document.getElementById("figure3inner").innerHTML = "<img src=\"images/figure3.png\" class=\"center responsive\">"

  document.getElementById("figure4inner").style.cssText = "position:relative;padding-top:0%;";
  document.getElementById("figure4inner").innerHTML = "<img src=\"images/figure4.png\" class=\"center responsive\">"

  document.getElementById("figure5inner").style.cssText = "position:relative;padding-top:0%;";
  document.getElementById("figure5inner").innerHTML = "<img src=\"images/figure5.png\" class=\"center responsive\">"

  document.getElementById("figure6inner").style.cssText = "position:relative;padding-top:0%;";
  document.getElementById("figure6inner").innerHTML = "<img src=\"images/figure6.png\" class=\"center responsive\">"

  document.getElementById("figure7inner").style.cssText = "position:relative;padding-top:0%;";
  document.getElementById("figure7inner").innerHTML = "<img src=\"images/figure7.png\" class=\"center responsive\">"

  document.getElementById("figure8inner").style.cssText = "position:relative;padding-top:0%;";
  document.getElementById("figure8inner").innerHTML = "<img src=\"images/figure8.png\" class=\"center responsive\">"

  document.getElementById("figure9inner").style.cssText = "position:relative;padding-top:0%;";
  document.getElementById("figure9inner").innerHTML = "<img src=\"images/figure9.png\" class=\"center responsive\">"

  document.getElementById("figure10inner").style.cssText = "position:relative;padding-top:0%;";
  document.getElementById("figure10inner").innerHTML = "<img src=\"images/figure10.png\" class=\"center responsive\">"

  document.getElementById("figure11inner").style.cssText = "position:relative;padding-top:0%;";
  document.getElementById("figure11inner").innerHTML = "<img src=\"images/figure11.png\" class=\"center responsive\">"
}
