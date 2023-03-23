import Vue from "vue";

//VIcon

import vicon from "@/components/vicon.vue";
import vheading from "@/components/vheading.vue";

const components = { vicon, vheading };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
