const express = require("express"),
    //middlewares = require("../middlewares/routeMiddlewares"),
    permission = require("../../interface/permissions/permissions"),
    services = require("../../service");


module.exports = (function () {
        const router = express.Router();
        const registerUserRoutes = (service, routePrefix) => {
        /*
        * Route creating user
        * POST /user/
        * @param firstName - required
        * @param lastName - required
        * @param username - required
        * @param password - required
        * @param email - required
        * @param status - required
        * @param name - required
        */
        router.route(`${routePrefix}/`).post(user.createUser);

        /*
        * Route for reading user
        * GET /users/{id}
        * @param id - required
        */
        router.route(`${routePrefix}/`).post(user.readUser);

        /*
        * Route for updating user
        * PUT /users/{id}
        * @param id - required
        */
        router.route(`${routePrefix}/`).post(user.updateUser);

        /*
        * Route for deleting user
        * DELETE /users/{id}
        * @param id - required
        */
        router.route(`${routePrefix}/`).post(user.deleteUser);

        /*
        * Route for getting lists on board
        * GET /users/
        */
        router.route(`${routePrefix}/`).post(user.getUsers);

        };
        registerUserRoutes(services, "/users");
        return router;
});



