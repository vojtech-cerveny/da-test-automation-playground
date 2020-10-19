$(document).ready(function () {

  const loadingSpinner = $(`<div id="loading-spinner" class="spinner-grow text-primary" role="status">
                              <span class="sr-only">Loading...</span>
                            </div>`)
  const secret = $(`<h3> To tajemství je, že začínáš ovládat automatizaci! 💙 </h3>`)
  $('#loading-button').click(() => {
    $('#context').empty()
    $('#context').append(loadingSpinner)
    setTimeout(() => {
      loadingSpinner.remove()
      $('#context').append(secret)
    }, 3000)
  })
});

