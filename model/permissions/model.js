const mongoose = require("mongoose");
const PermissionSchema = require("./schema");
const permissionModel = mongoose.model("Permissions", PermissionSchema);

module.exports = {
    
    createPermission: async (data) => {
        try {
            const permission = new permissionModel(data);
            return await permission.save();
        } catch (error) {
            throw error;        }
    },
    
    readPermission: async (id) => {
        try {
            return await permissionModel.find({_id: id});
        } catch (error) {
            throw error;
        }
    },
    
    updatePermission: async (data, id) => {
        try {
            return await permissionModel.updateOne({_id: id}, {$set: data});
        } catch (error) {
            throw error;
        }
    },
    
    deletePermission: async (id) => {
        try {
            return await permissionModel.remove({_id: id});
        } catch (error) {
            throw error;
        }
    },
    getObjectIdByCode: async (code) => {
        try {
            const permissionObject = await permissionModel.find({code:code});
            if(permissionObject.length !== 0) {
                return {"permission": permissionObject[0]._id};
            } return;
        } catch (error) {
            throw error;
        }
    }
};