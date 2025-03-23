#include <emscripten/bind.h>
#include <string>

using namespace emscripten;

std::string storedUsername = "player";
std::string storedPassword = "1234";

bool validateUser(std::string username, std::string password) {
    return (username == storedUsername && password == storedPassword);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("validateUser", &validateUser);
}

#include <iostream>

extern "C" {
    void _main() {
        std::cout << "Hello from WebAssembly!" << std::endl;
    }
}
