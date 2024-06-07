import React from 'react'

const NavigationBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">STUDENT APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">ADD STUDENT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">SEARCH</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/delete">REMOVE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewAll">VIEW ALL</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavigationBar