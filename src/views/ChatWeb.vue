<template>
    <div class="bg-slate-300 h-screen flex">
      <NavbarVertical class="h-full"/>
      <ListaDeChats :usuarioActualId="'1'"/>
    </div>
</template>

<script setup>
import NavbarVertical from "../components/NavbarVertical.vue";
import ListaDeChats from "../components/ListaDeChats.vue";
import { ref, onMounted } from 'vue';

const usuarioId = ref(null);

onMounted(() => {
  const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
  usuarioId.value = usuarioLogueado ? usuarioLogueado.id : null;
});
</script>

