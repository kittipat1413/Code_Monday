const Teacher = require('../../models/Teacher');

//Routes//

// Testing
exports.test = async (req, res) => {
  res.json('Test_Teacher-API');
};

// addTeacher
exports.addTeacher = async(req,res) => {
  const { first_name, last_name, date_of_birth } = req.body
  try {
    const teacher = await Teacher.create({ first_name, last_name, date_of_birth })
    res.status(201).json(teacher)
  } catch (err) {
    console.log(err)
    res.status(500).json({"Error":err.errors[0].message})
  }
};

// getallTeacher
exports.getallTeacher = async(req,res) => {
  try {
    const teacher = await Teacher.findAll()
    res.json(teacher)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Something went wrong' })
  }
};

// Get Teacher from id
exports.getTeacherById = async(req,res) => {
  const id = req.params.id
  try {
      const teacher = await Teacher.findOne({
        where: { id }
      })
      var data = ((teacher) ? teacher : {msg : `Teacher id ${id} not found`});
      res.json(data)
  } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Something went wrong' })
  }
};

// Update Teacher
exports.updateTeacher = async(req,res) => {
  const id = req.params.id
  const { first_name, last_name, date_of_birth } = req.body
  try {
      const teacher = await Teacher.findOne({ where: { id } })
      if (teacher) {
      teacher.first_name = first_name
      teacher.last_name = last_name
      teacher.date_of_birth = date_of_birth

      await teacher.save()
      return res.status(201).json(teacher)
      }

      res.json({msg : `Teacher id ${id} not found`});
  } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Something went wrong' })
  }
};

// Delete Course
exports.deleteTeacher = async(req,res) => {
  const id = req.params.id
  try {
        const teacher = await Teacher.findOne({ where: { id } })
        if (teacher) {
          await teacher.destroy() 
          return res.json({ message: `Teacher id ${id} deleted!` })
        } 
        res.json({msg : `Teacher id ${id} not found`});
  } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Something went wrong' })
  }
};