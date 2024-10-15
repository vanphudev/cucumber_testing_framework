Feature: Chức năng đăng nhập trên SERVER
   Mô tả yêu cầu: Tester muốn kiểm tra chức năng đăng nhập phía server để xác định xem nó có hoạt động đúng cách hay không.

   1. Nếu Tester không nhập Email và mật khẩu, hệ thống sẽ trả về thông báo lỗi: "Email and password is required."
   2. Nếu Tester không nhập mật khẩu, hệ thống sẽ trả về thông báo lỗi: "Password is required."
   3. Nếu Tester nhập email không đúng định dạng, hệ thống sẽ trả về thông báo lỗi: "Email is not in correct format!"
   4. Nếu Tester nhập email và mật khẩu đúng định dạng, hệ thống sẽ trả về mã trạng thái 200, thông báo "Login successful" cùng với token và refresh token.

   Scenario: Khong nhap gia tri Email va Password - Dang nhap that bai
      Given Toi co ten dang nhap ""
      And Toi co mat khau <>
      Examples:
         | Header 1 | Header 2 | Header 3 |
         | Value 1  | Value 2  | Value 3  |
      When Toi gui yeu cau POST den "/login"
      Then Toi se nhan duoc ma trang thai 400
      And thong bao phan hoi se la "Email and password is required."

   Scenario: Khong nhap gia tri Password - Dang nhap that bai
      Given Toi co ten dang nhap "test02@gmail.com"
      And Toi co mat khau ""
      When Toi gui yeu cau POST den "/login"
      Then Toi se nhan duoc ma trang thai 400
      And thong bao phan hoi se la "Password is required."

   Scenario: Gia tri cua Email la khong hop le - Dang nhap that bai
      Given Toi co ten dang nhap "test02hmail.com"
      And Toi co mat khau "12345!"
      When Toi gui yeu cau POST den "/login"
      Then Toi se nhan duoc ma trang thai 400
      And thong bao phan hoi se la "Email is not in correct format!"

   Scenario: Gia tri Email la hop le va Password thoa man - Dang nhap thanh cong (Login successful)
      Given Toi co ten dang nhap "test02@gmail.com"
      And Toi co mat khau "12345"
      When Toi gui yeu cau POST den "/login"
      Then Toi se nhan duoc ma trang thai 200
      And thong bao phan hoi se la "Login successful"
      And Toi se nhan duoc mot token moi
      And Toi se nhan duoc mot refresh token
