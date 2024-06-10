var payload = {
   "items": [
      {
         "className": "u_cmdb_ci_mongoose_web_server",
         "lookup": [],
         "values": {
            "name": "Mongoose@owa-sd-01",            
            "version": "6.5",
            "running_process_command": "d:\\clouddimensions\\mongoose.exe",
            "sys_class_name": "u_cmdb_ci_mongoose_web_server"
         }
      },
      {
         "className": "cmdb_ci_win_server",
         "lookup": [],
         "values": {
            "name": "OWA-SD-01",
            "ram": "2048"
         }
      }
   ],
   "relations": [
      {
         "type": "Runs on::Runs",
         "parent": 0,
         "child": 1
      }
   ]
}

var jsonUtil = new JSON();
var input = jsonUtil.encode(payload);
var output = SNC.IdentificationEngineScriptableApi.createOrUpdateCI('ServiceNow', input);
gs.print(output);
