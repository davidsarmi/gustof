<template v-slot:items="props">
<div id="app">
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
    <v-btn class="botonesverdes" color="success">listo</v-btn>

</div>

  </v-app>
</div>
    </template>

<script>
export default {

  data () {
    return {
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
