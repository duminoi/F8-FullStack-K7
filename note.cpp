#include <iostream>
using namespace std;
// Khai báo kiểu phần tử
typedef int T;
// Định nghĩa kiểu của các nút trên cây
struct BinaryNode
{
    T elem;            // Phần tử
    BinaryNode *left;  // con trỏ tới con trái
    BinaryNode *right; // con trỏ tới con phải
};
// Định nghĩa cấu trúc cây nhị phân tìm kiếm
struct BinarySearchTree
{
    BinaryNode *root; // Con trỏ tới nút gốc
};
void bstInit(BinarySearchTree &tree)
{
    tree.root = NULL; // Ban đầu cây rỗng nên root chưa trỏ đi đâu
}
void bstDestroy(BinarySearchTree &tree)
{
    bstMakeEmpty(tree); // xóa hết các nút trên cây
}
// Hàm xóa rỗng cây (gọi hàm cùng tên nhận tham số là gốc của cây
// Cần xóa rỗng thay vì bản thân cây đó)
void bstMakeEmpty(BinarySearchTree &tree)
{
    bstMakeEmpty(tree.root);
}

void bstMakeEmpty(BinaryNode *&t)
{
    if (t == NULL)
    {
        return; // thoát ra nếu cây rỗng
    }
    bstMakeEmpty(t->left);  // xóa rỗng cây con trái
    bstMakeEmpty(t->right); // xóa rỗng cây con phải
    delete t;
    t = NULL; // Cây đã rỗng tức là không tồn tại gốc
}
