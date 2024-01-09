<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
<style>
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: transparent;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #c1c1c1;
}
@media screen and (min-width: 1360px) and (max-width: 1768px) {
  v-app {
    max-width: 100px;
    max-height: 60px;
  }
}</style>
