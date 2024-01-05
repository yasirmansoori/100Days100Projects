import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";

const SideBar = () => {
  return (
    <div className="col-md-4 ">
      <div className="position-sticky" style={{ top: "2rem" }}>
        {/* About the website */}
        <div className={`${styles.about_card} p-4 mb-3 rounded`}>
          <h4 className="fst-italic">About</h4>
          <p className="mb-0">
            Welcome to <strong>CINEMANIA HUB</strong>, your go-to source for all
            things movies and television. Explore a vast database of movies with
            different genres like action, adventure, romance, horror and many
            others. Immerse yourself in the world of entertainment, where every
            movie and show is a story waiting to be discovered.
          </p>
        </div>
        {/* About the website End */}
        {/* Archives */}
        <div className="p-4">
          <h4 className="fst-italic">Archives</h4>
          <ol className="list-unstyled mb-0">
            <li>
              <Link to="/archives/2023" className="text-decoration-none">
                Popular in 2023
              </Link>
            </li>
            <li>
              <Link to="/archives/2022" className="text-decoration-none">
                Popular in 2022
              </Link>
            </li>
            <li>
              <Link to="/archives/2021" className="text-decoration-none">
                Popular in 2021
              </Link>
            </li>
            <li>
              <Link to="/archives/2020" className="text-decoration-none">
                Popular in 2020
              </Link>
            </li>
            <li>
              <Link to="/archives/2019" className="text-decoration-none">
                Popular in 2019
              </Link>
            </li>
            <li>
              <Link to="/archives/2018" className="text-decoration-none">
                Popular in 2018
              </Link>
            </li>
            <li>
              <Link to="/archives/2017" className="text-decoration-none">
                Popular in 2017
              </Link>
            </li>
            <li>
              <Link to="/archives/2016" className="text-decoration-none">
                Popular in 2016
              </Link>
            </li>
            <li>
              <Link to="/archives/2015" className="text-decoration-none">
                Popular in 2015
              </Link>
            </li>
            <li>
              <Link to="/archives/2014" className="text-decoration-none">
                Popular in 2014
              </Link>
            </li>
            <li>
              <Link to="/archives/2013" className="text-decoration-none">
                Popular in 2013
              </Link>
            </li>
            <li>
              <Link to="/archives/2012" className="text-decoration-none">
                Popular in 2012
              </Link>
            </li>
          </ol>
        </div>
        {/* Archives End */}
        {/* CTA */}
        <div className="p-4">
          <h4 className="fst-italic">Elsewhere</h4>
          <ol className="list-unstyled">
            <li>
              <Link
                to="https://github.com/yasirmansoori"
                className="text-decoration-none"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/yasir-mansoori/"
                className="text-decoration-none"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/mansoori_yasir786/"
                className="text-decoration-none"
              >
                Instagram
              </Link>
            </li>
          </ol>
        </div>
        {/* CTA End */}
      </div>
    </div>
  );
};

export default SideBar;
