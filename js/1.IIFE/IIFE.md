# IIFE - Immediately Invoked Function Expression

> Self-Invoking Function

- Biểu thức tạo ra một hàm và hàm được gọi ngay lập tức

## Nội dung

1. IIFE trông như thế nào?
   (function(){
   // code
   })()
2. Dùng dấu ; trước IIFE
3. IIFE là hàm "private"

   error

```
(function myFunc() {
    // code
})();

 myFunc();
```

correct

```
(function myFunc() {
    myFunc();
})();
```

4. Sử dụng IIFE khi nào?

- Để tạo ra một hàm được gọi ngay lập tức
- Không ảnh hưởng đến hoạt động của hàm, biến ngoài IIFE

5. Cách tạo ra một IIFE

```
(function() {
    // code
})();
```

6. Ví dụ sử dụng IIFE
