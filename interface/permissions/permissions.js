const permissionApi = require("../../service"),
    {logger} = require("../../logger"),
    config = require("../../config/config");


    module.exports = {
        createPermission: async (request, response) => {
            try {
                await permissionApi.permissions.createPermission(request.body);
                response.send(config.responses.permission200);
            } catch (error) {
                logger.error(`Error while creating permission::${error}`);
                response.status(500).send(config.responses.permission500);
            }
        },
        readPermission: async (request, response) => {
            try {
                const permission = await permissionApi.permissions.readPermission(request.params.id);
                response.send(JSON.stringify(permission));
            } catch (error) {
                logger.error(`Error while reading permission::${error}`);
                response.status(500).send(config.responses.read500);
            }
        },
        updatePermission: async (request, response) => {
            try {
                await permissionApi.permissions.updatePermission(request.body, request.params.id);
                response.status(200).send(config.responses.update200);
            } catch (error) {
                logger.error(`Error while updating permission::${error}`);
                response.status(500).send(config.responses.update500)
            }
        },
        deletePermission: async (request, response) => {
            try {
                await permissionApi.permissions.deletePermission(request.params.id);
                response.status(200).send(config.responses.delete200);
            } catch (error) {
                logger.error(`Error while deleting permission::${error}`);
                response.status(500).send(config.responses.delete500);
            }
        },
        assignPermission: async (request, response) => {
            try {
                let permission = await permissionApi.permissions.getObjectIdByCode(request.body.code);
                if(permission) {
                    let permissionId = permission.permission.valueOf();
                    await permissionApi.user.updateUserPermission(permissionId, request.params.id);
                    return response.status(200).send(config.responses.assign200);
                } else {
                    response.status(200).send(config.responses.permissionNotExists);
                }
            } catch (error) {
                logger.error(`Error while assigning permission::${error}`);
                response.status(500).send(config.responses.assign500);    
            }
        }
    }; 