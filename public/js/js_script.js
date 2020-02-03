function menuItem(name, kCal, otherInfo, imgPath){
  this.name = name;
  this.kCal = kCal;
  this.imgPath = imgPath;
  this.otherInfo= otherInfo;
  this.string = function() {
    return this.name
  };
}

var menuArray = [];

menuArray[0] = new menuItem("The CheeseBurger", "200 kCal", "Contains the finest cheese (Contains lactose)", "img/cheeseburger.png");
menuArray[1] = new menuItem("The Open Cheeseburger", "150 kCal", "Stays open", "img/openBurg.jpg");
menuArray[2] = new menuItem("The Upside Down Cheeseburger", "345 kCal", "Void Engineered Bun (Gluten free)", "img/upsideDown.jpg");
menuArray[3] = new menuItem("The big boy", "1000 kCal", "Pure meat", "img/huge.jpeg");
menuArray[4] = new menuItem("The SMALL boy", "1 kCal", "", "img/mini.jpeg");

let burgerMenu = document.getElementById("menu");

for (let i = 0; i < menuArray.length; ++i){
  let div = document.createElement("div");
  let burgerName = document.createTextNode(menuArray[i].name);
  let img = document.createElement("img");
  img.src = menuArray[i].imgPath;
  img.className = "burgimg";

  let ul = document.createElement("ul");

  let kCalElem = document.createElement('li');
  kCalElem.appendChild(document.createTextNode(menuArray[i].kCal));

  let otherInfo = document.createElement('li');
  otherInfo.appendChild(document.createTextNode(menuArray[i].otherInfo));

  ul.appendChild(kCalElem);
    
  if(menuArray[i].otherInfo != ""){
    ul.appendChild(otherInfo);
  }

  div.appendChild(burgerName);
  div.appendChild(img);
  div.appendChild(ul);
  burgerMenu.appendChild(div);
}
