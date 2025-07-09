"use client";
import { useEffect, useState } from "react";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((res) => res.json())
      .then(setStudents);
  }, []);

  const addStudent = async () => {
    await fetch("http://localhost:8080/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    setName("");
    setEmail("");

    const res = await fetch("http://localhost:8080/students");
    setStudents(await res.json());
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Students</h1>
      <input
        className=" text-white text-sm font-bold mb-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className=" text-white text-sm font-bold mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={addStudent}
      >
        Add
      </button>
      <ul>
        {students.map((s, i) => (
          <li key={i}>
            {s.name} - {s.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
