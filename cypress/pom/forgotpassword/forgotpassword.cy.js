export default class forgotPasswordPage {
  static visitUrl() {
    return cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }
  static klikForgotPassword() {
    return cy
      .get('p[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]')
      .click();
  }
  static waiting() {
    return cy.wait(4000);
  }
  static verifyForgotPassword() {
    return cy
      .get("h6")
      .contains("Reset Password")
      .should("have.text", "Reset Password");
  }

  static buttonCancel() {
    return cy.get('button[type="button"]').click();
  }

  static getUsernameField(data) {
    return cy.get('input[name="username"]').type(data);
  }
  static klikButtonReset() {
    return cy.get('button[type="submit"]');
  }
  static verifyForgotPasswordSuccess() {
    return cy
      .get("h6")
      .should("have.text", "Reset Password link sent successfully");
  }
  static required() {
    return cy
      .get(
        'span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]'
      )
      .should("have.text", "Required");
  }
}
