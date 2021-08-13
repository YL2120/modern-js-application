// Retrieving image File from user's input in the form
// const inputFile = document.querySelector('input[type=file]');

const imgtodata=()=>{
const reader = new FileReader();
reader.readAsDataURL(document.querySelector('input[type="file"]').files[0]);
reader.onload = () => storeResults(reader.result);

// callback function
function storeResults(result) {
  let dataURL = result;
  console.log(dataURL);

}





}








/*var dataURL="test";
console.log(dataURL);

function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
      dataURL=reader.result;
      console.log(dataURL);
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
};*/

// const inputs = Array.from(document.querySelectorAll("input"));
// console.log(inputs);

// // Create a Promise to convert 'File' to 'string Base64'
// const toBase64 = (file) =>{
//     const reader = new FileReader();
//     return new Promise ((resolve,reject) => {
//         reader.onerror = () => {
//             reader.abort();
//             reject(new DOMException("Problem parsing input file."))
//         };
//         reader.onload = () => {
//             resolve(reader.result);
//         };
//         reader.readAsDataURL(file);
//     });
// };

// toBase64().then((result)=>console.log(result))

// const imageToDataURL = async () =>{
//     const inputFile = document.querySelector('input[type=file]').files[0];
//     // Asynchronous function awaits for the Promise to resolve and return the proper data URL
//     dataURL= await toBase64(inputFile);
// };
// console.log(dataURL);

//     let values = inputs.map(({ value }) => {
//       return value.trim();
//     });

//     if (values.some((value) => value === "")) {
//       alert("Please fill in all fields");
//       return;
//     }

//     let [name, alterEgo, abilities] = values;
//     let id = null;

//     abilities = abilities.split(" ");

//     console.log(
//       `Our new hero is ${name} aka. ${alterEgo} - with the powers of ${abilities.join(
//         ", "
//       )}`
//     );
//     const postData = await fetch("https://character-database.becode.xyz/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({name, shortDescription, image, description }),
//       });
const button_Run=document.getElementById("save");
button_Run.addEventListener("click",imgtodata);