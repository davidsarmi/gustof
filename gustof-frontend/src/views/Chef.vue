<template v-slot:items="props">
<div id="app">
<<<<<<< HEAD
  <v-app id="inspire" dark>

    <v-toolbar app fixed clipped-left>
    <v-toolbar-title style="margin:auto">CHEF</v-toolbar-title>
    </v-toolbar>
    <v-flex shrink>
    <v-tooltip right>
        <span>Source</span>
        </v-tooltip>
         </v-flex>

      <v-card>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-list-tile :key="index" avatar ripple @click="">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                  <v-btn color="success">LISTO</v-btn>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
            </template>
          </v-list>
        </v-card>
    <v-footer app fixed>
      <span>&copy; 2019</span>
    </v-footer>
=======
  <v-app id="inspire">

    <v-toolbar app fixed clipped-left>
      <img src="../assets/gustof.png" style="margin:0 0 0 70px;">
      <v-toolbar-title  style="margin:0px 0px 0px 800px; background-color:black;"></v-toolbar-title>
    </v-toolbar>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <h2 class="comida">COMIDA</h2>
        <h2 class="receta">RECETA</h2>
        <h2 class="papa">PAPA</h2>
        <h2 class="pedido">PEDIDOS</h2>
        <v-text-field
          v-model="date"
          label="Birthday date"
          prepend-icon="event"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        ref="picker"
        v-model="date"
        :max="new Date().toISOString().substr(0, 10)"
        min="1950-01-01"
        @change="save"
      ></v-date-picker>
    </v-menu>
    <v-data-table
      :items="desserts"
      class="elevation-1"
      hide-actions
      hide-headers

    >

      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td><br>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>

      </template>
    </v-data-table>
    <div class="botones">
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>

</div>
>>>>>>> 5252af1c3a3bcc39c6e38415c349448d92b045ad

  </v-app>
</div>
    </template>

<script>
export default {

  data () {
    return {
<<<<<<< HEAD
      items: [
        { action: 'pedido 1', headline: 'normal', title: 'HAMBURGUESAN ARTESANAL' },
        { action: 'pedido 2', headline: '-LECHUGA', headline: '-LECHUGA', title: 'SANDWUICHES MELOSO', headline: 'PAPA FRANCESA', headline: 'PAPA FRANCESA' },
        { action: 'pedido 3', headline: 'Oui oui', title: 'Sandra Adams', subtitle: 'Do you have Paris recommendations? Have you ever been?' },
        { action: 'pedido 4', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: 'Have any ideas about what we should get Heidi for her birthday?' },
        { action: 'pedido 5', headline: 'Recipe to try', title: 'Britta Holt', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' }
=======
      date: null,
      menu: false,
      desserts: [
        {
          name: 'HAMBURGUESA ARTESANAL',
          calories: '-PEPINILLOS' + '    ' + '-TOMATE',
          fat: 'PAPA CRIOLLA',
          carbs: 'PEDIDO 1'

        },
        {
          name: 'PERRO MELOSO',
          calories: '-PAN      ' + '+TOCINO',
          fat: 'SIN PAPA',
          carbs: 'PEDIDO 2'

        },
        {
          name: 'PATACON ESPECIAL',
          calories: '-CHAMPIÑONES',
          fat: 'PAPA FRANCESA',
          carbs: 'PEDIDO 3'

        },
        {
          name: 'PERRO PELIGRO DE MUERTE',
          calories: '+JALAPEÑOS',
          fat: 'PAPA FRANCESA',
          carbs: 'PEDIDO 4'

        },
        {
          name: 'PERRO PELIGRO DE MUERTE',
          calories: '+JALAPEÑOS',
          fat: 'PAPA FRANCESA',
          carbs: 'PEDIDO 4'

        }, {
          name: 'PERRO PELIGRO DE MUERTE',
          calories: '+JALAPEÑOS',
          fat: 'PAPA FRANCESA',
          carbs: 'PEDIDO 4'

        }, {
          name: 'PERRO PELIGRO DE MUERTE',
          calories: '+JALAPEÑOS',
          fat: 'PAPA FRANCESA',
          carbs: 'PEDIDO 4'

        }, {
          name: 'PERRO PELIGRO DE MUERTE',
          calories: '+JALAPEÑOS',
          fat: 'PAPA FRANCESA',
          carbs: 'PEDIDO 4'

        }, {
          name: 'PERRO PELIGRO DE MUERTE',
          calories: '+JALAPEÑOS',
          fat: 'PAPA FRANCESA',
          carbs: 'PEDIDO 4'

        }, {
          name: 'PERRO PELIGRO DE MUERTE',
          calories: '+JALAPEÑOS',
          fat: 'PAPA FRANCESA',
          carbs: 'PEDIDO 4'

        }, {
          name: 'PERRO PELIGRO DE MUERTE',
          calories: '+JALAPEÑOS',
          fat: 'PAPA FRANCESA',
          carbs: 'PEDIDO 4'

        }, {
          name: 'PERRO PELIGRO DE MUERTE',
          calories: '+JALAPEÑOS',
          fat: 'PAPA FRANCESA',
          carbs: 'PEDIDO 4'

        }, {
          name: 'PERRO PELIGRO DE MUERTE',
          calories: '+JALAPEÑOS',
          fat: 'PAPA FRANCESA',
          carbs: 'PEDIDO 4'

        }, {
          name: 'PERRO PELIGRO DE MUERTE',
          calories: '+JALAPEÑOS',
          fat: 'PAPA FRANCESA',
          carbs: 'PEDIDO 4'

        }

>>>>>>> 5252af1c3a3bcc39c6e38415c349448d92b045ad
      ]
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    }
  }
<<<<<<< HEAD

=======
>>>>>>> 5252af1c3a3bcc39c6e38415c349448d92b045ad
}
</script>

    <style>
    .v-toolbar__content > *:last-child, .v-toolbar__extension > *:last-child {
    margin-right: 0;
    color:white;
}
.v-toolbar__content, .v-toolbar__extension {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 24px;
    background-color: black;
}
div.elevation-1 {
        width: 1334px;
        margin: 0px;
        display: inline-block;

}

.botones {
    top: 120px;
    left: 1337px;
    position: absolute;
    margin: auto;
    display: inline-block;

}
.botonesverdes{
 margin: 0 0 3px 0;
 height: 45px;

}
.comida{
    position: absolute;
    left: 25px;
    top: 85px;
    margin: auto;
}
.receta{
    position: absolute;
    margin: 85px 0px 0px 700px;
}
.papa{
    position: absolute;
    margin: 85px 0px 0px 999px;
}
.pedido{
    position: absolute;
    margin: 85px 0px 0px 1250px;
}
.theme--light.v-table {
    background-color: #fff;
    margin: 59px 0 0 0px;
    color: rgba(0,0,0,0.87);
}

    </style>
