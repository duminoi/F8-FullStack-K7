#include <iostream>
using namespace std;
int main()
{
    // int a = 10;
    // int nhap;
    // int *p;
    // p = &a;
    // cout << "Address of a variable is: " << &a << endl;
    // cout << "value of p point is: " << p << endl;
    // cout << "Address of p point variable is: " << &p << endl;
    int nhap;
    int a = 10;
    int *p;
    p = &a;
    cin >> nhap;
    cout << "ban vua nhap: " << nhap;
    cout << "Value of a variable is: " << a << endl;
    cout << "Value of area memory which p points: " << *p << endl;
    return 0;
}
