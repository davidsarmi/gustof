<template>
<div id="app">
        <p> Todos los productos de bodega </p>
    <v-flex xs12 sm6 d-flex>
      <v-select
          :items="Productos"
          label="Productos"
     ></v-select>
    </v-flex>
</div>
</template>
<script>
export default {

  data: () => ({
    drawer: true,
    Productos: ['Carne: ' + '2']

  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  props: {
    source: String
  }
}
</script>
<style scoped>
img{
    border-style: none;
    width: 120px;
    left: 612px;
}
p{

  font-size: 29px;
  font-weight: 100px;
}
.v-input__control {
  height: 0;
}
.container {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    margin: auto;
    width: 100%;
}
.d-flex{
  width: 400px;
}

</style>
