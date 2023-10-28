#include <iostream>

int readNumber();

void writeAnswer(int ans);

int main() {

    int num2 { readNumber() };
    int num1 { readNumber() };

    writeAnswer(num1 + num2);

    return 0;

}