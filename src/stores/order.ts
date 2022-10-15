import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    order: [{}],
    total: 0,
  }),

  getters: {},

  actions: {
    addOrder(id: number, item: string, quantity: number, price: number): void {
      // if (this.order[0] === {})
      // this.order.filter((v) => v !== {});
      if (Object.keys(this.order[0]).length === 0) this.order.splice(0, 1);
      this.order.push({ id, item, quantity, price });
    },
  },
});
