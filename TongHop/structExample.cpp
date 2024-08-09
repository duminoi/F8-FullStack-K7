#include <iostream>

using namespace std;
struct Student{
	int id;
	string fullName;
	int age;
};
int main(){
	Student myStudent;
	cout << "Enter your student's id: " ;
	cin >> myStudent.id;
	cout<< "Enter your student's age: ";
	cin >> myStudent.age;
	
	cout << "Enter your student's name: ";
	cin.ignore();
	getline(cin, myStudent.fullName);
	cout << "in4 of students" << endl;
	cout << "Student's ID: " << myStudent.id <<endl;
	cout << "Student's name: " << myStudent.fullName <<endl;
	cout << "Student's age: " << myStudent.age <<endl;
	return 0;
}
