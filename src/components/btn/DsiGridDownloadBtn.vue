<template>
  <!-- DsiTopActionBtn -->
  <q-btn
    icon="file_download"
    flat
    rounded
    class="bg-secondary text-white text-capitalize q-mr-md font-11"
  >
    <q-menu>
      <q-item dense clickable v-ripple v-close-popup @click="httpDownloadCsv">
        <q-item-section avatar>
          <q-icon color="secondary" name="format_align_justify" />
        </q-item-section>
        <q-item-section>CSV</q-item-section>
      </q-item>
      <q-item
        dense
        clickable
        v-ripple
        v-close-popup
        @click="httpDownloadJsonEntity"
      >
        <q-item-section avatar>
          <q-icon color="secondary" name="data_object" />
        </q-item-section>
        <q-item-section>Json Entity</q-item-section>
      </q-item>
      <!-- <q-item
        dense
        clickable
        v-ripple
        v-close-popup
        @click="httpDownloadRemoteXlsxAsynch"
      >
        <q-item-section avatar>
          <q-icon color="secondary" name="grid_on" />
        </q-item-section>
        <q-item-section>Xlsx</q-item-section>
        <q-tooltip>Xlsx Max 10.000 Row</q-tooltip>
      </q-item> -->
      <!-- <q-item dense clickable v-ripple v-close-popup @click="httpDownloadXlsx">
        <q-item-section avatar>
          <q-icon color="secondary" name="grid_on" />
        </q-item-section>
        <q-item-section>Xlsx</q-item-section>
        <q-tooltip>Xlsx Max 10.000 Row</q-tooltip>
      </q-item> -->
      <q-item dense clickable>
        <q-item-section avatar>
          <q-icon color="secondary" name="grid_on" />
        </q-item-section>
        <q-item-section>Xlsx Report</q-item-section>
        <q-item-section side>
          <q-icon name="keyboard_arrow_right" />
        </q-item-section>
        <q-menu anchor="top end" self="top start">
          <q-list>
            <q-item
              dense
              clickable
              v-ripple
              v-close-popup
              @click="httpDownloadRemoteXlsxAsynch"
            >
              <q-item-section avatar>
                <q-icon color="secondary" name="autorenew" />
              </q-item-section>
              <q-item-section>Asynchronous</q-item-section>
            </q-item>
            <q-item
              dense
              clickable
              v-ripple
              v-close-popup
              @click="httpDownloadRemoteXlsxSynch"
            >
              <q-item-section avatar>
                <q-icon color="secondary" name="download" />
              </q-item-section>
              <q-item-section>Synchronous</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-item>
    </q-menu>
  </q-btn>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  httpDownloadCsv: {
    type: Function,
    required: true,
  },
  httpDownloadJsonEntity: {
    type: Function,
    required: true,
  },
  httpDownloadXlsx: {
    type: Function,
    required: true,
  },
  httpDownloadRemote: {
    type: Function,
    required: true,
  },
});

const menuShow = ref(false);

const httpDownloadRemoteXlsxAsynch = () => {
  props.httpDownloadRemote({
    fileType: "xlsx",
    async: true,
  });
};

const httpDownloadRemoteXlsxSynch = () => {
  props.httpDownloadRemote({
    fileType: "xlsx",
    async: false,
  });
};
</script>
