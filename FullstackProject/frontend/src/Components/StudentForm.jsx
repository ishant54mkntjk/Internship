import { useState } from "react";
import API from "../services/api";

function StudentForm() {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
    course: "",
    marks: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/", student);

      alert("Student Added Successfully");

      setStudent({
        id: "",
        name: "",
        email: "",
        course: "",
        marks: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="number"
          name="id"
          placeholder="Student ID"
          value={student.id}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="marks"
          placeholder="Marks"
          value={student.marks}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Student
        </button>

      </form>
    </div>
  );
}

export default StudentForm;