<template>
    <div class="w-100px h-100px rounded-full border border-[#888] p-7px  
        md:w-[120px] md:h-[120px]"
    >
        
        <button @click="emit('selecionar',props.tipo)"
            class="w-full h-full flex justify-center items-center rounded-full 
             p-15px hover:p-[17px] md:p-20px md:hover:p-[22px]"
            :class="props.tipo === props.selecionado ? ['bg-marrom_c'] : ['bg-marrom_e']"
        >
            <img v-if="props.tipo === 'caminhoes'"
                class="" 
                src="../assets/caminhoes.png" 
                alt="img"
            >
            <img v-if="props.tipo === 'carros'"
                class="" 
                src="../assets/carros.png" 
                alt="img"
            >
            <img v-if="props.tipo === 'motos'"
                class=""    
                src="../assets/motos.png"
                alt="img"
            >
        </button>

    </div>
</template>

<script setup>
    import { defineEmits } from 'vue'

    const props = defineProps(['tipo','selecionado'])

    const emit = defineEmits('selecionar')



</script>

<style scoped>
    .sombra_botao{
        box-shadow:1px 1px 5px #444;
    }


</style>