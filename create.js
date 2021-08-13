function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
};

document.getElementById("save").addEventListener("click", () => {
    const reader = new FileReader();
    reader.readAsDataURL(document.querySelector('input[type="file"]').files[0]);
    reader.onload = () => storeResults(reader.result);

    // callback function
    async function storeResults(result) {
    let dataURL = result;
    let inputs = Array.from(document.querySelectorAll(".textInput"));
    inputs.push(dataURL);
    let values = inputs.map(({ value }) => {
    return value.trim(); // Removes blank spaces before and after string input
    });

    if (values.some((value) => value === "")) {
    alert("Please fill in all fields");
    return;
    };

    let [name, shortDescription, description, image] = values;
    // let id = null;

    const postData = await fetch("https://character-database.becode.xyz/characters", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, shortDescription, description, image }),
        });
        console.log(postData);
        console.log(postData.json());
    };

})
