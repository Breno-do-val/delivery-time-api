const soap = require('soap');

class ConsultService {

    getDeliveryTime(code, from, to) {

        const query = Object.assign({
            nCdServico: code,
            sCepOrigem: from,
            sCepDestino: to
        });

        console.log(query);

        soap.createClient(process.env.CORREIOS_WEB_SERVICE_URL, (err, client) => {
            client.CalcPrazo(query, (err, data) => {
                console.log(data)
            })
        })
    }
}

module.exports = new ConsultService();