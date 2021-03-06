const soap = require('soap');
const util = require('util');

const createClientPromise = util.promisify(soap.createClient);

class ConsultService {

    getDeliveryTime(code, from, to, callback) {

        const query = Object.assign({
            nCdServico: String(code),
            sCepOrigem: String(from),
            sCepDestino: String(to)
        });

        createClientPromise(process.env.CORREIOS_WEB_SERVICE_URL)
            .then(client => {
                client.CalcPrazo(query, (err, data) => {
                    return callback(data);
                })
            })
            .catch(err => console.log(err));
    }
}

module.exports = new ConsultService();