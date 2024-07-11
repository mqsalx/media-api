const { Router } = require("express")
const PersonController = require("../controller/PersonController.js")
const RegistrationController = require("../controller/RegistrationController.js")

const personController = new PersonController()
const registrationController = new RegistrationController()

const router = Router()

router.get("/people", (req, res) => personController.list(req, res))
router.get("/people/:id", (req, res) => personController.retrieve(req, res))
router.post("/people", (req, res) => personController.create(req, res))
router.put("/people/:id", (req, res) => personController.update(req, res))
router.delete("/people/:id", (req, res) => personController.delete(req, res))
router.post("/people/:student_id/registrations", (req, res) => registrationController.create(req, res))

module.exports = router