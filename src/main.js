// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes'
import store from 'state/store';

Vue.use(VueRouter)

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes
})

router.afterEach((to, from) => {
  store.commit('router/ROUTE_CHANGED', to);
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
