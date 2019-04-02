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
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Mesas</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
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
<<<<<<< HEAD
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <v-btn
                icon
                large

                target="_blank"
               slot="activator"

              >
              <article class="bloque">

                              <div id="app">
                  <v-app id="inspire">
                    <v-container fluid grid-list-xl>
                      <v-layout wrap align-center>
                        <v-flex xs12 sm6 d-flex>
                          <v-select
                            :items="items"
                            label=""
                          ></v-select>
                        </v-flex>

                        <v-flex xs12 sm6 d-flex>
                          <v-select
                            :items="items"
                            box
                            label="Box style"
                          ></v-select>
                        </v-flex>

                        <v-flex xs12 sm6 d-flex>
                          <v-select
                            :items="items"
                            label="Outline style"
                            outline
                          ></v-select>
                        </v-flex>

                        <v-flex xs12 sm6 d-flex>
                          <v-select
                            :items="items"
                            label="Solo field"
                            solo
                          ></v-select>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-app>
                </div>
=======

         <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="comidas"
          label="Comidas"
>>>>>>> 5252af1c3a3bcc39c6e38415c349448d92b045ad

        ></v-select>

<<<<<<< HEAD
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
=======
      </v-flex>
           <v-flex xs12 sm6 d-flex>
        <v-select
          :items="tipos"
          box
          label="Tipo de comida"
        ></v-select>
      </v-flex >

      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="receta"
          label="Recetas"
          outline
        ></v-select>
      </v-flex>

      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="papa"
          label="Papas"
          solo
        ></v-select>
      </v-flex>

    </v-layout>
  </v-container>

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
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>

>>>>>>> 5252af1c3a3bcc39c6e38415c349448d92b045ad
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
    papa: ['Criolla', 'Francesa', 'Casquitos', 'criolla y francesa', 'criolla y casquitos', 'francesa y casquitos', 'Sin papa' ]
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
