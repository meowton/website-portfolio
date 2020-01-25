function scrollToPage(sectionvar) {
  if ($("." + sectionvar).length !== 0) {
    $("html, body").animate({
      scrollTop: $("." + sectionvar).offset().top
    }, 1000);
  }
}