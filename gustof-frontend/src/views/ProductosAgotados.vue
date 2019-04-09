<template>
<div id="app">

        <v-flex xs12 sm6 d-flex>
        <v-select
          :items="Productos"
          label="Productos agotados"

        ></v-select>
      </v-flex>
   
</div>
</template>
<script>
export default {
  el: '#app',
  data: () => ({
    drawer: true,
    Productos: ['Salchicha', 'Jamon', 'Queso', 'Carne plancha', 'Pollo desmechado', 'Mazorca', 'Tocineta'],
    bodeguis: [

      {
        text: 'PRODUCTOS',
        icon: 'store',
        to: '/bodega_productos'
      },
      {
        text: 'AGREGAR',
        to: '/Agregar'
      },
      {
        text: 'SACAR',
        to: '/Sacar'
      },
      {
        text: 'SALIR',
        to: '/'
      }
    ]

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
.d-flex{
  width: 400px;
}
</style>
