import { createApp } from 'vue'
import App from './App.vue'
import i18n from './config/i18n/i18n'
import axios from './config/axios/axios'
import router from './config/router/router.js'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(Antd);
app.mount('#app')
app.config.globalProperties.$http = axios


// 命名	说明	加载
// .env	全局默认，任何环境都加载合并	
// .env.development	开发环境下的配置文件	npm run serve
// .env.production	生产环境下的配置文件	npm run build
// 只有以 VUE_APP_ 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中，
// NODE_ENV 和 BASE_URL 是两个特殊变量，在代码中始终可用

