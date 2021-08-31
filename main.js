window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (this.window.pageYOffset > 100) {
    header.classList.add("whiteNav");
    header.classList.remove("transparentNav");
  } else {
    header.classList.remove("whiteNav");
    header.classList.add("transparentNav");
  }
});

function scrollToByID(id) {
  $("html, body").animate(
    {
      scrollTop: $("#" + id).offset().top,
    },
    1000
  );
}
