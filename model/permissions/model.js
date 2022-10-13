const mongoose = require("mongoose");
const PermissionSchema = require("./schema");
const permissionModel = mongoose.model("Permissions", PermissionSchema);

module.exports = {
    
    createPermission: async (data) => {
        try {
            const permission = new permissionModel(data);
            return await permissionModel.save();
        } catch (error) {
            console.log(error);
        }
    },
    
    readPermission: async (data) => {
        try {
            return await permissionModel.find({_id: data.id});
        } catch (error) {
            console.log(error);
        }
    },
    
    updatePermission: async (data) => {
        try {
            return await permissionModel.updateOne({_id: data.id}, {$set: data});
        } catch (error) {
            console.log(error);
        }
    },
    
    deletePermission: async (data) => {
        try {
            return await permissionModel.remove({_id: data.id});
        } catch (error) {
            console.log(error);
        }
    }
};