import Vue from 'vue'
// import App from './App.vue'
import Home from './paginas/Home.vue' 
import VueResource from 'vue-resource'

Vue.use(VueResource)

const Contato = {
  template: '<p>Pagina de contato</p>'
}
const SemPagina = {
  template: '<p>Essa pagina não existe</p>'
}

//Criando as rotas
const rotas = {
  '/': Home,
  '/contato': Contato
}

new Vue({
  el: '#app',
  data: {
      rotaAtual: window.location.pathname
  },
  computed:{
      exibeComponente(){
          return rotas[this.rotaAtual] || SemPagina
      }
  },
  render (h){
          return h(this.exibeComponente)
      }
})
