import React from 'react'
import Link from 'next/link'

export default function nav() {
  return (
    <>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">
        <img src="/favicon.ico" alt="LOGO" className='logo' />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbar'>
        <li className="nav-item">
          <Link className="nav-link " id='navbar' aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='navbar' href="/slot">สล็อตออนไลน์</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='navbar' href="/casino">casino</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"id='navbar' href="/football">ฟุตบอล</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"id='navbar' href="/sport">กีฬา</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"id='navbar' href="/fish">ยิงปลา</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"id='navbar' href="/lottery">หวย</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"id='navbar' href="/contact">  ติดต่อเรา </Link>
        </li>
      </ul>
      <span className="navbar-text">
      <button type="button" className="btn btn-primary mx-2">เข้าสู่ระบบ</button>

      <button type="button" className="btn btn-success mx-2">สมัครสมาชิก</button>
      
      </span>
    </div>
  </div>
</nav>




    </>
  )
}
