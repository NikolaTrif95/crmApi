const mongoose = require("mongoose");
const UserSchema = require("./schema")
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
    
    readUser: async (data) => {
        try {
            return await userModel.find({_id: data.id})
            .populate({
                path: "permissionId"
            })
        } catch (error) {
            console.log(error);
        }
    },
    
    updateUser: async (data) => {
        try {
            return await userModel.updateOne({_id: data.id}, {$set: data});
        } catch (error) {
            console.log(error);
        }
    },
    
    deleteUser: async (data) => {
        try {
            return await userModel.remove({_id: data.id});
        } catch (error) {
            console.log(error);
        }
    },
    
    getUsers: async (data) => {
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