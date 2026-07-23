import { useEffect, useState } from "react";
import API from "../services/api";

function StudentTable() {

  const [students, setStudents] = useState([]);

  const getStudents = async () => {

    try {

      const res = await API.get("/");

      setStudents(res.data.students);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    getStudents();

  }, []);

  return (

    <div>

      <h2>Student Details</h2>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Marks</th>
            <th>Result</th>

          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student._id}>

              <td>{student.id}</td>

              <td>{student.name}</td>

              <td>{student.email}</td>

              <td>{student.course}</td>

              <td>{student.marks}</td>

              <td>
                {student.marks >= 40 ? "Pass" : "Fail"}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default StudentTable;