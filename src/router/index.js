import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Catadores from '@/components/Catador/Catadores'
import Recicladoras from '@/components/Recicladoras/Recicladoras'
import Cadastrar from '@/components/Cadastro/Cadastrar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/catadores',
      name: 'Catadores',
      component: Catadores
    },
    {
      path: '/recicladoras',
      name: 'Recicladoras',
      component: Recicladoras
    },
    {
      path: '/cadastrar',
      name: 'Cadastrar',
      component: Cadastrar
    }
  ]
})
