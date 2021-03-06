import Vue from 'vue';
import App from './App.vue';
import './style/index.css';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
