import { useEffect, useState } from "react";
import styles from "./archive.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import SideBar from "../../components/Sidebar/SideBar";
const Header = import.meta.env.VITE_AUTHORIZATION_TOKEN;

const Genre = () => {
  const { year } = useParams();
  const [yearData, setYearData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setYearData(null);
      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${Header}`,
      };

      try {
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=${year}-01-01&release_date.lte=${year}-12-01&sort_by=popularity.desc`;
        const responseYearData = await axios.get(url, { headers });
        const newData = responseYearData.data.results.filter(
          (item) => item.backdrop_path && item.overview
        );
        setYearData(newData);
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchData();
  }, [year]);

  if (yearData === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container py-4 py-md-2">
      <div className="row g-5">
        {/* Popular in {year} Movies */}
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Popular {year} Movies
          </h3>
          <div className="container text-center">
            <div className="row g-4 flex-column flex-md-row">
              {yearData.map((item, index) => {
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
        {/* Popular in {year} Movies End */}
        {/* Lower Side Bar */}
        <SideBar />
        {/* Lower Side Bar */}
      </div>
    </div>
  );
};

export default Genre;
