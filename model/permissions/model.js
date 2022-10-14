const mongoose = require("mongoose");
const PermissionSchema = require("./schema");
const permissionModel = mongoose.model("Permissions", PermissionSchema);

module.exports = {
    
    createPermission: async (data) => {
        try {
            const permission = new permissionModel(data);
            return await permission.save();
        } catch (error) {
            console.log(error);
        }
    },
    
    readPermission: async (id) => {
        try {
            return await permissionModel.find({_id: id});
        } catch (error) {
            console.log(error);
        }
    },
    
    updatePermission: async (data, id) => {
        try {
            return await permissionModel.updateOne({_id: id}, {$set: data});
        } catch (error) {
            console.log(error);
        }
    },
    
    deletePermission: async (id) => {
        try {
            return await permissionModel.remove({_id: id});
        } catch (error) {
            console.log(error);
        }
    },
    getObjectIdByCode: async (code) => {
        try {
            const permissionObject = await permissionModel.find({code:code})
            console.log(permissionObject)
            return {"permission": permissionObject[0]._id};
        } catch (error) {
            
        }
    }
};