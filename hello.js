
fetch("hello.wasm")
    .then(response => {
        console.log(response);
        return response.arrayBuffer();
    })
    .then(bytes => WebAssembly.instantiate(bytes, {}))
    .then(results => {
        let instance = results.instance;
        document.getElementById("output").innerText = "WebAssembly Loaded Successfully!";
        instance.exports._main();
    })
    .catch(error => {
        document.getElementById("output").innerText = "Error loading WebAssembly!";
        console.error("Fetch Error:", error);
    });
