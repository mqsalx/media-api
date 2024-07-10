class Controller {
    constructor(entityService){
        this.entityService = entityService
    }

    async list(req, res){
        try {

            const listPeople = await this.entityService.list()
            return res.status(200).json(listPeople)

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async retrieve(req, res) {

        const { id } = req.params;

        try {

            const result = await this.entityService.retrieve(Number(id));
            return res.status(200).json(result);

        } catch (error) {
            // error
        }
    }

    async create(req, res) {

        const data = req.body;

        try {

            const result = await this.entityService.create(data);
            return res.status(200).json(result);

        } catch (error) {
            // error
        }
    }

    async update(req, res) {

        const { id } = req.params;
        const data = req.body;

        try {

            const isUpdated = await this.entityService.update(data, Number(id));

            if (!isUpdated) {

                return res.status(400).json({ message: "Unable to update" });

            }

            return res.status(200).json({ message: "Updated successfully!" });

        } catch (error) {
            //error
        }
    }

    async delete(req, res) {

        const { id } = req.params;

        try {

            await this.entityService.delete(Number(id));
            return res.status(200).json({ message: `id ${id} deleted` });


        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = Controller