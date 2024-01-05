import { useEffect, useState } from "react";
import styles from "./homepage.module.css";
import axios from "axios";
import SideBar from "../../components/Sidebar/SideBar";
import Modal from "../../components/Modal/Modal";
const Header = import.meta.env.VITE_AUTHORIZATION_TOKEN;

const Homepage = () => {
  const [recentlyReleased, setRecentlyReleased] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const urlRecentlyReleased =
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&release_date.gte=2023-01-01&sort_by=popularity.desc";
      const urlPopular =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1release_date.gte=2024-01-01&sort_by=popularity.asc";
      const urltopRated =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2";
      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${Header}`,
      };

      try {
        const responseRecentlyReleased = await axios.get(urlRecentlyReleased, {
          headers,
        });
        const responsePopular = await axios.get(urlPopular, { headers });
        const responseToprated = await axios.get(urltopRated, { headers });
        const dataRecentlyReleased = responseRecentlyReleased.data;
        const dataPopular = responsePopular.data;
        const dataToprated = responseToprated.data;
        setRecentlyReleased(
          dataRecentlyReleased.results.filter(
            (item) => item.overview && (item.backdrop_path || item.poster_path)
          )
        );
        setPopular(dataPopular.results);
        setTopRated(dataToprated.results);
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container py-4 py-md-2">
      {/* Hero Section */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-touch="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          {topRated.slice(0, 4).map((item, index) => {
            return (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="5000"
              >
                <div
                  className={`p-4 p-md-4 mb-4 rounded text-body-emphasis ${styles.hero_content}`}
                >
                  <div className="row">
                    <div className="col-md-4 col-lg-4 p-4">
                      <em>Top Rated</em>
                      <h1>{item?.original_title}</h1>
                      <p>{item?.overview.substring(0, 200)}....</p>
                      <em>
                        <a href="#" className="text-body-emphasis fw-bold">
                          {item?.release_date}
                        </a>
                      </em>
                    </div>
                    <div
                      className={` ${styles.poster} col-auto d-none d-md-block d-lg-block`}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Hero Section End */}
      {/* Recently Released Section */}
      <h2>Recently Released</h2>
      <div className="row d-flex flex-row mb-4 ">
        {recentlyReleased.slice(0, 4).map((item, index) => {
          return (
            <div
              className={`col-md-3 my-3 ${
                index === 1 ? "" : "d-none d-md-block d-lg-block"
              }}`}
              key={index}
            >
              <div
                className={`${styles.movie_card} ${styles.featured_card} card h-100 border border-0`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    item?.backdrop_path || item?.poster_path
                  }`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item?.original_title}</h5>
                  <p className="card-text">
                    {item?.overview.substring(0, 100)}....
                  </p>
                  <a
                    href="#"
                    className="text-body-emphasis fw-bold text-decoration-none"
                  >
                    {item?.release_date}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Recently Released Section End */}
      {/* Popular Section */}
      <div className="row g-5">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Popular in the Hall
          </h3>
          <div className="container text-center">
            <div className="row g-4 flex-column flex-md-row">
              {popular.slice(0, 15).map((item, index) => {
                return (
                  <div className="col-12 col-md-6" key={index}>
                    <div
                      className={`${styles.movie_card} card d-flex h-100 border-0`}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item?.original_title}</h5>
                        <p className="card-text">
                          {item?.overview.substring(0)}
                        </p>
                      </div>
                      <div className="card-footer text-center">
                        <Modal
                          itemId={item?.id}
                          title={item?.original_title}
                          description={item?.overview}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Lower Side Bar */}
        <SideBar />
        {/* Lower Side Bar */}
      </div>
      {/* Popular Section End */}
    </div>
  );
};

export default Homepage;
