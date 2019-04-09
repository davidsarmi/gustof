<template>
<div id="app">
    <v-flex xs12 sm6 d-flex>
        <v-select
          :items="PRODUCTOS"
          label="Sacar Productos"
        ></v-select>
    </v-flex>
</div>
</template>
<script>

export default {
  el: '#app',
  data: () => ({
    drawer: true,
    PRODUCTOS: ['Pan', 'Vegetales(Lechuga,tomate)', 'Pepinillos', 'Cebolla', 'carne', 'Queso'],
    sacar: [

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
img {
    border-style: none;
    width: 120px;
    position: absolute;
    left: 612px;
}
.v-btn{
font-size:14px;
font-weight: 500;
margin:20px 401px;
}

</style>
