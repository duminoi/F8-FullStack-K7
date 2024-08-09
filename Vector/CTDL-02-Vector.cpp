
// Cau truc du lieu vector

#include <iostream>

using namespace std;

typedef int T;

struct Vector {
    int size;
    int capacity;
    T * array;
};

// Khoi tao vector
void vecInit(Vector & vec, int initCapacity = 16);

// Huy vector
void vecDestroy(Vector & vec);

// Sao chep vector
void vecCopy(Vector & vec, Vector & vec2);

// Lay kich thuoc vector
int  vecGetSize(Vector & vec);

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

int main()
{
	// Khai bao bien vector
	Vector vec;	

	// Khoi tao vector
	vecInit(vec);	

	// Chen mot so phan tu vao cuoi vector
	vecPushBack(vec, 4); // 4
	vecPushBack(vec, 8); // 4 8
	vecPushBack(vec, 3); // 4 8 3
	vecPushBack(vec, 9); // 4 8 3 9

	// Chen mot phan tu vao giua vector
	vecInsert(vec, 1, 10); // 4 10 8 3 9

	// Cap nhat mot phan tu
	vecSetElem(vec, 2, 7); // 4 10 7 3 9

	// Xoa phan tu cuoi
	vecPopBack(vec); // 4 10 7 3

	// Xoa phan tu o giua
	vecErase(vec, 2); // 4 10 3
	
	// Sao chep vector
	Vector vec2;
	vecInit(vec2);
	vecCopy(vec2, vec);

	// In cac phan tu trong vector
	for (int i = 0; i < vecGetSize(vec); i++)
		cout << vecGetElem(vec, i) << " ";
	cout << endl;
	
	// In cac phan tu trong vector 2
	cout << "Sau khi sao chep vector:" << endl;
	for (int i = 0; i < vecGetSize(vec2); i++)
		cout << vecGetElem(vec2, i) << " ";
	cout << endl;

	// Xoa tat ca cac phan tu
	vecClear(vec);

	// Kiem tra vector rong
	cout << "Vector dang rong? ";
	cout << (vecIsEmpty(vec) ? "YES" : "NO") << endl;
	
	// Huy vector
	vecDestroy(vec);
	vecDestroy(vec2);
	
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

int vecGetSize(Vector & vec) {
    return vec.size;
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

