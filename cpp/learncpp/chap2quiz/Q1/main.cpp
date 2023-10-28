#include <iostream>

int readNumber() {
    
    std::cout << "Enter an integer: " << '\n';
    int input{};
    std::cin >> input;

    return input;
    
}

void writeAnswer(int ans) {

    std::cout << "sum: " << ans ;

}

int main() {

    int num2 { readNumber() };
    int num1 { readNumber() };

    writeAnswer(num1 + num2);

    return 0;

}