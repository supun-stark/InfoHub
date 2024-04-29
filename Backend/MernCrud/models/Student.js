const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    contact: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    faculty: {
        type: String,
        require: true
    }
});



const StudentModel = mongoose.model('Students',studentSchema);
module.exports = StudentModel;

