var topbutton = document.getElementById("myBtn")


onscroll = function () {ifScrolledFunction()}

function ifScrolledFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topbutton.style.display = "block";
      } else {
        topbutton.style.display = "none";
      }
    }
    



function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}