
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
      <div id="app">
        <v-app id="inspire">
          <v-container style="max-width: 500px">
            <v-divider class="mt-3"></v-divider>

            <v-layout my-1 align-center>
              <strong class="mx-3 info--text text--darken-3">Remaining: {{ remainingTasks }}</strong>

              <v-divider vertical></v-divider>

              <strong class="mx-3 black--text">Completed: {{ completedTasks }}</strong>

              <v-spacer></v-spacer>

              <v-progress-circular :value="progress" class="mr-2"></v-progress-circular>
            </v-layout>

            <v-divider class="mb-3"></v-divider>

            <v-card v-if="tasks.length > 0">
              <v-slide-y-transition class="py-0" group tag="v-list">
                <template v-for="(task, i) in tasks">
                  <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

                  <v-list-tile :key="`${i}-${task.text}`">
                    <v-list-tile-action>
                      <v-checkbox v-model="task.done" color="info darken-3">
                        <template v-slot:label>
                          <div
                            :class="task.done && 'grey--text' || 'text--primary'"
                            class="ml-3"
                            v-text="task.text"
                          ></div>
                        </template>
                      </v-checkbox>
                    </v-list-tile-action>

                    <v-spacer></v-spacer>

                    <v-scroll-x-transition>
                      <v-icon v-if="task.done" color="success">check</v-icon>
                    </v-scroll-x-transition>
                  </v-list-tile>
                </template>
              </v-slide-y-transition>
            </v-card>
          </v-container>
        </v-app>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  el: "#app",
  data: () => ({
    tasks: [
      {
        done: false,
        text: "Foobar"
      },
      {
        done: false,
        text: "Fizzbuzz"
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
    }
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
