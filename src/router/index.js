import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
];

const router = createRouter({

});

export default router;