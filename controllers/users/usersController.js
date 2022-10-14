const model = require("../../model/users/model");

module.exports = {

    createUser: async (data) => {
        try {
            console.log(data, "DATAA AAAA ODAVDEEEEE")
            return await model.createUser(data);
        } catch (err) {
            throw err;
        }
    },

    readUser: async (id) => {
        try {
            console.log(id, "IDDD?")
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

    getUsers: async (limit, skip, filter, order) => {
        try {
            console.log("SDASDSADASDASDASDSA")
            return await model.getUsers(limit, skip, filter, order);
        } catch (err) {
            throw err;
        }
    }
};