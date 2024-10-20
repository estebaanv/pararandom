<template>
    <input 
    type="text" 
    maxlength="1"
    v-model="letra"
    @input="emitirLetra"
    :disabled = "disabled"
    class="w-20 h-20 text-3xl flex text-center uppercase border-2 outline-none focus:border-red-300 rounded-xl border-slate-500"
    >
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const emit = defineEmits(['update:letra']);
const props = defineProps ({
    letra: String,
    disabled: Boolean,
    estado: Number,
    tipo: Number
});

const letra = ref("")

function emitirLetra(){
    emit('update:letra', letra.value);
}


</script>