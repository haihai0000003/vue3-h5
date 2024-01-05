import { createApp } from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
// import { store } from "./store";

import 'normalize.css'
import 'vant/lib/index.css'
import router from '@/router'
import { Button, Tabbar, TabbarItem, NavBar, Icon, Field,ConfigProvider,Checkbox,Grid, GridItem, NumberKeyboard,CountDown  } from 'vant';
import { createPinia } from 'pinia'
import '@/assets/styles/index.css'
import './router/permission'
import "animate.css";
const app = createApp(App)
const pinia = createPinia()
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Icon);
app.use(pinia)
app.use(router)
app.use(NavBar)
app.use(Field)
app.use(ConfigProvider)
app.use(Checkbox)
app.use(Grid)
app.use(GridItem)
app.use(NumberKeyboard)
app.use(CountDown)
// app.use(store)
router.isReady().then(() => {
    app.mount("#app")
  })
