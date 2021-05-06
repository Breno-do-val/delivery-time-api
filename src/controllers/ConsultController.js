const consultService = require('./../services/ConsultService');

class ConsultController {

    async getDeliveryTime(req, res) {

        /* #swagger.parameters['codigo'] = {
            in: 'body',
            description: 'Code for type of service provided by Correios.',
            type: 'object',
            required: true,
            schema: { $ref: "#/definitions/GetDeliveryTime"}
        } */
       
        const { codigo, cepOrigin, cepDest } = req.body;

        try {
            await consultService.getDeliveryTime(codigo, cepOrigin, cepDest, result => {

                if (result.CalcPrazoResult.Servicos === null) {
                    res.status(400).json({
                        response: `Verifique todos os parâmetros enviados`
                    });
                    return;
                }

                let deliveryTime = result.CalcPrazoResult.Servicos.cServico[0].PrazoEntrega;

                switch (deliveryTime) {
                    case deliveryTime > 3:
                        // #swagger.responses[200] = { description: 'Being the delivery time feasible or not' }
                        res.status(200).json({
                            response: `Prazo inviável = ${deliveryTime} dias. Aconselhamos utilizar o serviço PAC = N dias. Sai bem mais barato`
                        });
                        break;
                    case deliveryTime <= 3:
                        res.status(200).json({
                            response: `Prazo viável = ${deliveryTime} dias`
                        });
                        break;
                    default:
                        res.status(400).json({
                            response: `Verifique o código enviado e se o servico está disponível nessa região`
                        });
                }
            });
        } catch (error) {
            res.status(500).json({
                response: 'Something went wrong!'
            });
        }
    }
}

module.exports = new ConsultController();