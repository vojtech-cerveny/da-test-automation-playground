$(document).ready(function () {
  const card = $()

  $('.removing').addClass('disabled')
  $('#addItem').click(function () {
    $('.items').append(`<div class="col-sm item">
    <div class="card cat" style="width: 18rem">
      <img src="images/cat.png" class="card-img-top" alt="Kočka" />
      <div class="card-body">
        <h5 class="card-title">Kočka</h5>
      </div>
    </div>
  </div>`)
    $('.removing').removeClass('disabled')
  })
  $('#removeItem').click(() => {
    $('.item').last().remove()
    if ($('.item').length == 0) {
      $('.removing').addClass('disabled')
    }
  })
  $('#removeAll').click(() => {
    $('.item').remove()
    $('.removing').addClass('disabled')
  })

  $('button').click(() => {
    $("#counter").text($('.item').length)

    if ($('.item').length == 0) {

    }
  })
});

