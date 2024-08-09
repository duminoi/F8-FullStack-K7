#include <iostream>

using namespace std;

struct Rectangle{
	int width, heigth;
	Rectangle(int w, int h){
		width = w;
		heigth = h;
	}
	void areaOfRectangle(){
		cout << "Area of rectangle is : " << (width * heigth) << endl;
	}
};

int main(){
	Rectangle rec = Rectangle(4, 10);
	rec.areaOfRectangle();
	return 0;
}
