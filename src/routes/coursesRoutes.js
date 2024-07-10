const { Router } = require("express")
const CourseController = require("../controller/CourseController.js")

const courseController = new CourseController()

const router = Router()

router.get("/courses", (req, res) => courseController.list(req, res))
router.get("/courses/:id", (req, res) => courseController.retrieve(req, res));
router.post("/courses", (req, res) => courseController.create(req, res));
router.put("/courses/:id", (req, res) => courseController.update(req, res))
router.delete("/courses/:id", (req, res) => courseController.delete(req, res));

module.exports = router