<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <section class="tabs">
        <ul class="nav nav-tabs">
            <li class="nav-item"><a class="nav-link" :class="{ active: pagina==0 }" href="#" @click="selectPage(0)">Estado Global</a></li>
            <li class="nav-item"><a class="nav-link" :class="{ active: pagina==1 }" href="#" @click="selectPage(1)">Configuraciones</a></li>
        </ul>
    </section>

    <section class="contenido">
      <div v-if="pagina===0">
        <div class='text-center mt-3'><strong>Estado Global</strong></div>
        <div class="section">
            <div class="row">
                <div class="col-md-6 text-primary">Version del Servicio</div>
                <div class="col-md-6 text-success text-end">{{Version}}</div>
            </div>
            <div class="row">
                <div class="col-md-6 text-primary">Configuracion Activa</div>
                <div class="col-md-6 text-success text-end">{{ConfigActiva}}</div>
            </div>

        </div>
        <div class='text-center mt-3'><strong>Estado Servicios</strong></div>
        <div class="section">
            <div class="row g-0 serviceRow" :class="serviceStyleClass(CfgServiceData)">
                <div class="col-md-4 btn text-start" ><label class='btn' :class="serviceStyleClass(CfgServiceData)">Configuracion Puestos</label></div>
                <div class="col-md-2 btn text-start" ><label class='btn' :class="serviceStyleClass(CfgServiceData)">{{serviceData(CfgServiceData).mode}}</label></div>
                <div class="col-md-2 btn text-start" ><label class='btn' :class="serviceStyleClass(CfgServiceData)">{{serviceData(CfgServiceData).state}}</label></div>
            </div>
            <div class="row g-0 serviceRow" :class="serviceStyleClass(RadioServiceData)" >
                <div class="col-md-4 btn text-start" ><label class='btn' :class="serviceStyleClass(RadioServiceData)">Radio</label></div>
                <div class="col-md-2 btn text-start" ><label class='btn' :class="serviceStyleClass(RadioServiceData)">{{serviceData(RadioServiceData).mode}}</label></div>
                <div class="col-md-2 btn text-start" ><label class='btn' :class="serviceStyleClass(RadioServiceData)">{{serviceData(RadioServiceData).state}}</label></div>
                <div class="col-md-4 btn text-end" v-if="IsRdMaster">
                    <button class="btn btn-primary" @click="rdServicesCollapsed=!rdServicesCollapsed">Modulos</button>
                </div>
            </div>
            <Transition name='radio'>
              <div class="row g-0" v-if="!rdServicesCollapsed" style="width:33%; margin-left:66%; border: 1px solid lightgray; padding: 1em;">
                  <div class="col-md4">
                      <div class="row g-0" v-for="mod in RadioModules" :key="mod.id">
                          <div class="col-md-8 text-primary">{{mod.id}}</div>
                          <div class="col-md-4 text-success">{{serviceData(mod).mode}}</div>
                      </div>
                  </div>
              </div>
            </Transition>
            <div class="row g-0 serviceRow" :class="serviceStyleClass(TifxServiceData)">
                <div class="col-md-4 btn text-start" ><label class='btn' :class="serviceStyleClass(TifxServiceData)">Interfaces Analogicas</label></div>
                <div class="col-md-2 btn text-start" ><label class='btn' :class="serviceStyleClass(TifxServiceData)">{{serviceData(TifxServiceData).mode}}</label></div>
                <div class="col-md-2 btn text-start" ><label class='btn' :class="serviceStyleClass(TifxServiceData)">{{serviceData(TifxServiceData).state}}</label></div>
            </div>
            <div class="row g-0 serviceRow" :class="serviceStyleClass(PresServiceData)">
                <div class="col-md-4 btn text-start" ><label class='btn' :class="serviceStyleClass(PresServiceData)">Servicio de Presencia</label></div>
                <div class="col-md-2 btn text-start" ><label class='btn' :class="serviceStyleClass(PresServiceData)">{{serviceData(PresServiceData).mode}}</label></div>
                <div class="col-md-2 btn text-start" ><label class='btn' :class="serviceStyleClass(PresServiceData)">{{serviceData(PresServiceData).state}}</label></div>
            </div>
        </div>

      </div>
      <div v-if="pagina===1">
        Pagina 1
      </div>
    </section>

  </div>
</template>
//
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return {
      pagina: 0,
      rdServicesCollapsed: true
    }
  },
  methods: {
    selectPage(pag){
        this.pagina = pag;
    },
    serviceData(service){
        return {
          state: service.std===undefined ? "" : service.std,
          mode: service.level===undefined ? "" : service.level
        };
    },
    serviceStyleClass(service){
      var classObject = {
        'bg-danger': false,
        'bg-warning': false,
        'bg-white': false,
        'text-white': false,
        'text-primary': false
      };
      if (service === undefined || service.std == "Disabled" || service.level==="Error"){
        classObject['bg-danger']=true;
        classObject['text-white']=true;
      }
      else if (service.level=="Slave" && service.std=="Running") {
        classObject['bg-warning']=true;
        classObject['text-white']=true;
      }
      else if (service.level=="Master" && service.std=="Running"){
        classObject['bg-white']=true;
        classObject['text-primary']=true;
      }
      else{
        classObject['bg-danger']=true;
        classObject['text-white']=true;
      }
      return classObject;
    }
  },
  computed:{
    Version(){
      return this.$store.state.genstd.sw_version;
    },
    ConfigActiva(){
      return this.$store.state.genstd.cfg_activa;
    },
    RadioServiceData(){
      return this.$store.state.genstd.rad;
    },
    CfgServiceData(){
      return this.$store.state.genstd.cfg;
    },
    PresServiceData(){
      return this.$store.state.genstd.pre;
    },
    TifxServiceData(){
      return this.$store.state.genstd.ifx;
    },
    IsRdMaster(){
      return this.RadioServiceData.level=='Master';
    },
    RadioModules(){
      return this.RadioServiceData.modules;
    }
  }
}
</script>
//
<style>
    .tabs {
        /* float: left; */
        margin-top: 5px;
        width: 100%;
    }
    .section{
      width: 80%;
      margin-bottom: 10px;
      margin-left: 10%;
      border: 1px solid lightgray;
      padding: 6px;
    }
    .serviceRow {
      /* height: 3em;   */
      margin-bottom: 1em;
    }
    .appText{
      font-size: 80%;
    }
    /** Transiciones */
    .radio-enter-active,
    .radio-leave-active {
      transition: opacity 1s ease;
    }
    .radio-enter-from,
    .radio-leave-to {
      opacity: 0;
    }
</style>
