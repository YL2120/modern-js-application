const charImage=document.querySelector(".characterCard__image");
const charName=document.querySelector(".characterCard__name");
const charShortDescription=document.querySelector(".characterCard__descriptionShort");
const charLongDescription=document.querySelector(".characterCard__descriptionLong");

const displayCharacter = async () => {
    let charID=localStorage.getItem("charID");
    console.log(charID);
    let fetchResponse= await fetch(`https://character-database.becode.xyz/characters/${charID}`);
    let responseBody = await fetchResponse.json();
    charImage.src=`data:image/png;base64,${responseBody.image}`;
    charName.innerHTML=responseBody.name;
    charShortDescription.innerHTML=responseBody.shortDescription;
    charLongDescription.innerHTML=responseBody.description;

};

displayCharacter();