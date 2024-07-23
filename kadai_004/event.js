$(document).ready(function() {
  // loadイベントの処理
  console.log("loadイベントが発生しました");
  
  // scrollイベントの処理
  $(window).on('scroll', function() {
    console.log("scrollイベントが発生しました");
  });
});
