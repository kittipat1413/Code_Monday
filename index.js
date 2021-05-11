const app = require('./config/express');
const db = require('./config/db');
const Course = require('./models/Course');
const Teacher = require('./models/Teacher');

db.authenticate().then(() => {
   console.log('Database connected...')
   Teacher.sync().then(() => {
        console.log('Teacher table created'); 
    })
   Course.sync().then(() => {
        console.log('Course table created');
    });
}).catch(err => console.log('Error: ' + err))


app.listen(3000,()=>{
        console.log("server has started")
    })