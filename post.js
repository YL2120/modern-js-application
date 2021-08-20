import { Conversion } from "./dataurl.js";

export const postForm = async () => {
  let [image, name, shortDescription, description] = await Conversion();

  const postData = await fetch(
    "https://character-database.becode.xyz/characters",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
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

  alert(
    "Character has been created ! You will be redirected to the main page."
  );
  setTimeout(() => {
    window.location.replace("index.html");
  }, 1000);
};
