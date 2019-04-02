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

  

     <v-data-table
    :items="desserts"
    class="elevation-1"
    hide-actions
    hide-headers
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="comidaaaa">{{ props.item.calories }}</td>
      <td class="text-xs-cd">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>


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
            name: 'Comida',
            calories: 'cantidad',
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
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
