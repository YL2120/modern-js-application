/* DATA URL */

export const fileToDataURL = (file) => {
  return new Promise((resolve, reject) => {
    //const FILE_INPUT = document.getElementById("file");
    //let file = FILE_INPUT.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = () => {
      reject("Problem reading the file");
    };
  });
};

// callback function
export const imgto64 = async () => {
  const FILE_INPUT = document.getElementById("file");
  let file = FILE_INPUT.files[0];
  console.log(file);
  let dataURL = await fileToDataURL(file);
  console.log(dataURL); //1
  let numIndex = dataURL.indexOf("/9j");
  console.log(numIndex); //2
  let sliceData = dataURL.slice(numIndex);
  console.log(sliceData); //3
  return sliceData;
};

export const Conversion = async () => {
  const IMAGE_DATA = document.getElementById("image");
  const PREVIEW = document.getElementById("preview__src");
  if (
    IMAGE_DATA.value == null ||
    PREVIEW.src != `data:image/png;base64,${IMAGE_DATA.value}`
  ) {
    IMAGE_DATA.value = await imgto64();
  }
  let inputs = Array.from(document.querySelectorAll(".textInput"));
  let values = inputs.map(({ value }) => {
    return value.trim(); // Removes blank spaces before and after string input
  });

  if (values.some((value) => value === "")) {
    alert("Please fill in all fields");
    return;
  }

  return values;
};
