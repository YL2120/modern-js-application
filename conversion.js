import { imgto64 } from "./dataurl.js";

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
