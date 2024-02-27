<template>
    <div class="w-full max-w-[400px] h-90px flex flex-col items-start justify-center bg-branco">
        <label class="text-18px text-preto">{{ props.titulo }}</label>
        <select class="w-full h-50px border border-marrom_e bg-branco rounded-[25px] 
            p-10px outline-none " 
            v-model="tipo_dados"
        >
            <option class="text-[#444] text-18px outline-none"
                v-for="marca in props.lista" :value="marca.codigo" :key="marca.codigo"
            >
                {{ marca.nome }}
            </option>
        </select>
    </div>
    
</template>

<script setup>
    const props = defineProps(['lista','titulo'])
    const tipo_dados = defineModel('tipo_dados')

</script>

<style scoped>
    option {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}
</style>