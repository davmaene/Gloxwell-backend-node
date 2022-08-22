const express = require("express");
const { ControllerUCustomrs } = require("../controller/controller.u.customers.js");

const routerCustomer = express.Router();

routerCustomer.get("/liste", ControllerUCustomrs.getAll );
routerCustomer.get("/customer/:id", ControllerUCustomrs.getOne );
routerCustomer.post("/customer/register", ControllerUCustomrs.register );
routerCustomer.post("/customer/signin", ControllerUCustomrs.signin );

module.exports = { routerCustomer };