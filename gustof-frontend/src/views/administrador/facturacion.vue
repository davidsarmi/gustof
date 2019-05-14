<template>
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
      <v-container grid-list-xl fluid style="border: solid #4A148C 10px">
        <v-layout wrap>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="form.first"
              :rules="rules.name"
              color="#4A148C"
              label="Cliente"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="form.last"
              :rules="rules.name"
              color="#4A148C"
              label="Nit"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              v-model="form.favoriteAnimal"
              :items="animals"
              :rules="rules.animal"
              color="#4A148C"
              label="Forma de Pago"
              required
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              v-model="form.documento"
              :items="documento"
              :rules="rules.documento"
              color="#4A148C"
              label="Numero de Mesa"
              required
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="form.docume"
              :rules="rules.docume"
              color="#4A148C"
              label="N° de Factura"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="form.telefono"
              :rules="rules.telefono"
              color="#4A148C"
              label="Telefono"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="form.correo"
              :rules="rules.correo"
              color="#4A148C"
              label="Vendedor"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
          <v-text-field
            v-model="form.contraseña"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :rules="rules.contraseña"
            :type="show1 ? 'text' : 'password'"
            label="Contraseña"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-flex>
          <v-flex xs12>
            <v-checkbox
              v-model="form.terms"
              color="#4A148C"
            >

               <template v-slot:label>
                <div @click.stop=" drawer = !drawer">
                  Do you accept the
                  <a href="javascript:;" @click.stop="terms = true">terms</a>
                  and
                  <a href="javascript:;" @click.stop="conditions = true">conditions?</a>
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
          color="#4A148C"
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
            color="#4A148C"
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
            color="#4A148C"
            @click="conditions = false"
          >Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
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
      favoriteAnimal: '',
      documento: '',
      docume: '',
      telefono: '',
      vendedor: '',
      contraseña: '',
      terms: false
    })

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        show1: false,
        animal: [val => (val || '').length > 0 || 'This field is required'],
        name: [val => (val || '').length > 0 || 'This field is required'],
        documento: [val => (val || '').length > 0 || 'This field is required'],
        docume: [val => (val || '').length > 0 || 'This field is required'],
        telefono: [val => (val || '').length > 0 || 'This field is required'],
        vendedor: [ v => !!v || 'E-mail is required', v => /.+@.+/.test(v) || 'E-mail must be valid'],
        contraseña: [val => (val || '').length > 0 || 'This field is required']
      },
      documento: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      animals: ['Efectivo', 'tarjeta de cretito'],
      conditions: false,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
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
          this.form.favoriteAnimal &&
          this.form.documento &&
          this.form.docume &&
          this.form.telefono &&
          this.form.contraseña &&
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
