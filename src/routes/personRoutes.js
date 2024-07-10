const { Router } = require("express")
const PersonController = require("../controller/PersonController")

const personController = new PersonController()

const router = Router()

router.get("/people", (req, res) => personController.list(req, res))
router.get("/people/:id", (req, res) => personController.retrieve(req, res));
router.post("/people", (req, res) => personController.create(req, res));
router.put("/people/:id", (req, res) => personController.update(req, res))
router.delete("/people/:id", (req, res) => personController.delete(req, res));

module.exports = router