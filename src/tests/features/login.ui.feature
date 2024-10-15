@loginFeature
Feature: Chuc nang dang nhap UI
   Mo ta yeu cau: Nguoi dung muon dang nhap vao he thong bang giao dien nguoi dung de kiem tra chuc nang dang nhap hoat dong dung cach hoac khong hoat dong dung cach.
   1. Neu nguoi dung nhap email va password la null thi he thong se hien thi thong bao loi "Email and password are required!".
   2. Neu nguoi dung nhap password la null thi he thong se hien thi thong bao loi "Password is required!".
   3. Neu nguoi dung nhap email khong dung dinh dang thi he thong se hien thi thong bao loi "Email is not in correct format!".
   4. Neu nguoi dung nhap email va password dung thi he thong se chuyen huong den trang chu cua he thong.

   Scenario: Password va Email la null
      Given Toi o trang dang nhap "http://localhost:8890/login"
      When Toi nhap ten dang nhap ""
      And Toi nhap mat khau ""
      And Toi nhan nut dang nhap
      Then Toi se thay thong bao loi "Email and password are required!"

   Scenario: Gia tri Password la null
      Given Toi o trang dang nhap "http://localhost:8890/login"
      When Toi nhap ten dang nhap "test02@gmail.com"
      And Toi nhap mat khau ""
      And Toi nhan nut dang nhap
      Then Toi se thay thong bao loi "Password is required!"

   Scenario: Gia tri Email khong hop le
      Given Toi o trang dang nhap "http://localhost:8890/login"
      When Toi nhap ten dang nhap "test02@gmadil.c"
      And Toi nhap mat khau "12345"
      And Toi nhan nut dang nhap
      Then Toi se thay thong bao loi "Email is not in correct format!"

   Scenario: Gia tri Email va Password hop le
      Given Toi o trang dang nhap "http://localhost:8890/login"
      When Toi nhap ten dang nhap "test02@gmail.com"
      And Toi nhap mat khau "12345"
      And Toi nhan nut dang nhap
      Then Toi se duoc chuyen huong den trang dashboard
