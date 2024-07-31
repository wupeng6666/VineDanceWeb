import { createRouter, createWebHistory } from 'vue-router';
import PCHome from './components/PC/PCHome.vue';
import PCFees from './components/PC/PCFee.vue';
import PCContactUs from './components/PC/PCContactUs.vue';
import PCLogin from './components/PC/PCLogin.vue';
import PCVideo from './components/PC/PCVideo.vue';



const routes = [

  {
    path: '/PCHome',
    name: 'PCHome',
    component: PCHome
  },
  {
    path: '/PCFees',
    name: 'PCFees',
    component: PCFees
  },
  {
    path: '/PCVideo',
    name: 'PCVideo',
    component: PCVideo
  },
  {
    path: '/PCcontactUs',
    name: 'PCContactUs',
    component: PCContactUs
  },
  {
    path: '/PClogin',
    name: 'PCLogin',
    component: PCLogin
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VUE_APP_BASE_URL),
  routes
});

export default router;



