<template>
  <div>
    <h1 v-text="titulo"></h1>
    <!-- <h1>{{titulo}}</h1> -->

    <ul>
      <li v-for="x of fotosArray">
        <img v-bind:src="x.url" v-bind:alt="x.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      fotosArray: [],
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then((res) => res.json())
      .then(
        (qualquerNome) => (this.fotosArray = qualquerNome),
        (err) => console.log(err)
      );
  },
};
</script>

<style>
</style>
