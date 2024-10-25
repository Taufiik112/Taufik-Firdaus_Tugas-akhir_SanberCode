Feature: Admin Page Management

  Scenario: Admin Add Fiture
    Given Saya login untuk bisa masuk kemenu admin
    When Saya menekan Sidebar button menu admin
    And Saya memastikan bahwa sudah masuk ke halaman admin
    When Saya menekan button Add
    When Saya klik user role admin
    When Saya klik user role status enabled
    When Saya menambahkan data Employee james
    When Saya menambahkan Username
    When Saya menambahkan Password
    When Saya menambahkan confirm Password
    Then Saya menekan tommbol Save

  Scenario: Admin Fitur in page admin
    Given Saya login untuk bisa masuk kemenu admin
    When Saya menekan Sidebar button menu admin
    And Saya memastikan bahwa sudah masuk ke halaman admin
    When Saya mencari berdasarkan Username "taufik_firdaus" admin
    And Saya mencari user berdasarkan Role admin
    And Saya mencari user berdasarkan Role ESS
    # Then Saya klik button Search
    When Saya mencari user berdasarkan Employee
    When Saya mencari user berdasarkan Status enabled
    And Saya mencari user berdasarkan Status disabled
    When Saya mencari user berdasarkan element ESS, enabled
    And Saya mengecek data ke 3 atau data tengah
    When Saya klik button Reset
    When Saya mencari username "taufik_firdaus"
    When Saya akan menghapus data ini taufik_firdaus
    When Saya klik button Reset
