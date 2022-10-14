const express = require("express"),
    //middlewares = require("../middlewares/routeMiddlewares"),
    permission = require("../../interface/permissions/permissions"),
    services = require("../../service");


module.exports = (function () {
    const router = express.Router();
    const registerPermissionRoutes = (services, routePrefix) => {
    /*
    * Route creating Permission
    * POST /Permission/
    * @param firstName - required
    * @param lastName - required
    */
    router.route(`${routePrefix}/`).post(permission.createPermission);

    /*
    * Route for reading Permission
    * GET /Permissions/{id}
    * @param id - required
    */
    router.route(`${routePrefix}/:id`).get(permission.readPermission);

    /*
    * Route for updating Permission
    * PUT /Permissions/{id}
    * @param id - required
    */
    router.route(`${routePrefix}/:id`).put(permission.updatePermission);

    /*
    * Route for deleting Permission
    * DELETE /Permissions/{id}
    * @param id - required
    */
    router.route(`${routePrefix}/:id`).delete(permission.deletePermission);

    /*
    * Route for getting lists on board
    * GET /Permissions/
    */
    //router.route(`${routePrefix}/`).get(permission.getPermissions);

    

   /*
    * Route for getting lists on board
    * POST /Permissions/
    */
    router.route(`${routePrefix}/:id`).post(permission.assignPermission);

};
    registerPermissionRoutes(services, "/permission");
    return router;
})();



