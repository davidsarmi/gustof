<template>
    <div>
        <h1>Productos</h1>
        <!--<Saludo :nombre="nombres[0]"/>
        <Saludo :nombre="nombres[1]"/>
        <Saludo :nombre="nombres[2]"/>
        <Saludo :nombre="nombres[3]"/>-->
        <template v-for="(n , index) in nombres">
            <Saludo :nombre="n" :key="index"/>
        </template>
    </div>
</template>
<script>
import Saludo from '@/components/Saludo.vue'
export default {
  name: 'productos',
  components: { Saludo },
  data () {
    return {
      nombres: ['sebastian', 'kelly', 'david', 'daniel', 'anderson', 'carlos']
    }
  }
}
</script>
