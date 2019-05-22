<template>
  <div>
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
        <v-container grid-list-xl fluid style="border: solid #4A148C 10px">
          <v-btn color="#4A148C " class="" >Registrar Proveedor</v-btn>
          <v-layout wrap>
            <v-flex xs12 sm4>
              <v-text-field
                v-model="form.first"
                :rules="rules.name"
                color="#4A148C"
                label="Nombres"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                v-model="form.last"
                :rules="rules.name"
                color="#4A148C"
                label="Apellidos"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                v-model="form.docume"
                :rules="rules.docume"
                color="#4A148C"
                label="Nombre de Empresa"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                v-model="form.telefono"
                :rules="rules.telefono"
                color="#4A148C"
                label="NIT"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                v-model="form.correo"
                :rules="rules.correo"
                color="#4A148C"
                label="Cuenta Bancaria"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                v-model="form.tele"
                :rules="rules.tele"
                color="#4A148C"
                label="Telefono"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-checkbox
                v-model="form.terms"
                color="#4A148C"
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
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Proveedores',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Nombre de Empresa', 
          align: 'left',
          sortable: false,
          value: 'calories' },
        { text: 'NIT', 
          align: 'left',
          sortable: false,
          value: 'fat' },
        { text: 'Cuenta Bancaria', 
          align: 'left',
          sortable: false,
          value: 'carbs' },
        { text: 'Telefono', 
          align: 'left',
          sortable: false,
          value: 'protein' },
        { text: 'Acciones', 
          align: 'left',
          sortable: false,
          value: 'name',}
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Proveedor' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'proveedor1',
            calories: 'empresa',
            fat: '11,347,23-5',
            carbs: '389452324',
            protein: '3125468794'
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>
<style scoped>
.elevation-1{
  height: 250px;
  width: 800px
}
</style>

