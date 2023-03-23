<template>
  <div class="side-bar">
    <div class="side-bar__logo">
      <img src="@/static/logoWithText.svg" />
    </div>
    <div class="side-bar__items">
      <div class="side-bar__carriage" ref="carriageElem" />
      <SideBarItem
        v-for="item in sideBarItems"
        :sideBarItem="item"
        :key="item.id"
        @carriage-handler="carriageHandler"
      />
    </div>
  </div>
</template>

<script lang="ts">
import SideBarItem from "@/components/sideBarItem.vue";
import { ref } from "vue";

export default {
  name: "SideBar",
  components: {
    SideBarItem,
  },
  props: {
    sideBarItems: {
      type: Array,
      default: null,
    },
  },
  setup() {
    const carriageElem = ref<HTMLElement | null>(null);

    const carriageHandler = (currentTarget: Element) => {
      const { top } = currentTarget.getBoundingClientRect();
      if (carriageElem.value) carriageElem.value.style.top = `${top}px`;
    };

    return { carriageElem, carriageHandler };
  },
};
</script>

<style lang="scss" scoped>
.side-bar {
  overflow: auto;
  max-width: 300px;
  position: relative;
  background: $side-bar-background;
  height: 100vh;
  .side-bar__logo {
    padding: 25px;
    display: flex;
    align-items: center;
  }
  .side-bar__items {
    margin-top: 30px;
    .side-bar__carriage {
      width: 1.5px;
      height: 35px;
      background: $green-color;
      position: absolute;
      left: 0;
      transition: 0.7s;
      z-index: 1;
    }
  }
}
</style>
