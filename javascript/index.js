var topbutton = document.getElementById("myBtn")


onscroll = function () {ifScrolledFunction()}

function ifScrolledFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        topbutton.style.display = "block";
      } else {
        topbutton.style.display = "none";
      }
    }
    



function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}