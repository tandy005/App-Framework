<template>
  <q-btn
    outline
    rounded
    icon="close"
    label="Reset"
    class="text-negative text-capitalize q-mb-md q-ml-md font-11"
    :class="{ 'bg-white': !$q.dark.isActive, 'bg-grey-10': $q.dark.isActive }"
  />
</template>
