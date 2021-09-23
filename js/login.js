$(document).ready(function () {
  const username = "czechitas"
  const password = "budoucnost"

  const showLoginPopUp = (type, message) => {
    const classType = type == "success" ? "success" : "danger"
    setTimeout(() => {
      $("body")
        .append(`<div class="alert alert-${classType}" role="alert">${message}</div>`)
      setTimeout(() => { $(".alert").remove() }, 3000)
    }, 1000)
  }

  // LOGIN SECTION
  $("#login-submit").click(() => {
    const inputPasswordValue = $("#login-password").val()
    const inputUsernameValue = $("#login-username").val()
$("#login-submit").html('<span class="spinner-border spinner-border-sm" role="status aria-hidden="true"></span>Loading...')
    if (inputUsernameValue == "" &&
      inputPasswordValue == "") {
      showLoginPopUp("danger", "Username a heslo není zadáno!")
      return
    }
    else if (inputUsernameValue == "") {
      showLoginPopUp("danger", "Username není zadáno!")
      return
    }
    else if (inputPasswordValue == "") {
      showLoginPopUp("danger", "Heslo není zadáno!")
      return
    }
    else if (inputUsernameValue == username &&
      inputPasswordValue == password) {

      showLoginPopUp("success", "Přihlášení proběhlo v pořádku")
      setTimeout(() => {
        document.location = "/logged.html"
      } ,2000)
      return
    } else {
      showLoginPopUp("danger", "Špatné heslo!")
      setTimeout(() => {
        $("#login-password").val("")
        $("#login-submit").html('Log in!')
        }
        , 1000)
      return
    }
  })
});
