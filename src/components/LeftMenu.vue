<template>
    <div class="jk-list-menu">
      <q-list class="menu" v-for="i in itemsData" :key="i">
        <div v-if="i.childs.length > 0">
            <q-expansion-item expand-separator  :icon="i.icon" :label="i.menuName">
               <q-item  class="box-listmenu" v-for="x in i.childs" :key="x" :to="x.fePath" >
                  <q-item-section>
                    <q-item-label class="jk-submenu">{{ x.menuName }}</q-item-label>
                  </q-item-section>
               </q-item>
            </q-expansion-item>
          </div>
          <div v-else>
            <q-item clickable tag="a" :to="i.fePath" dense class="menusingle">
              <q-item-section  avatar>
                <q-icon :name="i.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="">{{i.menuName}}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
      </q-list>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { defineComponent, ref, computed, watchEffect, onMounted } from "vue";
// import { useAuthStore } from "src/stores/auth.store";

export default {
  name: "DsiTreeMenu",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const itemsData = ref(props.items);
    const router = useRouter();



    const isActive = (route) => {
      return router.currentRoute.value.path.substring(1) === route;
    };


    const isSecondLevelChild = (item) => {
      const route = router.currentRoute.value.path.substring(1);
      let isMatch = false;

      for (const child of item.childs) {
        if (route === child.fePath) {
          isMatch = child.parentMenuCode === item.menuCode;
          break;
        }
      }

      return isMatch;
    };

    const isGroupActive = (route) => {
      let cRoute = router.currentRoute.value.path.substring(1);
      let firstIndex = cRoute.indexOf("/");
      let secondIndex = cRoute.indexOf("/", firstIndex + 1);
      let currentRoute = cRoute.substring(0, secondIndex);

      if (route === currentRoute) {
        return true;
      } else {
        return false;
      }
    };

    const isParentActive = (route) => {
      let cRoute = router.currentRoute.value.path.substring(1);
      let firstIndex = cRoute.indexOf("/");
      let secondIndex = cRoute.indexOf("/", firstIndex + 1);
      let currentRoute = cRoute.substring(0, secondIndex);

      // const searchRecursive = (arr, searchString) => {
      //   for (let i = 0; i < arr.length; i++) {
      //     const item = arr[i];
      //     if (item.fePath === searchString) {
      //       return item;
      //     }
      //     if (item.childs) {
      //       const result = searchRecursive(item.childs, searchString);
      //       if (result) {
      //         return result;
      //       }
      //     }
      //   }
      //   return null;
      // };
      // const searchResult = searchRecursive(itemsData.value, currentRoute);

      if (route === currentRoute) {
        return true;
      } else {
        return false;
      }
    };

    const onItemClick = (item) => {
      if (item.childs.length == 0) {
        router.push({
          path: `/${item.fePath}`,
        });
      }
    };

    const childPadding = (level) => {
      if (level == 0) {
        return `0px`;
      } else if (level == 1) {
        return `40px`;
      } else if (level >= 2) {
        return `20px`;
      }
    };


    const isExpanded = (item) => {
      let str = router.currentRoute.value.path.substring(1);
      let parts = str.split("/");
      let currentRouteParent = parts.slice(0, -2).join("/");
      let currentRouteChild = parts.slice(0, -1).join("/");

      if (currentRouteChild === item.fePath) {
        return true;
      }

      if (item.fePath === currentRouteParent) {
        return true;
      }
    };

    return {
      isActive,
      onItemClick,
      childPadding,
      isSecondLevelChild,
      isParentActive,
      isGroupActive,
      isExpanded,
      itemsData,
    };
  },
};
</script>
