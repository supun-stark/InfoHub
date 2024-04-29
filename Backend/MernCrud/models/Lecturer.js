const mongoose = require('mongoose');

const lecturerShema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    gender:{
        type: String,
        require:true
    },
    address:{
        type: String,
        require:true
    },
    contact:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    position:{
        type: String,
        require:true
    }
});


const LecturerModel = mongoose.model('Lecturers',lecturerShema);
module.exports=LecturerModel;
