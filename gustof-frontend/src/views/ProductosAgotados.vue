<template>
<div id="app">

        <v-flex xs12 sm6 d-flex>
        <v-select
          :items="Productosa"
          label="Productos agotados"
        ></v-select>
      </v-flex>
</div>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    Productosa: ['Carne']

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
