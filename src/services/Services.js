const db = require("../models")

class Services {
    constructor(modelName) {
        this.model = modelName
    }
    async list() {
        return db[this.model].findAll()
    }

    async retrieve(id) {
      return db[this.model].findByPk(id);
    }

    async create(data) {
      return db[this.model].create(data);
    }

    async update(data, id) {

        const listUpdated = db[this.model].update(data, {
            where: { id: id }
        })

        if (listUpdated[0] === 0) {
            return false
        }

        return true
    }

    async delete(id) {
      return db[this.model].destroy({ where: { id: id } });
    }
}

module.exports = Services