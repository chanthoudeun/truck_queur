import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterTruckView from '@/views/RegisterTruckView.vue'
import ReportView from '@/views/ReportView.vue'
import ShipmentPlanView from '@/views/ShipmentPlanView.vue'
import { useAuthStore } from '@/stores/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: {
      requiresAuth: false,
    },

  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/register_truck',
    name: 'register_truck',
    component: RegisterTruckView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/report',
    name: 'report',
    component: ReportView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/shipment_plan',
    name: 'shipment_plan',
    component: ShipmentPlanView,
    meta: {
      requiresAuth: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.user;

  if (to.path === '/' && isAuthenticated) {
    next('/dashboard');  // Redirect to dashboard if already authenticated
  } else if (to.matched.some(route => route.meta.requiresAuth) && !isAuthenticated) {
    next('/');  // Redirect to login page if authentication is required and user is not logged in
  } else {
    next();
  }
});
export default router
