#include <iostream>
#include <string>
#include <string_view>

int main() {

    std::string name{ };
    int age{ };

    std::cout << "Enter your name: ";
    std::cin >> name;
    std::cout << "Enter your age: ";
    std::cin >> age;
    std::cout << "The sum of the number of letters in your name and ";
    std::cout << "your age is: " ;

    int letters { static_cast<int>(name.length()) };

    std::cout << letters + age << '\n';

    return 0;

}