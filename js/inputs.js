$(document).ready(function () {
  // init :D 
  $("#formControlRange").val(0)
  const secretNumber = Math.round(Math.random()*1000000000)
  $("#secretPassword").val(secretNumber)
  

  $("#formControlRange").change(function(){
    const lvl = $(this).val()
    $('#lvlAwesome').text(lvl)
  })

  $("#checkSecretNumber").click(()=>{
    if($("#secretNumberInput").val() == secretNumber) {
      $('#passwordHelpBlock').text("Super secret je super správně.")
    } else {
      $('#passwordHelpBlock').text("Super secret je super špatně.")
    }
  })
});




