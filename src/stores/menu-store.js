import { defineStore } from 'pinia';
import menuItems from 'src/data/MenuItems';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menuItems: JSON.parse(localStorage.getItem('menuItems')) || menuItems,
  }),
  getters: {
    favorites: (state) => state.menuItems.filter(item => item.favorite),
  },
  actions: {
    favoriteItem({ item }) {
      item.favorite = !item.favorite
      localStorage.setItem('menuItems', JSON.stringify(this.menuItems))
    }
  },
});
