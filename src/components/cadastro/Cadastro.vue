<template>
<div>
  <h1 class="centralizado">Cadastro</h1>
  <h2 class="centralizado">Titulo: {{foto.titulo}}</h2>

   <h2 v-if="foto._id" class="centralizado">Alterando</h2>
   <h2 v-else class="centralizado">Incluindo</h2>

  <form @submit.prevent="grava()">    <!--  .prevent cancela o evento padrao do formulario -->
    <div class="controle">
      <label for="titulo">TÍTULO</label>
      <input v-validate data-vv-rules="required" id="titulo" autocomplete="off" v-model="foto.titulo"> 

      <!-- @input='foto.titulo=$event.target.value' :value="foto.titulo" -->
      <!-- @input recebe os dado de foto.titulo atravez do $event, e os dados que sao colocados no target.value-->
      <!-- e o bind value envia para a fonte de dados para vue -->
      <!-- quando o input for disparado retemos acesso ao valor atraves do evento.target.value -->
    </div>

    <div class="controle">
      <label for="url">URL</label>
      <input id="url" autocomplete="off" v-model.lazy="foto.url">
      <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo" />

    </div>

    <div class="controle">
      <label for="descricao">DESCRIÇÃO</label>
      <textarea id="descricao" autocomplete="off" v-model="foto.descricao"></textarea>
    </div>

    <div class="centralizado">
      <meu-botao rotulo="GRAVAR" tipo="submit" />
      <router-link :to="{name : 'home'}">
        <meu-botao rotulo="VOLTAR" tipo="button" />
      </router-link>
    </div>
    </form>
</div>
</template>

<script>
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import Foto from "../../domain/foto/Foto";
import FotoService from "../../domain/foto/FotoService";

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },

  data() {
    return {
      foto: new Foto(),
      id: this.$route.params.id,
    };
  },

  methods: {
    grava() {
      // this.resource
      this.service
        // .save(this.foto)
        .cadastra(this.foto) // nome do metodo novo cadastra que esta em foto service e o antigo .save esta com chamada no metodo em fotoservice.js
        // .post('v1/fotos', this.foto) // no padrao rest usamos o metodo post para incluir novos recursos

        .then(
          () => {
            this.foto = new Foto();
            if (this.id) this.$router.push({ name: "home" });
          },
          (err) => console.log(err)
        );
    },
  },
  created() {
    this.service = new FotoService(this.$resource);
    // this.resource = this.$resource('v1/fotos');
    if (this.id) {
      this.service.busca(this.id).then((foto) => (this.foto = foto));
    }
    return;
  },
};
</script>

<style scoped>
.centralizado {
  text-align: center;
}

.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>
