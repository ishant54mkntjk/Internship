import { useState } from "react";
import StudentTable from "./StudentTable";
import StudentForm from "./StudentForm";
import UpdateStudent from "./UpdateStudent";
import DeleteStudent from "./DeleteStudent";

function Home() {

    const [page, setPage] = useState("");

    return (
        <div>

            <h1>Home Component</h1>

            <button onClick={() => setPage("details")}>
                Student Details
            </button>

            <button onClick={() => setPage("add")}>
                Add Student
            </button>

            <button onClick={() => setPage("update")}>
                Update Student
            </button>

            <button onClick={() => setPage("delete")}>
                Delete Student
            </button>

            <hr />

            {page === "details" && <StudentTable />}

            {page === "add" && <StudentForm />}

            {page === "update" && <UpdateStudent />}

            {page === "delete" && <DeleteStudent />}

        </div>
    );
}

export default Home;