This is a Multiplayer Tic-Tac-Toe game built using C++ and compiled to WebAssembly (WASM) for web compatibility. The project leverages WebAssembly to run high-performance C++ code directly in the browser, making the game smooth and efficient.


Features

🎮 Real-time Multiplayer Support – Play with friends over a network.

🕹️ Interactive UI – Clean and user-friendly design.

🚀 WebAssembly Integration – Fast performance with C++ logic running in the browser.

🔄 Turn-based Gameplay – Ensures fair play with turn validation.

🎨 Responsive Design – Works on both desktop and mobile devices.

💾 Local Storage Support – Save and resume game progress.


Technologies Used

C++ – Game logic implementation

WebAssembly (WASM) – Browser compatibility for C++

JavaScript – WebAssembly bindings & DOM interactions

HTML & CSS – Frontend UI design


Setup Instructions


Clone the repository:

git clone https://github.com/anjalig2309/Multiplayer-Tic-Tac-Toe-Cpp-WebAssembly-.git


Navigate to the project folder:

cd Multiplayer-Tic-Tac-Toe-Cpp-WebAssembly-


Install Emscripten SDK (if not installed):

git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh


Compile the C++ code to WebAssembly:

emcc game.cpp -o game.js -s WASM=1 -s EXPORTED_FUNCTIONS='["_main"]'


Run the project in a local server:

emrun --no_browser --port 8080 .


Open the browser and go to:

http://localhost:8080


How to Play

Player 1 and Player 2 take turns to place X and O on the grid.

The first player to get three in a row (horizontal, vertical, or diagonal) wins.

If the grid is full and no player has won, it's a draw.


Contributing

Feel free to fork this repository and submit pull requests for improvements. Contributions are always welcome! 😊


License

This project is licensed under the MIT License.
