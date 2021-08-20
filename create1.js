// import "./regenerator-runtime/runtime.js";

import { postForm } from "./post.js";
const PREVIEW = document.getElementById("preview__src");
// const IMAGE_DATA = document.getElementById("image");
const FILE_INPUT = document.getElementById("file");

/* PREVIEW */

// PREVIEW FUNCTION

function previewFile() {
  // const preview = document.querySelector("img");
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string
      PREVIEW.src = reader.result;
      console.log(reader.result);
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}

// PREVIEW ACTION
FILE_INPUT.addEventListener("change", previewFile);

async () => {
  await postForm();
};

// /* DATA URL */

// const fileToDataURL = (file) => {
//   return new Promise((resolve, reject) => {
//     let reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       resolve(reader.result);
//     };
//     reader.onerror = () => {
//       reject("Problem reading the file");
//     };
//   });
// };

// callback function
// const imgto64 = async () => {
//   let file = FILE_INPUT.files[0];
//   console.log(file);
//   let dataURL = await fileToDataURL(file);
//   console.log(dataURL); //1
//   let numIndex = dataURL.indexOf("/9j");
//   console.log(numIndex); //2
//   let sliceData = dataURL.slice(numIndex);
//   console.log(sliceData); //3
//   return sliceData;
// };

// const Conversion = async () => {
//   if(IMAGE_DATA.value==null || PREVIEW.src!=`data:image/png;base64,${IMAGE_DATA.value}`){
//   IMAGE_DATA.value = await imgto64();
// }
//   let inputs = Array.from(document.querySelectorAll(".textInput"));
//   let values = inputs.map(({ value }) => {
//     return value.trim(); // Removes blank spaces before and after string input
//   });

//   if (values.some((value) => value === "")) {
//     alert("Please fill in all fields");
//     return;
//   }

//   return values;
// };

// values.push(sliceData);
// console.log(values);

//let id = null;

// console.log([image, name,shortDescription, description]); //4

// const postForm=async () => {
//   let [image, name, shortDescription, description] = await Conversion();

//   const postData = await fetch(
//     "https://character-database.becode.xyz/characters",
//     {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         shortDescription,
//         description,
//         image,
//       }),
//     }
//   );
//   console.log(postData);
//   console.log(postData.json());

//   alert(
//     "Character has been created ! You will be redirected to the main page."
//   );
//   setTimeout(() => {
//     window.location.replace("index.html");
//   }, 1000);
// }

const el = document.getElementById("saveCh");
if (el) {
  el.addEventListener("click", postForm);
}
// document.getElementById("saveCh").addEventListener("click",);
