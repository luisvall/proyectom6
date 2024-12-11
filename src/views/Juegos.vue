<script>
import { toHandlers } from 'vue';

export default{
    props:{
        arregloLleno: {
            type:Boolean,
            required: true
        },
        arrJuegosRecibido:{
            type:Array,
            required: true
        },
        estaRegistradoJuegos:{
            type:Boolean,
            required:true
        }

    },  
    data(){
        return{
            titulo:' Este es el componente Juegos.vue',
            arrJuegos:[],

            
        }
    },
    methods:{
        enviarOpinion(nombreJuego, unIndice){
            console.log('Nombre Juego Recibido: ', nombreJuego);
            console.log('indice: ', unIndice);
            let nombreCompuesto = `${unIndice}-${nombreJuego}`;
            this.$router.push(`/opinion/${nombreCompuesto}`);
           
        },
        enviarLike(unIndice){
            this.$emit('like-enviado', unIndice);
           
        }

    },
    created(){
        if(this.arregloLleno == false){
                    let url='https://api.rawg.io/api/games?key=548ac8fcc5ad4b3780b81ed0b0a992c6&platforms=1';
                    fetch(url)
                    .then((respuesta)=>{
                        // console.log(respuesta);
                        respuesta.json()
                        .then((objRespuesta)=>{
                            // console.log(objRespuesta);
                            // los juegos se encuentran en la propiedad results, y viene en formato array
                            // exploramos el array con un ciclo for
                            // console.log(objRespuesta.results);
                            for(let juego of objRespuesta.results){
                                // console.log(juego);
                                this.arrJuegos.push(juego);
                                this.$emit('llenar-arreglo-opiniones');

                            }
                            console.log('Recorrido de respuesta terminado');
                            console.log(this.arrJuegos);
                            this.$emit('api-consumida', this.arrJuegos);
                        })
                        .catch((errTransf)=>{
                            console.log('Error transformando a json la respuesta: ', errTransf);
                        });

                    })
                    .catch((error)=>{
                        console.log('Error consumiendo endpoint: ', error);
                    });
        }

    }
}

</script>

<template>
    <div id="divJuegos">
        <h1 v-html="titulo"></h1>
        <div class="contenedorFlex">
            <div class="contenidoFlex" v-for="(unJuego, index) in arrJuegosRecibido" v-bind:key="index">
                <figure class="contenedorImagen">
                    <img class="contenidoImagen" v-bind:src="unJuego.background_image" v-bind:alt="unJuego.slug">
                </figure>
                <h3 v-html="unJuego.name"></h3>
                <p>Rating: <span v-html="unJuego.rating"></span></p>
                <p>Released: <span v-html="unJuego.released"></span></p>

                    <button class="btnOpinar" v-on:click="enviarOpinion(unJuego.name, index)">Opinar</button>
                    <button v-if="estaRegistradoJuegos" v-on:click="enviarLike(index)">like</button>


            </div>
        </div>
    </div>
</template>


<style scoped>
.contenedorFlex{
    display: flex;
    flex-wrap: wrap;
}
.contenidoFlex{
    background-color: chocolate;
    width: 260px;
    margin:2%;
}

.contenedorImagen{
    max-width: auto;
}
.contenidoImagen{
    width:100%;
}

.btnOpinar{
    background-color: blue;
    color:white;
}

#divJuegos{
    background-color: chartreuse;
    margin:2%;
}


</style>