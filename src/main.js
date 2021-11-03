import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import './assets/style.css'
import TrendChart from "vue-trend-chart";
import  Axios  from 'axios'


Vue.use(Axios);
Vue.use(TrendChart);
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
