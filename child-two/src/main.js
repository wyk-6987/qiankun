import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import './public-path'


let instance = null;
function render(props = {}) {
    if (instance) return;
    const { container } = props;
    console.log(container);
    instance = createApp(App).use(router).mount(container ? container.querySelector("#app-child-two") : "#app-child-two");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
    console.log("[vue] props from main framework", props);
    render(props);
    const val = sessionStorage.getItem('childone')
    console.log(val)
}
export async function unmount() {
    //可选链操作符
    instance.$destroy?.();
    instance = null;
}
