<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import AdministradorLayout from '@/layouts/Administrador.vue'
import LoginLayout from '@/layouts/Login.vue'
export default {
  name: 'App',
  components: { AdministradorLayout, LoginLayout },
  data () {
    return {
    }
  },
  computed: mapState(['layout'])
}
</script>
<style lang="stylus">
  @import url('./styles/main.styl')
</style>
