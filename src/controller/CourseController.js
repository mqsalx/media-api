const Controller = require("./Controller.js")
const CourseService = require("../services/CourseServices.js")

const courseService = new CourseService()

class CourseController extends Controller {

    constructor() {
        super(courseService)
    }
}

module.exports = CourseController