<template>
  <div>
    <h1 v-text="titulo"></h1>
    <!-- <h1>{{titulo}}</h1> -->

    <ul>
      <li v-for="x of fotos">
        <img :src="x.url" :alt="x.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      fotos: [
        {
          url: "https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_900x506.jpg.webp",
          titulo: "cachorro",
        },
        {
          url: "https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_900x506.jpg.webp",
          titulo: "cachorrao",
        },
      ],
    };
  },
};
</script>

<style>
</style>
