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
      <img data-v-097a1800="" src="/img/gustof.5ab63673.png">
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

      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="cantidad"
          label="cantidades"

        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>

   <v-btn color="success">Enviar</v-btn>

  <v-flex>
    <table>
     <v-data-table
    :items="desserts"
    class="elevation-1"
    hide-actions
    hide-headers
  >

    <template v-slot:items="props" >
      <td>{{ props.item.nombre }}   </td>
      <td class="cantidad" style="padding: 0px 0px 0px 200px" >{{ props.item.cantidad}}</td>
      <td class="descripcion" style="padding: 0px 0px 0px 200px">{{ props.item.descripcion }}</td>
      <td class="valor" style="padding: 0px 0px 0px 200px">{{ props.item.valor }}</td>
     <v-btn class="editar"  color="warning">Editar</v-btn>
    <v-btn  class="eliminar" color="error">Eliminar</v-btn>

    </template>

  </v-data-table>
 </table>
 </v-flex >

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
    cantidad: ['1', '2', '3', '4', '5', '6', '7', '8', '10' ],
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
<style scoped>
.v-text-field.v-text-field--enclosed .v-text-field__details, .v-text-field.v-text-field--enclosed > .v-input__control > .v-input__slot {
    padding: 6px 179px;
}
table.v-table tbody td, table.v-table tbody th {
    height: 50px;
    width: 266px;
}
.eliminar{
  display: inline-block;
  margin: 8px 0 0 0px;
}
.editar{
  display: inline-block;
  margin:8px 0 0 40px;
}
</style>