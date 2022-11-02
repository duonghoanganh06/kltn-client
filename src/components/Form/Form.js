import React from 'react'

export default function Form() {
  return (
    <div className="inputform">
      <form action="/action_page.php" method="post">
        <div className="container">
          <label htmlFor="uname"><b>Student ID</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />
          <label htmlFor="psw"><b>Name</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <label htmlFor="psw"><b>Address</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <label htmlFor="psw"><b>Age</b></label>
          <input type="number" id="quantity" name="quantity" min={1} max={5} defaultValue={22} />
          <label htmlFor="psw"><b>GPA</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}
