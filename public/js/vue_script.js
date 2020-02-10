'use strict';
const socket = io();

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
    order: null,
    lastID: 0,
    result:"",
    firstname:"",
    mail:"",
    payment:"Credit card",
    picked:"undisclosed"
  },
  methods:{
    getNext: function() {
      this.lastID += 1;
      return this.lastID;
    },
    displayOrder: function(event) {
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };

      let ord = {
        details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
        }
      };
      this.order = ord;
    },

    addOrder: function(event) {
        if(this.order == null)
          return;

        let toBeSent = this.order;
        toBeSent.orderId = this.getNext(),
        toBeSent.orderItems = vm.ordered;
        socket.emit('addOrder', toBeSent);
        this.order = null
    },
    send: function(){
      let res = [];
      res[0] = this.firstname;
      res[1] = this.mail;
      res[2] = this.street;
      res[3] = this.payment;
      res[4] = this.picked;
      res[5] = vm.ordered;
      this.result = res;
      this.addOrder();
    }
  }
});
