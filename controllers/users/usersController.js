const model = require("../../model/users/model");

module.exports = {

    createUser: async (data) => {
        try {
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

    updateUser: async (data) => {
        try {
            return await model.updateUser(data.User, data.id);
        } catch (err) {
            throw err;
        }
    },

    deleteUser: async (data) => {
        try {
            return await model.deleteUser(id);
        } catch (err) {
            throw err;
        }
    },

    getUsers: async () => {
        try {
            console.log("SDASDSADASDASDASDSA")
            return await model.getUsers();
        } catch (err) {
            throw err;
        }
    }
};