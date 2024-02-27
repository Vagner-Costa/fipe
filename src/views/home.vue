<template>
    <main class="w-full h-full flex flex-col items-center px-10px">
        <h1 class="text-[#444] text-20px mt-20px">Selecione o tipo de veículo.</h1>
        <div class="w-full max-w-[400px] flex flex-row justify-evenly items-center py-10px md:p-20px">
            <Veiculo @selecionar="selecionaTipo" tipo="caminhoes" :selecionado="tipo_selecionado"></Veiculo>
            <Veiculo @selecionar="selecionaTipo" tipo="carros" :selecionado="tipo_selecionado"></Veiculo>
            <Veiculo @selecionar="selecionaTipo" tipo="motos" :selecionado="tipo_selecionado"></Veiculo>
        </div>
        
        <section class="w-full max-w-[400px] h-[360px] relative overflow-hidden">
            <Selects class="absolute transition-all z-30"
                :class="lista_marcas.length > 0 ? ['mt-0px'] : ['mt-[-90px]']" 
                titulo="Selecione a marca:"
                :lista="lista_marcas" 
                v-model:tipo_dados="marca_selecionada"
            >
            </Selects>

            <Selects class="absolute transition-all z-20"
                :class="lista_modelos.length > 0 ? ['mt-90px'] : ['mt-[-90px]']" 
                titulo="Selecione o modelo:"
                :lista="lista_modelos" 
                v-model:tipo_dados="modelo_selecionado"
            >
            </Selects>

            <Selects class="absolute transition-all z-10"
                :class="lista_anos.length > 0 ? ['mt-[180px]'] : ['mt-[-90px]']" 
                titulo="Selecione o ano:"
                :lista="lista_anos" 
                v-model:tipo_dados="ano_selecionado"
            >
            </Selects>

            <BtnPesquisar @mostrar="mostrarResultado"
                class="absolute transition-all z-0"
                :class="ano_selecionado ? ['mt-[290px]'] : ['mt-[-90px]']"
            >
            </BtnPesquisar>

        </section>

        <section class="w-full max-w-[400px] h-[360px] relative">
            <ResultadoPesquisa v-if="mostrar_resultado"></ResultadoPesquisa>
        </section>        
    </main>
</template>

<script setup>
    import Selects from '../components/selects.vue'
    import Veiculo from '../components/tiposVeiculos.vue'
    import BtnPesquisar from '../components/btnPesquisar.vue'
    import ResultadoPesquisa from '../components/resultadoPesquisado.vue'
    import {ref, watch, provide } from 'vue'

    import {url_api} from '../services/index.js'
    import axios from 'axios'

    // Setando as refs
    const tipo_selecionado = ref(null) 
    const lista_marcas = ref([])
    const marca_selecionada = ref(null)  
    const lista_modelos = ref([]) 
    const modelo_selecionado = ref(null)
    const lista_anos = ref([])
    const ano_selecionado = ref(null)
    const veiculo_pesquisado = ref(null)

    const mostrar_resultado = ref(false)

    //Enviando valores ao componente resultadoPesquisado
    provide('veiculo_pesquisado',veiculo_pesquisado)


    //Selecionando tipo da pesquisa (carro, moto, utilitário) e listando marcas via API
    function selecionaTipo(payload){
        //limpando variaveis
        tipo_selecionado.value = null
        lista_marcas.value = []
        marca_selecionada.value = null
        lista_modelos.value = []
        modelo_selecionado.value = null
        lista_anos.value = []
        ano_selecionado.value = null
        veiculo_pesquisado.value = null
        mostrar_resultado.value = false

        tipo_selecionado.value = payload

        // Buscando marcas via API
        axios.get(`${url_api}/${tipo_selecionado.value}/marcas`)
        .then((response)=>{
            if(response.data){
                lista_marcas.value = response.data
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    // Listando modelos
    watch(marca_selecionada,()=>{
        //limpando variáveis
        lista_modelos.value = []
        modelo_selecionado.value = null
        lista_anos.value = []
        ano_selecionado.value = null
        veiculo_pesquisado.value = null
        mostrar_resultado.value = false

        if(marca_selecionada.value !== null){
            // Buscando modelos via API
            axios.get(`${url_api}/${tipo_selecionado.value}/marcas/${marca_selecionada.value}/modelos`)
            .then((response)=>{
                if(response.data){
                    lista_modelos.value = response.data.modelos
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    })

    // Listando anos
    watch(modelo_selecionado,()=>{
        //limpando variáveis
        lista_anos.value = []
        ano_selecionado.value = null
        veiculo_pesquisado.value = null
        mostrar_resultado.value = false

        if(modelo_selecionado.value !== null){
            // Buscando os anos via API
            axios.get(`${url_api}/${tipo_selecionado.value}/marcas/${marca_selecionada.value}/modelos/${modelo_selecionado.value}/anos`)
            .then((response)=>{
                if(response.data){
                    lista_anos.value = response.data
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    })

    // Listando veículo pesquisado
    watch(ano_selecionado,()=>{
        //limpando variáveis
        veiculo_pesquisado.value = null
        mostrar_resultado.value = false

        if(ano_selecionado.value !== null){
            // Buscando resultado pesquisado via API
            axios.get(`${url_api}/${tipo_selecionado.value}/marcas/${marca_selecionada.value}/modelos/${modelo_selecionado.value}/anos/${ano_selecionado.value}`)
            .then((response)=>{
                if(response.data){
                    veiculo_pesquisado.value = response.data
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    })

    // Mostra os resultados
    function mostrarResultado(){
        mostrar_resultado.value = true
    }


</script>

<style scoped>

</style>