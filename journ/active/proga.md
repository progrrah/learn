
bool numberIsPrime(double n){ 
	for(double i=2; i<= sqrt(n); i++)
		if(n%i == 0)
			return false;
	return true;
}
void func1(double* array, int sizeArray)
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

void func2(double intputNumber, double* array, int sizeArray)
{
for(int i = 0; i < sizeArray; i++)
{
    if(*array == intputNumber )
    std::cout << i << "\t";
}
}

// число должно делиться на три и ищем максимальные элемент в массиве, который удовлет. такое условие
void func3(double* array, int sizeArray)
{
    double tempNumber = 0;
    for(int i = 0; i < sizeArray; i++)
{
    if(*array % 3 == 0 )
    
}
}