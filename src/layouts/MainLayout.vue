<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <q-toolbar>
        <q-toolbar-title>
          FESTA <b>JULINA</b>
        </q-toolbar-title>

        <q-tabs align="center" class="gt-sm" inline-label>
          <q-route-tab v-for="link in links" :key="link.name" :to="link.to" :name="link.name" :icon="link.icon" :label="link.label" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="lt-md" reveal elevated>
      <q-toolbar>
        <q-tabs align="center" class="full-width">
          <q-route-tab v-for="link in links" :key="link.name" :to="link.to" :name="link.name" :icon="link.icon" :label="link.label" />
        </q-tabs>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

const linksList = [
  {
    label: 'cardapio',
    name: 'cardapio',
    icon: 'book',
    to: '/menu'
  },
  {
    label: 'favoritos',
    name: 'favoritos',
    icon: 'favorite',
    to: '/menu/favoritos'
  },
  {
    label: 'pagamento',
    name: 'pagamento',
    icon: 'payment',
    to: '#!'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      links: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
