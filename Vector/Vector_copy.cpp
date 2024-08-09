#include <iostream>
using namespace std;
typedef int T;
struct Vector
{
    int size;
    int capacity;
    T *array;
};
void vecInit(Vector &vec, int initCapacity = 16)
{
    vec.size = 0;
    vec.capacity = initCapacity;
    vec.array = new T[vec.capacity];
}
void vecDestroy(Vector &vec)
{
    delete[] vec.array;
}

void vecCopy(Vector &vec, Vector &vec2)
{
    if (&vec != &vec2)
    {
        vec.size = vec2.size;
        vec.capacity = vec2.capacity;
        delete[] vec.array;
        vec.array = new T[vec.capacity];
    }
    for (size_t i = 0; i < vec.size; i++)
    {
        vec.array[i] = vec2.array[i];
    }
}

int vecGetSize(Vector &vec)
{
    return vec.size;
}

bool vecIsEmpty(Vector &vec)
{
    return (vec.size == 0);
}

T vecGetElem(Vector &vec, int index)
{
    return vec.array[index];
}

void vecSetElem(Vector &vec, int index, T newValue)
{
    vec.array[index] = newValue;
}

// tăng dung lượng vector
//  Đây là thao tác trợ giúp cho thao tác chèn.
// newCapacity là dung lượng mới (phải lớn hơn kích thước)
void vecExpand(Vector &vec, int newCapacity)
{
    T *old = vec.array;
    vec.array = new T[newCapacity];
    for (size_t i = 0; i < vec.size; i++)
    {
        vec.array[i] = old[i];
    }
    delete[] old;
    vec.capacity = newCapacity;
}
// Chèn phần tử vào cuối vector
void vecPushBack(Vector &vec, T newElement)
{
    if (vec.size == vec.capacity)
    {
        vecExpand(vec, 2 * vec.capacity);
    }
    vec.array[vec.size] = newElement;
    vec.size++;
}

// Chèn phần tử vào giữa vector
void vecInsert(Vector &vec, int pos, T newElement)
{
    if (vec.size == vec.capacity)
    {
        vecExpand(vec, vec.capacity);
    }
    for (size_t i = vec.size; i > pos; i--)
    {
        vec.array[i] = vec.array[i - 1];
    }
    vec.array[pos] = newElement;
    vec.size++;
}

// xóa phần tử ở cuối vector
void vecPopBack(Vector &vec)
{
    vec.size--;
}
// Xóa tất cả phần từ vector
void vecClear(Vector &vec)
{
    vec.size = 0;
}

// Xóa phần tử ở giữa vector
void vecErase(Vector &vec, int pos)
{
    for (size_t i = pos; i < vec.size - 1; i++)
    {
        vec.array[i] = vec.array[i + 1];
    }
    vec.size--;
}

int main()
{
    // YEU CAU THUC HANH
    //   Dinh nghia cac ham thuc hien cac viec sau:
    //     1. Lay dung luong cua vector
    //     2. Cat bo phan dung luong du thua cua vector
    //     3. In tat ca cac phan tu cua vector len man hinh
    //     4. Tim kiem tuan tu tren vector
    //     5. Tim kiem nhi phan tren vector (gia su vector da sap xep tang dan)
    //     6. Xoa cac phan tu nam o cac vi tri tu pos1 den pos2 tren vector

    Vector vec;
    int choose;
    vecInit(vec, 10);
    vecPushBack(vec, 1);
    vecPushBack(vec, 2);
    vecPushBack(vec, 3);
    vecPushBack(vec, 4);
    vecPushBack(vec, 5);

    while (true)
    {
        cout << "Nhap lua chon: " << endl;
        cout << "0 . Thoat" << endl;
        cout << "1. Lay dung luong cua vector" << endl;
        cout << "2. Cat bo phan dung luong du thua cua vector" << endl;
        cin >> choose;
        cin.ignore();

        if (choose > 0)
        {
            switch (choose)
            {
            case 1:
                cout << "Do dai của vector: " << vec.size << endl;
                break;
            case 2:
            {
                int newCapacity = vec.capacity - vec.size;
                vec.capacity = newCapacity;
                cout << "Dung luong sau khi cat bo là: " << vec.capacity << endl;
            }
            case 3:
            {
                for (size_t i = 0; i < vec.size; i++)
                {
                    cout << "Phan tu thu " << i + 1 << ": " << vec.array[i] << endl;
                }
            }
            default:
                cout << "vui long nhap lai" << endl;
            }
        }
        else
        {
            break;
        }
    }
}