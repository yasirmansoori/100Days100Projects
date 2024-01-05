import { useEffect, useState } from "react";
import styles from "./genre.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import SideBar from "../../components/Sidebar/SideBar";
import Modal from "../../components/Modal/Modal";
const Header = import.meta.env.VITE_AUTHORIZATION_TOKEN;

const Genre = () => {
  const { genre } = useParams();
  const [genreData, setGenreData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setGenreData(null);
      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${Header}`,
      };

      try {
        const requests = [];
        for (let i = 1; i < 4; i++) {
          const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${i}&release_date.gte=2020-01-01&sort_by=popularity.asc&with_genres=${genre}`;
          requests.push(axios.get(url, { headers }));
        }
        const responses = await Promise.all(requests);
        const newData = responses.reduce((acc, response) => {
          const data = response.data.results.filter(
            (item) => item.backdrop_path && item.overview
          );
          return acc.concat(data);
        }, []);
        console.log(`${genre}`, newData);
        setGenreData(newData);
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchData();
  }, [genre]);

  if (genreData === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container py-4 py-md-2">
      <div className="row g-5">
        {/* Genere Page */}
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Popular {genre} Movies
          </h3>
          <div className="container text-center">
            <div className="row g-4 flex-column flex-md-row">
              {genreData.map((item, index) => {
                return (
                  <div className="col-12 col-md-6" key={index}>
                    <div className="card d-flex h-100 border-0">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className={`${styles.inner_card_body} card-body`}>
                        <h5 className="card-title">{item?.original_title}</h5>
                        <p className="card-text">
                          {item?.overview.substring(0)}
                        </p>
                        <Modal />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Genere Page End */}
        {/* Lower Side Bar */}
        <SideBar />
        {/* Lower Side Bar */}
      </div>
    </div>
  );
};

export default Genre;
