# alurapic

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
# curso-vuejs

------------
Anotaçoes durante o curso
-----------------------
Instalaçao do projeto inicial
npm install vue-cli@4.5.14 -g
-----------------------
Verificação da versão instalada
vue --version      
-----------------------
Criar novo projeto
vue init webpack-simple alurapic
-escolha do template usado: webpack-simple
-nome do projeto: alurapic

vue-cli · Generated "alurapic".

   To get started:

     cd alurapic
     npm install
     npm run dev

-----------------------

em packge.json :
babel é um transpiler
webpack é um module bundler

-----------------------

consumindo a api localmente

navegar pela pasta da api e executa-la: 
  acessar a pasta cd.. => .\api\  =>   npm start

instalamos o vue resource na pasta do projeto alurapic
  npm install vue-resource@1.0.3 --save

E registramos no global view object do vue, alterando no main.js adicionando os seguintes codigos:
  import VueResource from 'vue-resource';
  Vue.use(VueResource);

Criançao da single page
  npm install vue-router --save
  npm vue-router --version

no main.js 
    import VueRouter from 'vue-router'
    import {routes} from './routes'
    Vue.use(VueRouter);
    -------
    const router = new VueRouter({ 
    routes,
    mode: 'history'
    })

criar o arquivo routes.js
  import Cadastro from './components/cadastro/Cadastro.vue';
  import Home from './components/home/Home.vue'

  export const routes = [
  {path: '', component: Home, titulo: 'Home'},
  {path: '/cadastro/', component: Cadastro, titulo: 'Cadastro'}
  ];

  em App.vue criar o menu
  <nav>
    <li v-for="(route, idx) in routes" :key="idx">
      <router-link :to="route.path ? route.path: '/' "> {{route.titulo}} </router-link>
    </li> 
  </nav>
  




