#include <iostream>
using namespace std;
struct node
{
    int data;
    node *pleft;
    node *pright;
};
typedef struct node NODE;
typedef NODE *TREE;
void KhoiTaoCay(TREE &t)
{
    t = NULL;
}
void ThemNodeVaoCay(TREE &t, int x)
{
    if (t == NULL) // Cây rỗng
    {
        NODE *p = new NODE; // tạo 1 nút mới để thêm vào cây
        p->data = x;
        p->pleft = NULL;
        p->pright = NULL;
        t = p; // node p chính là nút gốc
    }
    else
    { // Cây có phần tử
        // Nhỏ bên trái, lớn bên phải
        if (t->data > x)
        {
            ThemNodeVaoCay(t->pleft, x);
        }
        else if (t->data < x)
        {
            ThemNodeVaoCay(t->pright, x);
        }
    }
}

// NLR, NRL, LNR, RNL, LRN, RLN

void Duyet_NLR(TREE t) // duyệt thứ tự trước
{
    if (t != NULL)
    {
        cout << t->data << " "; // xuất dữ liệu trong node
        Duyet_NLR(t->pleft);    // duyet ben trai
        Duyet_NLR(t->pright);   // duyệt bên phải
    }
}
// hàm xuất cây nhị phân theo LNR <=> xuất ra các phần tử từ bé đến lớn
void Duyet_LNR(TREE t) // duyệt giữa
{
    // nếu cây còn phần tử thì tiếp tục duyệt
    if (t != NULL)
    {
        Duyet_LNR(t->pleft);    // duyệt qua trái
        cout << t->data << " "; // xuất giá trị của node
        Duyet_LNR(t->pright);   // duyệt qua phải
    }
}

void Duyet_LRN(TREE t) // duyệt sau
{
    // nếu cây còn phần tử thì tiếp tục duyệt
    if (t != NULL)
    {
        Duyet_LRN(t->pleft);    // duyệt qua trái
        Duyet_LRN(t->pright);   // duyệt qua phải
        cout << t->data << " "; // xuất giá trị của node
    }
}
int TimMax(TREE t)
{

    if (t->pright == NULL)
    {
        return t->data;
    }
    return TimMax(t->pright);
}

// hàm tìm giá trị MIN
int TimMin(TREE t)
{

    if (t->pleft == NULL)
    {
        return t->data;
    }
    return TimMin(t->pleft);
}

void Menu(TREE &t)
{
    while (true)
    {
        cout << "\n===Menu===" << endl;
        cout << "=== 1.Nhap du lieu ===" << endl;
        cout << "=== 2. Xuat du lieu theo NLR ===" << endl;
        cout << "=== 3. Xuat du lieu theo LNR ===" << endl;
        cout << "=== 4. Xuat du lieu theo LRN ===" << endl;
        cout << "=== 5. Gia tri max cua cay ===" << endl;
        cout << "=== 6. Gia tri min cua cay ===" << endl;
        cout << "=== 0. Ket thuc ===" << endl;
        int luachon;
        cout << "Nhap lua chon: ";
        cin >> luachon;
        if (luachon < 0 || luachon > 6)
        {
            cout << "Lua chon khong hop le";
        }
        else if (luachon == 1)
        {
            int x;
            cout << "Nhap so nguyen x=";
            cin >> x;
            ThemNodeVaoCay(t, x);
        }
        else if (luachon == 2)
        {
            cout << "Duyet theo NLR(duyet thu tu truoc)" << endl;
            Duyet_NLR(t);
        }
        else if (luachon == 3)
        {
            cout << "Duyen theo LNR (duyet thu tu giua)" << endl;
            Duyet_LNR(t);
        }
        else if (luachon == 4)
        {
            cout << "Duyet theo LRN (duyet thu tu sau)" << endl;
            Duyet_LRN(t);
        }
        else if (luachon == 5)
        {
            cout << "Gia tri MAX cua cay: " << TimMax(t);
        }
        else if (luachon == 6)
        {
            cout << "Gia tri MIN cua cay: " << TimMin(t);
        }
        else
        {
            break;
        }
    }
}
int main(void)
{
    TREE t;
    KhoiTaoCay(t);
    Menu(t);
    return 0;
}