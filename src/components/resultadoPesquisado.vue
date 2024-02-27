<template>
    <div v-if="veiculo_pesquisado"
        class="w-full max-w-[400px] flex flex-col justify-start items-center mt-30px"
    >
        <p class="text-18px text-center text-[#444]">Referência:... {{ veiculo_pesquisado.MesReferencia }}</p>
        <p class="text-18px text-center text-[#444]">Marca:...{{ veiculo_pesquisado.Marca }}</p>
        <p class="text-18px text-center text-[#444]">Modelo:... {{ veiculo_pesquisado.Modelo }}</p>
        <p class="text-18px text-center text-[#444]">Ano modelo:... {{ veiculo_pesquisado.AnoModelo }}</p>
        <p class="text-18px text-center text-[#444]">Combustível:... {{ veiculo_pesquisado.Combustivel }}</p>
        <p class="text-18px text-center text-[#444]">Valor:... {{ veiculo_pesquisado.Valor }}</p>
        <p class="text-18px text-center text-[#444]">Código FIPE:... {{ veiculo_pesquisado.CodigoFipe }}</p>

    </div>
</template>

<script setup>
    import { inject } from 'vue'

    const veiculo_pesquisado = inject('veiculo_pesquisado')
</script>

<style scoped>

</style>