import { boot } from "quasar/wrappers";
import mitt from "mitt";
import DsiBtn from "src/components/DsiBtn.vue";


export default boot(({ app }) => {
  const emitter = mitt();
  app.provide("$emitter", emitter);

  app.component("DsiBtn", DsiBtn);

});
