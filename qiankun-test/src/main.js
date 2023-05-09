import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import {registerMicroApps} from 'qiankun';

registerMicroApps([
    {
        name: 'vueChildOne',
        entry: '//localhost:6001',
        props: { age: 10 }, //给子应用传数据
        container: '#child-one-content',
        activeRule: '/child-one',
    },
    {
        name: 'vueChildTwo',
        entry: '//localhost:6002',
        props: { age: 20 }, //给子应用传数据
        container: '#child-two-content',
        activeRule: '/child-two',
    }
]);


createApp(App).use(router).mount('#app-base')

