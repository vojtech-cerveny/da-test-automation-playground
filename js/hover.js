$(document).ready(function () {
  
  $(".card-hover .card-body").css('display', 'none')
  
  $(".card-hover").hover(
    function() {
      $(this).find(".card-body").css('display', 'block')
    }, function() {
      $(this).find(".card-body").css('display', 'none')
    }
  );
});

