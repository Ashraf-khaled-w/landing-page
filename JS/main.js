const aboutOffset = $(`#about`).offset().top;

$(document).ready(function () {
  $(`#contact`).css("cursor", "pointer");
  $(`.contact-info`).hide();
  $(`#contact`).click(function () {
    $(`.contact-info`).slideToggle();
  });
    $(window).scroll(function () { 
        let windowScroll = $(window).scrollTop();
        if (windowScroll > aboutOffset - 70) {
            $(`#main-nav`).fadeOut();
        }
        else {
            $(`#main-nav`).fadeIn();
        }
    }
)
});
