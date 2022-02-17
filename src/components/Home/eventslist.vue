<template>
    <div class="row">
        <div class="col-md-12">
            <label>Ultimos Eventos</label>
            <ag-grid-vue 
                style="width: 100%; height: 172px;"
                class="ag-theme-alpine"
                :headerHeight="height"
                :rowHeight="height"
                :pagination="true"
                :paginationPageSize="pagesize"
                :columnDefs="columnDefs"
                :rowData="rowData">
            </ag-grid-vue>
        </div>
    </div>
</template>
/** */
<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
export default {
    name: "EventsList",
    components:{
        AgGridVue
    },
    data(){
        return {
            height: 30,
            pagesize: 3,
            columnDefs: [
                { headerName: 'Hora', field: 'fh', width: 100},
                { headerName: 'Servicio', field: 'ser', width: 200},
                { headerName: 'Evento', field: 'ev', flex: 2},
                { headerName: 'Parametros', field: 'par', flex:2}
            ],
            rowData: [
                // { id:1, fh:'10:02:33', ser: 'RdService', ev: 'Servicio no operativo',par: '0.03343' },
                // { id:2, fh:'10:02:33', ser: 'CfgService', ev: 'Servicio no operativo',par: '0.03343' },
                // { id:3, fh:'10:02:33', ser: 'TifxService', ev: 'Servicio no operativo',par: '0.03343' },
                // { id:4, fh:'10:02:33', ser: 'PresService', ev: 'Servicio no operativo',par: '0.03343' },
                // { id:5, fh:'10:02:33', ser: 'RdService', ev: 'Servicio Operativo',par: '0.03343' },
                // { id:6, fh:'10:02:33', ser: 'TifxService', ev: 'Servicio Operativo',par: '0.03343' },
                // { id:7, fh:'10:02:33', ser: 'CfgService', ev: 'Servicio Operativo',par: '0.03343' },
                // { id:8, fh:'10:02:33', ser: 'PresService', ev: 'Servicio Operativo',par: '0.03343' }
            ],
        };
    },
    computed:{
        tableSize(){
            return this.height*(this.pagesize+2);
        },
        tableStyle(){
            return "width: 100%; height: " + this.tableSize +"px;";
        }
    }
}
</script>
/** */
<style>

</style>