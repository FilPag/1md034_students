function menuItem(name, kCal, otherInfo, imgPath){
  this.name = name;
  this.kCal = kCal;
  this.imgPath = imgPath;
  this.otherInfo= otherInfo;
  this.string = function() {
    return this.name + '\n kCal: ' + this.kCal
  };
}

let menuArray = {}

menuArray[0] = new menuItem("The CheeseBurger", "200 kCal", " Contains the finest cheese (Contains lactose)", "img/cheeseburger.png");
menuArray[1] = new menuItem("The Open Cheeseburger", "150 kCal", "Stays open", "img/openBurg.jpg");
menuArray[2] = new menuItem("The Upside Down Cheeseburger", "345 kCal", "Void Engineered Bun (Gluten free)", "img/upsideDown.jpg");
menuArray[3] = new menuItem("The big boy", "1000 kCal", "Pure meat", "img/huge.jpeg");
menuArray[4] = new menuItem("The SMALL boy", "1 kCal", "", "img/mini.jpeg");

const vm = new Vue({
  el: '#burgers',
  data: {
    menuArray: menuArray
  }
});
