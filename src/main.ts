import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "@/router";

createApp(App as any)
  .use(createPinia())
  .use(router)
  .mount("#app");
