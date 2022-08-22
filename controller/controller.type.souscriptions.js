const { Typesouscription } = require("../models/model.typesouscriptions.js");
const { generateIdentifier } = require("../helpers/helper.random.js");
const { Response } = require("../helpers/helper.message.server.js");

const ControllerTypeScouscriptions = {
    getAll: async (req, res, next) => {
        try {
           await Typesouscription.findAll({
               where: {
                    status: 1
                }
            })
            .then(typesouscriptions => {
                return Response(res, 200, typesouscriptions);
            })
            .catch(err => {
                return Response(res, 500, err);
            })
        } catch (error) {
            return Response(res, 500, error)
        }
    },
    create: async (req, res, next) => {
        const { souscription, montant, currency, status } = req.body;
        if(!souscription || !montant || !currency) return Response(res, 401, "this request must have all required params");
        try {
            await Typesouscription.create({
                souscription,
                montant,
                currency
            })
            .then((data) => {
                if(data instanceof Typesouscription) return Response(res, 200, data);
                else return Response(res, 400, data)
            })
            .catch(err => {
                return Response(res, 500, err)
            })
        } catch (error) {
            return Response(res, 500, error)
        }
    }
};

module.exports = { ControllerTypeScouscriptions };