const Course = require('../../models/Course');
const Teacher = require('../../models/Teacher');

//Routes//

// Testing
exports.test = async (req, res) => {
  res.json('Test_Course-API');
};

// addCourse
exports.addCourse = async(req,res) => {
  const { course_name, course_description, teacherId } = req.body
  try {

    if (teacherId === undefined || isNaN(teacherId)){
      res.json({msg : "Invalid teacherId"});
    }

    const teacher = await Teacher.findOne({ where: { id: teacherId } })
    if(teacher){
      const course = await Course.create({ course_name, course_description, teacherId })
      return res.status(201).json(course)
    }
    res.json({msg : `Teacher id ${teacherId} not found`});
  } catch (err) {
    console.log(err)
    res.status(500).json({"Error":err.errors[0].message})
  }

};

// getallCourse
exports.getallCourse = async(req,res) => {
  try {
    const course = await Course.findAll({ })
    res.json(course)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Something went wrong' })
  }
};

// Get Course from id
exports.getCourseById = async(req,res) => {
  const id = req.params.id
  try {
      const course = await Course.findOne({
        where: { id }
      })
      var data = ((course) ? course : {msg : `Course id ${id} not found`});
      res.json(data)
  } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Something went wrong' })
  }
};

// Update Course
exports.updateCourse = async(req,res) => {
  const id = req.params.id
  const { course_name, course_description, teacherId } = req.body
  try {
      const course = await Course.findOne({ where: { id } })
      if (course) {
      course.course_name = course_name
      course.course_description = course_description
      course.teacherId = teacherId

      await course.save()
      return res.status(201).json(course)
      }
      res.json({msg : `Course id ${id} not found`});
  } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Something went wrong' })
  }
};

// Delete Course
exports.deleteCourse = async(req,res) => {
  const id = req.params.id
  try {
        const course = await Course.findOne({ where: { id } })
        if (course) {
          await course.destroy() 
          return res.json({ message: `Course id ${id} deleted!` })
        } 
        res.json({msg : `Course id ${id} not found`});
  } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Something went wrong' })
  }
};

// Get Course from id
exports.getTeacherByCourseId = async(req,res) => {
  const id = req.params.id
  try {
      const course = await Course.findAll({
        where: { teacherId : id }
      })
      var data = ((course) ? course : {msg : `Course id ${id} not found`});
      res.json(data)
  } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Something went wrong' })
  }
};


  
  