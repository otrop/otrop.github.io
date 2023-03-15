// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)

// window.onscroll = function() {scrollFunction()};

//function scrollFunction() {
//  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//    document.getElementById("navbar").style.top = "0";
//  } else {
//    document.getElementById("navbar").style.top = "-50px";
//  }
//}

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const nacbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  nacbarLinks.classList.toggle('active')
})