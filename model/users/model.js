const userModel = mongoose.model("User", UserSchema);

module.exports = {

    createUser: async (data) => {
        try {
            const user = new userModel(data);
            return await userModel.save()
        } catch (error) {
            console.log(error);
        }
    },
    
    readUser: (data) => {
        try {
            return await userModel.find({_id: data.id})
            .populate({
                path: "permissionId"
            })
        } catch (error) {
            console.log(error);
        }
    },
    
    updateUser: (data) => {
        try {
            return await userModel.updateOne({_id: data.id}, {$set: data});
        } catch (error) {
            console.log(error);
        }
    },
    
    deleteUser: (data) => {
        try {
            return await userModel.remove({_id: data.id});
        } catch (error) {
            console.log(error);
        }
    },
    
    getUsers: (data) => {
        try {
            return await userModel.find({})
            .populate({
                path: "permissionId"
            });
        } catch (error) {
            console.log(error);
        }
    }
};