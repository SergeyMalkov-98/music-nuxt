<template>
  <div v-if="sideBarItem.children" class="side-bar-item-group">
    <div class="side-bar-item-group__heading">{{ sideBarItem.heading }}</div>
    <SideBarItem
      v-for="child in sideBarItem.children"
      :sideBarItem="child"
      :key="child.id"
      @carriage-handler="handleClick"
    />
  </div>
  <nuxt-link
    v-else
    exact
    :to="sideBarItem.path"
    active-class="active-link"
    v-slot="{ href, navigate, isExactActive }"
  >
    <a :href="href" @click="navigate">
      <div
        ref="sideBarElement"
        :data-active="isExactActive"
        class="side-bar-item"
        :class="{ 'side-bar-item_active': isExactActive }"
        @click="handleClick($event.currentTarget)"
      >
        <vicon
          v-if="sideBarItem.icon"
          :icon="sideBarItem.icon"
          class="side-bar-item__icon"
        />
        <span v-if="sideBarItem.label" class="side-bar-item__label">{{
          sideBarItem.label
        }}</span>
      </div>
    </a>
  </nuxt-link>
</template>

<script lang="ts">
import { onMounted, ref, SetupContext } from "vue";

export default {
  name: "SideBarItem",
  props: {
    sideBarItem: {
      type: Object,
      default: null,
    },
  },
  setup(_props: any, { emit }: SetupContext) {
    const sideBarElement = ref<HTMLElement | null>(null);

    onMounted(() => {
      if (sideBarElement.value?.dataset.active) {
        emit("carriage-handler", sideBarElement.value);
      }
    });

    const handleClick = (currentTarget: Element) => {
      emit("carriage-handler", currentTarget);
    };

    return { sideBarElement, handleClick };
  },
};
</script>

<style lang="scss" scoped>
.side-bar-item-group {
  margin-top: 40px;
  .side-bar-item-group__heading {
    text-transform: uppercase;
    padding: 0 15px;
    margin-bottom: 15px;
    color: #fff;
  }
}

.side-bar-item {
  transition: 0.2s;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 25px;
  height: 35px;
  cursor: pointer;
  margin-bottom: 15px;
  &:hover {
  }
  .side-bar-item__icon {
    margin-right: 15px;
    font-size: 16px;
  }
  .side-bar-item__label {
    font-size: 13px;
  }
}

.side-bar-item_active {
  animation: gradient-animate forwards 0.5s cubic-bezier(0.4, 0, 1, 1);
  background: linear-gradient(
    90deg,
    rgba(231, 60, 126, 0.3215686275),
    rgba(35, 166, 213, 0.231372549),
    #2aac8569
  );
  transform: translate3d(0, 0, 0);
  background-size: 400% 400%;
}

@keyframes gradient-animate {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
