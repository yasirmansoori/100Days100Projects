import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./navbar.module.css";
const Navbar = () => {
  const bg_color = "#0c0c0d";
  const bg_color2 = "#1A1A1A";
  return (
    <div className={`${styles.navbar} container`}>
      <header className="border-bottom lh-1 py-3">
        <div className="row align-items-center">
          <div className="col-8">
            <Link
              className="blog-header-logo text-body-emphasis text-decoration-none"
              to="/"
            >
              <img src={logo} width={100} alt="" />
              <span className="align-middle"> CINEMANIA HUB</span>
            </Link>
          </div>
          <div className="col">
            <div className="input-group">
              <span
                className="input-group-text"
                style={{ backgroundColor: bg_color }}
                id="basic-addon1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
                  <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
                </svg>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="search"
                aria-label="search"
                aria-describedby="basic-addon1"
                style={{ backgroundColor: bg_color2 }}
              />
            </div>
          </div>
        </div>
      </header>
      {/* Desktop Navbar */}
      <div
        className={`${styles.scroller_bar} nav-scroller py-1 mb-3 border-bottom`}
      >
        <nav className="nav nav-underline justify-content-between">
          <Link className="nav-item nav-link link-body-emphasis" to="/">
            Home
          </Link>
          <Link
            className="nav-item nav-link link-body-emphasis"
            to="/genre/Adventure"
          >
            Adventure
          </Link>
          <Link
            className="nav-item nav-link link-body-emphasis"
            to="/genre/Family"
          >
            Family
          </Link>
          <Link
            className="nav-item nav-link link-body-emphasis"
            to="/genre/Crime"
          >
            Crime
          </Link>
          <Link
            className="nav-item nav-link link-body-emphasis"
            to="/genre/Drama"
          >
            Drama
          </Link>
          <Link
            className="nav-item nav-link link-body-emphasis"
            to="/genre/Comedy"
          >
            Comedy
          </Link>
          <Link
            className="nav-item nav-link link-body-emphasis"
            to="/genre/Animation"
          >
            Animation
          </Link>
          <Link
            className="nav-item nav-link link-body-emphasis"
            to="/genre/Romance"
          >
            Romance
          </Link>
          <Link
            className="nav-item nav-link link-body-emphasis"
            to="/genre/Action"
          >
            Action
          </Link>
          <Link
            className="nav-item nav-link link-body-emphasis"
            to="/genre/Thriller"
          >
            Thriller
          </Link>
          <Link
            className="nav-item nav-link link-body-emphasis"
            to="/genre/Mystery"
          >
            Mystery
          </Link>
          <Link
            className="nav-item nav-link link-body-emphasis"
            to="/genre/Horror"
          >
            Horror
          </Link>
        </nav>
      </div>
      {/* Desktop Navbar End */}
      {/* Mobile Navbar */}
      <div
        className={`${styles.scroller_bar_mobile} navbar fixed-bottom nav-scroller py-1 border-bottom bg-light-subtle`}
      >
        <nav className="row d-flex flex-nowrap nav align-items-center">
          <Link className="col nav-item nav-link link-body-emphasis" to="/">
            Home
          </Link>
          <Link
            className="col nav-item nav-link link-body-emphasis"
            to="/genre/Adventure"
          >
            Adventure
          </Link>
          <Link
            className="col nav-item nav-link link-body-emphasis"
            to="/genre/Family"
          >
            Family
          </Link>
          <Link
            className="col nav-item nav-link link-body-emphasis"
            to="/genre/Crime"
          >
            Crime
          </Link>
          <Link
            className="col nav-item nav-link link-body-emphasis"
            to="/genre/Drama"
          >
            Drama
          </Link>
          <Link
            className="col nav-item nav-link link-body-emphasis"
            to="/genre/Comedy"
          >
            Comedy
          </Link>
          <Link
            className="col nav-item nav-link link-body-emphasis"
            to="/genre/Animation"
          >
            Animation
          </Link>
          <Link
            className="col nav-item nav-link link-body-emphasis"
            to="/genre/Romance"
          >
            Romance
          </Link>
          <Link
            className="col nav-item nav-link link-body-emphasis"
            to="/genre/Action"
          >
            Action
          </Link>
          <Link
            className="col nav-item nav-link link-body-emphasis"
            to="/genre/Thriller"
          >
            Thriller
          </Link>
          <Link
            className="col nav-item nav-link link-body-emphasis"
            to="/genre/Mystery"
          >
            Mystery
          </Link>
          <Link
            className="col nav-item nav-link link-body-emphasis"
            to="/genre/Horror"
          >
            Horror
          </Link>
        </nav>
      </div>
      {/* Mobile Navbar End */}
    </div>
  );
};

export default Navbar;
