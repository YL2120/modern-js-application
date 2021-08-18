const PREVIEW = document.getElementById("preview__src"); 
const FILE_INPUT = document.getElementById("file");
const IMAGE_DATA = document.getElementById("image");


function previewFile() {
  const preview = document.querySelector("img");
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string
      PREVIEW.src= reader.result;
      console.log(reader.result);
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}


// Preview
FILE_INPUT.addEventListener("change", previewFile);

document.getElementById("save").addEventListener("click", () => {
 
      
const reader = new FileReader();
reader.readAsDataURL(document.querySelector('input[type="file"]').files[0]);
reader.onload = () => storeResults(reader.result);
  
  
  // callback function
async function storeResults(result) {
        let imgto64=()=>{
        let dataURL = result;
        console.log(dataURL); //1
        let numIndex = dataURL.indexOf("/9j");
        console.log(numIndex); //2
        let sliceData = dataURL.slice(numIndex);
        console.log(sliceData); //3
        return sliceData;
    }


    IMAGE_DATA.value = imgto64();

   

    const Conversion=()=>{

        let inputs = Array.from(document.querySelectorAll(".textInput"));
        let values = inputs.map(({ value }) => {
          return value.trim(); // Removes blank spaces before and after string input
        });
    
    
        if (values.some((value) => value === "")) {
          alert("Please fill in all fields");
          return;
        }
    
         return values;
    }


    // values.push(sliceData);
    // console.log(values);

    let [image, name,shortDescription, description] = Conversion();
    //let id = null;

    // console.log([image, name,shortDescription, description]); //4
   

        const postData = await fetch(
            "https://character-database.becode.xyz/characters",
            {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
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

    
        alert("Character has been created ! You will be redirected to the main page.");
        setTimeout(
          ()=> {window.location.replace("index.html")},
          1000);
    
    

   
 
});
