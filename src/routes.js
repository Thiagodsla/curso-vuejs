import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue'

export const routes = [
  {path: '', component: Home, titulo: 'Home'},
  {path: '/cadastro/', component: Cadastro, titulo: 'Cadastro'}
];


//path em branco equivale a escrever localhost:3000/#/