#include <iostream>
using namespace std;
int test(int temp){
	temp = temp * 3;
	return temp;
}
int main (){
	int n;
	int gt;
	cout << "Nhap N: ";
	cin >> n;
	cin.ignore();
	gt = test(n);
	cout<< "Ket qua la: " << gt;
}