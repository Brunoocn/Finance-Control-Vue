import Vue from 'vue'
import App from './App.vue'
import './styles/styles.css'
import VueLocalForage from 'vue-localforage'
import transactionForm from './components/transactionForm.vue'
import transactionList from './components/transactionList.vue'
import transacationBalance from './components/transactionBalance.vue'

Vue.use(VueLocalForage)

Vue.config.productionTip = false

Vue.component('transaction-form',transactionForm)
Vue.component('transaction-list',transactionList)
Vue.component('transaction-balance',transacationBalance)

new Vue({
  render: h => h(App),
}).$mount('#app')
