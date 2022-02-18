<template>
  <div class="row cabecera">
    <div class="col-md-2 logo"></div>
    <div class="col-md-8 title"><span>{{title}}</span></div>
    <div class="col-md-2 fecha">
      <span>{{date}}</span>
      <div>User: <span>{{user}}</span></div>
    </div>
  </div>    
</template>
/** */
<script>
import moment from "moment";
export default ({
  name: 'Header',
  data(){
    return {
        date: undefined,
        timer: undefined
    }
  },
  props:[
    'title',
    'user'
  ],
  methods:{
  },
  mounted(){
      this.date=moment().format('DD-MM-YY, HH:mm:ss');
      this.timer = setInterval(() => {
        this.date = moment().format('DD-MM-YY, HH:mm:ss');
      }, 1000);
  }
})
</script>
/** */
<style scoped>
.cabecera {
       /* border: 1px solid #4A7729; */
    background-color: #B1DCB4;
    color: #4A7729;
}
.logo {
    height: 85px;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('../../assets/images/corporativo-a.png');
    margin: 0 0 0 0;
}
.title {
    height: 70px;
    margin: 10px 0 0 0;
    text-align: center;
    font-size: 30px;
    padding-top:10px;
}
.fecha {
    height: 70px;
    margin: 10px 0 0 0;
    padding-top: 10px;
    font-size: 15px;
}

</style>