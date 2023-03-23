<template>
  <div class="default-layout">
    <SideBar :sideBarItems="sideBarItems" />
    <nuxt />
  </div>
</template>

<script lang="ts">
import SideBar from "@/components/sideBar.vue";

export default {
  name: "DefaultLayout",
  components: {
    SideBar,
  },
  setup() {
    const sideBarItems = [
      {
        id: "1",
        label: "Главная",
        icon: "home",
        path: "/",
      },
      {
        id: "2",
        label: "Радио",
        icon: "radio",
        path: "/radio",
      },
      {
        id: "3",
        groupName: "library",
        heading: "Ваша библиотека",
        children: [
          {
            id: 5,
            label: "Недавно играли",
            path: "/recently-played",
            icon: "clock",
          },
          {
            id: 6,
            label: "Избранное",
            path: "/favorite",
            icon: "favorite",
          },
        ],
      },
    ];

    return { sideBarItems };
  },
};
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  height: 100vh;
  background: $main-background;
}
</style>
