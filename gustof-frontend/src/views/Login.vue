<template>
  <v-flex xs12 sm8 md4>
    <v-card class="elevation-12 transparent">
      <v-img :src="logo" class="black"/>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="person"
            name="login"
            label="Cedula"
            type="text"
            v-model="cedula"
          ></v-text-field>
          <v-text-field
            prepend-icon="lock"
            name="password"
            label="Contraseña"
            id="password"
            type="password"
            v-model="contrasena"
          ></v-text-field>
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
import CajaFacturaVue from './CajaFactura.vue'
import Swal from 'sweetalert2'
export default {
  data: function () {
    return {
      cedula: '',
      contrasena: '',
      drawer: null,
      logo
    }
  },
  methods: {
    async registro () {
      try {
        const res = await api.post('/user/singin', {
          cedula: this.cedula,
          contrasena: this.contrasena
        })
        if (!res.data.login) {
          Swal.fire('Usuario Incorrecto!', 'intentalo de nuevo!', 'error')
          return
        }
        this.$store.commit('SET_USER', res.data.user)
        if (res.data.user.rol === 'chef') {
          this.$router.push('chef')
        } else if (res.data.user.rol == 'mesero') {
          this.$router.push('mesaslogin')
        } else if (res.data.user.rol == 'caja') {
          this.$router.push('CajaFactura')
        } else {
          this.$router.push('administrador')
        }
      } catch (error) {
        console.error(error)
      }
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
