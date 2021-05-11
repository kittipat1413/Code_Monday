const express = require('express');
const TeacherRoutes = require('./teacher.route');
const CoursesRoutes = require('./course.route');


const router = express.Router();

router.use('/course', CoursesRoutes);
router.use('/teacher', TeacherRoutes);

module.exports = router;