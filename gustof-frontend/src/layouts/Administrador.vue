<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <v-app id="inspire" ligth>
      <v-navigation-drawer clippedgit fixed v-model="drawer" app dark>
        <v-list dense>
          <v-list-tile v-for="admin in admins" :key="admin.admins" @click="push(admin.to)">
            <v-list-tile-action v-if="admin.icon">
              <v-icon>{{ admin.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class=".font-weight-medium.font-italic">
              <v-list-tile-tile>{{ admin.text }}</v-list-tile-tile>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-btn style="background-color: black;">
          <img src="@/assets/gustof.png" class="img-responsive" alt style="width:89px">
        </v-btn>
      </v-toolbar>

      <v-footer app fixed>
        <span>&copy; GUSTOF</span>
      </v-footer>
      <v-content>
        <v-container fill-height>
          <v-layout justify-center align-center>
            <v-flex shrink>
              <router-view></router-view>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    admins: [
      {
        text: '',
        icon: '',
        to: ''
      },
      {
        text: 'PERFIL',
        icon: 'group',
        to: '/administrador/perfil'
      },
      {
        text: 'MI EMPRESA',
        icon: 'store',
        to: '/administrador/miempresa'
      },
      {
        text: 'CLIENTE',
        icon: 'perm_identity',
        to: '/administrador/cliente'
      },
      {
        text: 'PROVEEDORES',
        icon: 'contacts',
        to: '/administrador/proveedores'
      },
      {
        text: 'PRODUCTOS',
        icon: 'restaurant',
        to: '/administrador/productos'
      },
      {
        text: 'FACTURACIÒN',
        icon: 'list',
        to: '/administrador/facturacion'
      },
      {
        text: 'BODEGA',
        icon: 'reorder',
        to: '/bodega'
      },
      {
        text: 'PRODUCTOS DE BODEGA',
        icon: 'restaurant',
        to: '/bodega_productos'
      },
      {
        text: 'AGREGAR',
        icon: 'plus_one',
        to: '/agregar'
      },
      {
        text: 'SACAR',
        icon: 'delete',
        to: '/sacar'
      },
      {
        text: 'CANDADOS',
        icon: 'no_encryption',
        to: '/administrador/candados'
      },
      {
        text: 'SALIR',
        icon: 'contacts',
        to: '/'
      }
    ],
    chef: [
      {
        text: 'SALIR',
        icon: 'store',
        to: '/'
      }
    ],
    mesero: [
      {
        text: 'MESAS',
        icon: 'store',
        to: '/mesaslogin'
      },
      {
        text: 'SALIR',
        icon: 'conctacts',
        to: '/'
      }
    ],
    caja: [
      {
        text:'CLIENTE',
        icon:'store',
        to:'/administrador/cliente'
      },
      {
       text:'PROVEEDORES',
       icon:'store',
       to:'/administrador/proveedores'
      },
      {
       text:'FACTURACION',
       icon:'store',
       to:'/administrador/facturacion'
      },
      {
        text: 'SALIR',
        icon: 'conctacts',
        to: '/'
      }
    ]
  }),
  methods: {
    push (to) {
      if (to === '/') {
        this.$store.commit('SET_USER', {})
        this.$router.push(to)
      }
      this.$router.push(to)
    }
  },
  props: {
    source: String
  }
}
</script>
<style>
.theme--dark.v-icon {
  color: rgb(0, 0, 0);
}
.v-list__tile__content {
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-family:Georgia, 'Times New Roman', Times, serif;
}
.v-list--dense .v-list__tile {
  font-size: 15px;
  font-family: fantasy;
}
.v-toolbar__content {
  height: 45px !important;
}
.v-btn .v-btn__content .v-icon {
  color: rgb(255, 255, 255);
}
.v-toolbar__content,
.v-toolbar__extension {
  background-color: black;
}
.theme--light.v-footer {
  background: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-size: 15px;
}
.theme--dark.v-navigation-drawer {
    background-color: rgb(67, 146, 185,0.4);
}
</style>
