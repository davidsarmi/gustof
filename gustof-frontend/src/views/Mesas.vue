<template>

        <div id="app">
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Mesas</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Configuraciones</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>mesas</v-toolbar-title>
    </v-toolbar>

         <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="comidas"
          label="Comidas"

        ></v-select>

      </v-flex>
           <v-flex xs12 sm6 d-flex>
        <v-select
          :items="tipos"
          label="Tipo de comida"
        ></v-select>
      </v-flex >

      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="receta"
          label="Recetas"
        ></v-select>
      </v-flex>

      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="papa"
          label="Papas"

        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>

   <v-btn color="success">Enviar</v-btn>

    <table>
     <v-data-table
    :items="desserts"
    class="elevation-1"
    hide-actions
    hide-headers
  >

    <template v-slot:items="props" >
      <td>{{ props.item.nombre }}</td>
      <td class="cantidad">{{ props.item.cantidad}}</td>
      <td class="descripcion">{{ props.item.descripcion }}</td>
      <td class="valor">{{ props.item.valor }}</td>
    </template>

  </v-data-table>
 </table>

<v-btn color="success">Success</v-btn>
    <v-btn color="error">Error</v-btn>

    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>

    </div>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    comidas: ['hamburguesa', 'perros calientes', 'picada mixta', 'salchicha gua gua', 'sandwich', 'mazorca', 'patocones', 'alitas' ],
    tipos: ['Artesanal', 'Deli tocino', 'Espacial', 'Pechugona', 'Master', 'Maxima', 'chilanga' ],
    receta: ['Pan', 'Vegetales(Lechuga, tomate)', 'Pepinillos', 'Cebolla caramelisada', 'carne al carbon', 'Queso' ],
    papa: ['Criolla', 'Francesa', 'Casquitos', 'criolla y francesa', 'criolla y casquitos', 'francesa y casquitos', 'Sin papa' ],
    desserts: [
      {
        nombre: 'Comida',
        cantidad: 'cantidad',
        descripcion: 'Descripcion',
        valor: 'Precio'

      },
      {
        nombre: '',
        cantidad: '',
        descripcion: '',
        valor: ''

      },
      {
        nombre: '',
        cantidad: '',
        descripcion: '',
        valor: ''
      },
      {
        nombre: '',
        cantidad: '',
        descripcion: '',
        valor: ''
      },
      {
        nombre: '',
        cantidad: '',
        descripcion: '',
        valor: ''
      },
      {
        nombre: '',
        cantidad: '',
        descripcion: '',
        valor: ''
      },
      {
        nombre: '',
        cantidad: '',
        descripcion: '',
        valor: ''
      },
      {
        nombre: '',
        cantidad: '',
        descripcion: '',
        valor: ''
      },
      {
        nombre: '',
        cantidad: '',
        descripcion: '',
        valor: ''
      },
      {
        nombre: '',
        cantidad: '',
        descripcion: '',
        valor: ''
      }
    ]
  }),

  props: {
    source: String
  }

}

</script>
<style>
.v-text-field.v-text-field--enclosed .v-text-field__details, .v-text-field.v-text-field--enclosed > .v-input__control > .v-input__slot {
    padding: 6px 179px;
}
</style>
