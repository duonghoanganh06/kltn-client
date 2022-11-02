import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Thong tin sinh vien</Link></li>
        <li><Link to="/login">Quan ly sinh vien</Link></li>
      </ul>
    </nav>
  )
}
