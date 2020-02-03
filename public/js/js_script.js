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

menuArray[0] = new menuItem("The CheeseBurger", "200 kCal", "Contains the finest cheese (Contains lactose)", "img/cheeseburger.jpg");
menuArray[1] = new menuItem("The Open Cheeseburger", "150 kCal", "Stays open", "img/openBurg.jpg");
menuArray[2] = new menuItem("The Upside Down Cheeseburger", "345 kCal", "Void Engineered Bun (Gluten free)", "img/upsideDown.jpg");
menuArray[3] = new menuItem("The big boy", "1000 kCal", "Pure meat", "todo");
menuArray[4] = new menuItem("The SMALL boy", "1 kCal", "", "todo");

let burgerMenu = document.getElementById("menu");

for (let i = 0; i < menuArray.length; ++i){
  let burger= document.createElement("div");
  let burgerName = document.createTextNode(menuArray[i].name);
  let info = document.createElement("ul");

  let kCal = document.createElement("li");
  kCal.appendChild(menuArray[i].kCal);

  let otherInfo = document.createElement("li");
  otherInfo.appendChild(menuArray[i].otherInfo);

  info.appendChild(kCal);
  burger.appendChild(burgerName);
  burger.appendChild(ul)
  burgerMenu.appendChild(burger);
}
