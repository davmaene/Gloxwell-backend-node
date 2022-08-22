const Sequelize = require('sequelize');
const { generateIdentifier } = require('../helpers/helper.random.js');
const { Configs } = require('../configs/configs.js');
const dotenv = require("dotenv");

dotenv.config();

const Costomers = Configs.define('__tbl_u_customers', {
    fsname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lsname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nickname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone_1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone_2: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: process.env.APP_ESCAPSTRING
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    adresse: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: process.env.APP_ESCAPSTRING
    },
    datenaissance: {
        type: Sequelize.STRING,
        allowNull: false
    },
    token: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: ""
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nationality: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
    },
    etatcivil: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
    },
    idsouscription: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 1
    },
    isactivated: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = { Costomers };
