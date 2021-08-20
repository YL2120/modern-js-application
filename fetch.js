export const fetchR = async () => {
  let fetchResponse = await fetch(
    "https://character-database.becode.xyz/characters"
  );
  let responseBody = await fetchResponse.json();
  return responseBody;
};
