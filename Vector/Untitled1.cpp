// Cau truc du lieu vector

#include <iostream>

using namespace std;

typedef int T;

struct Vector {
    int size;
    int capacity;
    T * array;
};

int vecSearch(Vector & vec, T x);

// Khoi tao vector
void vecInit(Vector & vec, int initCapacity = 16);

// Huy vector
void vecDestroy(Vector & vec);

// Sao chep vector
void vecCopy(Vector & vec, Vector & vec2);

// Lay kich thuoc vector
int vecGetSize(Vector & vec) {
return vec.size;
}
// Kiem tra vector rong
bool vecIsEmpty(Vector & vec);

// Lay phan tu
T vecGetElem(Vector & vec, int index);

// Cap nhat phan tu
void vecSetElem(Vector & vec, int index, T newValue);

// Tang dung luong vector
void vecExpand(Vector & vec, int newCapacity);

// Chen vao cuoi vector
void vecPushBack(Vector & vec, T newElement);

// Chen vao giua vector
void vecInsert(Vector & vec, int pos, T newElement);

// Xoa phan tu cuoi vector
void vecPopBack(Vector & vec);

// Xoa tat ca cac phan tu
void vecClear(Vector & vec);

// Xoa phan tu o giua vector
void vecErase(Vector & vec, int pos);

int vecGetCapacity(Vector &vec);
	int main()
{
	// Khai bao bien vector
	Vector vec;	
	Vector vec2;
	// Khoi tao vector
	vecInit(vec);
	vecInit(vec2);		
	int a,b,c,d,e,f,choice;
	cout<<"Nhap A: "; cin>>a;
	cout<<"Nhap B: "; cin>>b;
	cout<<"Nhap C: "; cin>>c;
	cout<<"Nhap D: "; cin>>d;
	// Chen mot so phan tu vao cuoi vector
	vecPushBack(vec, a); // a
	vecPushBack(vec, b); // a b
	vecPushBack(vec, c); // a b c
	vecPushBack(vec, d); // a b c d
	cout<<"Nhap E: "; cin>>e;
	// Chen mot phan tu vao giua vector
	vecInsert(vec, 1, e); // a e b c d
	do{
		cout << "---------MENU-----------" << endl;
		cout << "1.In kich thuoc vector." << endl;
		cout << "2.In ra cac phan tu cua vector:" << endl;
		cout << "3.Cap nhat 1 phan tu vao vi tri thu 2 roi in cac phan tu" << endl;
		cout << "4.Xoa phan tu cuoi roi in ra cac phan tu cua vec"<<endl;
		cout << "5.Sao chep cac phan tu cua vec -> vec2 va in ra cac phan tu cua vec2" << endl;
		cout << "6.Xoa tat ca cac phan tu cua vec va kiem tra lai cac phan tu cua vec sau khi xoa" << endl;
		cout << "****Nhap lua chon*****" << endl; cin >> choice;
		switch (choice)
		{
		case 1:
			cout << "Kich thuoc cua vector la" << vecGetSize(vec) << endl;
		case 2:
			cout << "Cac phan tu trong vector:" << endl;
			for (int i = 0; i < vecGetSize(vec); i++)
			cout << "Phan tu thu "<< i << " cua vec1 la: " <<vecGetElem(vec, i) << " "<<endl;
	cout << endl; 
			break;
		case 3:
		cout<<"Nhap F: "; cin>>f;
			// Cap nhat mot phan tu
		vecSetElem(vec, 2, f); // a e f c d
		cout << "Cac phan tu cua vec :" << endl;
		for (int i = 0; i < vecGetSize(vec); i++)
		cout << vecGetElem(vec, i) << " ";
			break;
		case 4:
			// Xoa phan tu cuoi
		vecPopBack(vec); // a e b c
		cout << "Cac phan tu cua vec :" << endl;
		for (int i = 0; i < vecGetSize(vec); i++)
		cout << vecGetElem(vec, i) << " ";
			break;
		
		case 5:
		vecCopy(vec2, vec);
		cout << "Sau khi sao chep vector, cac phan tu cua vec2 la :" << endl;
		for (int i = 0; i < vecGetSize(vec2); i++)
		cout << vecGetElem(vec2, i) << " ";
			break;
		case 6:
			vecClear(vec);
			cout << "Vector dang rong? ";
			cout << (vecIsEmpty(vec) ? "YES" : "NO") << endl;
			break;
		default:
			break;
		}
	}while(choice >6 || choice < 1);
	// Xoa phan tu o giua
	vecErase(vec, 2); // a e c
	
	// Sao chep vector
	
	vecInit(vec2);
	vecCopy(vec2, vec);

	
	
	return 0;
}

void vecInit(Vector & vec, int initCapacity) {
    vec.size = 0;
    vec.capacity = initCapacity;
    vec.array = new T[vec.capacity];
}

void vecDestroy(Vector & vec) {
    delete[] vec.array;
}

void vecCopy(Vector & vec, Vector & vec2) {
    if (&vec != &vec2) {
        vec.size = vec2.size;
        vec.capacity = vec2.capacity;
        delete[] vec.array;
        vec.array = new T[vec.capacity];
    
        for (int i = 0; i < vec.size; i++)
            vec.array[i] = vec2.array[i];
    }
}



bool vecIsEmpty(Vector & vec) {
    return (vec.size == 0);
}

T vecGetElem(Vector & vec, int index) {
    return vec.array[index];
}

void vecSetElem(Vector & vec, int index, T newValue) {
    vec.array[index] = newValue;
}

void vecExpand(Vector & vec, int newCapacity) { 
    if (newCapacity <= vec.size)
        return;
    
    T * old = vec.array;
    vec.array = new T[newCapacity];
    for (int i = 0; i < vec.size; i++)
        vec.array[i] = old[i];
    
    delete[] old;
    
    vec.capacity = newCapacity;
}

void vecPushBack(Vector & vec, T newElement) {
    if (vec.size == vec.capacity)
        vecExpand(vec, 2 * vec.capacity);
    
    vec.array[vec.size] = newElement;

    vec.size++;
}

void vecInsert(Vector & vec, int pos, T newElement) {
    if (vec.size == vec.capacity)
        vecExpand(vec, 2 * vec.capacity);

    for (int i = vec.size; i > pos; i--)
        vec.array[i] = vec.array[i - 1];

    vec.array[pos] = newElement;

    vec.size++;
}

void vecPopBack(Vector & vec) {
    vec.size--;
}

void vecClear(Vector & vec) {
    vec.size = 0;
}

void vecErase(Vector & vec, int pos) {
    for (int i = pos; i < vec.size - 1; i++)
        vec.array[i] = vec.array[i + 1];

    vec.size--;
}

