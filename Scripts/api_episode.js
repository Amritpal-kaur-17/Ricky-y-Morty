async function getallEpisode(){
    const url = "https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10";
    const response = await fetch(url);
    const result = await response.json()
    return result;
}
export { getallEpisode };

/*async function getallEpisode(){
    const url = "https://rickandmortyapi.com/api/episode/11,12,13,14,15,16,17,18,19,20";
    const response = await fetch(url);
    const result = await response.json()
    return result;
}
export { getallEpisode };*/