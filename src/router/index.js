import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/plan',
    name: 'StudyPlan',
    component: () => import('@/views/StudyPlan.vue')
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import('@/views/Progress.vue')
  },
  {
    path: '/notes',
    name: 'Notes',
    component: () => import('@/views/Notes.vue')
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('@/views/Resources.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Projects.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin.vue')
  },
  {
    path: '/topic/:stage/:day',
    name: 'TopicDetail',
    component: () => import('@/views/TopicDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
