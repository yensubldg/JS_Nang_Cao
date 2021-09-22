# Scope - Phạm vị

- Các loại phạm vi:
  - Global - Toàn cầu
  - Code Block - Khối mã: let, const
  - Local Scope - Hàm: var, function
- Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo ra
- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
- Cách thức một biến được truy cập
  - Lấy giá trị của biến trong phạm vi gần nhất
- Khi nào biến bị xóa khỏi bộ nhớ?
  - Biến toàn cầu: khi thoát chương trình (F5, ...)
  - Biến trong code block & trong hàm: khi hàm, block được thực thi xong
  - Biến trong hàm (1) được tham chiếu bởi 1 hàm khác (2)
