<template>
  <v-flex xs12 sm8 md4 >
    <v-card class="elevation-12 transparent">
        <v-img :src="logo" class="black"/>
      <v-toolbar dark color="black">
        <v-toolbar-title text-center></v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="person" name="login" label="Nombre" type="text" v-model="nombre"></v-text-field>
          <v-text-field  prepend-icon="lock" name="password" label="Contraseña" id="password" type="password" v-model="password"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green" @click="registro">Entrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
import api from '@/plugins/service'
import logo from '@/assets/gustof.png'
export default {
  data: function () {
    return ({
      nombre: '',
      password:'',
      drawer: null,
      logo
    })
  },
  methods: {
    async registro() {
      const res = await api.post('/user',{
        userNew: {
          nombre: this.nombre,
          sexo: "f",
          apellido: "quiroga",
          cedula: "12344534",
          email: "dcds",
          contrasena: this.password
        }
      })
      console.log(res.data)
    }
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
