
const template=async () =>{

  let fetchResponse = await fetch(
    "https://character-database.becode.xyz/characters");

  let responseBody = await fetchResponse.json();

  let idResult=localStorage.getItem("vOneLocalStorage"); // multiple variable
  console.log(idResult);
  
  let target=document.getElementById("target");
        
  let tpl=document.getElementById("charnew");
  console.log(tpl);
  let clone=tpl.cloneNode(true).content;

  let hero=responseBody.find(element => element.id==idResult); // object with the chosen id
  console.log(hero);

  let imageCard=clone.querySelector('.charmain__img');
  let nameCard=clone.querySelector('.charmain__title');
  let shortDescriptionCard=clone.querySelector('.charmain__bio');

 imageCard.src=`data:image/png;base64,${hero.image}`;
 console.log(imageCard.src);
  nameCard.innerHTML=hero.name;
 shortDescriptionCard.innerHTML=hero.shortDescription;
  
 target.appendChild(clone);

};

template();





