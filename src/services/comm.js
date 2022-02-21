import axios from 'axios';
var Simulate = location.port == 8080;

/** Peticiones REST */
var rest_url_inci = "/inci";
var rest_url_std = "/std";
var rest_url_preconf = "/preconf";
var rest_url_local_config = "/lconfig";
var rest_url_local_config_ext = "/lconfig-ext";
var rest_url_radio_sessions = "/rdsessions";
var rest_url_radio_gestormn = "/gestormn";
var rest_url_radio_gestormn_habilita = "/gestormn/enable";
var rest_url_radio_gestormn_asigna = "/gestormn/assign";
var rest_url_tlf_tifxinfo = "/tifxinfo";
var rest_url_tlf_pbxinfo = "/pbxinfo";
var rest_url_versiones = "/versiones";
var rest_url_radio_hf = "/rdhf";
var rest_url_radio_11 = "/rd11";
var rest_url_ps = "/ps";
var rest_url_logs = "/logs";
var rest_url_alive="/alive";

export const $Comm = {
    alive: function (deliver) {
        Get(rest_url_alive, deliver);
    }
    , inci_get: function (deliver) {
        return Get(rest_url_inci, deliver);
    }
    , stdgen_get: function (deliver) {
        return Get(rest_url_std, deliver);
    }
    , preconf_list: function (deliver) {
        return Get(rest_url_preconf, deliver);
    }
    , preconf_delete: function (name, deliver) {
        return Del(rest_url_preconf + "/" + name, deliver );
    }
    , preconf_activate: function (fecha, name, deliver) {
        return Post(rest_url_preconf, { fecha: fecha, nombre: name }, deliver);
    }
    , preconf_saveas: function (fecha, name, deliver) {
        return Put(rest_url_preconf, { fecha: fecha, nombre: name }, deliver);
    }
    , lconfig_get: function (deliver) {
        return Get(rest_url_local_config, deliver);
    }
    , lconfig_ext_get: function (deliver) {
        return Get(rest_url_local_config_ext, deliver);
    }
    , lconfig_set: function (data, deliver) {
        return Post(rest_url_local_config, data, deliver);
    }
    , lconfig_ext_set: function (data, deliver) {
        return Post(rest_url_local_config_ext, data, deliver);
    }
    , radio_sessions_get: function (deliver) {
        return Get(rest_url_radio_sessions, deliver);
    }
    , radio_gestormn_get: function (deliver) {
        return Get(rest_url_radio_gestormn, deliver);
    }
    , radio_hf_get: function (deliver) {
        return Get(rest_url_radio_hf, deliver);
    }
    , radio_11_get: function (deliver) {
        return Get(rest_url_radio_11, deliver);
    }
    , radio_11_select: function (id, deliver) {
        return Post(rest_url_radio_11, { id, command: "select" }, deliver);
    }
    , radio_11_enable: function (id, enable, deliver) {
        return Post(rest_url_radio_11, { id, command: enable }, deliver);
    }
    , radio_gestormn_enable: function (data, deliver) {
        return Post(rest_url_radio_gestormn_habilita, data, deliver);
    }
    , radio_gestormn_reset: function (deliver) {
        return Del(rest_url_radio_gestormn, deliver);
    }
    , radio_gestormn_asigna: function (data, deliver) {
        return Post(rest_url_radio_gestormn_asigna, data, deliver);
    }
    , radio_hf_release: function (data, deliver) {
        var url = rest_url_radio_hf + "/" + data.id;
        return Post(url, data, deliver);
    }
    , tlftifx_info_get: function (deliver) {
        return Get(rest_url_tlf_tifxinfo, deliver);
    }
    , tlfpbx_info_get: function (deliver) {
        return Get(rest_url_tlf_pbxinfo, deliver);
    }
    , logs_get: function (deliver) {
        return Get(rest_url_logs, deliver);
    }
    , versiones_get: function (deliver) {
        return Get(rest_url_versiones, deliver);
    }
    , psinfo_get: function (deliver) {
        return Get(rest_url_ps, deliver);
    }
};

function Get(url, deliver) {
    axios.get(normalizeUrl(url)).then(
        (response) => {
            if (response.status == 200) {
                if ((typeof response.data) == 'object') {
                    if (deliver) deliver({res: true, data: response.data});
                }
                else {
                        // Seguramente ha vencido la sesion.
                    console.log("Sesion Vencida...");
                    window.location.href = "/login.html";
                    if (deliver) deliver({res: false, data: response});
                }
            }
            else {
                    // Error en el servidor.
                console.log("Error Servidor " + response.status);
                if (deliver) deliver({res: false, data: response});
            }
        },
        (error) => {
            // Error en el tratamiento de la peticion.
            console.log("Error Peticion: ", error);
            //window.open("/", "_self");
            if (deliver) deliver({res: false, data: error});
        }
    ).catch((error)=>{
        console.log("Error Catched on Get: ", error);
    });
}
//
function Post(url, data, deliver) {
    axios.post(normalizeUrl(url), data)
      .then(function (response) {
        if (deliver) deliver({res: true, data: response.data});
      })
      .catch(function (error) {
        console.log("Error Catched on Post: ", error);
        console.log(error);
      });
}
//
function Put(url, data, deliver) {
    axios.put(normalizeUrl(url), data)
      .then(function (response) {
        if (deliver) deliver({res: true, data: response.data});
      })
      .catch(function (error) {
        console.log("Error Catched on Put: ", error);
        console.log(error);
      });
}
//
function Del(url, data, deliver) {
    axios.del(normalizeUrl(url), data)
      .then(function (response) {
        if (deliver) deliver({res: true, data: response.data});
      })
      .catch(function (error) {
        console.log("Error Catched on Post: ", error);
        console.log(error);
      });
}

function normalizeUrl(url) {
    if (Simulate == false)
        return url;
    return "/simulate" + url + ".json";
}

export default {$Comm};
