const Services = require("./Services.js")


class PersonServices extends Services {
    constructor() {
        super("Person")
    }

    async getRegistrations(id) {

        const person = await super.retrieve(id)
        const listRegistrations = await person.getPeopleRegistrations()
        return listRegistrations
    }
}

module.exports = PersonServices