##

```
*Chèn phần tử vào cuối vector
// newElement là phần tử mới cần chèn vào cuối vector.
void vecPushBack(Vector & vec, t newElement){
//Gấp đôi dung lượng nếu vector đã đầy
    if (vec.size == vec.capacity){
    vecExpand(vec, 2 * vec.capacity);
    }
    // Chèn phần tử mới vào ngay sau phần tử cuối cùng
    vec.array[vec.size] = newElement;
    // Cập nhật kích thước
     vec.size++;
}
*Chèn phần tử vào giữa vector
//pos (position) là vị trí chèn, có giá trị từ 0 đến size-1.
// newElement là phần tử mới cần chèn.
void vecInsert(Vector & vec, int pos, T newElement){
    // gấp đôi dung lượng nếu vector đầy
    if(vec.size == vec.capacity){
        vecExpand(vec, 2 * vec.Capacity);
    }
    // Dịch chuyển các phần tử ở pos và sau pos sang phải một vị trí;
    //Phải quét ngược từ phải sang trái (for lùi) để tránh ghi đè.
    for(int i = vec.size; i > pos; i--){
        vec.array[i] = vec.array[i - 1];
    }
    //Đặt phần tử mới vào vị trí chèn
    vec.array[pos] = newElement;
    //Cập nhật kích thước
}
*Xóa phần tử ở cuối vector
// Xóa phần tử ở cuối vector.
void vecPopBack(Vector & vec){
    vec.size--; // Giảm kích thước một đơn vị nghĩa là
                // "quên" phần tử cuối cùng.
}

// Xóa tất cả các phần tử.
void vecClear(Vector & vec){
    vec.size = 0; // Đặt kích thước về 0 nghĩa là
    "quên" tất cả các phần tử.
}

*Xóa phần tử ở giữa vector
//pos (position) là vị trí của phần tử cần xóa.
void vecErase(Vector &vec, int pos){
    //Dịch các phần tử nằm sau vị trí xóa sang phải để lấp đầy chỗ trống để lại do việc xóa.
    for (int i = pos; i < vec.size -1; i++){
        vec.array[i] = vec.array[i + 1];
    }
    //Cập nhật kích thước
    vec.size--;
}
*Phần
```

```
//Khai báo kiểu phần tử
typedef int T;
// Định nghĩa kiểu các nút trong danh sách
struct Node{
    T elem;// phần tử
    Node * next; // liên kết tới nút kết tiếp
};
//định nghĩa cấu trúc danh sách liên kết



*Các hàm khác
//Kiểm tra danh sách có rỗng hãy không.
bool listEmpty(List & list){
    return (list.head == NULL);
}
// lấy phần tử đầu danh sách (có kiểu là T).
T listFront(list & list){
    return list.head ->elem; //head trỏ tới nút đầu;
                            //trong một nút có elem là phần tử
}
```
