```
void bstInit(BinarySearchTree & tree){
    tree.root = NULL; // Ban đầu cây rỗng nên root chưa trỏ đi đâu
}
void bstDestroy(BinarySearchTree & tree){
    bstMakeEmpty(tree); //xóa hết các nút trên cây
}
// Hàm xóa rỗng cây (gọi hàm cùng tên nhận tham số là gốc của cây
// Cần xóa rỗng thay vì bản thân cây đó)
void bstMakeEmpty(BinarySearchTree & tree){
    bstMakeEmpty(tree.root)
}



```
