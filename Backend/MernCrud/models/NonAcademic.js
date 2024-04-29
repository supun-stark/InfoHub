const mongoose = require('mongoose');

const NonAcademicSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    contact:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    position:{
        type: String,
        require: true
    }
});


const NonAcademicModel = mongoose.model('NonAcademicStaff',NonAcademicSchema);
module.exports = NonAcademicModel;

