<template>
  <v-app>
    <v-card flat>
      <v-snackbar
        v-model="snackbar"
        absolute
        top
        right
        color="success"
      >
        <span>Registration successful!</span>
        <v-icon dark>check_circle</v-icon>
      </v-snackbar>
      <v-form ref="form" @submit.prevent="submit">
        <v-container grid-list-xl fluid style="border: solid red 10px">
          <v-layout wrap>
            <v-flex xs12 sm4>
              <v-text-field
                v-model="form.first"
                :rules="rules.name"
                color="purple darken-2"
                label="Nombres"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                v-model="form.last"
                :rules="rules.name"
                color="blue darken-2"
                label="Apellidos"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                v-model="form.docume"
                :rules="rules.docume"
                color="blue darken-2"
                label="Nombre de Empresa"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                v-model="form.telefono"
                :rules="rules.telefono"
                color="blue darken-2"
                label="NIT"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                v-model="form.correo"
                :rules="rules.correo"
                color="blue darken-2"
                label="Cuenta Bancaria"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                v-model="form.tele"
                :rules="rules.tele"
                color="blue darken-2"
                label="Telefono"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-checkbox
                v-model="form.terms"
                color="green"
              >
                <template v-slot:label>
                  <div @click.stop="">
                    Acepta los
                    <a href="javascript:;" @click.stop="terms = true">terminos</a>
                    y
                    <a href="javascript:;" @click.stop="conditions = true">conditiones?</a>
                  </div>
                </template>
              </v-checkbox>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat @click="resetForm">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!formIsValid"
            flat
            color="primary"
            type="submit"
          >Register</v-btn>
        </v-card-actions>
      </v-form>
      <v-dialog v-model="terms" width="70%">
        <v-card>
          <v-card-title class="title">Terms</v-card-title>
          <v-card-text v-for="n in 5" :key="n">
            {{ content }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              flat
              color="purple"
              @click="terms = false"
            >Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="conditions" width="70%">
        <v-card>
          <v-card-title class="title">Conditions</v-card-title>
          <v-card-text v-for="n in 5" :key="n">
            {{ content }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              flat
              color="purple"
              @click="conditions = false"
            >Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-app>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  data () {
    const defaultForm = Object.freeze({
      first: '',
      last: '',
      docume: '',
      telefono: '',
      correo: '',
      tele: '',
      terms: false
    })

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        show1: false,
        name: [val => (val || '').length > 0 || 'This field is required'],
        docume: [val => (val || '').length > 0 || 'This field is required'],
        telefono: [val => (val || '').length > 0 || 'This field is required'],
        correo: [val => (val || '').length > 0 || 'This field is required'],
        tele: [val => (val || '').length > 0 || 'This field is required']
      },
      conditions: false,
      content: `Loremasdasdasdasdasdunc.`,
      snackbar: false,
      terms: false,
      defaultForm
    }
  },

  computed: {
    formIsValid () {
      return (
        this.form.first &&
          this.form.last &&
          this.form.docume &&
          this.form.telefono &&
          this.form.tele &&
          this.form.terms
      )
    }
  },

  methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit () {
      this.snackbar = true
      this.resetForm()
    }
  }
}
</script>
