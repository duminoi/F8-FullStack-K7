#include <iostream>
using namespace std;

// Khai báo kiểu phần tử
typedef int T;

// Định nghĩa kiểu của các nút trong danh sách
struct Node
{
    T elem;     // Phần tử
    Node *next; // Liên kết tới nút kế tiếp
};

// Định nghĩa cấu trúc danh sách liên kết đơn
struct List
{
    Node *head; // Con trỏ tới nút đầu danh sách
};

// Khởi tạo danh sách rỗng
void listInit(List &list)
{
    list.head = NULL; // Ban đầu danh sách rỗng
}

// Kiểm tra danh sách có rỗng hay không
bool listIsEmpty(List &list)
{
    return (list.head == NULL);
}

// Lấy phần tử đầu danh sách
T listFront(List &list)
{
    return list.head->elem; // head trỏ tới nút đầu
}

// Chèn phần tử vào đầu danh sách
void listPushFront(List &list, T e)
{
    // Tạo nút mới
    Node *v = new Node;
    // Nút mới chứa phần tử cần chèn
    v->elem = e;
    // Nút mới trỏ tới nút đầu danh sách
    v->next = list.head;
    // Cập nhật head để nút mới trở thành nút đầu danh sách
    list.head = v;
}

// Xóa phần tử đầu danh sách
void listPopFront(List &list)
{
    if (!listIsEmpty(list))
    {
        // Giữ lại địa chỉ của nút đầu danh sách (sẽ cần địa chỉ này khi xóa)
        Node *old = list.head;
        // Cập nhật head để trỏ tới nút thứ hai
        list.head = list.head->next;
        // Xóa nút đầu cũ
        delete old;
    }
}

// Hủy danh sách, xóa tất cả các phần tử
void listDestroy(List &list)
{
    while (!listIsEmpty(list))
    {
        listPopFront(list); // Xóa phần tử đầu tiên cho đến khi danh sách rỗng
    }
}

void listPrint(List &list)
{
    Node *current = list.head;
    while (current != NULL)
    {
        cout << current->elem << endl;
        current = current->next;
    }
}

int main()
{
    List list;

    // Khởi tạo danh sách
    listInit(list);

    // Thêm các phần tử vào đầu danh sách
    listPushFront(list, 10);
    listPushFront(list, 20);
    listPushFront(list, 30);
    listPushFront(list, 40);
    listPushFront(list, 50);
    listPushFront(list, 60);
    listPushFront(list, 70);

    // In ra phần tử đầu tiên của danh sách
    cout
        << "Phần tử đầu danh sách: " << listFront(list) << endl;

    // Xóa phần tử đầu tiên
    listPopFront(list);

    // In ra phần tử đầu tiên mới của danh sách
    cout << "Phần tử đầu danh sách sau khi xóa phần tử đầu: " << listFront(list) << endl;

    // In ra các phần tử trong danh sách
    cout << "Các phần tử trong danh sách là: ";
    listPrint(list);

    // Hủy danh sách
    listDestroy(list);

    // Kiểm tra danh sách có rỗng hay không
    if (listIsEmpty(list))
    {
        cout << "Danh sách rỗng" << endl;
    }
    else
    {
        cout << "Danh sách không rỗng" << endl;
    }

    return 0;
}
