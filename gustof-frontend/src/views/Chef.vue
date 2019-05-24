
<template v-slot:items="props">
  <div id="app">
    <v-app id="inspire">
      <v-toolbar app fixed clipped-left>
        <v-toolbar-title>
          <img src="../assets/gustof.png">
        </v-toolbar-title>
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
          <v-text-field v-model="date" label="fecha actual" readonly v-on="on"></v-text-field>
        </template>
        <v-date-picker
          ref="picker"
          v-model="date"
          :max="new Date().toISOString().substr(0, 10)"
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>

      <div
        class="cartelera"
        style="background-color:red; margin: 0px 0px 300px 0px; padding:10px; height: 70px; width: 1100px;"
      >
        <pre class="pedido">hamburguesa artesanal </pre>
        <pre class="receta">-pepinillos +jamon + pollo jehfjshfjkdjfkjkdz</pre>
        <pre class="papa">papa francesa</pre>
      </div>
    </v-app>
  </div>
</template>

<script>
import api from '@/plugins/service'

export default {
  el: '#appTareas',
  data () {
    return {
      txtTareas: '',
      listaTareas: []
    }
  },
  methods: {
    agregarTarea () {
      var tarea = this.txtTareas
      if (tarea) {
        this.listaTareas.push({
          texto: tarea,
          checked: false
        })
      }
      this.txtTareas = ''
    },
    EliminarTarea: function () {
      var index = this.listaTareas.indexof(tarea)
      this.listaTareas.splice(index, 1)
    },
    async getOrders () {
      const { data } = await api.get('/order')
      console.log(data)
    }
  },
  created () {
    this.getOrders()
  }
}

</script>

    <style scoped>
.v-toolbar__content > *:last-child,
.v-toolbar__extension > *:last-child {
  margin-right: 0;
  color: white;
}
.v-toolbar__content,
.v-toolbar__extension {
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

.botonesverdes {
  margin: -28px 0px 0 950px;
}

.theme--light.v-table {
  background-color: #fff;
  margin: 50px 0 0 0px;
  color: rgba(0, 0, 0, 0.87);
}

pre {
  color: rgb(255, 255, 255);
  font-family: "Courier";
  font-size: 18px;
  text-align: justify;
  text-decoration: none;
  display: inline-block;
  background-color: rgb(0, 0, 0);
  margin: 11px 50px 0px -0;
}

.v-toolbar {
  background-color: black;
}
img {
  width: 150px;
  margin: 0 0 0 650px;
}
</style>
