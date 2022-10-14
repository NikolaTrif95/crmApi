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
    router.route(`${routePrefix}/`).get(permission.readPermission);

    /*
    * Route for updating Permission
    * PUT /Permissions/{id}
    * @param id - required
    */
    router.route(`${routePrefix}/`).put(permission.updatePermission);

    /*
    * Route for deleting Permission
    * DELETE /Permissions/{id}
    * @param id - required
    */
    router.route(`${routePrefix}/`).delete(permission.deletePermission);

    /*
    * Route for getting lists on board
    * GET /Permissions/
    */
    //router.route(`${routePrefix}/`).get(permission.getPermissions);

    };
    registerPermissionRoutes(services, "/permission");
    return router;
})();



