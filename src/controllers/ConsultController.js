class ConsultController {

    async getDeliveryTime(req, res) {

        try {
            throw new Error();
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