const express = require("express"),
    //middlewares = require("../middlewares/routeMiddlewares"),
    user = require("../../interface/users/users"),
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
        router.route(`${routePrefix}/:id`).get(user.readUser);

        /*
        * Route for updating user
        * PUT /users/{id}
        * @param id - required
        */
        router.route(`${routePrefix}/:id`).put(user.updateUser);

        /*
        * Route for deleting user
        * DELETE /users/{id}
        * @param id - required
        */
        router.route(`${routePrefix}/:id`).delete(user.deleteUser);

        /*
        * Route for getting lists on board
        * GET /users/
        */
        router.route(`${routePrefix}/`).get(user.getUsers);

        };

        registerUserRoutes(services, "/users");
        return router;
})();



