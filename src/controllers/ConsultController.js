const consultService = require('./../services/ConsultService');

class ConsultController {

    async getDeliveryTime(req, res) {

        try {
            consultService.getDeliveryTime(40010, 37540000, 37550000);
        } catch (error) {
            res.json({
                response: 'Something went wrong!'
            })
        }
        return res.json({
            response: 'Server is responding'
        });
    }
}

module.exports = new ConsultController();