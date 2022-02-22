import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Para el almacenamiento global.
import { createStore } from 'vuex'

import Toast, { POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

// Create a new store instance.
const store = createStore({
    state () {
      return {
        genstd: {},
        lastevents: {}
      }
    },
    mutations: {
      set_genstd (state, newstd) {
        state.genstd = newstd;
      },
      set_events (state, newevents){
          state.lastevents=newevents;
      }
    }
  });

  const toastOptions = {
    // You can set your default options here
    timeout: 2000,
    position: POSITION.BOTTOM_RIGHT,
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true  
  };
  
createApp(App)
    .use(Toast, toastOptions)
    .use(router)
    .use(store)
    .mount('#app')
