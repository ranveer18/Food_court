let menuToggleMark = 0;
var toggleMenu = () => {
  if (menuToggleMark === 0) {
    document.getElementById("mobile-nav").style.display = "flex";
    menuToggleMark = 1;
  } else {
    document.getElementById("mobile-nav").style.display = "none";
    menuToggleMark = 0;
  }
};
