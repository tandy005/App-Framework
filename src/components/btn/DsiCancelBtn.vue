<template>
  <q-btn
    rounded
    outline
    icon="west"
    label="Cancel"
    class="text-secondary text-capitalize q-ml-md font-11"
    :class="{ 'bg-white': !$q.dark.isActive, 'bg-grey-10': $q.dark.isActive }"
  />
</template>
