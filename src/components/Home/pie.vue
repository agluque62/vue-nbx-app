<template>
    <div class="row pie">
        <div class="col-md-2 text-left text-info"><label>{{status}}</label></div>
        <div class="col-md-8"><label>Grupo Amper. Copyright @ 2020-2022. Todos los Derechos Reservados</label></div>
        <div class="col-md-2 text-right text-info"><label>{{version}}</label></div>
    </div>    
</template>
<style>
.pie {
    height: 30px;
    padding-top: 5px;
    text-align: center;
    background-color: #B1DCB4;
    color: #4A7729;
}
</style>
<script>
export default {
    name: "Pie",
    props:[
        'version',
        'status'
    ],
    data(){
        return{
        }
    },
    mounted(){
    }
}
</script>