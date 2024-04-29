//Create the server to run the application
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const StudentModel = require('./models/Student');
const LecturerModel = require('./models/Lecturer');
const NonAcademicModel = require('./models/NonAcademic');


const app= express();
app.use(cors());
app.use(express.json());



//Add new Student
app.post('/student/add', (req, res)=>{
    StudentModel.create(req.body)
    .then((newStudent)=>{
        return res.status(200).json({
            success : "Student Added successfully",
            addedStudent: newStudent
        })
    })
    .catch((err) =>{
        console.log(err);
    })
})


//Get all student (For testing)
// app.get('/student/all',(req,res) => {
//     StudentModel.find({})
//     .then((allStudents)=>{
//         return res.status(200).json({
//             success: true,
//             allStudents: allStudents
//         })
//     })
//     .catch((err) =>{
//         return res.status(400).json({
//             error : err.message
//         })       
//     })
// })


//Get all students
app.get('/student/all', (req,res) => {
    StudentModel.find({})
    .then((allStudents) => {
        res.json(allStudents)
    })
    .catch((err) =>{
        res.json(err)
    })
})


//Get student to fields
app.get('/getStudent/:id', (req,res) =>{
    const id = req.params.id;
    StudentModel.findById({_id:id})
    .then((student) =>{
        res.json(student)
    })
    .catch(err=>{
        res.json(err)
    })
})




//Update student 
app.put('/student/update/:id',(req,res) =>{
    const id = req.params.id;
    const updatedData = req.body;
    StudentModel.findByIdAndUpdate({_id:id}, updatedData, {new:true})
    .then((updatedStudent)=>{
        if(!updatedStudent){
            return res.status(404).json({
                error: 'Student not found'
            })
        }
        return res.status(200).json({
            success: 'Student Updated Successfully',
            updatedStudent: updatedStudent
        });

    })
    .catch((err)=>{
        return res.status(400).json({
            error:err.message
        })
    })
})


//Delete student
app.delete('/student/delete/:id',(req,res) =>{
    const id = req.params.id;
    StudentModel.findByIdAndDelete({_id:id})

    .then((deletedStudent)=>{
        return res.status(200).json({
            success:'Student Deleted Successfully',
            deletedStudent: deletedStudent
        })
    })
    .catch(err=>{
        return res.status(400).json({
            error: err.message
        })
    })
})





//Add new lecturer
app.post('/lecturer/add',(req,res)=>{
    LecturerModel.create(req.body)
    .then((addedLecturer)=>{
        return res.status(200).json({
            success: 'Lecturer added successfully',
            addedLecturer: addedLecturer
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})


//Get all lecturers testing
// app.get('/lecturer/all',(req,res)=>{
//     LecturerModel.find({})
//     .then((allLecturers)=>{
//         return res.status(200).json({
//             success: true,
//             allLecturers: allLecturers
//         })
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })



//Get all lecturers 
app.get('/lecturer/all',(req,res) =>{
    LecturerModel.find({})
    .then((allLecturers) =>{
        res.json(allLecturers);
    })
    .catch(err =>{
        res.json(err);
    })
})



//Get lecturers to fields
app.get('/getLecturer/:id', (req,res) =>{
    const id = req.params.id;
    LecturerModel.findById({_id:id})
    .then((lecturer) =>{
        res.json(lecturer)
    })
    .catch(err =>{
        res.json(err)
    })
})


//Update lecturers
app.put('/lecturer/update/:id',(req,res) =>{
    const id= req.params.id;
    const updatedData= req.body;
    LecturerModel.findByIdAndUpdate({_id:id},updatedData,{new:true})
    .then((updatedLecturer)=>{
        return res.status(200).json({
            success: 'Lecturer updated successfully',
            updatedLecturer: updatedLecturer
        })
    })
    .catch((err)=>{
        console.log(err)
    })
});



//Delete lecturers
app.delete('/lecturer/delete/:id',(req,res)=>{
    const id= req.params.id;
    LecturerModel.findByIdAndDelete({_id:id})
    .then((deletedLecturer)=>{
        return res.status(200).json({
            success: 'Lecturer deleteed successfully',
            deletedLecturer: deletedLecturer
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})




//Add new Non Academic
app.post('/NonAcademic/add', (req,res) =>{
    NonAcademicModel.create(req.body)
    .then((addedNonAcademic) =>{
        return res.status(200).json({
            success: 'NonAcademic Added successfully',
            addedNonAcademic: addedNonAcademic
        })
    })
    .catch(err =>{
        console.log(err)
    })
});


// Get all Non Academic- For Testing
// app.get('/allNonAcademic',(req, res) =>{
//     NonAcademicModel.find({})
//     .then((allNonAcademic) =>{
//         return res.status(200).json({
//             success: true,
//             allNonAcademic: allNonAcademic
//         })
//     })
//     .catch(err =>{
//         console.log(err);
//     })
// });


//Get all Non Academic
app.get('/allNonAcademic',(req, res) =>{
    NonAcademicModel.find({})
    .then((allNonAcademic) =>{
        return res.json(allNonAcademic);
    })
    .catch(err =>{
        res.json(err)
    })
});


//Get Non Academic to fields
app.get('/NonAcademic/:id', (req,res) =>{
    const id = req.params.id;
    NonAcademicModel.findById({_id:id})
    .then((nonAcademic) =>{
        res.json(nonAcademic)
    })
    .catch(err =>{
        res.json(err)
    })
});


//Update Non Academic
app.put('/NonAcademic/update/:id', (req,res) =>{
    const id = req.params.id;
    const updatedData = req.body;
    NonAcademicModel.findByIdAndUpdate({_id:id},updatedData,{new:true})
    .then((updatedNonAcademic) =>{
        return res.status(200).json({
            success:'NonAcademic Updated Successfully',
            updatedNonAcademic: updatedNonAcademic
        })
    })
    .catch(err =>{
        console.log(err);
    })
});


//Delete Non Academic
app.delete('/NonAcademic/Delete/:id', (req,res) =>{
    const id = req.params.id;
    NonAcademicModel.findByIdAndDelete({_id:id})
    .then((deletedNonAcademic) =>{
        return res.status(200).json({
            success: 'NonAcademic Deleted Successfully',
            deletedNonAcademic: deletedNonAcademic
        })
    })
    .catch(err =>{
        console.log(err);
    })
});




const PORT = 8000;
//const DB_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@merncrudapp.9xw3fw9.mongodb.net/mernCrud?retryWrites=true&w=majority`;
const DB_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@merncrudapp2.n4ebqix.mongodb.net/?retryWrites=true&w=majority&appName=MernCrudApp2`;


mongoose.connect(DB_URL)
.then(()=>{
    console.log("DB Connected Successfully.");
})
.catch((err)=>{
    console.log("DB Connection Failed.")
});


app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
})

