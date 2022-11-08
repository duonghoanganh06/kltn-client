import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/user/signin', {
      username: username,
      password: password
    })
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.token))
          console.log(localStorage.getItem('user'))
          setUser(true)
          navigate("/")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="loginform">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} required />
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}
