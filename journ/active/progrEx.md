[https://github.com/yuka-friends/Windrecorder]
## main

### Структуры данных:  
[https://roadmap.sh/datastructures-and-algorithms]
RAM-модель. Динамическое выделение памяти.  

[http://people.seas.harvard.edu/~cs125/fall14/lec6.pdf]  

Структуры данных: массив, список, стек, очередь, хеш, map.  
[https://ru.algorithmica.org/cs/basic-structures/heap/] - hard to understand  
Динамические структуры данных: однонаправленный и двунаправленный списки; деревья.  
Классы: абстракция, инкапсуляция, полиморфизм, наследование.  
Конструкторы и деструкторы классов, перегрузка операций, наследование.  
Шаблоны.  
STL: последовательные и ассоциативные контейнеры, итераторы.  
Архитектура, UML.  

### Алгоритмы:

[https://ru.algorithmica.org/cs/convex-hulls/graham/]
O-символика.  
Сортировки массивов: квадратичные сортировки; сортировка слиянием; сортировка кучей; быстрая сортировкa.     
[https://proglib.io/p/7-sposobov-sortirovki-massivov-na-primere-s-s-illyustraciyami-2022-04-20]
[https://www.geeksforgeeks.org/sorting-algorithms/#basics-of-sorting-algorithms]  
"Разделяй и властвуй": пример, алгоритм умножения Карацубы. 
[] 
"Динамическое программирование": пример, нахождение расстояния Левенштейна.   
[https://neerc.ifmo.ru/wiki/index.php?title=%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B0_%D0%BE_%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%BC_%D1%80%D0%B0%D1%81%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B8,_%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%92%D0%B0%D0%B3%D0%BD%D0%B5%D1%80%D0%B0-%D0%A4%D0%B8%D1%88%D0%B5%D1%80%D0%B0]  
"Жадные алгоритмы": пример, код Хаффмана.   
[https://neerc.ifmo.ru/wiki/index.php?title=%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%A5%D0%B0%D1%84%D1%84%D0%BC%D0%B0%D0%BD%D0%B0]  
Хеш-функции: пример, сравнение подстрок.
[https://ru.algorithmica.org/cs/hashing/polynomial/]  
Растеризация: алгоритм Брезенхэма; brute force перебор, аккуратный перебор.  
[http://15462.courses.cs.cmu.edu/spring2024content/lectures/04_persp/04_persp_slides.pdf]  
[https://www.javatpoint.com/computer-graphics-bresenhams-line-algorithm]
[https://sergeypacuk.narod.ru/glava1.html]  
[http://15462.courses.cs.cmu.edu/spring2024/lectures] 
![alt text](<../media_files/image copy 12.png>) 
![alt text](<../media_files/image copy 11.png>)  
4 семестр:
Объект: взаимодействие, состояние, паттерн.
Окружение объекта: формализм, методы хранения.
Сетка: формализм, методы хранения.
Линейные преобразования: формализм, методы хранения, стек состояния.
Визуализация: проекция, растеризация, буферизация.
GLUT: WinAPI, OpenGl.
#### algo
##### quicksort
```cpp
#include <bits/stdc++.h>
using namespace std;

int partition(int arr[],int low,int high)
{
  //choose the pivot
  
  int pivot=arr[high];
  //Index of smaller element and Indicate
  //the right position of pivot found so far
  int i=(low-1);
  
  for(int j=low;j<=high-1;j++)
  {
    //If current element is smaller than the pivot
    if(arr[j]<pivot)
    {
      //Increment index of smaller element
      i++;
      swap(arr[i],arr[j]);
    }
  }
  swap(arr[i+1],arr[high]);
  return (i+1);
}

// The Quicksort function Implement
           
void quickSort(int arr[],int low,int high)
{
  // when low is less than high
  if(low<high)
  {
    // pi is the partition return index of pivot
    
    int pi=partition(arr,low,high);
    
    //Recursion Call
    //smaller element than pivot goes left and
    //higher element goes right
    quickSort(arr,low,pi-1);
    quickSort(arr,pi+1,high);
  }
}
             
 
int main() {
  int arr[]={10,7,8,9,1,5};
  int n=sizeof(arr)/sizeof(arr[0]);
  // Function call
  quickSort(arr,0,n-1);
  //Print the sorted array
  cout<<"Sorted Array\n";
  for(int i=0;i<n;i++)
  {
    cout<<arr[i]<<" ";
  }
  return 0;
}
// This Code is Contributed By Diwakar Jha

```
##### hash-function
```cpp
#include <cmath> // для функции pow
#include <iostream>
#include <string>
unsigned long long get_hash (std::string s, unsigned int k) { // функция для получения хеша
    unsigned long long sum = 0; // сумма изначально равна 0

    /*
        чтобы определить порядковый номер буквы в алфавите используем небольшую
       фишку типа char так как char представляется как int, то можно вычесть из
       буквы 'a' и получить порядковый номер в английском алфавите вот так:
       (symbol - 'a' + 1)
        + 1 для того чтобы первая буква была под номером 1
    */

    for (unsigned int i = 0; i < s.size (); ++i) // создадим счетчик i
        sum += (s[i] - 'a' + 1) *
        std::pow (k, i); // по формуле прибавляем произведение порядкового номера буквы на степень k

    return sum;
}
unsigned long long
moduled_hash (std::string s, unsigned int k, unsigned long long module = __UINT64_MAX__) {
    /*
        Для больших строк хеш может быть очень большим, ведь мы используем степени k

        У этой проблемы есть решение - брать хеш по модулю большого числа (традиционно берут простое число 10e9 + 7)

        sum % mod = (a1 + a2 + a3 + ... + an) % mod = (((a1 % mod) + (a2 % mod)) % mod + (a3 % mod)) % mod + ...

        ^ свойста модульной арифметики
    */

    unsigned long long sum = 0;
    unsigned long long power_now = 1; // переменная для накопления степени числа
    for (unsigned int i = 0; i < s.size (); ++i) {
        sum = (sum + ((s[i] - 'a' + 1) * power_now) % module) % module; // 30-я строка момент
        power_now = (power_now * k) % module; // переменная со степенью k по модулю
    }
    return sum;
}
int main () {                 // проверка
    std::string s = "abcdef"; // создадим строку
    std::string s2 = "abcdefh"; // вторую стрку чуть от нее отличающуюся

    unsigned int k = 33; // создадим k больше чем размер английского алфавита


    std::cout << get_hash (s, k) << std::endl; // выведем два хеша от наших строк
    std::cout << get_hash (s2, k) << std::endl;

    std::cout << moduled_hash (s, k, 10e9 + 7) << std::endl; // возьмем два хеша по модулю
    std::cout << moduled_hash (s2, k, 10e9 + 7) << std::endl;


    /*
        Первый должен совпасть со вторым, потому что хеш не нестолько большой, чтобы модуль его порезал
        А вот второй уже будет обрезан, потому что он очевидно больше чем (10e9 + 7)
    */
    return 0;
}
```
##### haffman
Алгоритм построения бинарного кода Хаффмана

Построение кода Хаффмана сводится к построению соответствующего бинарного дерева по следующему алгоритму:

    - Составим список кодируемых символов, при этом будем рассматривать один символ как дерево, состоящее из одного - элемента c весом, равным частоте появления символа в строке.
    - Из списка выберем два узла с наименьшим весом.
    - Сформируем новый узел с весом, равным сумме весов выбранных узлов, и присоединим к нему два выбранных узла в качестве детей.
    - Добавим к списку только что сформированный узел вместо двух объединенных узлов.
    - Если в списке больше одного узла, то повторим пункты со второго по пятый.
##### leva
![alt text](<../media_files/image copy 13.png>)
###### leva. psevdo
```
int levensteinInstruction(String s1, String s2, int InsertCost, int DeleteCost, int ReplaceCost):
  D[0][0] = 0
  for j = 1 to N
    D[0][j] = D[0][j - 1] + InsertCost                  
  for i = 1 to M
    D[i][0] = D[i - 1][0] + DeleteCost                  
    for j = 1 to N
      if S1[i] != S2[j] 
         D[i][j] = min(D[i - 1][j] + DeleteCost,        
                       D[i][j - 1] + InsertCost,                      
                       D[i - 1][j - 1] + ReplaceCost)                 
      else 
         D[i][j] = D[i - 1][j - 1]
  return D[M][N]
  ```
#### tuple using
```cpp
typedef tuple<double, double, double> point;

point rotate(point p) {
    return {p[1], p[2], p[0]};
}
point points[100];

for (auto [x, y, z] : points)
    cout << x << y << z << endl;
```
##### karatsuba
[https://ru.algorithmica.org/cs/algebra/karatsuba/]

```cpp
void karatsuba(int *a, int *b, int *c, int n) {
    if (n <= 64) {
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                c[i + j] += a[i] * b[j];
    } else {
        int k = n / 2;
        int l[k], r[k], t[n] = {0};
        for (int i = 0; i < k; i++) {
            l[i] = a[i] + a[k + i];
            r[i] = b[i] + b[k + i];
        }
        karatsuba(l, r, t, k); // считает t
        karatsuba(a, b, c, k); // считает p1
        karatsuba(a + k, b + k, c + n, k); // считает p2
        int *t1 = t, *t2 = t + k;
        int *s1 = c, *s2 = c + k, *s3 = c + 2 * k, *s4 = c + 3 * k;
        for (int i = 0; i < k; i++) {
            int c1 = s2[i] + t1[i] - s1[i] - s3[i];
            int c2 = s3[i] + t2[i] - s2[i] - s4[i];
            c[k + i] = c1;
            c[n + i] = c2;
        }
    }
}
```