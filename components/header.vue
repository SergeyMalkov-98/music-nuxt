<template>
  <header class="header">
    <div class="search-control">
      <vicon icon="search" class="search-control__search-icon" />
      <div class="search-control__input-container">
        <input class="search-control__input" placeholder="Поиск" />
        <div class="search-control_focus-border" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: "BaseHeader",
};
</script>

<style lang="scss" scoped>
header {
  .search-control {
    display: flex;
    align-items: center;
    &__search-icon {
      color: $white-color;
    }
    &__input-container {
      position: relative;
      margin-left: 15px;
      width: 100%;
      .search-control__input {
        border: none;
        outline: none;
        background: none;
        color: $white-color;
        font-size: 16px;
        padding: 9px 0;
        width: inherit;

        &::placeholder {
          color: $white-color;
          font-size: 15px;
          padding-left: 5px;
        }
        &:focus ~ .search-control_focus-border {
          animation: gradient-animate-border forwards 2s;
          width: 100%;
          transition: 0.2s ease-in-out;
        }
      }
      .search-control_focus-border {
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.72),
          rgba(35, 166, 213, 0.231372549),
          rgb(72 245 242)
        );
        transform: translate3d(0, 0, 0);
        background-size: 400% 400%;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        transition: 0.4s;
      }
    }
  }
}

@keyframes gradient-animate-border {
  0% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 100% 0%;
  }
}
</style>
