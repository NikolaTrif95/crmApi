const mongoose = require("mongoose");
const UserSchema = require("./schema");
const {logger} = require("../../logger");
const userModel = mongoose.model("User", UserSchema);

module.exports = {

    createUser: async (data) => {
        try {
            const user = new userModel(data);
            return await user.save();
        } catch (error) {
            throw error;
            
        }
    },
    
    readUser: async (id) => {
        try {
            return await userModel.find({_id: id})
            .populate({
                path: "permissionId"
            })
        } catch (error) {
            throw error;
        }
    },
    
    updateUser: async (data, id) => {
        try {
            return await userModel.updateOne({_id: id}, {$set: data});
        } catch (error) {
            throw error;
        }
    },
    
    deleteUser: async (id) => {
        try {
            return await userModel.remove({_id: id});
        } catch (error) {
            throw error;
        }
    },
    
    getUsers: async (limit, skip, filter, order) => {
        try {
            let match = {};
            if (filter) {
                let regex = new RegExp(filter, 'i');
                match = { $or: [
                    { first_name: regex },
                    { last_name: regex },
                    { username: regex },
                    { email: regex },
                    { status: regex },
                ]};
            }

            return {
                data: await userModel.find(match).sort(order).skip(skip).limit(limit),
                count: await userModel.find(match).count()
            }
        } catch (error) {
            throw error;
        }
    },
    updateUserPermission: async (data, id) => {
        await userModel.updateOne({_id: id}, {$push: { permissionId: data }})
    }
};