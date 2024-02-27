<template>
    <div class="w-full h-[65px] rounded-[35px] border border-[#888] p-7px">
        <button @click="emitMostrar"
            class="w-full h-full bg-marrom_e flex justify-center items-center 
            outline-none rounded-[30px] hover:bg-marrom_c" 
        >
            <p class="text-branco">Pesquisar</p>
        </button>
    </div>
    
</template>

<script setup>
    import { defineEmits } from 'vue'

    const emit = defineEmits('mostrar')

    function emitMostrar(){
        emit('mostrar')
    }
</script>

<style scoped>

</style>