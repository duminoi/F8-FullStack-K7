#include <iostream>
using namespace std;

int main()
{
    int size;
    cout << "Nhap size: ";
    cin >> size;
    int *ptr = new int[size];

    // sử dụng *(ptr + i) de g�n gi� tri
    for (int i = 0; i < size; i++)
    {
        *(ptr + i) = i;
    }

    // hoac su dung ptr[i] de g�n gi� tri
    //    for (int i = 0; i < size; i++) {
    //        ptr[i] = i;
    //    }

    // In gi� tri ra m�n h�nh
    for (int i = 0; i < size; i++)
    {
        cout << ptr[i] << endl;
    }

    delete[] ptr;
    return 0;
}
