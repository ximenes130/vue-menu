<template>
  <q-page class="flex flex-center q-mx-auto" style="max-width: 800px;">
    <q-list class="full-width">
      <q-slide-item v-for="item in items" :key="item.title" @left="onLeft({ item: item, ...$event })" left-color="red">
        <template v-slot:left>
          <q-icon :name="item.favorite ? 'close' : 'favorite'" />
        </template>

        <q-card
          @dblclick="favoriteItem(item)"
          class="full-width"
          square
          flat
          bordered>
          <q-card-section horizontal>
            <q-card-actions vertical class="justify-around item-description relative-position">
              <div class="text-h6">{{item.title}}</div>
              <div class="text-subtitle2">Localização: {{item.location}}</div>
              <div class="text-subtitle2">Valor: {{item.price.toLocaleString('pt-BR', {style: 'currency', currency: 'brl'})}}</div>
              <q-icon v-if="item.favorite" name="favorite" size="2em" color="red" class="absolute-bottom-right q-mb-sm" />
            </q-card-actions>

            <q-img class="col q-ma-sm rounded-borders vertical-middle" ratio="1" height="100%" :src="item.image"/>
          </q-card-section>
        </q-card>
      </q-slide-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useMenuStore } from 'src/stores/menu-store'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'MenuPage',
  setup () {
    const route = useRoute()
    const menuStore = useMenuStore()
    const items = computed(() => route.meta.favorite ? menuStore.favorites : menuStore.menuItems)

    return {
      items: items,
      menuStore
    }
  },
  methods: {
    favoriteItem (item) {
      this.menuStore.favoriteItem({ item: item })
    },
    onLeft ({ item, reset }) {
      this.favoriteItem(item)
      reset()
    }
  }
})
</script>

<style>
.item-description {
  width: 70%;
}
</style>
