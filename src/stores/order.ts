import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    order: [{}],
  }),

  getters: {},

  actions: {
    addOrder(id: number, item: string, quantity: number, price: number): void {
      this.order.push({ id, item, quantity, price });
    },
  },
});
