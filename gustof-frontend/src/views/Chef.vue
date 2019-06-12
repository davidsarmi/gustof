<template v-slot:items="props">
  <div id="app">
    <audio src="http://ahandfulof.me/fail/vampire-call.mp3" controls></audio>
    <v-app id="inspire">
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
      <div id="contenido">
        <table
          style=" position:absolute; top:100px; right:0;margin:auto; width:800px; boder-collapse:separate; border-spacing:10px 5px;"
        >
          <thead>
            <th>Numero de pedido</th>
            <th>comida</th>
            <th>espesificado</th>
          </thead>
        </table>
      </div>
    </v-app>
  </div>
</template>

<script>
import api from "@/plugins/service";

export default {
  created() {
    this.getDetailOrder;
  },
  data: () => ({
    tasks: [
      {
        done: false,
        text: ""
      },
      {
        done: false,
        text: ""
      }
    ],
    task: null
  }),

  computed: {
    completedTasks() {
      return this.tasks.filter(task => task.done).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    }
  },

  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.task
      });

      this.task = null;
    },
    async getDetailOrder() {
      const { data: detailsOrder } = await api.get("/detailOrder");
      const { data: order } = await api.get("/order");
      const { data: table } = await api.get("/table");
      this.$store.commit("SET_DETAIL_ORDER", detailsOrder);
      this.$store.commit("SET_ORDERS", order);
      this.$store.commit("SET_TABLE", table);

      console.log(detailsOrder, order, table);
    }
  },
  created() {
    this.$store.commit("SET_LAYOUT", "administrador-layout");
    this.getDetailOrder();
  }
};
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
