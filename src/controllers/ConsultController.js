const consultService = require('./../services/ConsultService');

class ConsultController {

    async getDeliveryTime(req, res) {

        const { code, from, to } = req.body;

        try {
            await consultService.getDeliveryTime(code, from, to, result => {

                let prazoEntrega = result.CalcPrazoResult.Servicos.cServico[0].PrazoEntrega;

                if (prazoEntrega >= 3) {
                    return res.json({
                        response: prazoEntrega
                    });
                }
                else {
                    return res.json({
                        response: 'Testing'
                    });
                }
            });
        } catch (error) {
            res.json({
                response: 'Something went wrong!'
            })
        }
    }

    destructureResult(result) {
        if (!result) {
            throw new Error();
        }

        let responseResult = result.CalcPrazoResult.Servicos.cServico[0];

        return responseResult;
    }
}

module.exports = new ConsultController();