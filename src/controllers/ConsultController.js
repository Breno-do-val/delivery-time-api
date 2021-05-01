const consultService = require('./../services/ConsultService');

class ConsultController {

    async getDeliveryTime(req, res) {

        const { code, from, to } = req.body;

        try {
            await consultService.getDeliveryTime(code, from, to, result => {
                return res.json({
                    response: result
                });
            });
        } catch (error) {
            res.json({
                response: 'Something went wrong!'
            })
        }
    }
}

module.exports = new ConsultController();