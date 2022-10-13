const permissionApi = require("../../service"),
    config = require("../../config/config");


    module.exports = {
        createPermission: async (request, response) => {
            try {
                if(request.body) {
                    await permissionApi.permissionUser(request.body);
                    response.sent();
                    return;
                }
            } catch (error) {
                response.status(500).send(error);
            }
        },
        readPermission: async (request, response) => {
            try {
                const permission = await permissionApi.permissionUser(request.body.id);
                response.sent(permission);
            } catch (error) {
                response.status(500).send(error);
            }
        },
        updatePermission: async (request, response) => {
            try {
                await permissionApi.permissionUser(request.body);
                response.status(200).sent();
            } catch (error) {
                
            }
        },
        deletePermission: async (request, response) => {
            try {
                await permissionApi.permissionUser(request.body.id);
                response.status(200).sent();
            } catch (error) {
                response.status(500).send(error);
            }
        }
    };