const Sequelize = require('sequelize');
const { generateIdentifier } = require('../helpers/helper.random.js');
const { Configs } = require('../configs/configs.js');
const dotenv = require("dotenv");

dotenv.config();

const Typesouscription = Configs.define('__tbl_type_souscriptions', { 
    souscription: {
        type: Sequelize.STRING,
        allowNull: false
    },
    montant: {
        type: Sequelize.STRING,
        allowNull: false
    },
    currency: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "USD"
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
},{
    timestamps: false,
    freezeTableName: true
});

module.exports = { Typesouscription };