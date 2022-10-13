const express = require("express"),
    //middlewares = require("../middlewares/routeMiddlewares"),
    endpoitns = require("../interfaces/endpoitns"),
    services = require("../service");

        /*
        * Route creating board
        * POST /1/boards/
        * @queryParam apiKey - required
        * @queryParam serverToken - required
        * @param name - required
        */
        router.route(`${routePrefix}/`).post(middlewares.checkName, endpoitns.boardsEndpoints.createBoard);



module.exports = app;
