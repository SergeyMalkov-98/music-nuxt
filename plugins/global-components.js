import Vue from "vue";

//VIcon

import vicon from "@/components/vicon.vue";

const components = { vicon };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
