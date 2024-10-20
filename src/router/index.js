
import { createRouter, createWebHistory } from 'vue-router';
import LoginContainer from '../components/LoginContainer.vue';
import RegisterContainer from '../components/RegisterContainer.vue';
import ParesGame from '../components/ParesGame.vue';
import RankingContainer from '../components/RankingContainer.vue';
import MainMenu from '../components/MainMenu.vue';
import ProfileContainer from '../components/ProfileContainer.vue';

const routes = [
  { path: '/login',
    name: 'Login',
    component: LoginContainer
  },
  { path: '/register', name: 'Register', component: RegisterContainer },
  { path: '/pares', name: 'Game', component: ParesGame },
  { path: '/ranking', name: 'Ranking', component: RankingContainer },
  { path: '/main', name: 'MainMenu', component: MainMenu },
  { path: '/profile/:id', name: 'Profile', component: ProfileContainer, prop: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

