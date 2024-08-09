#include <iostream>
using namespace std;
typedef int T;

struct Node
{
    T elem;
    Node *next;
};

struct List
{
    Node *head;
};

void listInit(List &list)
{
    list.head = NULL; // Hoặc dùng nullptr nếu dùng C++11 trở lên
}

bool listIsEmpty(List &list) // Chỉnh sửa tên hàm và kiểu dữ liệu
{
    return (list.head == NULL);
}

void listDestroy(List &list)
{
    while (!listIsEmpty(list)) // Chỉnh sửa tên hàm
    {
        listPopFront(list);
    }
}

// Lấy phần tử đầu danh sách
T listFront(List &list)
{
    return (list.head->elem);
}

void listPushFront(List &list, T e)
{
    Node *v = new Node;
    v->elem = e;
    v->next = list.head;
    list.head = v;
}

void listPopFront(List &list)
{
    Node *old = list.head;
    list.head = list.head->next;
    delete old;
}
