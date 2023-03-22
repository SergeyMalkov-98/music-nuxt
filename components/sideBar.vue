<template>
  <div class="side-bar">
    <i class="icon-search"></i>
  </div>
</template>

<script lang="ts">
export default {
  name: "SideBar",
};
</script>

<style lang="scss" scoped>
.side-bar {
  overflow: auto;
  max-width: 300px;
  position: relative;
  background: $side-bar-background;
  height: 100vh;
}
</style>
