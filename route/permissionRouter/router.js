const express = require("express"),
    middleware = require("../../middlewares/routeMiddlewares"),
    permission = require("../../interface/permissions/permissions"),
    services = require("../../service");


module.exports = (function () {
    const router = express.Router();
    const registerPermissionRoutes = (services, routePrefix) => {
    /*
    * Route creating Permission
    * POST /Permission/
    * @param description - required
    * @param code - required
    */
    router.route(`${routePrefix}/`).post(middleware.checkPermissionRequestData, permission.createPermission);

    /*
    * Route for reading Permission
    * GET /Permissions/{id}
    * @param id - required
    */
    router.route(`${routePrefix}/:id`).get(middleware.checkId, permission.readPermission);

    /*
    * Route for updating Permission
    * PUT /Permissions/{id}
    * @param id - required
    */
    router.route(`${routePrefix}/:id`).put(middleware.checkId, permission.updatePermission);

    /*
    * Route for deleting Permission
    * DELETE /Permissions/{id}
    * @param id - required
    */
    router.route(`${routePrefix}/:id`).delete(middleware.checkId, permission.deletePermission);

    /*
    * Route for getting all permissions
    * GET /Permissions/
    */
    //router.route(`${routePrefix}/`).get(permission.getPermissions);

   /*
    * Route for assign permission
    * @param id - required
    * POST /Permissions/
    */
    router.route(`${routePrefix}/:id`).post(middleware.checkId, permission.assignPermission);

};
    registerPermissionRoutes(services, "/permission");
    return router;
})();



