const controllerPath = "./controllers";

module.exports = {
    user: require(`${controllerPath}/users/usersController`),
    permissions: require(`${controllerPath}/permissions/permissionsController`),
};