const permissionApi = require("../../service"),
    config = require("../../config/config");


    module.exports = {
        createPermission: async (request, response) => {
            console.log("aASDADSADSADSDS")
            try {
                if(request.body) {
                    await permissionApi.permissions.createPermission(request.body);
                    response.send("Permission created");
                }
            } catch (error) {
                console.log(error)
                response.status(500).send("Failed while creating permission");
            }
        },
        readPermission: async (request, response) => {
            try {
                if(request.params.id) {
                    const permission = await permissionApi.permissions.readPermission(request.params.id);
                    response.send(JSON.stringify(permission));
                }
            } catch (error) {
                console.log(error)
                response.status(500).send("Error while reading permission");
            }
        },
        updatePermission: async (request, response) => {
            try {
                if(request.params.id) {
                    await permissionApi.permissions.updatePermission(request.body, request.params.id);
                    response.status(200).send("Permission updated");
                }
            } catch (error) {
                console.log(error)
                response.status(500).send("Error while updating permission")
            }
        },
        deletePermission: async (request, response) => {
            try {
                if(request.params.id) {
                    await permissionApi.permissions.deletePermission(request.params.id);
                    response.status(200).send("Permission deleted");
                }
            } catch (error) {
                response.status(500).send("Error while deleting permission");
            }
        },
        assignPermission: async (request, response) => {
            try {
                if(request.body.code) {
                    let permission = await permissionApi.permissions.getObjectIdByCode(request.body.code);
                    let permissionId = permission.permission.valueOf();
                    await permissionApi.user.updateUser(permissionId, request.params.id);
                    response.status(200).send("Permission assigned");
                }
            } catch (error) {
                console.log(error)
                response.status(500).send("Error while asinging permission to user");    
            }
        }
    }; 