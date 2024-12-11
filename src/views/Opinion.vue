<script>
export default{
    props:{
        arrOpinionJuego:{
            type:Array,
            required:true
        }
    },
    data(){
        return{
            nombreJuego:'',
            indiceJuego:'',
            form:{
                idJuego:'',
                nombre:'',
                opinion:''
            },
            nuevoForm:{
                nombre:'',
                opinion:''
            },
            verNuevoForm:false,
            idOpinionEditada:'',
            sinOpiniones:true
        }
    },
    methods:{
        agregarOpinion(){
            let elNombre = this.form.nombre;
            let laOpinion = this.form.opinion;
            this.form.idJuego = this.indiceJuego;
            let elId =this.form.idJuego;

                // es necesario crear un objeto temporal para enviar al padre,
                // puesto que si se envía el objeto vinculado con el form en one way databinding, al borrar el contenido, no se envia nada en el evento
            let unObjetoTemp = {
                idJuego:elId,
                nombre:elNombre,
                opinion:laOpinion 
            }
            // propagamos al padre el objetoTemporal diligenciado, porque si se envia lo que esta vinculado con v-model no se envia nada porque borramos el form
            this.$emit('agregar-opinion', unObjetoTemp);


            this.form.nombre = '';
            this.form.opinion='';
            this.form.idJuego='';
            alert('El nombre ingresado: '+elNombre);
            alert('La opinión ingresada: '+ laOpinion);
            alert('El id ingresado: '+ elId);
        },
        volverAtras(){
            this.$router.push('/juegos');
        },
        eliminarElemento(unIndiceOpinion){
            console.log('Va a eliminar la opinion: ', unIndiceOpinion);
            console.log('El juego tiene id: ', this.indiceJuego);
            let unIndiceJuego = this.indiceJuego;
            let objEliminar={
                indiceJuego: unIndiceJuego,
                indiceOpinion :unIndiceOpinion
            }
            this.$emit('eliminar-opinion', objEliminar);
        },
        mostrarForm(unIndiceOpinion){
            this.verNuevoForm = true;
            this.idOpinionEditada = unIndiceOpinion;
        },
        editarElemento(){
            console.log('Va a editar la opinion: ', this.idOpinionEditada);
            console.log('El juego tiene id: ', this.indiceJuego);
            let unIndiceJuego = this.indiceJuego;
            let unIndiceOpinion= this.idOpinionEditada;

            let laNuevaOpinion={
                idJuego:unIndiceJuego,
                nombre:this.nuevoForm.nombre,
                opinion:this.nuevoForm.opinion
            }

            let objEditar={
                indiceJuego: unIndiceJuego,
                indiceOpinion :unIndiceOpinion,
                nuevaOpinion: laNuevaOpinion
            }

            this.nuevoForm.nombre = '';
            this.nuevoForm.opinion='';
            this.verNuevoForm = false;

            this.$emit('editar-opinion', objEditar);
        }
    },
    computed:{
        obteneNombreJuego(){
            let arrTempSplit = this.nombreJuego.split('-');
            this.indiceJuego = arrTempSplit[0];
            console.log('el indice extraido de la cadena es: ', this.indiceJuego);
            return this.nombreJuego;
        },
        verificarOpiniones(){
            if(this.arrOpinionJuego[this.indiceJuego].length == 0){
                this.sinOpiniones = true;
            }
            else{
                this.sinOpiniones = false;
            }
            return this.sinOpiniones;
        }
    },
    created(){
        this.nombreJuego= this.$route.params.gameName;
    }
}
</script>

<template>
    <div id="divOpinion">
        <h1>Escribe tu opinión para el juego {{ obteneNombreJuego  }}</h1>
        <form>
            <label for="txtNombre">Nombre:</label><br>
            <input type="text" id="txtNombre" v-model="form.nombre"><br>

            <label for="txtOpinion">Opinión:</label><br>
            <textarea class="form-control" id="txtOpinion" rows="3" v-model="form.opinion"></textarea>

            <input type="button" class="btnAgregar" value="Agregar" v-on:click="agregarOpinion">
        </form>
        <hr>
        <p>{{ form.nombre }}</p>
        <p>{{ form.opinion }}</p>
        <hr>
        <button v-on:click="volverAtras()"> Regresar</button>
        <hr>
        <div id="opinionesGuardadas">
            <h1>A continuación podrás ver tu opinión</h1>

            <div v-if="verificarOpiniones">
                            <p class="especial"> No existen opiniones para mostrar</p>
            </div>
            <div v-else>

                            <!-- INICIO ACORDEON-->
                            <div class="accordion" id="accordionExample">
                            <div v-for="(elemOpinion, index) in arrOpinionJuego[indiceJuego]" V-bind:key="index" class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    {{ elemOpinion.nombre }}
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>{{ elemOpinion.opinion }}</p>
                                </div>
                                <button class="btn btn-danger" v-on:click="eliminarElemento(index)"> Eliminar</button> 
                                <button class="btn btn-warning" v-on:click="mostrarForm(index)">Editar</button>
                                </div>
                            </div>

                            </div>
                            <!-- FIN ACORDEON-->

                            <!-- FORM PARA EDITAR-->
                            <div v-if="verNuevoForm">
                                        <h1>Escribe tu NUEVA opinión para el juego {{ obteneNombreJuego  }}</h1>
                                        <form>
                                            <label for="txtNuevoNombre">Nuevo Nombre:</label><br>
                                            <input type="text" id="txtNuevoNombre" v-model="nuevoForm.nombre"><br>

                                            <label for="txtNuevaOpinion">Nueva Opinión:</label><br>
                                            <textarea class="form-control" id="txtNuevaOpinion" rows="3" v-model="nuevoForm.opinion"></textarea>

                                            <input type="button" class="btnAgregar" value="Editar Opinión" v-on:click="editarElemento()">
                                        </form>
                            </div>
                            <!--    FIN FORM EDITAR-->

            </div>

        </div>
        <footer>
            <p>Este es el footer del componente Opinion.vue</p>
        </footer>


    </div>




</template>

<style scoped>
.btnAgregar{
    background-color: aqua;
    color:white;
}
.especial{
    background-color: red;
    color: white;
    font-size: larger;
}
#divOpinion{
    background-color: darksalmon;
    margin:2%;
}
#opinionesGuardadas{
    background-color: aqua;
    margin: 2%,
}
</style>