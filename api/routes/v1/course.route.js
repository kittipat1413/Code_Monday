const express = require('express');
const CourseController = require('../../controllers/course.controller');

const router = express.Router();
router.route('/').post(CourseController.addCourse).get(CourseController.getallCourse);
router.route('/:id').get(CourseController.getCourseById).put(CourseController.updateCourse).delete(CourseController.deleteCourse);
router.route('/InquiryTeacher/:id').get(CourseController.getTeacherByCourseId)
//For Testing
router.route('/test').get(CourseController.test);

module.exports = router;