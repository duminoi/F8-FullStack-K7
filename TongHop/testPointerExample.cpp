#include <iostream>
using namespace std;
int main()
{
	int a = 2409;
	int b = 2001;
	// int *const ptr_a = &a; // con tro ptr_a tro den bien a
	// ptr_a = &b; // loi vi ptr_a la hang con tro, khong the gan gia tri khac duoc
	int *ptr_a = &a; // con tro ptr_a tro den bien a
	a = 1000;
	cout << "a: " << &a << endl;
	cout << "*ptr_a: " << ptr_a;
	return 0;
}
