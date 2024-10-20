<template>
  <div class="flex space-x-2">
    <ContenedorLetra 
      :disabled="!isCurrent" 
      :letra="word[0]" 
      :tipo="determineTipo(0)" 
      @update:letra="updateLetra(0, $event)" 
    />
    
    <ContenedorLetra 
      :disabled="!isCurrent" 
      :letra="word[1]" 
      :tipo="determineTipo(1)" 
      @update:letra="updateLetra(1, $event)" 
    />

    <ContenedorLetra 
      :disabled="!isCurrent" 
      :letra="word[2]" 
      :tipo="determineTipo(2)" 
      @update:letra="updateLetra(2, $event)" 
    />

    <ContenedorLetra 
      :disabled="!isCurrent" 
      :letra="word[3]" 
      :tipo="determineTipo(3)" 
      @update:letra="updateLetra(3, $event)" 
    />

    <ContenedorLetra 
      :disabled="!isCurrent" 
      :letra="word[4]" 
      :tipo="determineTipo(4)" 
      @update:letra="updateLetra(4, $event)" 
    />
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue';
import ContenedorLetra from './ContenedorLetra.vue';

const word = ref(["", "", "", "", ""]);
const palabra = ref("");
const emit = defineEmits(['mostrar:word']);
const props = defineProps({
  isCurrent: Boolean,
  resultado: Array
});

// La palabra correcta para comparar (puede ser dinámica en función del juego)
const wordDaily = "write"; // Cambia esto según el contexto del juego

function updateLetra(index, letra) {
  word.value[index] = letra;
  palabra.value = word.value.join("");
  console.log(palabra.value);
  emit('mostrar:word', palabra.value);
}

// Determina el tipo de letra basado en el input y la palabra correcta
function determineTipo(index) {
  const letra = word.value[index];

  if (letra === wordDaily[index]) {
    return 1; // Correcta
  } else if (wordDaily.includes(letra)) {
    return 0; // Presente
  }
  
  return -1; // Ninguna de las dos
}

async function verificarCasillas() {
  // Lógica para verificar si todas las letras son correctas, etc.
}
</script>
