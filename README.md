This project is a Multiplayer Tic-Tac-Toe game built using C++ and compiled to WebAssembly (WASM) via Emscripten. It enables users to play Tic-Tac-Toe in a web browser, leveraging C++ for game logic and authentication. 
The project showcases the potential of WebAssembly in running high-performance C++ applications on the web.

✨ Features:
✔️ Multiplayer Mode – Play Tic-Tac-Toe with friends
✔️ User Authentication – Secure login system
✔️ C++ & WebAssembly – Fast and efficient execution
✔️ Web-Based Interface – Simple, interactive UI using HTML, CSS, and JS
✔️ Runs in Browser – No need for extra installations

🛠 Technologies Used:
🔹 C++
🔹 WebAssembly (WASM)
🔹 Emscripten
🔹 HTML, CSS, JavaScript

🔧 How to Set Up & Run the Project
Follow these steps to set up and run the Multiplayer Tic-Tac-Toe (C++ & WebAssembly) project on your local machine.

1️⃣ Clone the Repository
First, download the project by cloning the GitHub repository:

git clone https://github.com/yourusername/Multiplayer-TicTacToe.git
cd Multiplayer-TicTacToe

2️⃣ Install Emscripten
If you haven’t installed Emscripten yet, follow the official installation guide: Emscripten Setup

After installation, activate Emscripten:

For Linux/macOS, run:
source /path-to-emsdk/emsdk_env.sh

For Windows, run:
/path-to-emsdk/emsdk_env.bat

3️⃣ Compile the C++ Code to WebAssembly
Run the following command to compile your C++ files into WebAssembly:
emcc auth.cpp -o auth.wasm -s EXPORTED_FUNCTIONS="['_main', '_validateUser']" -s MODULARIZE=1 -s EXPORT_ES6=0 --bind

4️⃣ Run the Project
Now, open index.html in your browser to test the WebAssembly module.

