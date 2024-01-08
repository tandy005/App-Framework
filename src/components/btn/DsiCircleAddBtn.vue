<template>
  <q-btn outline class="q-mt-sm" round color="positive" size="sm" icon="add">
    <slot name="tooltio">
      <q-tooltip v-if="tooltip">{{ tooltip }}</q-tooltip>
    </slot>
  </q-btn>
</template>
<script setup>
const props = defineProps({
  tooltip: {
    type: String,
    required: false,
  },
});
</script>
