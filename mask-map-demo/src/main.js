// 外部套件
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

// 內部檔案
import App from './App.vue';

Vue.config.productionTip = false;
// 導入的外部套件要記得使用
Vue.use(VueAxios, axios);
