const vm = new Vue({
  el: '#burgers',
  data: {
    ordered: [],
    menuArray: food
  }
});

const send = new Vue({
  el: '#customerinfo',
  data:{
    result:"",
    firstname:"",
    mail:"",
    street:"",
    payment:"Credit card",
    picked:"undisclosed"
  },
  methods:{
    send: function(){
      let res = [];
      res[0] = this.firstname;
      res[1] = this.mail;
      res[2] = this.street;
      res[3] = this.payment;
      res[4] = this.picked;
      res[5] = vm.ordered.toString();
      this.result = res;
    }
  }
});
