const Controller = require("./Controller.js")
const PersonService = require("../services/PersonServices.js")

const personService = new PersonService()

class PersonController extends Controller {

    constructor() {
        super(personService)
    }

    async getRegistrations(req, res) {

        const { student_id } = req.params

        try {

            const listRegistrations = await personService.getRegistrations(Number(student_id))

            return res.status(200).json(listRegistrations)

        } catch {

        }
    }
}

module.exports = PersonController