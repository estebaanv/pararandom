<template>
  <div class="flex flex-col h-screen bg-slate-400">
      <NavbarHorizontal :page="'Reto Diario'"/>

      <div class="relative flex items-center justify-center">
        <img :src="fuegoIcon" alt="Fuego" class="absolute mt-48 object-cover opacity-80 mx-auto h-16 w-16">
        <span class="absolute mt-52 text-4xl text-black font-bold shadow-2xl">{{ rachaReto }}</span>
      </div>

      <div
      @keyup.enter="changeRow"
      class="flex flex-col justify-center flex-grow items-center space-y-2"
      >
          <FilaLetras :isCurrent="rowCurrent === 0" @mostrar:word="actualizarWord"/>
          <FilaLetras :isCurrent="rowCurrent === 1" @mostrar:word="actualizarWord" />
          <FilaLetras :isCurrent="rowCurrent === 2" @mostrar:word="actualizarWord" />
          <FilaLetras :isCurrent="rowCurrent === 3" @mostrar:word="actualizarWord" />
          <FilaLetras :isCurrent="rowCurrent === 4" @mostrar:word="actualizarWord" />
          <FilaLetras :isCurrent="rowCurrent === 5" @mostrar:word="actualizarWord" />
      </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import FilaLetras from '../components/FilaLetras.vue';
import NavbarHorizontal from '../components/NavbarHorizontal.vue';
import fuegoIcon from '../assets/fuego.png';
import axios from 'axios';

const word = ref("");
const rowCurrent = ref(0);
const wordDaily = "write";
const rachaReto = ref(0);
const ganador = ref(false);
const nuevaRacha = computed(() => {
  return rachaReto.value + 1;
});

const usuarioId = "1";

async function changeRow() {    
  if (word.value.length < 5) {
      alert("Complete todas las casillas");
  } else if (word.value === wordDaily) {
      ganador.value = true;
      await actualizarRachaDiaria();
      alert("Felicidades");
      actualizarRacha(); 
  } else {
      rowCurrent.value = rowCurrent.value + 1;
  }
}

function actualizarWord(wordActualizado) {
  word.value = wordActualizado;
  console.log(word.value.length);
  console.log(word.value);
}

const url = 'http://localhost:3000/usuario/';

async function obtenerDatos() {
  try {
      const response = await axios.get(url);
      const usuario = response.data.find(u => u.id === usuarioId);

      console.log(usuario);
      rachaReto.value = usuario.rachaDiaria;
      console.log(rachaReto.value);
  } catch (error) {
      console.error("Error al obtener datos:", error);
  }
}

async function actualizarRachaDiaria() {
    try {
        const response = await fetch(`http://localhost:3000/usuario/${usuarioId}`);
        if (!response.ok) {
            throw new Error('Error al obtener datos del usuario');
        }

        const usuario = await response.json(); 

        const updatedData = {
            ...usuario, 
            rachaDiaria: nuevaRacha.value 
        };

        const updateResponse = await fetch(`http://localhost:3000/usuario/${usuarioId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (!updateResponse.ok) {
            throw new Error('Error al actualizar la racha diaria');
        }

        const responseData = await updateResponse.json();
        console.log("Racha diaria actualizada:", responseData);
    } catch (error) {
        console.error("Error al actualizar la racha diaria:", error);
    }
}


obtenerDatos();
</script>
