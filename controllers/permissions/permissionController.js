const model = require("../../model/permissions/model");

module.exports = {

    createPermission: async (data) => {
        try {
            return await model.createPermission(data);
        } catch (err) {
            throw err;
        }
    },

    readPermission: async (id) => {
        try {
            return await model.readPermission(id);
        } catch (err) {
            throw err;
        }
    },

    updatePermission: async (data) => {
        try {
            return await model.updatePermission(data.body, data.id);
        } catch (err) {
            throw err;
        }
    },

    deletePermission: async (id) => {
        try {
            return await model.deletePermission(id);
        } catch (err) {
            throw err;
        }
    },

    getPermissions: async () => {
        try {
            return await model.getPermissions();
        } catch (err) {
            throw err;
        }
    }
};