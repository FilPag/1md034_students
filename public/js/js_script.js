
let btn = document.getElementById('send');

btn.addEventListener("click", btnPress);

function btnPress(){

  let values = [];
  values[0] = document.getElementById("firstname").value;
  values[1] = document.getElementById("mail").value;
  values[2] = document.getElementById("street").value;
  values[3] = document.getElementById("num").value;
  values[4] = document.getElementById("payment").value;

  let radios = document.getElementsByName("gen");

  for(var i = 0; i < radios.length; ++i){
    if(radios[i].checked){
      values[5] = radios[i].id;
    }
  }
  console.log(values);

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
