const { response } = require("../../router");
const userApi = require("../../service"),
    config = require("../config/config");

module.exports = {
    createUser: async (request, response) => {
        try {
            if(request.data) {
                await userApi.createUser(request.body);
                response.sent();
                return;
            }
        } catch (error) {
            response.status(500).send(error);
        }
    },
    readUser: async (request, response) => {
        try {
            const user = await userApi.readUser(request.body.id);
            response.sent(user);
        } catch (error) {
            response.status(500).send(error);
        }
    },
    updateUser: async (request, response) => {
        try {
            await userApi.updateUser(request.body);
            response.status(200).sent();
        } catch (error) {
            
        }
    },
    deleteUser: async (request, response) => {
        try {
            await userApi.deleteUser(request.body.id);
            response.status(200).sent();
        } catch (error) {
            response.status(500).send(error);
        }
    },
    getUsers: async (request, response) => {
        try {
            const users = await userApi.getUsers(request.body.id);
            response.sent(users);
        } catch (error) {
            response.status(500).send(error);
        }
    }
};