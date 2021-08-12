const inputs = Array.from(document.querySelectorAll("input"));
console.log(inputs);

const imageToDataURL = async () =>{

    // Retrieving image File from user input in the form
    let fileList = document.getElementById("image");
    let file=fileList.files[0];

    // Create a Promise to convert 'File' to 'string Base64'
    const toBase64 = (file) =>{
        reader = new FileReader();
        return new Promise ((resolve,reject) => {
            reader.onerror = () => {
                reader.abort();
                reject(new DOMException("Problem parsing input file."))
            };
            reader.onload = () => {
                resolve(reader.result);
                console.log(reader.result);
            };
            reader.readAsDataURL(file);
        });
    };

    // Asynchronous function awaits for the Promise to resolve and return the proper data URL
    const dataURL= await toBase64(file);
    return dataURL;
};
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
button_Run.addEventListener("click",imageToDataURL);