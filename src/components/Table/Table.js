import React from 'react'
import Row from './Row/Row'

export default function Table() {
  return (
    <div className="table">
      <table>
        <tbody><tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Points</th>
          <th>Last Name</th>
          <th>Points</th>
          <th>Last Name</th>
          <th>Points</th>
        </tr>
          <Row />
          <Row />
          <Row />
          <Row />

        </tbody></table>
    </div>
  )
}
