// HEADER SEARCH POPUP WINDOW
$('.header__search-wrapper .search-icon').click(function(){
  $('.search-form-main').toggleClass('active-search');
  $('.search-form-main .search-field').focus();
});


// HAMBURGER MENU
$('.hamburger-button').click(function() {
  $('.header__hamburger').toggleClass('is-active');
  $('.menuLayer').toggleClass('is-active');
});
$('.menuLayer-menu-item').click(function() {
  $('.header__hamburger').removeClass('is-active');
  $('.menuLayer').removeClass('is-active');
});

// TRANSCRIPT ANIMATION
$(function() {
  $(".transcript-link").on('click', function() {
  $(".transcript-item").slideToggle(500,alertFunc);
  });
  
  function alertFunc(){
  if ($(this).css('display') == 'block') {
  $("#transcript-btn-label").text("▲ Close Video Transcript");
  }else{
  $("#transcript-btn-label").text("▼ Open Video Transcript");
  }
  };
  });