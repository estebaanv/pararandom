import { createRouter, createWebHistory } from "vue-router";
import RetoDiario from "../views/RetoDiario.vue";
import HomeView from "../views/HomeView.vue";
import FlashCardMenu from "../views/FlashCardMenu.vue";
import ChatWeb from "../views/ChatWeb.vue";
import StudyFlashCard from "../views/StudyFlashCard.vue";

const routes = [
    { path: '/', component: HomeView},
    { path: '/retodiario', component: RetoDiario},
    { path: '/flashcards', component: FlashCardMenu},
    { path: '/chat', component: ChatWeb},
    { path: '/flashcards/estudiar/:categoria/:usuarioId', 
        name: 'Estudiar',
        component: () => import('../views/StudyFlashCard.vue')
    },
    { path: '/flashcards/crear/:categoria/:usuarioId', 
        name: 'Crear',
        component: () => import('../views/CrearFlashCard.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router