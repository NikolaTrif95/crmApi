const userApi = require("../../service"),
    config = require("../../config/config");

module.exports = {
    createUser: async (request, response) => {
        try {
            if(request.body) {
                await userApi.user.createUser(request.body);
                response.status(200).send();
                return;
            }
        } catch (error) {
            console.log(error)
            response.send(error);
        }
    },
    readUser: async (request, response) => {
        try {
            console.log(request.params.id, "???????")
            if(request.params.id) {
                const user = await userApi.user.readUser(request.params.id);
                response.send(user);
            }
        } catch (error) {
            console.log(error)
            response.status(500).end(JSON.stringify(error));
        }
    },
    updateUser: async (request, response) => {
        try {
            if(request.params.id) {
                console.log(request.url)
                await userApi.user.updateUser(request.body, request.params.id);
                response.status(200).send("User updated");
            }
        } catch (error) {
            console.log(error)
            response.status(500).send("Updating failed");
        }
    },
    deleteUser: async (request, response) => {
        try {
            if(request.params.id) {
                await userApi.user.deleteUser(request.params.id);
                response.status(200).send("User deleted");
            }
        } catch (error) {
            console.log(error)
            response.status(500).end(error);
        }
    },
    getUsers: async (request, response) => {
        try {
            // Pagination
            const page = request.query.page * 1 || 1;
            const limit = request.query.limit * 1 || 10;
            const skip = (page - 1) * limit;

            // Filtering
            const filter = request.query.filter;

            // Ordering
            const order = {
                ...(request.query.first_name && {first_name: convertToNum(request.query.first_name)}),
            }

            const users = await userApi.user.getUsers(limit, skip, filter, order);
            response.send(users);
        } catch (error) {
            console.log(error)
            response.status(500).end(error);
        }
    },
};

const convertToNum = function (str) {
    return str === "asc" ? -1 : 1;
};