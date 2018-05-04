var exec = require('cordova/exec');

var uninstallPlugin ={  
    showInfo:function(info,success,error){  
        exec(success, error, "UninstallPlugin", "showInfo", [info]);  
    },  
    uninstallApp:function(success,error){  
        exec(success, error, "UninstallPlugin", "uninstallApp", []);  
    }  
}  
  
module.exports = uninstallPlugin;  

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'toast', 'coolMethod', [arg0]);
};
