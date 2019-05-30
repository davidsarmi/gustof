
<template>
  <div>
    <v-subheader class="subheader black--text display-1 font-weight-bold" >Registro de Producto</v-subheader>
    <v-form>
      <v-container>
        <v-layout row wrap>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message1"
              box
              label=" Codigo"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message2"
              box
              label="Can Unidad"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message3"
              box
              label= "N Productos"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message4"
              box
              label="Fecha de Vencimiento"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message5"
              box
              label="Unidad Sin"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message6"
              box
              label="Unidad Iva"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message7"
              box
              label="total"
              clearable
            ></v-text-field>
          </v-flex>

            <v-flex xs6>
              <v-combobox
                v-model="select"
                :items="items"
              ></v-combobox>
            </v-flex>

        </v-layout>
      </v-container>
       <v-btn color="green " class="" >Registrar Producto</v-btn>
          <v-btn color="red " class="" >Cancelar</v-btn>
    </v-form>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      >
        <template v-slot:items="props">
          <td></td>
          <td class="text-xs-right">{{ props.item.Codigo }}</td>
          <td class="text-xs-right">{{ props.item.Cantidad }}</td>
          <td class="text-xs-right">{{ props.item.NProductos }}</td>
          <td class="text-xs-right">{{ props.item.FechaVencimiento }}</td>
          <td class="text-xs-right">{{ props.item.Unidadsin}}</td>
          <td class="text-xs-right">{{ props.item.UnidadIva}}</td>
          <td class="text-xs-right">{{ props.item.TotalaPagar}}</td>
          <td class="text-xs-right">{{ props.item.Formadepago}}</td>

        </template>
        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
         Tu busqueda para "{{ search }}" no se encontro
        </v-alert>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  data () {
    return {
      search: '',
      headers: [
        {
          align: 'left',
          sortable: false 
        },
        { text: 'Codigo', value: 'Codigo' },
        { text: 'Cantidad', value: 'Cantidad' },
        { text: 'NProductos', value: 'NProductos' },
        { text: 'Fecha.Vencimiento', value: 'FechaVencimiento' },
        { text: 'Unidad.sin', value: 'Unidadsin' },
        { text: 'Unidad.Iva', value: 'UnidadIva' },
        { text: 'Total.a.Pagar', value: 'TotalaPagar' },
        { text: 'Forma.de.pago', value: 'Formadepago' }
      ],
      desserts: [
        {
          Codigo: '45210',
          Cantidad: '23',
          NProductos: 'carne',
          FechaVencimiento: '27/05/2019',
          Unidadsin: '28.990',
          UnidadIva: '29.200',
          TotalaPagar: '29.200',
          Formadepago: 'Contado'
        },
      ],
      select: 'Pago*',
      items: [
        'Contado',
        'Credito'
      ]
    }
  }

}
</script>
<style lang="stylus" >
  .subheader{
    text-align center !important
    display 1
  }
  .v-text-field.v-text-field--enclosed {
    --v-primary-base white
  }
  .theme--dark.v-text-field--box > .v-input__control > .v-input__slot {
    background rgba(0,0,0,0.8)
  }
  .theme--dark.v-input:not(.v-input--is-disabled) input, .theme--dark.v-input:not(.v-input--is-disabled) textarea {
    color white
    font-size 20px
  }
  .v-input{
    --v-primary-base white
  }
  .flex.xs6 {
    height: 56px;
    margin: 8px 0px 0px 0px;
  }
  .theme--dark.v-label {
    color white
  }
</style>
