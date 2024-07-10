const Controller = require("./Controller.js")
const PersonService = require("../services/PersonServices.js")

const personService = new PersonService()

class PersonController extends Controller {

    constructor() {
        super(personService)
    }
}

module.exports = PersonController;