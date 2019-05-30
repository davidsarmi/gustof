<template>
  <v-card flat>
    <v-snackbar absolute top right color="success">
      <span>Registration successful!</span>
      <v-icon dark>check_circle</v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-subheader class="subheader black--text display-1 font-weight-bold" >Crear Perfil </v-subheader>
      <v-container grid-list-xl fluid style="border: solid #000 10px">
        <v-layout wrap>
          <v-flex xs12 sm6>
            <v-text-field v-model="nombre" color="#4A148C" label="Nombres" type="text"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field v-model="apellido" color="#4A148C" label="Apellidos" type="text"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6></v-flex>
          <v-flex xs12 sm6></v-flex>
          <v-flex xs12 sm6>
            <v-text-field v-model="cedula" color="#4A148C" label="N° de Documento" type="text"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field v-model="sexo" color="#4A148C" label="Sexo" type="text"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field v-model="email" color="#4A148C" label="Correo" type="text"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field v-model="password" type="password" label="Contraseña"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 d-flex>
            <v-select v-model="rol" :items="rol" label="Rol"></v-select>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn flat @click="resetForm">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat @click="registrar">registrar</v-btn>
      </v-card-actions>
    </v-form>
    <v-dialog v-model="terms" width="70%">
      <v-card>
        <v-card-title class="title">Terms</v-card-title>
        <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="#4A148C" @click="terms = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="conditions" width="70%">
      <v-card>
        <v-card-title class="title">Conditions</v-card-title>
        <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="#4A148C" @click="conditions = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import api from '@/plugins/service'

export default {
  data: function () {
    const defaultForm = Object.freeze({})
    return {
      form: Object.assign({}, defaultForm),
      nombre: '',
      sexo: '',
      apellido: '',
      cedula: '',
      email: '',
      password: '',
      rol: ''
    }
  },
  data: () => ({
    drawer: true,
    rol: ['administrador', 'caja', 'mesero', 'chef']
  }),

  methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit () {
      this.snackbar = true
      this.resetForm()
    },
    async registrar () {
      const res = await api.post('/user', {
        userNew: {
          nombre: this.nombre,
          sexo: this.sexo,
          apellido: this.apellido,
          cedula: this.cedula,
          email: this.email,
          contrasena: this.password,
          rol: this.rol
        }
      })
      console.log(res.data)
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  props: {
    source: String
  },

  computed: {
    formIsValid () {
      return (
        this.form.first &&
        this.form.last &&
        this.form.favoriteAnimal &&
        this.form.documento &&
        this.form.docume &&
        this.form.telefono &&
        this.form.contraseña &&
        this.form.terms
      )
    }
  }
}
</script>
