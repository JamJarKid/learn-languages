#include "io.h"
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