import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Row({ student, user }) {
  const handleDelete = () => {
    console.log("clicked")
    axios.delete(`http://localhost:5000/students/${student._id}`, {
      headers: {
        'Authorization': "Beaer ".concat(JSON.parse(localStorage.getItem('user')))
      }
    })
      .then(function (response) {
        if (response.status === 200) {
          alert("Da xoa thanh cong")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <tr>
      <td>{student.studentID}</td>
      <td>{student.fullName}</td>
      <td>{student.age}</td>
      <td>{student.address}</td>
      <td>{student.score}</td>
      <td>
        {
          user ? <Link to={`/formedit/${student._id}`}>
            <button>Edit</button>
          </Link> : <Link to={`/login`}>
            <button>Edit</button>
          </Link>
        }
      </td>
      <td>
        {
          user ? <button onClick={() => handleDelete()}>Delete</button>
            : <Link to={`/login`}>
              <button>Delete</button>
            </Link>
        }
      </td>
    </tr>
  )
}
