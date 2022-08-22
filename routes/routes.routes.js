const express = require("express");
const router = express.Router();
const { routerTypeSouscription } = require("./routes.type.souscription.js");
const { routerCustomer } = require("./routes.u.customers.js");

router.use("/customers", routerCustomer);
router.use("/souscriptions", routerTypeSouscription);