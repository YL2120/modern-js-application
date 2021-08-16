//**************************//
//**** INDEX.HTML PAGE *****//
//**************************//

// General approach: try to declare constants and functions in the same order of the HTML elements that they refer to.

const TARGET = document.getElementById("target");
const TEMPLATE = document.getElementById("tpl-char");

// Defining an async function to get a character by its ID and to display the character in the template element of the index.html page
const diplayCreatedChar = async (CHARACTER_ID) => {
  try{
  let response = await fetch(`https://character-database.becode.xyz/characters/${CHARACTER_ID}`);
  if(!response.ok) {
    throw new Error ("This ID doesn't exist");
  }
  let character = await response.json();

  let clone = TEMPLATE.cloneNode(true).content;

  clone.querySelector(".charmain__img").src = character.image;
  clone.querySelector(".charmain__title").innerHTML = character.name;
  clone.querySelector(".charmain__bio").innerHTML = character.shortDescription;
  TARGET.appendChild(clone);

  }catch (error){
    console.error(error);
  }
};


//**************************//
//**** CREATE.HTML PAGE ****//
//**************************//

// General approach: try to declare constants and functions in the same order of the HTML elements that they refer to.

const PREVIEW = document.getElementById("preview"); 
const FILE_INPUT = document.getElementById("file");
const IMAGE_DATA = document.getElementById("image");
const READER = new FileReader();
const SAVE_BUTTON = document.getElementById("save");
const DELETE_BUTTON = document.getElementById("delete");
let CHARACTER_ID="";

// Creating a function that receives a file object and returns a Promise which resolves with the dataURL (contained in the 'PREVIEW.result' property).
const fileToDataURL = (file) => {
  return new Promise((resolve,reject)=>{
    READER.readAsDataURL(file);
    READER.onload = () => {
      resolve(READER.result);
    };
    READER.onerror = () => {
      reject("Problem reading the file");
    };
  });
};

// Defining an asynchronous function to receive a file object (from 'FILEINPUT' element),
// and to display it in the 'PREVIEW' element (<img> element in the HTML page)
const previewFile = async () => {
  let file = FILE_INPUT.files[0];
  try {
  let dataURL = await fileToDataURL(file); 
  PREVIEW.src=dataURL;
  IMAGE_DATA.value=dataURL;
  }catch(error) {
    alert(error);
  }
};

// LISTENING TO EVERY CHANGE OF FILE INPUT AND GENERATING A PREVIEW OF THE FILE
FILE_INPUT.addEventListener("change", previewFile);

// Defining a function to extract <data> segment of the data URL
const extractDataSegment = () => {
  let dataURL = IMAGE_DATA.value;
  let numIndex = dataURL.indexOf("/9j");
  let dataSegment = dataURL.slice(numIndex);
  return dataSegment;
};

// Defining a function to validate the values entered in the form
const validateForm = () => {
  let dataSeg = extractDataSegment();
  IMAGE_DATA.value = dataSeg;
  let values = Array.from(document.querySelectorAll(".textInput"));
  if (values.some(({ value }) => value === "")) {
    alert("Please fill in all fields and upload an image");
    return;
    };
  let trimmedValues = values.map(({ value }) => {
    return value.trim(); // Removes blank spaces before and after string input
  });
  return trimmedValues;
};

// Defining an asynchronous function to post the validated form
const postForm = async () => {
  let [image, name, shortDescription, description] = validateForm();

  let fetchResponse = await fetch(
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
  let responseBody = await fetchResponse.json();
  CHARACTER_ID = responseBody.id;
  
  alert("Character has been created ! You will be redirected to the main page.");
  setTimeout(
    ()=> {window.location.replace("index.html")},
    1000);
  diplayCreatedChar(CHARACTER_ID);
  
  };


// LISTENING TO CLICK ON SAVE BUTTON AND POSTING THE FORM
SAVE_BUTTON.addEventListener("click", postForm);