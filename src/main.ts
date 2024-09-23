import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTailwind from "vue-tailwind"
// @ts-expect-error
// a lib v-money não possui tipagem
import VMoney from "v-money"
import Toast from "vue-toastification";
import { createPinia, PiniaVuePlugin } from 'pinia';
import "@/assets/index.css"
import "vue-toastification/dist/index.css";

const pinia = createPinia();
Vue.use(VMoney, {
  decimal: ',',
  thousands: '.',
  prefix: 'R$ ',
  suffix: '',
  precision: 2,
  masked: false
});
Vue.use(PiniaVuePlugin);

Vue.use(VueTailwind)
Vue.use(Toast)

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount('#app')