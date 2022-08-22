const { Response } = require("../helpers/helper.message.server")

const ControllerUCustomrs = {
    register: async (req, res, next) => {

    },
    signin: async (req, res, next) => {

    },
    getAll: async (req, res, next) => {

    },
    getOne: async (req, res, next) => {
        try {
            
        } catch (error) {
            return Response(res, 500, error)
        }
    }
};

module.exports = { ControllerUCustomrs };