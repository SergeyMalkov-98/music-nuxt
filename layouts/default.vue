<template>
  <div class="default-layout">
    <SideBar />
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
};
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  height: 100vh;
  background: $main-background;
}
</style>
