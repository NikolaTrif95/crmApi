module.exports = {
    responses: {
        "assign200":"Permission assigned",
        "create200":"Registration completed",
        "delete200":"Delete completed",
        "update200":"Updating completed",
        "permission200":"Permission created",
        "permissionNotExists":"Given permission does not exists"
    },
    
    errorResponses: {
        "assign500":"Permission failed",
        "create500":"Registration failed",
        "delete500":"Delete failed",
        "read500":"Error reading",
        "update500":"Updating failed",
        "permission500":"Failed while creating permission"
    },

    mongodb: {
        port: 3000,
        connectUrl: "mongodb://localhost:27017/crmDb"
    },

    app: {
        port: 3000
    }
}
