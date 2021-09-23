$(document).ready(function () {
  const loadingSpinner = $(`<div id="loading-spinner" class="spinner-grow text-primary" role="status">
                              <span class="sr-only">Loading...</span>
                            </div>`)
  const secret = $(`<h3 class="qa-secret"> To tajemství je, že začínáš ovládat automatizaci prohlížeče! 💙 </h3> <h4 class="hidden">Supertajny text</h4>`)
  $('#loading-button').click(() => {
    $('#context').empty()
    $('#context').append(loadingSpinner)
    setTimeout(() => {
      loadingSpinner.remove()
      $('#context').append(secret)
    }, 8000)
  })
});
