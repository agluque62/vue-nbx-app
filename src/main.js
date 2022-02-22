import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Para el almacenamiento global.
import { createStore } from 'vuex'
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

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
