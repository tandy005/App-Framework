<template>
  <DsiTopActionBtn icon="add" label="Add">
    <q-tooltip v-if="needApproval === true" anchor="top right"
      >Need Approval</q-tooltip
    >
    <!-- :offset="[10, 10]" -->
  </DsiTopActionBtn>
</template>
<script setup>
const props = defineProps({
  needApproval: {
    type: Boolean,
    required: false,
  },
});
</script>
