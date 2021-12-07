<template>
<div>
  <h1 class="centralizado" v-text="tituloPrincipal"></h1>
  <!-- <h1>{{tituloPrincipal}}</h1> -->
  <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
  <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre por parte do titulo" />
  {{ filtro }}
  <ul class="lista-fotos">
    <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.naoseioqescrever">
      <meu-painel :titulo="foto.titulo">
        
        <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform:scale.animate.reverse='1.1' />
        <!-- <img class="imagem-responsiva" v-bind:src="aquiUmNomeQualquer.url" v-bind:alt="aquiUmNomeQualquer.titulo" /> -->
        <router-link :to="{name: 'altera', params:{id: foto._id}}"><meu-botao tipo="button" rotulo="ALTERAR"/></router-link>
        <meu-botao tipo="button" rotulo="REMOVER" @botaoAtivado="remove(foto)" estilo='perigo' :confirmacao="true" />
      </meu-painel>
    </li>
  </ul>
</div>
</template>

<script>
import Painel from "../shared/painel/painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import transform from "../../directives/Transform.js";
import FotoService from "../../domain/foto/FotoService";

export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },
  directives: {
    'meu-transform': transform
  },
  data() {
    return {
      tituloPrincipal: 'Alurapic',
      fotos: [],
      filtro: '',
      mensagem: '',
    };
  },
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        // let exp = new RegExp(this.filtro.trim(), "i");
        // return this.fotosArray.filter((foto) => exp.test(foto.titulo));

        return this.fotos.filter((foto) => foto.titulo.includes(this.filtro.trim().toLowerCase()));
      } else {
        return this.fotos;
      }
    },
  },

  methods: {
    remove(foto) {
      this.service.apaga(foto._id)
      .then(() => {
        let indice = this.fotos.indexOf(foto); // acha a posição da foto na lista
        this.fotos.splice(indice, 1); // a instrução altera o array
        this.mensagem = 'Foto removida com sucesso'
      },err => {
        this.mensagem = err.message
      })
    }
  },

  created() {  
    this.service = new FotoService (this.$resource);
    
    this.service
    .lista()
    .then(fotos => this.fotos = fotos, err => this.mensagem = err.message)
  }
}
</script>

<style>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
