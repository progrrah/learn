[https://github.com/yuka-friends/Windrecorder]
## main

### Структуры данных:  
[https://roadmap.sh/datastructures-and-algorithms]
RAM-модель. Динамическое выделение памяти.  

[http://people.seas.harvard.edu/~cs125/fall14/lec6.pdf]  

Структуры данных: массив, список, стек, очередь, хеш, map.
Динамические структуры данных: однонаправленный и двунаправленный списки; деревья.
Классы: абстракция, инкапсуляция, полиморфизм, наследование.
Конструкторы и деструкторы классов, перегрузка операций, наследование.
Шаблоны.
STL: последовательные и ассоциативные контейнеры, итераторы.
Архитектура, UML.

### Алгоритмы:

[https://ru.algorithmica.org/cs/convex-hulls/graham/]
O-символика.
Сортировки массивов: квадратичные сортировки; сортировка слиянием; сортировка кучей; быстрая сортировка, bubble sorting
[https://proglib.io/p/7-sposobov-sortirovki-massivov-na-primere-s-s-illyustraciyami-2022-04-20]
"Разделяй и властвуй": пример, алгоритм умножения Карацубы.
"Динамическое программирование": пример, нахождение расстояния Левенштейна. 
[https://neerc.ifmo.ru/wiki/index.php?title=%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B0_%D0%BE_%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%BC_%D1%80%D0%B0%D1%81%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B8,_%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%92%D0%B0%D0%B3%D0%BD%D0%B5%D1%80%D0%B0-%D0%A4%D0%B8%D1%88%D0%B5%D1%80%D0%B0]
"Жадные алгоритмы": пример, код Хаффмана. 
Хеш-функции: пример, сравнение подстрок.
Растеризация: алгоритм Брезенхэма; brute force перебор, аккуратный перебор.
[https://sergeypacuk.narod.ru/glava1.html]
[http://15462.courses.cs.cmu.edu/spring2024content/lectures/04_persp/04_persp_slides.pdf]
[http://15462.courses.cs.cmu.edu/spring2024/lectures]
4 семестр:
Объект: взаимодействие, состояние, паттерн.
Окружение объекта: формализм, методы хранения.
Сетка: формализм, методы хранения.
Линейные преобразования: формализм, методы хранения, стек состояния.
Визуализация: проекция, растеризация, буферизация.
GLUT: WinAPI, OpenGl.

#### algo
#####
##### leva

```cpp
#include <algorithm>
#include <vector>

template<typename T>
typename T::size_type LevenshteinDistance(const T &source,
                                          const T &target) {
    if (source.size() > target.size()) {
        return LevenshteinDistance(target, source);
    }

    using TSizeType = typename T::size_type;
    const TSizeType min_size = source.size(), max_size = target.size();
    std::vector<TSizeType> lev_dist(min_size + 1);

    for (TSizeType i = 0; i <= min_size; ++i) {
        lev_dist[i] = i;
    }

    for (TSizeType j = 1; j <= max_size; ++j) {
        TSizeType previous_diagonal = lev_dist[0], previous_diagonal_save;
        ++lev_dist[0];

        for (TSizeType i = 1; i <= min_size; ++i) {
            previous_diagonal_save = lev_dist[i];
            if (source[i - 1] == target[j - 1]) {
                lev_dist[i] = previous_diagonal;
            } else {
                lev_dist[i] = std::min(std::min(lev_dist[i - 1], lev_dist[i]), previous_diagonal) + 1;
            }
            previous_diagonal = previous_diagonal_save;
        }
    }

    return lev_dist[min_size];
}
```

```cpp
// Может быть использован любой подходящий контейнер (напр. std::vector).
// В нашем примере использованы строки:
...
const std::string src = "125";
const std::string dst = "521";
const std::string::size_type distance = LevenshteinDistance(src, dst);
...
```

общий случай
```cpp
#include <algorithm>
#include <vector>

template<typename T>
typename T::size_type GeneralizedLevenshteinDistance(const T &source,
                                                     const T &target,
                                                     typename T::size_type insert_cost = 1,
                                                     typename T::size_type delete_cost = 1,
                                                     typename T::size_type replace_cost = 1) {
    if (source.size() > target.size()) {
        return GeneralizedLevenshteinDistance(target, source, delete_cost, insert_cost, replace_cost);
    }

    using TSizeType = typename T::size_type;
    const TSizeType min_size = source.size(), max_size = target.size();
    std::vector<TSizeType> lev_dist(min_size + 1);

    lev_dist[0] = 0;
    for (TSizeType i = 1; i <= min_size; ++i) {
        lev_dist[i] = lev_dist[i - 1] + delete_cost;
    }

    for (TSizeType j = 1; j <= max_size; ++j) {
        TSizeType previous_diagonal = lev_dist[0], previous_diagonal_save;
        lev_dist[0] += insert_cost;

        for (TSizeType i = 1; i <= min_size; ++i) {
            previous_diagonal_save = lev_dist[i];
            if (source[i - 1] == target[j - 1]) {
                lev_dist[i] = previous_diagonal;
            } else {
                lev_dist[i] = std::min(std::min(lev_dist[i - 1] + delete_cost, lev_dist[i] + insert_cost), previous_diagonal + replace_cost);
            }
            previous_diagonal = previous_diagonal_save;
        }
    }

    return lev_dist[min_size];
}
```