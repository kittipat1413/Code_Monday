const express = require('express');
const TeacherController = require('../../controllers/teacher.controller');

const router = express.Router();
router.route('/').post(TeacherController.addTeacher).get(TeacherController.getallTeacher);
router.route('/:id').get(TeacherController.getTeacherById).put(TeacherController.updateTeacher).delete(TeacherController.deleteTeacher);
//For Testing
router.route('/test').get(TeacherController.test);

module.exports = router;