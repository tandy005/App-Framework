<template>
  <q-layout view="lHh lpR fFf">

    <q-header elevated class="bg-light-blue-10 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <!-- <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title> -->
      </q-toolbar>
    </q-header>

    <q-drawer class="bg-grey-12 inset-shadow-down  shadow-box doc-inset-shadow"  :width="300"  :breakpoint="500" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <div class="q-mt-sm q-ml-sm">
        <img class="" src="../assets/logo.svg">
      </div>

    </q-drawer>

    <q-page-container class="bg-grey-4">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>


