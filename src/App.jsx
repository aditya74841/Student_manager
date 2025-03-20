import { useState } from "react";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  const addStudent = () => {
    if (!name.trim()) {
      alert("Please enter a student name!");
      return;
    }
    setStudents([...students, name.trim()]);
    setName("");
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Student Manager</h1>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}
            <span className="delete" onClick={() => deleteStudent(index)}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
