function menuItem(name, kCal, descriptions, imgPath){
  this.name = name;
  this.kCal = kCal;
  this.imgPath = imgPath;
  this.descriptions = descriptions;
  this.string = function() {
    return '<p>' + this.name + '</p>'
  };
}

let burg1 = new menuItem("The CheeseBurger", "200 kCal", "(Contains lactose)", "img/cheeseburger.jpg");
let burg2 = new menuItem("The Open Cheeseburger", "150 kCal", "Stays open", "img/openBurg.jpg");
let burg3 = new menuItem("The Upside Down Cheeseburger", "345 kCal", "Void Engineered Bun (Gluten free)", "img/upsideDown.jpg");
let burg4 = new menuItem("The big boy", "1000 kCal", "Pure meat", "todo");
let burg5 = new menuItem("The SMALL boy", "1 kCal", "No meat", "todo");

const vm = new Vue({
  el: '#burgers',
  data: {
    burgers: burg1.string() + burg2.string() + burg3.string() + burg4.string() + burg5.string()
  }
});
