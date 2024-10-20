<template>
    <input 
      type="text" 
      maxlength="1"
      v-model="letra"
      @input="emitirLetra"
      :disabled="disabled"
      :class="getClass()" 
    >
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const emit = defineEmits(['update:letra']);
  const props = defineProps({
    letra: String,
    disabled: Boolean,
    estado: Number, // Estado para marcar el input
    tipo: Number    // Tipo de letra (puedes usar valores como 0, 1, 2)
  });
  
  // Ref para manejar el valor de la letra
  const letra = ref(props.letra);
  
  // Emitir la letra al padre
  function emitirLetra() {
    emit('update:letra', letra.value);
  }
  
  function getClass() {
    switch (props.tipo) {
      case 1: // Correcta
        return 'w-20 h-20 text-3xl flex text-center uppercase border-2 outline-none focus:border-green-300 rounded-xl border-green-500';
      case 0: // Presente
        return 'w-20 h-20 text-3xl flex text-center uppercase border-2 outline-none focus:border-yellow-300 rounded-xl border-yellow-500';
      case -1: // Ninguna de las dos
        return 'w-20 h-20 text-3xl flex text-center uppercase border-2 outline-none focus:border-red-300 rounded-xl border-red-500';
      default: // Sin estado definido
        return 'w-20 h-20 text-3xl flex text-center uppercase border-2 outline-none focus:border-slate-300 rounded-xl border-slate-500';
    }
  }
  </script>
  