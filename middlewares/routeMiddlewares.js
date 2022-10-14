module.exports = {

    checkRequestData: (req, res, next) => {
        if(!req.body.first_name && typeof req.body.first_name !== "string" ||
            !req.body.last_name  && typeof req.body.last_name !== "string"  ||
            !req.body.username  && typeof req.body.username !== "string"  ||
            !req.body.password  && typeof req.body.password !== "string"  ||
            !req.body.status  && typeof req.body.status !== "string"  ||
            !req.body.email  && typeof req.body.email !== "string" ) {
            return res.status(401).json({
                status: "Fail",
                message: "Missing request required params"
            });
        }
        next()
    },

    checkPermissionRequestData: (req, res, next) => {
        if (!req.body.description && typeof req.body.description !== "string" ||
            !req.body.code && typeof req.body.code !== "string") {
            return res.status(401).json({
                status: "Fail",
                message: "Missing request required params"
            });
        }
        next()
    },


        checkId: (req, res, next) => {
        if(!req.params || !req.params.id) {
            return res.status(400).json({
                status: "Fail",
                message: "Missing request required params"
            });
        } next()
    }

};