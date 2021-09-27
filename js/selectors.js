$(document).ready(function () {
  $('.btn').click( function() {
    $(this).removeClass('btn-primary')
    $(this).addClass('btn-success')
  })

  $("#like-button").click(function(){
    const lvl = Number.parseInt($('#lvlAwesome').text())
    $('#lvlAwesome').text(lvl + 1 )
  })
});
