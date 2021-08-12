const createCharacter = () =>{

    // Retrieveing image file from user input in the form //
    let fileInput = document.getElementById("image");
    let reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.result=reader.onload;
    // reader.onload = function () {
    //     reader.result;//base64encoded string
    // };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };

    let inputs = Array.from(document.querySelectorAll("textInput"));
    inputs.push(reader.result);
    console.log(inputs);

    // inputs.forEach((input)=>{
    //     console.log(input.textContent);}
    //     );
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

};
const button_Run=document.getElementById("save");
button_Run.addEventListener("click",createCharacter);