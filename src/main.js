import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import QuizView from "./views/QuizView.vue";
import FlashView from "./views/FlashView.vue";
import NotesView from "./views/NotesView.vue";
import "./style.css";

// hash history: działa na GitHub Pages bez konfiguracji serwera
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: QuizView },
    { path: "/fiszki", component: FlashView },
    { path: "/notatki", component: NotesView },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

createApp(App).use(router).mount("#app");
