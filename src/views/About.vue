<template>
  <div class="about">
    <div>
      <div class="row g-0">
        <div class="col-md-12 smalltext">
          <ul class="list-group">
            <li class="list-group-item text-center">{{"Ulises V 5000." + " Version " + versionData.Version + " (" + versionData.Fecha + ")"}}</li>
            <li class="list-group-item">
              <ul class="list-group">
                <li class="list-group-item" v-for="comp in versionData.Components" :key="comp.Name">
                  <label class="mediumtext">{{comp.Name + " Ver " + versionData.Version}}</label>
                  <div>
                    <ul class="list-group">
                      <li class="list-group-item pt-1 pb-1" v-for="file in comp.Files" :key="file.Path">
                        <div class="row g-0">
                          <div class="col-md-1"></div>
                          <div class="col-md-3 text-primary"><small>{{file.Path.substring(file.Path.lastIndexOf("\\") + 1)}}</small></div>
                          <div class="col-md-2 text-success"><small>{{file.Size}}</small></div>
                          <div class="col-md-2 text-success"><small>{{file.Date}}</small></div>
                          <div class="col-md-4 text-success"><small>{{file.MD5}}</small></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row g-0 mt-2">
        <button type="button" class="btn btn-success" style="float:right:">Exportar</button>
    </div>
  </div>
</template>

<script>
import {$Comm} from '@/services/comm.js';
import { useToast } from "vue-toastification";

export default {
  name: 'About',
  data(){
    return{
      versionData: {}
    }
  },
  computed:{
    Version(){
      return this.versionData.Version;
    }
  },
  mounted(){
    const toast = useToast();
    setTimeout(()=>{
      $Comm.versiones_get((data)=>{
          if (data.res){
            this.versionData=data.data;
          }
          else {
            console.log("error");
            toast.error("Error al obtener los datos de version");
          }
      });
    }, 200);

  }
}
</script>

<style>
.apie{
  font-size: 60%;
  text-align: center;
}
.smalltext{
  font-size: 80%;
}
.mediumtext{
  font-size: 90%;
}
</style>