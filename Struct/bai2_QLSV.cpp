#include <iostream>
#include <vector>
#include <limits>
using namespace std;

// Định nghĩa cấu trúc SinhVien
struct SinhVien
{
    int id;
    string ten;
    int tuoi;
    string monHoc;
    float diemGiuaKy;
    float diemCuoiKy;
};

// Hàm nhập danh sách sinh viên
void nhapDanhSach(vector<SinhVien> &ds)
{
    int n;
    cout << "Nhap so luong sinh vien: ";
    cin >> n;
    ds.resize(n);
    for (int i = 0; i < n; ++i)
    {
        cout << "Nhap thong tin sinh vien thu " << i + 1 << ":" << endl;
        cout << "ID: ";
        cin >> ds[i].id;
        cin.ignore(); // Bỏ qua ký tự newline sau khi nhập số
        cout << "Ten: ";
        getline(cin, ds[i].ten);
        cout << "Tuoi: ";
        cin >> ds[i].tuoi;
        cin.ignore();
        cout << "Mon hoc: ";
        getline(cin, ds[i].monHoc);
        cout << "Diem giua ky: ";
        cin >> ds[i].diemGiuaKy;
        cout << "Diem cuoi ky: ";
        cin >> ds[i].diemCuoiKy;
        cin.ignore();
    }
}

// Hàm xem danh sách sinh viên
void xemDanhSach(const vector<SinhVien> &ds)
{
    for (size_t i = 0; i < ds.size(); ++i)
    {
        cout << "ID: " << ds[i].id << ", Ten: " << ds[i].ten
             << ", Tuoi: " << ds[i].tuoi << ", Mon hoc: " << ds[i].monHoc
             << ", Diem giua ky: " << ds[i].diemGiuaKy
             << ", Diem cuoi ky: " << ds[i].diemCuoiKy << endl;
    }
}

// Hàm tính điểm tổng môn học cho sinh viên
float tinhDiemTong(const SinhVien &sv)
{
    return sv.diemGiuaKy * 0.4 + sv.diemCuoiKy * 0.6;
}

// Hàm tìm sinh viên theo ID
void timSinhVienTheoID(const vector<SinhVien> &ds, int id)
{
    for (size_t i = 0; i < ds.size(); ++i)
    {
        if (ds[i].id == id)
        {
            cout << "Sinh vien tim thay: ID: " << ds[i].id << ", Ten: " << ds[i].ten
                 << ", Tuoi: " << ds[i].tuoi << ", Mon hoc: " << ds[i].monHoc
                 << ", Diem giua ky: " << ds[i].diemGiuaKy << ", Diem cuoi ky: " << ds[i].diemCuoiKy
                 << endl;
            return;
        }
    }
    cout << "Sinh vien co ID " << id << " khong ton tai!" << endl;
}

// Hàm tìm sinh viên theo tên
void timSinhVienTheoTen(const vector<SinhVien> &ds, const string &ten)
{
    bool found = false;
    for (size_t i = 0; i < ds.size(); ++i)
    {
        if (ds[i].ten == ten)
        {
            cout << "Sinh vien tim thay: ID: " << ds[i].id << ", Ten: " << ds[i].ten
                 << ", Tuoi: " << ds[i].tuoi << ", Mon hoc: " << ds[i].monHoc
                 << ", Diem giua ky: " << ds[i].diemGiuaKy << ", Diem cuoi ky: " << ds[i].diemCuoiKy
                 << endl;
            found = true;
        }
    }
    if (!found)
    {
        cout << "Khong tim thay sinh vien co ten " << ten << "!" << endl;
    }
}

