
// Example C++ code with errors for Clangd and ClangTidy in NeoVim

#include <iostream>
#include <string>

void greet(const std::string& name) {
    if (!name.empty()) {
        std::cout << "Hello, " + name << std::endl;
    } else {
        std::cout << "Hello, Stranger" << std::endl;
    }
}

int main() {
    greet("Alice");
    greet(123); // This will cause a type error

    int x = "Hello"; // This will cause a type error

    // Memory leak example
    int* ptr = new int(10);
    // Missing delete for ptr

    // Using an uninitialized variable
    int y;
    std::cout << y << std::endl;

    return 0;
}
