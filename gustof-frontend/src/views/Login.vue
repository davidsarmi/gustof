<template>
  <v-flex xs12 sm8 md4 >
    <v-card class="elevation-12 transparent">
        <v-img :src="logo" class="black"/>
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="person" name="login" label="Nombre" type="text"></v-text-field>
          <v-text-field  prepend-icon="lock" name="password" label="Contraseña" id="password" type="password"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green" >Entrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
import logo from '@/assets/gustof.png'
export default {
  data: function () {
    return ({
      drawer: null,
      logo
    })
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'login-layout')
  },

  props: {
    source: String
  }

}
</script>
<style>

</style>
