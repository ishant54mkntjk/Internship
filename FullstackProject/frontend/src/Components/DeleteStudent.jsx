import { useState } from "react";
import API from "../services/api";

function DeleteStudent() {

    const [id, setId] = useState("");

    const deleteData = async () => {

        try {

            await API.delete("/" + id);

            alert("Student Deleted Successfully");

            setId("");

        } catch (err) {

            alert(err.response.data.message);

        }

    };

    return (

        <div>

            <h2>Delete Student</h2>

            <input
                placeholder="Mongo Student ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />

            <br /><br />

            <button onClick={deleteData}>
                Delete Student
            </button>

        </div>

    );

}

export default DeleteStudent;