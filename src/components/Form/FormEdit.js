import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function FormEdit({ user }) {
  const navigate = useNavigate();
  const params = useParams()
  const [student, setStudent] = useState({ studentID: "", fullName: "", age: "", address: "", score: "" })

  useEffect(() => {
    if (user == false) {
      navigate("/login")
    }
    axios.get(`http://localhost:5000/students/${params.id}`)
      .then(res => {
        setStudent(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [params.id, user])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student)
    axios.patch(`http://localhost:5000/students/${params.id}`, {
      studentID: student.studentID,
      fullName: student.fullName,
      age: student.age,
      address: student.address,
      score: student.score
    }, {
      headers: {
        'Authorization': "Beaer ".concat(JSON.parse(localStorage.getItem('user')))
      }
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          alert("Sửa sinh viên thành công")
          navigate("/")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="inputform">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label><b>Student ID</b></label>
          <input type="text" defaultValue={student.studentID} placeholder="Enter..." required onChange={(e) => setStudent({ ...student, studentID: e.target.value })} />
          <label><b>Name</b></label>
          <input type="text" defaultValue={student.fullName} placeholder="Enter..." required onChange={(e) => setStudent({ ...student, fullName: e.target.value })} />
          <label><b>Age</b></label>
          <input type="number" defaultValue={student.age} placeholder="Enter..." required onChange={(e) => setStudent({ ...student, age: e.target.value })} />
          <label><b>Address</b></label>
          <input type="text" defaultValue={student.address} placeholder="Enter..." required onChange={(e) => setStudent({ ...student, address: e.target.value })} />
          <label><b>GPA</b></label>
          <input type="number" defaultValue={student.score} placeholder="Enter..." required onChange={(e) => setStudent({ ...student, score: e.target.value })} />
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  )
}
