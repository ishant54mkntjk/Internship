import { useState } from "react";
import API from "../services/api";

function UpdateStudent() {

    const [id, setId] = useState("");

    const [student, setStudent] = useState({

        name: "",
        email: "",
        course: "",
        marks: ""

    });

    const handleChange = (e) => {

        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.put("/" + id, student);

            alert("Student Updated Successfully");

        } catch (err) {

            alert(err.response.data.message);

        }

    };

    return (

        <div>

            <h2>Update Student</h2>

            <form onSubmit={handleSubmit}>

                <input
                    placeholder="Mongo Student ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />

                <br /><br />

                <input
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="course"
                    placeholder="Course"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="marks"
                    placeholder="Marks"
                    onChange={handleChange}
                />

                <br /><br />

                <button>Update Student</button>

            </form>

        </div>

    );

}

export default UpdateStudent;