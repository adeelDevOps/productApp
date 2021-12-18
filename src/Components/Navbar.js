import logo from "../Images/iconLogo.png";
export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a
          className="navbar-brand text-capitalize animate__animated animate__bounce"
          className="bi bi-apple"
          href="/"
          style={{ textDecoration: "none" }}
        >
          <h3><img src={logo} alt="" height="40px"/> Arshad store</h3>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                animate__jello
                href="index.html"
              >
                <span class="text-primary">
                  <i class="bi bi-house-fill "></i>Home
                </span>
              </a>
            </li> */}
            {/* <li class="nav-item">
              <a class="nav-link text-capitalize" href="About.html">
                About us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-capitalize" href="gallary.html">
                Gallary
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link  text-capitalize" href="contact.html">
                Contact us
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
