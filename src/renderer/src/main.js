import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routes/index";
import "./assets/less/index.less";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
const app = createApp(App);
app.use(routes);
app.use(ElementPlus);
app.mount("#app");
