<template>
    <main class="w-full h-full flex flex-col items-center px-10px">
        <div class="w-full max-w-[400px] flex flex-row justify-evenly items-center py-20px">
            <Veiculo @selecionar="selecionaTipo" tipo="caminhoes" :selecionado="tipo_selecionado"></Veiculo>
            <Veiculo @selecionar="selecionaTipo" tipo="carros" :selecionado="tipo_selecionado"></Veiculo>
            <Veiculo @selecionar="selecionaTipo" tipo="motos" :selecionado="tipo_selecionado"></Veiculo>
        </div>
        
        <Selects 
            titulo="Selecione a marca:"
            :lista="lista_marcas" 
            v-model:tipo_dados="marca_selecionada"
        >
        </Selects>

        <Selects 
            titulo="Selecione o modelo:"
            :lista="lista_modelos" 
            v-model:tipo_dados="modelo_selecionado"
        >
        </Selects>

        <Selects 
            titulo="Selecione o ano:"
            :lista="lista_anos" 
            v-model:tipo_dados="ano_selecionado"
        >
        </Selects>

        <p>valor {{ cptdVeiculoPesquisado }}</p>
        
    </main>
</template>

<script setup>
    import Selects from '../components/selects.vue'
    import Veiculo from '../components/tiposVeiculos.vue'
    import {ref, watch, computed } from 'vue'

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

        tipo_selecionado.value = payload

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

        if(marca_selecionada.value !== null){
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

        if(modelo_selecionado.value !== null){
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

        if(ano_selecionado.value !== null){
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

    const cptdVeiculoPesquisado = computed(()=>{
        return veiculo_pesquisado.value
    })


</script>

<style scoped>

</style>