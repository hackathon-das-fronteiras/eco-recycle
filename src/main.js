// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.use(Vuetify)


const messages = {
  pt: {
    catadores: {
      telefone: 'Telefone',
      rua: 'Rua',
      materiais: 'Materiais',
      simbolo_moeda: "R$",
      tenho: "Tenho",
      quilo: "Quilo",
      rua: "Rua",
      vidro: 'Vidro',
      aluminio: 'Alumínio',
      distancia: 'distância'
    },
    recicladoras: {
      materiais: 'Preciso desses materiais',
      compra: '',
      necessita: 'Preciso'
    }
  },
  es: {
    catadores: {
      telefone: 'Teléfono',
      rua: 'Calle',
      materiais: 'Materiales',
      simbolo_moeda: "Bs",
      tenho: "Tengo",
      quilo: "Kilo",
      rua: "Calle",
      vidro: 'Vidrio',
      aluminio: 'Aluminio',
      distancia: 'distancia'
    },
    recicladoras: {
      materiais: 'Necesito de los siguientes materiales',
      necessita: 'Necesito'
    }
  }
}

const i18n = new VueI18n({
  locale: 'es', // set locale
  messages, // set locale messages
})




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
