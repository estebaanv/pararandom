<template>
    <nav class="w-16 min-w-16 p-1 bg-white text-white  flex flex-col justify-between shadow-2xl rounded-xl items-center pb-2 pt-2">
        <div>
            <ul>
                <IconoComponente
                :src="userIcon"
                alt="Perfil del usuario"
                title="Perfil"
                />
                <IconoComponente
                :src="notificacionesIcon"
                alt="Notificaciones"
                title="Notificaciones"
                />
            </ul>
        </div>

        <div>
            <ul>
                <IconoComponente
                :src="juegoDiarioIcon"
                alt="Juego diario"
                title="Juego diario"
                />
                <IconoComponente
                :src="clasificatoriaIcon"
                alt="Clasificacion"
                title="Clasificacion"
                />
                <IconoComponente
                :src="foroIcon"
                alt="Foro"
                title="Foro"
                />
                <IconoComponente
                :src="juegoParesIcon"
                alt="Juego de pares"
                title="Juego de pares"
                />
            </ul>
        </div>

        <div>
            <ul>
                <RouterLink to="/">
                    <IconoComponente
                    :src="menuIcon"
                    alt="Menu"
                    title="Menu"
                    />
                </RouterLink>
            </ul>
        </div>
</nav>
</template>

<script setup>
import IconoComponente from './IconoComponente.vue';
import userIcon from '../assets/usuario-de-perfil.png';
import notificacionesIcon from '../assets/boton-de-notificaciones.png';
import juegoDiarioIcon from '../assets/flama-de-fuego.png';
import clasificatoriaIcon from '../assets/clasificacion.png';
import foroIcon from '../assets/charla.png';
import juegoParesIcon from '../assets/juego-de-poquer.png';
import menuIcon from '../assets/casa.png';
import { RouterLink } from 'vue-router';
</script>