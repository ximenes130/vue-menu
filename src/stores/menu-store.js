import { defineStore } from 'pinia';
import menuItems from 'src/data/MenuItems';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menuItems: menuItems,
  }),
  getters: {
    favorites: (state) => state.menuItems.filter(item => item.favorite),
  },
  actions: {
    favoriteItem({ state, item }) {
      item.favorite = !item.favorite;
    }
  },
});
