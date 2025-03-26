fetch("hello.wasm")
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, {}))
    .then(results => {
        let instance = results.instance;

        // Debugging: Check available exports
        console.log("Exported functions:", instance.exports);

        if (instance.exports._main) {
            instance.exports._main();
            document.getElementById("output").innerText = "WebAssembly Loaded Successfully!";
        } else {
            document.getElementById("output").innerText = "WebAssembly Loaded, but _main not found!";
        }
    })
    .catch(error => {
        document.getElementById("output").innerText = "Error loading WebAssembly!";
        console.error("Fetch Error:", error);
    });
