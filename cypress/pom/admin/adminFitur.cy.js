export default class adminFiturPage {
  //SEMUA FITUR YANG ADA DI ADMIN UTAMA

  //memasukan Username pada halaman admin
  static usernameInput() {
    return cy.get('input[class="oxd-input oxd-input--active"]').eq(1);
  }
  //klik search
  static searchButton() {
    return cy.get('button[type="submit"]').click();
  }
  //klik reset
  static resetButton() {
    return cy.get('button[type="button"]').eq(4).click();
  }
  //menunggu 7 detik
  static waiting() {
    return cy.wait(7000);
  }
  //Search dan memilih menggunakan role Admin
  static clickRoleAdmin() {
    cy.get('[class="oxd-select-text-input"]').eq(0).click();
    cy.get(".oxd-select-dropdown").children().eq(1).click();
  }
  //Search dan memilih menggunakan role ESS
  static clickRoleESS() {
    cy.get('[class="oxd-select-text-input"]').eq(0).click();
    cy.get(".oxd-select-dropdown").children().eq(2).click();
  }
  //memasukan data employee
  static EmployeeNameField() {
    cy.get('input[placeholder="Type for hints..."]').type("james ");
    cy.wait(4000);
    cy.get(".oxd-autocomplete-option").each(($sel, index, $list) => {
      if ($sel.text() === "James  Butler") {
        cy.wrap($sel).click();
      }
    });
  }
  //Search dan memilih menggunakan status Enabled
  static clickStatusEnabled() {
    cy.get('[class="oxd-select-text-input"]').eq(1).click();
    cy.get(".oxd-select-dropdown").children().eq(1).click();
    cy.wait(5000);
  }
  //Search dan memilih menggunakan status Enabled
  static clickStatusEnabled() {
    cy.get('[class="oxd-select-text-input"]').eq(1).click();
    cy.get(".oxd-select-dropdown").children().eq(1).click();
    cy.wait(5000);
  }
  //Search dan memilih menggunakan status Disabled
  static clickStatusDisabled() {
    cy.get('[class="oxd-select-text-input"]').eq(1).click();
    cy.get(".oxd-select-dropdown").children().eq(2).click();
    cy.wait(5000);
  }
  //mengecek data ke 3 yang ada ditable
  static dataCenter() {
    // cy.get(".oxd-table-row").eq(2).find(":nth-child(5)");
    cy.get(".oxd-table-row").eq(3).children().eq(1);
    cy.get(".oxd-table-row").eq(3).children().eq(2);
    cy.get(".oxd-table-row").eq(3).children().eq(3);
    cy.get(".oxd-table-row")
      .eq(3)
      .children()
      .eq(4)
      .should("have.text", "Enabled");
    cy.get(".oxd-table-row").eq(3).should("be.visible");
  }
  //memilihi semua data
  //memilih role 'admin'
  static getRoleAdmin() {
    cy.get('[class="oxd-select-text-input"]').eq(0).click();
    cy.get(".oxd-select-dropdown").children().eq(1).click();
  }
  //memilih status Disable
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
  //menghapus data
  static deleteData() {
    return cy
      .get('button[class="oxd-icon-button oxd-table-cell-action-space"]')
      .eq(0)
      .click();
  }
  static ButtonYes() {
    cy.get('button[type="button"]').eq(9).click();
  }
}
