<template>
    <div class="flex space-x-2">
     <ContenedorLetra :disabled="!isCurrent" @update:letra="updateLetra(0, $event)" />
     <ContenedorLetra :disabled="!isCurrent" @update:letra="updateLetra(1, $event)" />
     <ContenedorLetra :disabled="!isCurrent" @update:letra="updateLetra(2, $event)" />
     <ContenedorLetra :disabled="!isCurrent" @update:letra="updateLetra(3, $event)" />
     <ContenedorLetra :disabled="!isCurrent" @update:letra="updateLetra(4, $event)" />
    </div>
 </template>
 
 <script setup>
import { ref, defineEmits } from 'vue';
import ContenedorLetra from './ContenedorLetra.vue';

const word = ref(["", "", "", "", ""]);
const palabra = ref("");
const emit = defineEmits(['mostrar:word']);
const props = defineProps({
  isCurrent: Boolean,
  resultado: Array
});

function updateLetra(index, letra){
  word.value[index] = letra;
  palabra.value = word.value.join("");

  console.log(palabra.value);

  emit('mostrar:word', word.value.join(""))
}

async function verificarCasillas() {

}

</script>
