<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>

  <div id="divHelloWorld">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped>
#divHelloWorld{
  background-color: olive;
  margin:2%;
}
</style>
