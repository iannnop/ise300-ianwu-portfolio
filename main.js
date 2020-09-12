$('.navbar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top},
      500
    );
  }
});

window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}