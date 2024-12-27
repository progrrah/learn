#include <iostream>
#include <cmath> 
bool numberIsPrime(int n){ 
	for(int i=2; i<= sqrt(n); i++)
		if(n%i == 0)
			return false;
	return true;
}
void func1(int* array, int sizeArray)
{
    int sum = 0;
    int count = 0;
    for(int i = 0 ; i < sizeArray; i++)
    {
        if(numberIsPrime(*array))
        {
            sum = sum + *array;
            count = count++;
        }
    }
    std::cout << sum << " Сумма\t";
    std::cout << count << " Колво чисел\t";
}
int main(){
    return 0;
}
