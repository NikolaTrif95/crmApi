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

    updatePermission: async (data, id) => {
        try {
            return await model.updatePermission(data, id);
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
    },
    getObjectIdByCode: async (code) => {
        try {
            return await model.getObjectIdByCode(code);
        } catch(err) {
            throw err;
        }
    }
};