// Hàm tìm sinh viên có điểm cao nhất
void timSinhVienDiemCaoNhat(const vector<SinhVien> &ds)
{
    if (ds.empty())
    {
        cout << "Danh sach sinh vien rong!" << endl;
        return;
    }
    float maxDiem = -numeric_limits<float>::infinity();
    size_t maxIndex = 0;
    for (size_t i = 0; i < ds.size(); ++i)
    {
        float diemTong = tinhDiemTong(ds[i]);
        if (diemTong > maxDiem)
        {
            maxDiem = diemTong;
            maxIndex = i;
        }
    }
    cout << "Sinh vien diem cao nhat: ID: " << ds[maxIndex].id << ", Ten: " << ds[maxIndex].ten
         << ", Tuoi: " << ds[maxIndex].tuoi << ", Mon hoc: " << ds[maxIndex].monHoc
         << ", Diem giua ky: " << ds[maxIndex].diemGiuaKy << ", Diem cuoi ky: " << ds[maxIndex].diemCuoiKy
         << ", Diem tong: " << maxDiem << endl;
}

// Hàm xếp loại sinh viên
string xepLoai(float diemTong)
{
    if (diemTong >= 8.5)
        return "Xuat sac";
    if (diemTong >= 7.0)
        return "Gioi";
    if (diemTong >= 5.5)
        return "Kha";
    if (diemTong >= 4.0)
        return "Trung binh";
    return "Yeu";
}

void xepLoaiSinhVien(const vector<SinhVien> &ds)
{
    for (size_t i = 0; i < ds.size(); ++i)
    {
        float diemTong = tinhDiemTong(ds[i]);
        cout << "Sinh vien: ID: " << ds[i].id << ", Ten: " << ds[i].ten
             << ", Mon hoc: " << ds[i].monHoc << ", Diem tong: " << diemTong
             << ", Xep loai: " << xepLoai(diemTong) << endl;
    }
}

void timSinhVienTheoMonHoc(const vector<SinhVien> ds, const string &mh)
{
    cout << "Mon hoc" << mh << endl;
}
// Hàm chính để điều khiển chương trình
int main()
{
    vector<SinhVien> ds;
    int luaChon;

    do
    {
        cout << "\n Quan Ly Sinh Vien\n";
        cout << "1. Nhap danh sach sinh vien\n";
        cout << "2. Xem danh sach sinh vien\n";
        cout << "3. Tinh diem mon hoc cho sinh vien\n";
        cout << "4. Tim sinh vien theo ID\n";
        cout << "5. Tim sinh vien theo ten\n";
        cout << "6. Tim sinh vien co diem cao nhat\n";
        cout << "7. Xep loai sinh vien\n";
        cout << "8. Tim danh sach sinh vien theo mon hoc";
        cout << "0. Thoat\n";
        cout << "Nhap lua chon: ";
        cin >> luaChon;

        switch (luaChon)
        {
        case 1:
            nhapDanhSach(ds);
            break;
        case 2:
            xemDanhSach(ds);
            break;
        case 3:
        {
            int id;
            cout << "Nhap ID sinh vien: ";
            cin >> id;
            bool found = false;
            for (size_t i = 0; i < ds.size(); ++i)
            {
                if (ds[i].id == id)
                {
                    float diemTong = tinhDiemTong(ds[i]);
                    cout << "Diem tong cua sinh vien " << ds[i].ten << " la: " << diemTong << endl;
                    found = true;
                    break;
                }
            }
            if (!found)
            {
                cout << "Sinh vien co ID " << id << " khong ton tai!" << endl;
            }
            break;
        }
        case 4:
        {
            int id;
            cout << "Nhap ID sinh vien: ";
            cin >> id;
            timSinhVienTheoID(ds, id);
            break;
        }
        case 5:
        {
            string ten;
            cout << "Nhap ten sinh vien: ";
            getline(cin, ten);
            timSinhVienTheoTen(ds, ten);
            break;
        }
        case 6:
            timSinhVienDiemCaoNhat(ds);
            break;
        case 7:
            xepLoaiSinhVien(ds);
            break;
        case 8:
        {
            string mh;
            cin.ignore(); // Bỏ qua ký tự newline còn lại sau các lệnh nhập trước đó
            cout << "Ten mon hoc: ";
            getline(cin, mh); // Đọc toàn bộ dòng, bao gồm cả khoảng trắng
            timSinhVienTheoMonHoc(ds, mh);
            break;
        }
        case 0:
            cout << "Thoat chuong trinh." << endl;
            break;
        default:
            cout << "Lua chon khong hop le!" << endl;
            break;
        }

    } while (luaChon != 0);

    return 0;
}
