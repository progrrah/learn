#include <iostream>
void func2(int intputNumber, int* array, int sizeArray)
{
for(int i = 0; i < sizeArray; i++)
{
    if(*array == intputNumber)
    std::cout << i << "\t";
    array++;
}
}
int main(){
    int Array[] = {1, 2, 10, 13, 29};
    int ArraySize = 5;
    func2(2, Array, ArraySize);
    return 0;
}
