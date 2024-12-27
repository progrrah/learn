#include <iostream>
// число должно делиться на три и ищем максимальные элемент в массиве, который удовлет. такое условие
void func3(int* array, int sizeArray)
{
    int tempNumber = 0;
    for(int i = 0; i < sizeArray; i++)
{
    if(*array % 3 == 0 )
    tempNumber= *array;
}
std::cout << tempNumber;
}
int main(){
    int Array[] = {1, 2, 10, 13, 29};
    int ArraySize = 5;
    func3(Array, ArraySize);
    return 0;
}