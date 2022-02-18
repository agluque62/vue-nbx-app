<template>
  <div class="body">
    <div class="row bsep" >
      <div class="col-md-12"><Header title="Ulises V 5000i. NBX" :user="GetUser"></Header></div>
    </div>
    <div class="row bsep">
      <div class="col-md-2 menu">
        <label class="mntitle">Opciones</label>
        <nav class="navbar bg-light">
          <!-- <div class="container-fluid"> -->
            <ul class="navbar-nav" style="width:100%;">
              <li class="nav-item"><router-link to="/">Home</router-link></li>
              <li class="nav-item"><router-link to="/radio">Radio</router-link></li>
              <li class="nav-item"><router-link to="/phone">Telefonia</router-link></li>
              <li class="nav-item"><router-link to="/config">Configuracion</router-link></li>
              <li class="nav-item"><router-link to="/about">About</router-link></li>
            </ul>
          <!-- </div> -->
        </nav>
      </div>
      <div class="col-md-10 content">
        <label class="mntitle">{{ ActivePageText }}</label>
        <router-view/>
      </div>
    </div>
    <div class="row bsep">
      <div class="col-md-12"><EventsList></EventsList></div>
    </div>
    <div class="row">
      <div class="col-md-12"><Pie :version="Version" :status="Status"></Pie></div>
    </div>
  </div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <!-- <div><Pie></Pie></div> -->
</template>
<script>
import Header from '@/components/Home/header.vue'
import Pie from '@/components/Home/pie.vue'
import EventsList from '@/components/Home/eventslist.vue'

// Header.setUser("Arturo");
export default ({
  name: 'Home',
  components: {
    Header,
    EventsList,
    Pie
  },
  data(){
    return {
      UserId: "---",
      Version:"???",
      Status:"---"
    }
  },
  computed:{
    ActivePageText(){
      var txt=this.$route.fullPath;
      if (txt=='/') return "Parámetros Generales";
      else if (txt=='/radio') return "Parametros de Radio";
      else if (txt=='/config') return "Configuracion";
      else if (txt=='/phone') return "Parametros de Telefonía";
      else if (txt=='/about') return "Sobre esta Aplicacion";
      return txt;
    },
    GetUser(){
      return this.UserId;
    }
  },
mounted(){
    /** TODO. Obtener el usuario, status y Version y pasarlo a this.UserId */
    // setInterval(() => {
    //         this.UserId += (tcount)++;
    //       }, 1000);

  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.body
{
    text-align: left;
    background-size: 28%; 
    margin: 2%;
    padding: 0;
}
.mntitle{
  width: 100%;
  text-align: center;
  padding: 5px;
  background: #B1DCB4;
  margin-top: 2px;
}
.menu {
    float: left;
    width: 18%;
    height: 70%;
    padding: 0;
    margin-top: 8px;
    margin-bottom: 10px;
    border: 1px solid #42b983;
    border-radius: 5px 5px 5px 5px;
    overflow: hidden;
}
li a {
  display: inline-block;
  text-decoration: none;
  color: #4A7729;
  padding: 5px;
  width:100%;

}
.router-link-active {
  background: #B1DCB4;
}
.content{
    /* border: 1px solid #42b983;
    border-radius: 5px 5px 5px 5px; */
}
.bsep{
  margin-bottom: 10px;
}
</style>
