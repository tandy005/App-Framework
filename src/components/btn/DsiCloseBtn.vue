<template>
  <q-btn
    outline
    rounded
    icon="west"
    label="Close"
    class="text-secondary text-capitalize q-ml-md font-11"
    :class="{ 'bg-white': !$q.dark.isActive, 'bg-grey-10': $q.dark.isActive }"
  />
</template>
