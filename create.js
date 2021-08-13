function previewFile() {
  const preview = document.querySelector("img");
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string
      preview.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}

document.getElementById("save").addEventListener("click", () => {
  const reader = new FileReader();
  reader.readAsDataURL(document.querySelector('input[type="file"]').files[0]);
  reader.onload = () => storeResults(reader.result);

  // callback function
  async function storeResults(result) {
    let dataURL = result;
    console.log(dataURL); //1
    let numIndex = dataURL.indexOf("/9j");
    console.log(numIndex); //2
    let sliceData = dataURL.slice(numIndex);
    console.log(sliceData); //3 
    
    
    let inputs = Array.from(document.querySelectorAll(".textInput"));  
    let values = inputs.map(({ value }) => {
      return value.trim(); // Removes blank spaces before and after string input
    });

    if (values.some((value) => value === "")) {
      alert("Please fill in all fields");
      return;
    }

    values.push(sliceData);
    console.log(values);

    let [name, shortDescription, description, image] = values;
    //let id = null;

    console.log([name, shortDescription, description, image]); //4

    const postData = await fetch(
      "https://character-database.becode.xyz/characters",
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
          
        },
        body: JSON.stringify({
          name,
          shortDescription,
          description,
          image,
        }),
      }
    );
    console.log(postData);
    console.log(postData.json());
  }
});
