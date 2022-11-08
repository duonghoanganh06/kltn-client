import React from 'react'
import { Link } from 'react-router-dom';


export default function Header({ user, setUser }) {
  const handleLogout = () => {
    localStorage.clear()
    setUser(false)
  }
  return (
    <nav>
      <ul>
        <li><Link to="/">Thong tin sinh vien</Link></li>
        {
          user ? <><li><Link to="/form">Quan ly sinh vien</Link></li><li onClick={handleLogout}>Đăng xuất</li></> :
            <li><Link to="/login">Dang nhap</Link></li>
        }

      </ul>
    </nav>
  )
}
