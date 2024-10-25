Feature: Forgot Password Functionality

  Scenario: Klik forgot password dan klik cancel
        Given Saya masuk ke halaman login
        When Saya klik link forgot password
        And Memastikan bahwa sudah berada di halaman forgot password
        Then Saya kembali kehalaman login dengan klik button cancel

  Scenario: Klik forgot password dan reset password
        Given Saya masuk ke halaman login
        When Saya klik link forgot password
        When Saya memasukan username "Admin"
        And Saya menekan button Reset Password
        Then Saya melihat tulisan Reset Password link sent successfully

  Scenario: Saya tidak memasukan username apapun
        Given Saya masuk ke halaman login
        When Saya klik link forgot password
        And Saya button reset yang tidak ada username
        Then Saya melihat tulisan Required