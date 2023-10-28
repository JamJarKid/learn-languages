#include <iostream>

int main() {

    int firstnum{ };
    int secondnum{ };

    std::cout << "Enter your first number: ";
    std::cin >> firstnum;

    std::cout << "Enter your second number: ";
    std::cin >> secondnum;

    std::cout << firstnum << " + " << secondnum << " is: " << firstnum + secondnum << '\n';
    std::cout << firstnum << " - " << secondnum << " is: " << firstnum - secondnum << '\n';

    return 0;
}