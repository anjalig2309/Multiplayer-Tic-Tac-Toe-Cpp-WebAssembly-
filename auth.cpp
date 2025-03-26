#include <emscripten/bind.h>
#include <string>
#include <unordered_map>

using namespace emscripten;

// User database with two players
std::unordered_map<std::string, std::string> users = {
    {"player1", "password1"},
    {"player2", "password2"}
};

bool validateUser(std::string username, std::string password) {
    auto it = users.find(username);
    if (it != users.end() && it->second == password) {
        return true;
    }
    return false;
}

EMSCRIPTEN_BINDINGS(auth_module) {
    function("validateUser", &validateUser);
}
