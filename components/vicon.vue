<template>
  <i :class="`icon-${icon}`" v-bind="$attrs" />
</template>

<script lang="ts">
export default {
  name: "VIcon",
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
