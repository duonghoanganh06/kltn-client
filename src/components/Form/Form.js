import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Form({ user }) {
  const navigate = useNavigate();
  const [studentID, setStudentID] = useState("")
  const [fullName, setFullName] = useState("")
  const [age, setAge] = useState(22)
  const [address, setAddress] = useState("")
  const [score, setScore] = useState(0)
  useEffect(() => {
    if (user == false) {
      navigate("/login")
    }
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/students', {
      studentID: studentID,
      fullName: fullName,
      age: age,
      address: address,
      score: score
    }, {
      headers: {
        'Authorization': "Beaer ".concat(JSON.parse(localStorage.getItem('user')))
      }
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          alert("Tạo sinh viên thành công")
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
          <input type="text" placeholder="Enter..." required onChange={(e) => setStudentID(e.target.value)} />
          <label><b>Name</b></label>
          <input type="text" placeholder="Enter..." required onChange={(e) => setFullName(e.target.value)} />
          <label><b>Age</b></label>
          <input type="number" placeholder="Enter..." required onChange={(e) => setAge(e.target.value)} />
          <label><b>Address</b></label>
          <input type="text" placeholder="Enter..." required onChange={(e) => setAddress(e.target.value)} />
          <label><b>GPA</b></label>
          <input type="number" placeholder="Enter..." required onChange={(e) => setScore(e.target.value)} />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}
