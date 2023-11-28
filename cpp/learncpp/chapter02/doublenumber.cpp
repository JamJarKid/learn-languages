#include <iostream>

int doubleNumber(int num) {
    return 2*num;
}

int main() {
    std::cout << "Enter a number:";
    int num{};
    std::cin >> num;
    std::cout << "Double that number is:" << doubleNumber(num);

    return 0;
}
