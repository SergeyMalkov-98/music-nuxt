<template>
  <div class="default-layout">
    <SideBar :sideBarItems="sideBarItems" />
    <div class="layout-container">
      <BaseHeader />
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from "@/components/sideBar.vue";
import BaseHeader from "@/components/header.vue";

export default {
  name: "DefaultLayout",
  components: {
    SideBar,
    BaseHeader,
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
        id: "22",
        label: "Настройки",
        icon: "setting",
        path: "/settings",
      },
      {
        id: "223452",
        label: "Аккаунт",
        icon: "user",
        path: "/account",
      },
      {
        id: "3",
        groupName: "library",
        heading: "Ваша библиотека",
        children: [
          {
            id: "5",
            label: "Недавно играли",
            path: "/recently-played",
            icon: "clock",
          },
          {
            id: "6",
            label: "Избранное",
            path: "/favorite",
            icon: "favorite",
          },
          {
            id: "65",
            label: "Плейлисты",
            path: "/playlists",
            icon: "playlist",
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
  display: flex;
  .layout-container {
    padding: 25px 50px;
    width: 100%;
    overflow: hidden;
  }
}
</style>
