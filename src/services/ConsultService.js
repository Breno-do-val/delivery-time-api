const soap = require('soap');
const util = require('util');

const createClientPromise = util.promisify(soap.createClient);

class ConsultService {

    getDeliveryTime(code, from, to) {

        const query = Object.assign({
            nCdServico: code,
            sCepOrigem: from,
            sCepDestino: to
        });

        createClientPromise(process.env.CORREIOS_WEB_SERVICE_URL)
            .then(client => {
                client.CalcPrazo(query, (err, data) => {
                    console.log(data);
                })
            })
            .catch(err => console.log(err))

    }
}

module.exports = new ConsultService();