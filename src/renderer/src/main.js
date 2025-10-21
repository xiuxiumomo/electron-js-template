import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routes/index";
import "./assets/less/index.less";
const app = createApp(App);
app.use(routes);
app.mount("#app");
