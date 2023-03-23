<template>
  <div class="heading">
    <h1>{{ text }}</h1>
    <div class="heading__icons">
      <slot name="icons" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "VHeading",
  props: {
    text: {
      type: String,
      default: "Заголовок",
    },
  },
};
</script>

<style lang="scss" scoped>
.heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: $white-color;
    font-size: 50px;
    letter-spacing: 0.06em;
  }
  &__icons {
    i {
      color: $white-color;
      font-size: 20px;
      cursor: pointer;
      padding: 3px;
      border-radius: 50px;
      transition: 0.2s;
      margin-left: 10px;

      &:hover {
        box-shadow: 0px 2px 10px 4px black;
        background: #444444;
      }
    }
  }
}
</style>
