<template>
    <div class="row pie">
        <div class="col-md-2 text-left text-info"><label>{{system_status}}</label></div>
        <div class="col-md-8"><label>Grupo Amper. Copyright @ 2020-2022. Todos los Derechos Reservados</label></div>
        <div class="col-md-2 text-right text-info"><label>{{system_version}}</label></div>
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
    data(){
        return{
            system_status: undefined,
            system_version: undefined
        }
    },
    mounted(){
        this.system_status="No Implementado";
        this.system_version="No Implementado";
    }
}
</script>