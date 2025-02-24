import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './style.css';
import './assets/main.css';
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
// import './assets/tailwind.css';


const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.component('base-card',BaseCard)
app.component('base-button',BaseButton)
app.component('base-badge',BaseBadge)

app.mount('#app');