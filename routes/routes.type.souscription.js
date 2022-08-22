const express = require("express");
const routerTypeSouscription = express.Router();
const { ControllerTypeScouscriptions } = require("../controller/controller.type.souscriptions.js")

routerTypeSouscription.get("/liste", ControllerTypeScouscriptions.getAll);

module.exports = { routerTypeSouscription };