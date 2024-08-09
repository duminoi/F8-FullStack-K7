#include <iostream>
#include <string>
using namespace std;
struct Nhanvien
{
    int id;
    string ten;
    int age;
    float hsl;
    float lcs;
    Nhanvien(int id, string ten, int age, float hsl, float lcs)
    {
        this->id = id;
        this->ten = ten;
        this->age = age;
        this->hsl = hsl;
        this->lcs = lcs;
    }
    void monthlySalary()
    {
        cout << "Luong hang thang cua nhan vien la: " << hsl * lcs << endl;
    }
};

int main()
{
    Nhanvien nv(1, "Minh", 21, 2.5, 2000);
    cout << "Thong tin nhan vien:";
    cout << "Ten nhan vien: " << nv.ten;
    nv.monthlySalary();
}