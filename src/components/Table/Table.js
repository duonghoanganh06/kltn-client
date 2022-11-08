import React, { useEffect, useState } from 'react'
import Row from './Row/Row'
import axios from 'axios'

export default function Table({ user }) {
  const [studentList, setStudentList] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(function (response) {
        setStudentList(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [studentList])
  return (
    <div className="table">
      <table>
        <tbody>
          <tr>
            <th>MSSV</th>
            <th>Họ và Tên</th>
            <th>Tuổi</th>
            <th>Địa chỉ</th>
            <th>Điểm TB</th>
            <th></th>
            <th></th>
          </tr>
          {
            studentList.map((student) => (
              <Row key={student._id} student={student} user={user} />
            ))
          }

        </tbody></table>
    </div>
  )
}
