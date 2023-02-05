// HEADER SEARCH POPUP WINDOW
$('.header__search-wrapper .search-icon').click(function(){
  $('.search-form-main').toggleClass('active-search');
  $('.search-form-main .search-field').focus();
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