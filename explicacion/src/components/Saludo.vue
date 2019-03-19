<template>
    <div>
        <h1>Hola {{nombre}}</h1>
    </div>
</template>
<script>
export default {
  name: 'saludo',
  props: ['nombre']
}
</script>
