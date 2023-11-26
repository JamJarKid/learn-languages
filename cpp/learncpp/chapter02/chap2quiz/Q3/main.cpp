#include "io.h"

int main() {

    int num2 { readNumber() };
    int num1 { readNumber() };

    writeAnswer(num1 + num2);

    return 0;

}