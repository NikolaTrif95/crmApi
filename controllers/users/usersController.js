const model = require("../../model/users/model"),
    bcrypt = require("bcrypt");


module.exports = {

    createUser: async (data) => {
        try {
            data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(8), null);
            return await model.createUser(data);
        } catch (err) {
            throw err;
        }
    },

    readUser: async (id) => {
        try {
            return await model.readUser(id);
        } catch (err) {
            throw err;
        }
    },

    updateUser: async (data, id) => {
        try {
            return await model.updateUser(data, id);
        } catch (err) {
            throw err;
        }
    },

    deleteUser: async (id) => {
        try {
            return await model.deleteUser(id);
        } catch (err) {
            throw err;
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
                ...(request.query.last_name && {last_name: convertToNum(request.query.last_name)}),
                ...(request.query.username && {username: convertToNum(request.query.username)}),
                ...(request.query.password && {password: convertToNum(request.query.password)}),
                ...(request.query.email && {email: convertToNum(request.query.email)}),
                ...(request.query.status && {status: convertToNum(request.query.status)}),
            };
            return await model.getUsers(limit, skip, filter, order);
        } catch (err) {
            throw err;
        }
    }
};