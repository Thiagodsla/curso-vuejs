<template>
<div>
  <h1 class="centralizado" v-text="tituloPrincipal"></h1>
  <!-- <h1>{{tituloPrincipal}}</h1> -->
  <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre por parte do titulo" />
  {{ filtro }}
  <ul class="lista-fotos">
    <li class="lista-fotos-item" v-for="(aquiUmNomeQualquer, idx) of fotosComFiltro" :key="idx">
      <meu-painel :titulo="aquiUmNomeQualquer.titulo">
        <imagem-responsiva :url="aquiUmNomeQualquer.url" :titulo="aquiUmNomeQualquer.titulo"/>
        <!-- <img class="imagem-responsiva" v-bind:src="aquiUmNomeQualquer.url" v-bind:alt="aquiUmNomeQualquer.titulo" /> -->
      </meu-painel>
    </li>
  </ul>
</div>
</template>

<script>
import Painel from "../shared/painel/painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue"
export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva
  },
  data() {
    return {
      tituloPrincipal: "Alurapic",
      fotosArray: [],
      filtro: "",
    };
  },
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        // let exp = new RegExp(this.filtro.trim(), "i");
        // return this.fotosArray.filter((foto) => exp.test(foto.titulo));
        return this.fotosArray.filter((foto) => foto.titulo.includes(this.filtro.trim().toLowerCase()));
      } else {
        return this.fotosArray;
      }
    },
  },
  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(function (qualquerNome) {
        this.fotosArray = qualquerNome;
      });
  },
};
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
