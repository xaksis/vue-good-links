// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';
import App from './App';
// import VueGoodLinks from '../dist/vue-good-links.es';
import VueGoodLinks from '../src';

Vue.use(VueGoodLinks);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
