<script>
import TheWelcome from '../components/TheWelcome.vue'
export default{
    components:{
      TheWelcome
    },
    data(){
      return{
        titulo: 'Este es el componente HomeView.vue'
      }
    },
    methods:{

    }
}
</script>

<template>
  <div id="divHomeView" >
    <h2 v-html="titulo"></h2>
    <main>
      <TheWelcome />
    </main>
  </div>

</template>

<style scoped>
#divHomeView{
  background-color: blue;
  color: white;
  margin:2%;
}

</style>
