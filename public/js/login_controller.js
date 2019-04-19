
class LoginController {

  constructor(modalElement) {
    this.__mode = 'login';
    this.__modalElement = modalElement;

    this.findUi();
    this.bindEvents();
  }

  findUi() {
    this.loginButton = document.getElementById('loginmodal_login_btn');
    this.inputLogin = document.getElementById('loginmodal_email_field');
    this.inputPassword = document.getElementById('loginmodal_password_field');
  }

  bindEvents() {
    this.loginButton.addEventListener('click', this.handleLoginClick.bind(this));
  }

  handleLoginClick() {
    postData('/user/login', {
      email: this.inputLogin.value,
      password: this.inputPassword.value
    })
    .then( (response) => {
      if (response.status === "success") {
        location.href = `/${response.data.role}/`;
      } else {
        this.alertMessage(response.message)
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  alertMessage(message) {
    alert(message);
  }

}

// init controller
$(document).ready(function() {
  $('#modal__login-form-dialog').modal();

  var instance = M.Modal.getInstance($('#modal__login-form-dialog'));
  new LoginController(instance);
});
