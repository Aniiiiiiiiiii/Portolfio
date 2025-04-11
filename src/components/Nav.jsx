export default function Nav() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-2 px-sm-5">
          <div className="container-fluid">
            <a className="navbar-brand silk" href="#">Annwesha</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#about">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skill">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#project">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#contact">
                    Contact Me
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                {/* <button className="btn-dark px-4 py-2" type="submit">
                  Resume
                </button> */}
                <a href="../cv/Annwesha_Banik_CV.pdf" download className="btn btn-dark px-4 py-2">
                  Download CV ⇣
                </a>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
  