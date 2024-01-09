<template>
  <q-layout view="lHh lpR fFf">

    <q-header elevated class="bg-light-blue-10 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer class="bg-grey-12 shadow-2"  :width="300"  :breakpoint="500" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <div class="q-mt-sm q-ml-sm">
        <img class="" src="../assets/logo.svg">
      </div>
      <q-scroll-area class="fit">
        <left-menu class="q-mt-md" :items="menu"></left-menu>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-4">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { onMounted, ref } from 'vue'
import LeftMenu from "../components/LeftMenu.vue";

export default {
  components: {
    LeftMenu
  },
  setup () {
    const leftDrawerOpen = ref(false)
    const menu = [
      {
        menuName: 'Dashboard',
        icon: 'dashboard',
        fePath: 'dashboard',
        childs: []
      },
      {
        menuName: 'Components',
        icon: 'people',
        fePath: '',
        childs: [
          {
            menuName: 'Form Group',
            icon: '',
            fePath: 'button',
            childs: []
          },
          {
            menuName: 'Button Group',
            icon: '',
            fePath: 'users',
            childs: []
          },
          {
            menuName: 'Table',
            icon: '',
            fePath: 'users',
            childs: []
          },
          {
            menuName: 'Chip',
            icon: '',
            fePath: 'users',
            childs: []
          },
          {
            menuName: 'Color Picker',
            icon: '',
            fePath: 'users',
            childs: []
          },
        ]
      },
      {
        menuName: 'Settings',
        icon: 'settings',
        fePath: 'settings',
        childs: []
      }
    ]

    return {

      contentStyle: {
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: '#555'
      },

      contentActiveStyle: {
        backgroundColor: '#eee',
        color: 'black'
      },

      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: '0.75'
      },
      leftDrawerOpen,menu,

      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>


