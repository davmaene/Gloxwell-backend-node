const { Response } = require("../helpers/helper.message.server.js")

const ControllerUCustomrs = {
    register: async (req, res, next) => {
        const { fsname, lsname, nickname, email, password, phone_1, phone_2, genre, avatar, nationality, etatcivil, idsouscription } = req.body;
        if(!fsname || !lsname || !email || !password || !phone_1 || !nationality ) return Response(res, 401, "this request must have at leats !fsname || !lsname || !email || !password || !phone_1 || !nationality ")
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