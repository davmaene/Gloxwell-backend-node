const express = require("express");
const routerTypeSouscription = express.Router();
const { ControllerTypeScouscriptions } = require("../controller/controller.type.souscriptions.js")

routerTypeSouscription.get("/liste", ControllerTypeScouscriptions.getAll);
routerTypeSouscription.post("/souscription/create", ControllerTypeScouscriptions.create);

module.exports = { routerTypeSouscription };