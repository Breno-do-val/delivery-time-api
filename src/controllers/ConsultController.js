const consultService = require('./../services/ConsultService');

class ConsultController {

    async getDeliveryTime(req, res) {

        try {
            await consultService.getDeliveryTime(40010, 37540000, 37550000, result => {
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