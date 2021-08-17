
const template=async () =>{

  let fetchResponse = await fetch(
    "https://character-database.becode.xyz/characters");

  let responseBody = await fetchResponse.json();
  

  
  let target=document.getElementById("target");
 
        
  let tpl=document.getElementById("charnew");
  console.log(tpl);
  
 
  

    responseBody.forEach(element => {
      console.log(element.id);
      let clone=tpl.cloneNode(true).content;
      let imageCard=clone.querySelector('.charmain__img');
      let nameCard=clone.querySelector('.charmain__title');
      let shortDescriptionCard=clone.querySelector('.charmain__bio');
      let singleCharButton=clone.querySelector(".charmain__bio--button");
      singleCharButton.addEventListener("click", async ()=>{
        singleCharacterResponse=await fetch(`https://character-database.becode.xyz/characters/${element.id}`);
      });
    
     imageCard.src=`data:image/png;base64,${element.image}`;
     console.log(imageCard.src);
      nameCard.innerHTML=element.name;
     shortDescriptionCard.innerHTML=element.shortDescription;
      
     target.appendChild(clone);
    
    });


};

template();





