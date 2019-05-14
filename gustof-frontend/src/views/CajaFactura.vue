<template>
  <div id="app">
    <v-app id="inspire">
      <v-card>
        <v-card-text>
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs12 sm3>
                <h2>NUM FACTURA</h2>
                <label>3456</label>
              </v-flex>

              <v-flex xs6 sm3>
                <h2>CIUDAD</h2>
                <label label="Right" value="right">SAN GIL-SANTANDER</label>
              </v-flex>

              <v-flex xs6 sm3>
                <h2>DIRECCION</h2>
                <label label="Top" value="top">CLL 21B #6-20</label>
              </v-flex>

              <v-flex xs6 sm3>
                <h2>MESA</h2>
                <label label="Bottom" value="bottom">8</label>
              </v-flex>

              <v-flex xs12 sm3>
                <h2 style="margin:20px 0px 0px 0px;">TEL</h2>
                <label label="Multi-line (mobile)" value="multi-line">3232104794</label>
              </v-flex>

              <v-flex xs12 sm3 style="position:absolute; margin:auto; left:40px; top:170px;">
                <h2 style="margin:20px 0px 0px 0px;">FORMA DE PAGO</h2>
                <v-checkbox
                  label="EFECTIVO"
                  style="display: inline-block; margin:0px 0px 0px 10px;"
                ></v-checkbox>
                <v-checkbox label="TARJETA" style="display: inline-block;"></v-checkbox>
              </v-flex>

              <v-flex xs12 sm3>
                <h2 style="margin:20px 0px 0px 0px;">VENDEDOR</h2>
                <label label="Multi-line (mobile)" value="multi-line">SERGIO ANDRES CAMARGO</label>
              </v-flex>

              <v-flex xs12 sm4 offset-sm4>
                <v-text-field v-model="text" label="CLIENTE" type="text"></v-text-field>
              </v-flex>

              <v-flex xs12 sm4>
                <v-text-field v-model.number="timeout" label="NIT" type="number"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-btn
            style=" height:40px; width:110px; margin-left:1180px;"
            block
            color="green"
            dark
            @click="snackbar = true"
          >FACTURAR</v-btn>
        </v-card-text>
      </v-card>

      <div id="app">
        <v-app id="inspire">
          <v-data-table :items="desserts" class="elevation-1" hide-actions hide-headers>
            <template v-slot:items="props">
              <td>{{ props.item.pedido }}</td>
              <td class="text-xs-right">{{ props.item.codigo}}</td>
              <td class="text-xs-right">{{ props.item.cantidad }}</td>
              <td class="text-xs-right">{{ props.item.iva}}</td>
              <td class="text-xs-right">{{ props.item.valorUnidad }}</td>
              <td class="text-xs-right">{{ props.item.valorTotal }}</td>
            </template>
          </v-data-table>
        </v-app>
      </div>
    </v-app>
  </div>
</template>
<script>
export default {
  el: '#app',
  data () {
    return {
      desserts: [
        {
          pedido: 'PEDIDO',
          codigo: 'CODIGO',
          cantidad: 'CANTIDAD',
          iva: 'IVA',
          valorUnidad: 'VALOR UNIDAD',
          valorTotal: 'VALOR TOTAL'
        },
        {
          pedido: 'HAMBURGUESA ARTESANAL',
          codigo: 323,
          cantidad: 2,
          iva: 0.05,
          valorUnidad: 12500,
          valorTotal: 25000
        },
        {
          pedido: 'SALCHICHA GUAGUU',
          codigo: 324,
          cantidad: 1,
          iva: 0.05,
          valorUnidad: 14000,
          valorTotal: 14000
        },
        {
          pedido: 'VALOR TOTAL',
          valorTotal: 39000
        }
      ]
    }
  }
}
</script>
<style scoped>
.application--wrap {
  height: 455px;
  width: 1344px;
}
</style>
