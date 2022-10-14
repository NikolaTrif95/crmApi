const permissionApi = require("../../service"),
    config = require("../../config/config");


    module.exports = {
        createPermission: async (request, response) => {
            console.log("aASDADSADSADSDS")
            try {
                if(request.body) {
                    await permissionApi.permissionUser(request.body);
                    response.send("Permission created");
                }
            } catch (error) {
                response.status(500).send("Failed while creating permission");
            }
        },
        readPermission: async (request, response) => {
            try {
                if(request.params.id) {
                    const permission = await permissionApi.permissionUser(request.params.id);
                    response.sent(JSON.stringify(permission));
                }
            } catch (error) {
                response.status(500).send("Error while reading permission");
            }
        },
        updatePermission: async (request, response) => {
            try {
                if(request.params.id) {
                    await permissionApi.permissionUser(request.data.body, request.params.id);
                    response.status(200).sent("Permission updated");
                }
            } catch (error) {
                response.status(500).send("Error while updating permission")
            }
        },
        deletePermission: async (request, response) => {
            try {
                if(request.params.id) {
                    await permissionApi.permissionUser(request.params.id);
                    response.status(200).sent("Permission deleted");
                }
            } catch (error) {
                response.status(500).send("Error while deleting permission");
            }
        }
    };