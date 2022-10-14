const permissionApi = require("../../service"),
    config = require("../../config/config");


    module.exports = {
        createPermission: async (request, response) => {
            try {
                await permissionApi.permissions.createPermission(request.body);
                response.send("Permission created");
            } catch (error) {
                logger.error(`Error while creating permission::${error}`);
                response.status(500).send("Failed while creating permission");
            }
        },
        readPermission: async (request, response) => {
            try {
                const permission = await permissionApi.permissions.readPermission(request.params.id);
                response.send(JSON.stringify(permission));
            } catch (error) {
                logger.error(`Error while reading permission::${error}`);
                response.status(500).send("Error while reading permission");
            }
        },
        updatePermission: async (request, response) => {
            try {
                await permissionApi.permissions.updatePermission(request.body, request.params.id);
                response.status(200).send("Permission updated");
            } catch (error) {
                logger.error(`Error while updating permission::${error}`);
                response.status(500).send("Error while updating permission")
            }
        },
        deletePermission: async (request, response) => {
            try {
                await permissionApi.permissions.deletePermission(request.params.id);
                response.status(200).send("Permission deleted");
            } catch (error) {
                logger.error(`Error while deleting permission::${error}`);
                response.status(500).send("Error while deleting permission");
            }
        },
        assignPermission: async (request, response) => {
            try {
                let permission = await permissionApi.permissions.getObjectIdByCode(request.body.code);
                let permissionId = permission.permission.valueOf();
                await permissionApi.user.updateUser(permissionId, request.params.id);
                response.status(200).send("Permission assigned");
            } catch (error) {
                logger.error(`Error while assigning permission::${error}`);
                response.status(500).send("Error while asinging permission to user");    
            }
        }
    }; 