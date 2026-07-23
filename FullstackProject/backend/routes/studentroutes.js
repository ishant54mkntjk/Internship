const express =require("express");

const router = express.Router();

const {createStudent, getStudents,getStudent,updateStudent, deleteStudent,searchStudent} = require("../controllers/studentController");

router.post("/", createStudent);

// console.log("studentroutes loaded");

router.get("/", getStudents);

router.get("/search", searchStudent);

router.get("/:id", getStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);


module.exports = router;



