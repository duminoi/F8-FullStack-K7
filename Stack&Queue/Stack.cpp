#include <iostream>
using namespace std;
typedef int T;
struct Stack
{
    T *theArray;
    int topOfStack;
};

void stackInit(Stack &stack, int capacity)
{
    stack.theArray = new T[capacity];
    stack.topOfStack = -1;
}
void stackDestroy(Stack &stack)
{
    delete[] stack.theArray;
}
bool stackIsEmpty(Stack &stack)
{
    return stack.topOfStack == -1;
}
int stackGetSize(Stack &stack)
{
    return (stack.topOfStack + 1);
}

void stackPush(Stack &stack, T e)
{
    stack.topOfStack++;
    stack.theArray[stack.topOfStack] = e;
}

void stackPop(Stack &stack)
{
    stack.topOfStack--;
}
T stackTop(Stack &stack)
{
    return (stack.theArray[stack.topOfStack]);
}
