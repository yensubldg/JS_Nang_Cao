# This keyword

- Từ khóa `this` trong JavaScript là từ khóa được sử dụng để chỉ ra đối tượng hiện tại.

## Đặc tính

1. Trong một phương thức, `this` tham chiếu tới đối tượng truy cập phương thức (đối tượng đứng trước dấu `.`).
2. Đứng ngoài phương thức, `this` tham chiếu tới đối tượng global.

## Lưu ý

- `this` trong hàm tạo là đại diện cho đối tượng được tạo
- `this` trong một hàm `undefined` khi ở `strict mode`
- Các phương thức `bind(), call(), apply()` có thể tham chiếu `this` tới đối tượng khác
