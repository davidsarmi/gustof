<template>
  <div id="app">
    <v-flex xs12 sm6 d-flex>
      <v-select v-model="agregarb" :items="Producto" label="Agregar Productos"></v-select>
    </v-flex>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    Producto: ['Carne:' + ' 2']
  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>
<style scoped>
img {
  border-style: none;
  width: 120px;
  position: absolute;
  left: 612px;
}
.v-btn {
  font-size: 14px;
  font-weight: 500;
  margin: 20px 401px;
}
.d-flex {
  width: 400px;
}

.v-btn{
  margin: 25px 5px;

}

</style>
