const Student = require("../models/student");

const createStudent =async (req, res)=>{
    try{
        const{id, name, email,course, marks } =req.body;
        const student =await Student.create({id, name, email,course, marks});
       res.status(201).json({
             success: true,
            message: "Student Added Successfully",
            student
       });
       } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            success: true,
            count: students.length,
            students
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Get Single Student
const getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student Not Found"
            });
        }
        res.status(200).json({
            success: true,
            student
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Update Student
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student Not Found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Student Updated Successfully",
            student
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }

};

// Delete Student
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student Not Found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Student Deleted Successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Search Student
const searchStudent = async (req, res) => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Please enter a name to search"
            });
        }
        const students = await Student.find({
            name: {
                $regex: name,
                $options: "i"
            }
        });
        res.status(200).json({
            success: true,
            count: students.length,
            students
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = {createStudent, getStudents, getStudent, updateStudent, deleteStudent,searchStudent};