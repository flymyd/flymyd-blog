import { defineStore } from 'pinia'

export const useStore = defineStore('default', {
  state: () => ({
    counter: 0
  }),
  getters: {},
  actions: {
    increase(num: number) {
      this.counter += num;
    }
  },
})
