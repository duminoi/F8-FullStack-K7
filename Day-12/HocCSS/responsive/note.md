# Làm thế nào để thiết kế web tương thích với các thiết bị ?

- Adaptive: Tạo ra 1 giao diện khác sử dụng chung dữ liệu với bản desktop
- Responsive: Sử dụng CSS để ẩn/hiện các thành phần ở các kích thước màn hình khác nhau
  --> Dựa vào kích thước màn hình để thay đổi giao diện

# Responsive

- Responsive Web Design (RWD)
- Thiết kế web đáp ứng
- Sử dụng kích thước màn hình để thay đổi giao diện

## Breakpoint

- Điểm kích thước màn hình (chiều rộng) mà tại đó giao diện sẽ thay đổi
- Không có breakpoint cố định / chuẩn cho các dự án
- Chỉ có breakpoint phổ biến
- Mẹo tìm ra các breakpoint phổ biến: Tham khảo các css framework

Các breakpoint phổ biến

- 576px
- 768px
- 992px
- 1200px
- 1400px

## Media Queries

- At-rule CSS

```css
@media all | screen | print and (min-width: value1) and (max-width: value2){
   Selector CSS
}
```

### Cách 1: Desktop First

```css
@media  screen   and (max-width: 1399px){
   Selector CSS
}

@media  screen   and (max-width: 1199px){
   Selector CSS
}

@media  screen   and (max-width: 991px){
   Selector CSS
}

@media  screen   and (max-width: 767px){
   Selector CSS
}

@media  screen   and (max-width: 575px){
   Selector CSS
}
```

### Cách 2: Mobile First

```css
@media  screen   and (min-width: 576px){
   Selector CSS
}

@media  screen   and (min-width: 768px){
   Selector CSS
}

@media  screen   and (min-width: 992px){
   Selector CSS
}

@media  screen   and (min-width: 1200px){
   Selector CSS
}

@media  screen   and (min-width: 1400px){
   Selector CSS
}
```
