import { boot } from "quasar/wrappers";

// Btn
import DsiBtn from "src/components/btn/DsiBtn.vue";
import DsiTopActionBtn from "src/components/btn/DsiTopActionBtn.vue";
import DsiDownloadBtn from "src/components/btn/DsiDownloadBtn.vue";
import DsiGridDownloadBtn from "src/components/btn/DsiGridDownloadBtn.vue";
import DsiRefreshBtn from "src/components/btn/DsiRefreshBtn.vue";
import DsiRefreshBeanBtn from "src/components/btn/DsiRefreshBeanBtn.vue";
import DsiAddBtn from "src/components/btn/DsiAddBtn.vue";
import DsiCancelBtn from "src/components/btn/DsiCancelBtn.vue";
import DsiCloseBtn from "src/components/btn/DsiCloseBtn.vue";
import DsiDeleteBtn from "src/components/btn/DsiDeleteBtn.vue";
import DsiResetBtn from "src/components/btn/DsiResetBtn.vue";
import DsiSubmitBtn from "src/components/btn/DsiSubmitBtn.vue";
import DsiUploadBtn from "src/components/btn/DsiUploadBtn.vue";

import DsiCheckBtn from "src/components/btn/DsiCheckBtn.vue";
import DsiApproveBtn from "src/components/btn/DsiApproveBtn.vue";
import DsiRejectBtn from "src/components/btn/DsiRejectBtn.vue";

import DsiSearchBtn from "src/components/btn/DsiSearchBtn.vue";
import DsiTableActionBtn from "src/components/btn/DsiTableActionBtn.vue";
import DsiCircleAddBtn from "src/components/btn/DsiCircleAddBtn.vue";
import DsiCircleRemoveBtn from "src/components/btn/DsiCircleRemoveBtn.vue";
import DsiTogleExpandedBtn from "src/components/btn/DsiTogleExpandedBtn.vue";


export default boot(({ app }) => {
  app.component("DsiBtn", DsiBtn);
  app.component("DsiTopActionBtn", DsiTopActionBtn);
  app.component("DsiDownloadBtn", DsiDownloadBtn);
  app.component("DsiGridDownloadBtn", DsiGridDownloadBtn);
  app.component("DsiRefreshBtn", DsiRefreshBtn);
  app.component("DsiRefreshBeanBtn", DsiRefreshBeanBtn);
  app.component("DsiAddBtn", DsiAddBtn);
  app.component("DsiCancelBtn", DsiCancelBtn);
  app.component("DsiCloseBtn", DsiCloseBtn);
  app.component("DsiDeleteBtn", DsiDeleteBtn);
  app.component("DsiResetBtn", DsiResetBtn);
  app.component("DsiSubmitBtn", DsiSubmitBtn);
  app.component("DsiUploadBtn", DsiUploadBtn);

  app.component("DsiCheckBtn", DsiCheckBtn);
  app.component("DsiApproveBtn", DsiApproveBtn);
  app.component("DsiRejectBtn", DsiRejectBtn);

  app.component("DsiSearchBtn", DsiSearchBtn);
  app.component("DsiTableActionBtn", DsiTableActionBtn);
  app.component("DsiCircleAddBtn", DsiCircleAddBtn);
  app.component("DsiCircleRemoveBtn", DsiCircleRemoveBtn);
  app.component("DsiTogleExpandedBtn", DsiTogleExpandedBtn);
});
