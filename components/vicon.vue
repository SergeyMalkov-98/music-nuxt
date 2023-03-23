<template>
  <i :class="`icon-${icon}`" v-bind="$attrs" @click="clickHandler" />
</template>

<script lang="ts">
import { SetupContext } from "vue";

export default {
  name: "VIcon",
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
  setup(_props: any, { emit }: SetupContext) {
    const clickHandler = () => emit("click");

    return { clickHandler };
  },
};
</script>

<style lang="scss" scoped></style>
