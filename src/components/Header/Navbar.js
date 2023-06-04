import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link to='/' className="navbar-brand">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  UseState
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to='/usestate1' className="dropdown-item">Practice1</Link></li>
                  <li><Link to='/usestate2' className="dropdown-item">Practice2</Link></li>
                  <li><Link to='/usestate3' className="dropdown-item">Practice3</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to='/useeffect' className="nav-link active" aria-current="page">UseEffect</Link>
              </li>
              <li className="nav-item">
                <Link to='/useReducer' className="nav-link active" aria-current="page">UseReducer_&_UseRef</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-danger" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}
