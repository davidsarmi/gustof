<template>
<div id="app">

<form>
        <v-select
      v-model="Producto"
      :items="Producto"
      :error-messages="selectErrors"
      label="Agregar Producto"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-text-field
      v-model="cantidad"
      :error-messages="emailErrors"
      label="Cantidad"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-select
      v-model="Medicion"
      :items="Medicion"
      :error-messages="selectErrors"
      label="Medicion"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>

    <v-btn  @click="Cancelar">Cancelar</v-btn>
    <v-btn  @click="Aceptar">Aceptar</v-btn>
  
  </form>

</div>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    Producto: ['Carne','Papa','Etc..'],
    Medicion: ['Gramos','Libras','Kilos']

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
.v-btn{
font-size:14px;
font-weight: 500;
margin:20px 401px;
}
.d-flex{
  width: 400px;
}

.v-btn{
  margin: 25px 5px;
  
}

</style>
