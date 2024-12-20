
const Nav = () => {
    return(
        <div className="row " id="top">
  <div className="col mx-0 px-0 border-bottom border-light">
    <nav className="navbar navbar-expand-lg menu">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="images/recipe/logo.png" width={130} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="home.html"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="about.html">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#footer">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/*Logged in Link*/}
    {/* End Logged in link*/}
  </div>
        </div>

    )
}

export default Nav