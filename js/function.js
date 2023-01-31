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