const permissionModel = mongoose.model("Permissions", PermissionsSchema);

module.exports = {
    
    createPermission: (data) => {
        try {
            const permission = new permissionModel(data);
            return await permissionModel.save();
        } catch (error) {
            console.log(error);
        }
    },
    
    readPermission: (data) => {
        try {
            return await permissionModel.find({_id: data.id});
        } catch (error) {
            console.log(error);
        }
    },
    
    updatePermission: (data) => {
        try {
            return await permissionModel.updateOne({_id: data.id}, {$set: data});
        } catch (error) {
            console.log(error);
        }
    },
    
    deletePermission: (data) => {
        try {
            return await permissionModel.remove({_id: data.id});
        } catch (error) {
            console.log(error);
        }
    }
};