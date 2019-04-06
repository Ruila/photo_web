import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Work from './components/Work.vue'
import Profile from './components/profile.vue'

export const routes = [
  {
    path: '/',
    components: {
      default: Home,
      nav: Header
    }
  },
  {
    path: '/work',
    components:{
      default: Work,
      nav: Header
    }
  },
  {
    path: '/profile',
    components:{
      default: Profile
    }
  },
  {
  path: '*',
  redirect: '/',
}
];
