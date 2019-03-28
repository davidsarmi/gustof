<template v-slot:items="props">
<div id="app">
  <v-app id="inspire">

    <v-toolbar app fixed clipped-left>
      <v-toolbar-title style="margin:auto; backgroun-color:black;">CHEF</v-toolbar-title>
    </v-toolbar>

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
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>
  </v-app>
</div>
    </template>

<script>
export default {

  data () {
    return {
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

        }

      ]
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
        width: 1423px;

}
    </style>
