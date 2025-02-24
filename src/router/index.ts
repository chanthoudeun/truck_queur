import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterTruckView from '@/views/RegisterTruckView.vue'
import ReportView from '@/views/ReportView.vue'
import ShipmentPlanView from '@/views/ShipmentPlanView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/register_truck',
    name: 'register_truck',
    component: RegisterTruckView
  },
  {
    path: '/report',
    name: 'report',
    component: ReportView
  },
  {
    path: '/shipment_plan',
    name: 'shipment_plan',
    component: ShipmentPlanView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
