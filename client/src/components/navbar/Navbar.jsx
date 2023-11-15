import React from 'react'

const Navbar = () => {
  let user = localStorage.getItem('user');
  user = JSON.parse(user);
  console.log({ user })
  
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Carmarket</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact Us</a>
            </li>
            {!user ?

              <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
              </li>
              : <>

                <li class="nav-item" onClick={() => { localStorage.clear() }}>
                  <a class="nav-link" href="/">Logout</a>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar