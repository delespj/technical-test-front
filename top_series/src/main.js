import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Partie1 from './components/ranking_1-to-5.vue'
import Partie2 from './components/ranking_6-to-10.vue'
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes : [{
		path: '/',
		component: Partie1
	}, {
		path: '*',
		redirect:'/' 
	}, {
		path: '/2',
		component: Partie2
	}]
});

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
