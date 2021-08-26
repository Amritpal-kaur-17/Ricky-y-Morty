const title = document.getElementById("header");
title.textContent = "Ricky y Morty API";
console.log(title.textContent);

function init() {
  import { getallEpisode } from "./api_episode.js";
  let episodes = await getallEpisode()
  console.log(episodes)
  for(let i=0; i<episodes.length; i++){
    const Section = document.getElementsById("episdoeSection");
    const list = document.createElement("ul");
    Section.appendChild(list);
    const listItem = document.createElement("li");
    const Itemlink = document.createElement("a");
    Itemlink.href = episodes[i].url
    console.log(Itemlink.href);
    listItem.appendChild(Itemlink);
    list.appendChild(listItem);
  }

/*  const paginationButton = document.createElement("button")
autoBackBtn.textContent = "Load Episodes"
autoBackBtn.addEventListener("click", load)

function load() {
  
}*/
}
init();



