#include <iostream>
#include <vector>
using namespace std;

int max(vector<int> &arr)
{
    int max = 0;
    for (size_t i = 0; i < arr.size(); ++i)
    {
        int gtht = arr[i];
        // gtht là giá trị hiện tại
        if (gtht > max)
        {
            max = gtht;
        }
    };
    return max;
}

int main()
{
    int n;
    cout << "Nhap n du lieu: ";
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; ++i)
    {
        cout << "Nhap du lieu thu " << i + 1 << ":";
        cin >> arr[i];
    }
    int gtln = max(arr);
    cout << "gia tri lon nhat la: " << gtln;
}
