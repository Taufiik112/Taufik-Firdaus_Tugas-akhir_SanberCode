export default class adminPage {
  //menu admin
  static buttonAdminSidebar() {
    return cy.get("span").contains("Admin").click();
  }
  static verifyadminPage() {
    return cy.get("h6").contains("Admin");
  }
  static getAddButton() {
    return cy.get(
      'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'
    );
  }
  static verifyadminUser() {
    return cy.get("h6").contains("Add User");
  }

  //INI SEMUA DARI FITUR ADD
  //memilih role 'admin'
  static getRoleAdmin() {
    cy.get('[class="oxd-select-text-input"]').eq(0).click();
    cy.get(".oxd-select-dropdown").children().eq(1).click();
  } //memilih status Disable
  static getRoleEnabled() {
    cy.get('[class="oxd-select-text-input"]').eq(1).click();
    cy.get(".oxd-select-dropdown").children().eq(1).click();
  }
  //menambahkan data employeee
  static getEmployee() {
    cy.get('input[placeholder="Type for hints..."]').type("James ");
    cy.wait(4000);
    cy.get(".oxd-autocomplete-option").each(($sel, index, $list) => {
      if ($sel.text() === "James  Butler") {
        cy.wrap($sel).click();
      }
    });
  }

  static getUsernameField() {
    return cy
      .get('input[class="oxd-input oxd-input--active"]')
      .eq(1)
      .type("taufik_firdaus");
  }
  static getPasswordField() {
    return cy.get('input[type="password"]').eq(0).type("taufik123");
  }
  static getConfirmPasswordField() {
    return cy.get('input[type="password"]').eq(1).type("taufik123");
  }

  static getSaveButton() {
    return cy.get('button[type="submit"]').click();
  }
  static clickAddButton() {
    this.getAddButton().click();
  }
  static enterUsername(username) {
    this.getUsernameField().type(username);
  }

  //Untuk Mengisi Employee, username, password
  static enterEmployeeName(employeeName) {
    this.getEmployeeNameField().type(employeeName);
  }
  static enterPassword(password) {
    this.getPasswordField().type(password);
  }
  static enterConfirmPassword(confirmPassword) {
    this.getConfirmPasswordField().type(confirmPassword);
  }
  static clickSaveButton() {
    this.getSaveButton().click();
  }

  //SAMPAI SINI
}
