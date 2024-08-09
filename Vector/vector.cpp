#include <iostream>
using namespace std;
// Khai báo kiểu phần tử
typedef int T;
// Định nghĩa cấu trúc Vector
struct Vector
{
    // Kích thước vector (số phần tử
    // hiện có)
    int size;
    // Dung lượng vector (chứa được tối
    // đa bao nhiêu phần tử?)
    int capacity;
    // Con trỏ tới mảng chứa các phần tử
    T *array;
};

// initCapacity là dung lượng ban đầu của vector và có giá trị ngầm định bằng 16.
void vecInit(Vector &vec, int initCapacity = 16)
{
    vec.size = 0;                    // Ban đầu chưa có phần tử nào
    vec.capacity = initCapacity;     // Khởi tạo dung lượng
    vec.array = new T[vec.capacity]; // Tạo mảng chứa phần tử
}
void vecDestroy(Vector &vec)
{
    delete[] vec.array; // Xóa mảng (giải phóng bộ nhớ)
}

// Sao chép nội dung từ vec2 sang vec.
void vecCopy(Vector &vec, Vector &vec2)
{
    if (&vec != &vec2)
    {                                    // Ngăn cản tự sao chép
        vec.size = vec2.size;            // Đặt kích thước mới
        vec.capacity = vec2.capacity;    // Đặt dung lượng mới
        delete[] vec.array;              // Xóa mảng cũ
        vec.array = new T[vec.capacity]; // Tạo mảng mới
        // Sao chép các phần tử từ vec2 sang vec
        for (int i = 0; i < vec.size; i++)
            vec.array[i] = vec2.array[i];
    }
}

// Lấy kích thước vector (số phần tử hiện có).
int vecGetSize(Vector &vec)
{
    return vec.size;
}
// Kiểm tra vector có đang rỗng hay không.
bool vecIsEmpty(Vector &vec)
{
    return (vec.size == 0);
}
// Truy nhập một phần tử thông qua chỉ số (index) của nó.
T vecGetElem(Vector &vec, int index)
{
    return vec.array[index];
}
// Cập nhật một phần tử.
void vecSetElem(Vector &vec, int index, T newValue)
{
    vec.array[index] = newValue;
}

// Đây là thao tác trợ giúp cho các thao tác chèn.
// newCapacity là dung lượng mới (phải lớn hơn kích thước).
void vecExpand(Vector &vec, int newCapacity)
{
    if (newCapacity <= vec.size)
        return;                     // Thoát ra nếu dung lượng mới không đủ lớn
    T *old = vec.array;             // Giữ lại địa chỉ mảng cũ
    vec.array = new T[newCapacity]; // Tạo mảng có chiều dài mới
    for (int i = 0; i < vec.size; i++)
        vec.array[i] = old[i];  // Sao chép mảng cũ sang mảng mới
    delete[] old;               // Xóa mảng cũ
    vec.capacity = newCapacity; // Đặt dung lượng mới
}

// newElement là phần tử mới cần chèn vào cuối vector.
void vecPushBack(Vector &vec, T newElement)
{
    // Gấp đôi dung lượng nếu vector đã đầy
    if (vec.size == vec.capacity)
        vecExpand(vec, 2 * vec.capacity);
    // Chèn phần tử mới vào ngay sau phần tử cuối cùng
    vec.array[vec.size] =
        newElement;
    // Cập nhật kích thước
    vec.size++;
}

// pos (position) là vị trí chèn, có giá trị từ 0 đến size-1.
// newElement là phần tử mới cần chèn.
void vecInsert(Vector &vec, int pos, T newElement)
{
    // Gấp đôi dung lượng nếu vector đã đầy
    if (vec.size == vec.capacity)
        vecExpand(vec, 2 * vec.capacity);
    // Dịch chuyển các phần tử ở pos và sau pos sang phải một vị trí;
    // phải quét ngược từ phải sang trái (for lùi) để tránh ghi đè.
    for (int i = vec.size; i > pos; i--)
        vec.array[i] = vec.array[i - 1];
    // Đặt phần tử mới vào vị trí chèn
    vec.array[pos] = newElement;
    // Cập nhật kích thước
    vec.size++;
}

// Xóa phần tử ở cuối vector.
void vecPopBack(Vector &vec)
{
    vec.size--; // Giảm kích thước một đơn vị nghĩa
    // là “quên” phần tử cuối cùng.
}
// Xóa tất cả các phần tử.
void vecClear(Vector &vec)
{
    vec.size = 0; // Đặt kích thước về 0 nghĩa là
    // “quên” tất cả các phần tử.
}

// Xóa phần tử ở giữa vector.
// pos (position) là vị trí của phần tử cần xóa.
void vecErase(Vector &vec, int pos)
{
    // Dịch các phần tử nằm sau vị trí xóa sang trái để
    // lấp đầy chỗ trống để lại do việc xóa.
    for (int i = pos; i < vec.size - 1; i++)
        vec.array[i] = vec.array[i + 1];
    // Cập nhật kích thước
    vec.size--;
}

int main()
{

    // Bài 1
    cout << " vui lòng chọn bài tập";
    int baiTap;
    cin >> baiTap;
    switch (baiTap)
    {
    case 1:
    {
        Vector obj;
        obj.size = 5;
        obj.capacity = 15;
        obj.array = new T[obj.capacity];
        vecExpand(obj, 20);
        cout << "dung lượng mới của obj: " << obj.capacity << endl;
        cout << "kích thước ko đổi của obj: " << obj.size;
    }
    case 2:
    {
    }
    break;

    default:
        break;
    }
}