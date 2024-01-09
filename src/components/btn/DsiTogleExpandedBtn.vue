<template>
  <q-btn
    flat
    dense
    size="md"
    :icon="expanded ? 'arrow_drop_down' : 'arrow_right'"
    class="q-ma-none q-pa-none"
    @click="toggleExpanded"
    color="grey"
  />
  <template v-if="!expanded && nonExpandedLabel">
    {{ nonExpandedLabel }}
  </template>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: false,
    default: () => false,
  },
  nonExpandedLabel: {
    type: String,
    required: false,
    default: () => "{ ... }",
  },
});

const emit = defineEmits(["update:modelValue"]);

const emitModelValue = () => {
  emit("update:modelValue", expanded.value);
};

const expanded = ref(props.modelValue);

const toggleExpanded = () => {
  expanded.value = !expanded.value;
  emitModelValue();
};
</script>
