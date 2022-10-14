const userApi = require("../../service"),
    {logger} = require("../../logger"),
    config = require("../../config/config");

module.exports = {
    createUser: async (request, response) => {
        try {
            logger.info("Starting Registration")
            await userApi.user.createUser(request.body);
            response.status(200).send("User created");
        } catch (error) {
            logger.error(`Error while creating user::${error}`);
            response.send(error);
        }
    },
    readUser: async (request, response) => {
        try {
            const user = await userApi.user.readUser(request.params.id);
            response.send(user);
        } catch (error) {
            logger.error(`Error while reading user::${error}`);
            response.status(500).end(JSON.stringify(error));
        }
    },
    updateUser: async (request, response) => {
        try {
            await userApi.user.updateUser(request.body, request.params.id);
            response.status(200).send("User updated");
        } catch (error) {
            logger.error(`Error while updating user::${error}`);
            response.status(500).send("Updating failed");
        }
    },
    deleteUser: async (request, response) => {
        try {
            await userApi.user.deleteUser(request.params.id);
            response.status(200).send("User deleted");
        } catch (error) {
            logger.error(`Error while deleting user::${error}`);
            response.status(500).end(error);
        }
    },
    getUsers: async (request, response) => {
        try {
            const users = await userApi.user.getUsers(request, response);
            response.send(users);
        } catch (error) {
            logger.error(`Error while getting all users::${error}`);
            response.status(500).end(error);
        }
    },
};

const convertToNum = function (str) {
    return str === "asc" ? -1 : 1;
};