import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes.js';
import './directives/Transform';
import VeeValidate from 'vee-validate';


Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);
Vue.use(VeeValidate);


// const router = new VueRouter({
//     routes: routes;
// })

const router = new VueRouter({ 
    routes,
    mode: 'history'
    // o cli prepara o ambiente, quando digitar mode history, é possivel navegar sem o # 
 })

new Vue({
    el: '#app',
    // router: router, tendo o mesmo nome declara somente 1 para ficar mais enxuto
    router,
    render: h => h(App)
})