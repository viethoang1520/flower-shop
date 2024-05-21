import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    cart_list: []
  }),
  actions: {
    add(item) {
      for (let i = 0; i < this.cart_list.length; i++) {
        if (this.cart_list[i].item.id == item.id) {
          this.cart_list[i].quantity++;
          return;
        }
      }
      this.cart_list.push({ "item": item, "quantity": 1 });
    },
    inscreaseItemQuantity(id) {
      for (let i = 0; i < this.cart_list.length; i++) {
        if (this.cart_list[i].item.id == id) {
          this.cart_list[i].quantity++;
          return;
        }
      }
    },
    descreaseItemQuantity(id) {
      for (let i = 0; i < this.cart_list.length; i++) {
        if (this.cart_list[i].item.id == id) {
          this.cart_list[i].quantity--;
          if (this.cart_list[i].quantity == 0) {
            this.cart_list.splice(i, 1);
          }
          return;
        }
      }
    },
    totalPay() {
      let total = 0;
      for (let i = 0; i < this.cart_list.length; i++) {
        // fix item.price from 200.000 ₫ to 200000
        const p = parseInt(this.cart_list[i].item.price.replace(/\D/g, ''));
        total += p * this.cart_list[i].quantity;
      }
      // format total to 200.000 ₫
      return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
    }
  }
});