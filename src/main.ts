import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@purge-icons/generated';
import FIcon from '@/components/FIcon';
import 'uno.css'
import '@unocss/reset/tailwind.css'
const pinia = createPinia()

createApp(App)
  .component("f-icon", FIcon)
  .use(router)
  .use(pinia)
  .mount('#app')