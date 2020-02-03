
let btn = document.getElementById('send');

btn.addEventListener("click", btnPress);

function btnPress(){

  console.log("Button Pressed");

}


let burgerMenu = document.getElementById("menu");

for (let i = 0; i < food.length; ++i){
  let div = document.createElement("div");
  let burgerName = document.createTextNode(food[i].name);
  let img = document.createElement("img");
  img.src = food[i].imgPath;
  img.className = "burgimg";

  let ul = document.createElement("ul");

  let kCalElem = document.createElement('li');
  kCalElem.appendChild(document.createTextNode(food[i].kCal));

  let otherInfo = document.createElement('li');
  otherInfo.appendChild(document.createTextNode(food[i].otherInfo));

  ul.appendChild(kCalElem);

  if(food[i].otherInfo != ""){
    ul.appendChild(otherInfo);
  }

  div.appendChild(burgerName);
  div.appendChild(img);
  div.appendChild(ul);
  burgerMenu.appendChild(div);
}
