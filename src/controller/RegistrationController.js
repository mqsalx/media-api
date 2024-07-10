const Controller = require("./Controller.js")
const RegistrationService = require("../services/RegistrationServices.js")

const registrationService = new RegistrationService()

class RegistrationController extends Controller {

    constructor() {
        super(registrationService)
    }
}

module.exports = RegistrationController