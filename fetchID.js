export const fetchID=async(charID)=>{
    let fetchResponse= await fetch(`https://character-database.becode.xyz/characters/${charID}`);
    let responseBody = await fetchResponse.json();
    return responseBody;
}