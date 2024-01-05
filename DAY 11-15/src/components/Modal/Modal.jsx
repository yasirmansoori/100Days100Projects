import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./modal.module.css";
const Header = import.meta.env.VITE_AUTHORIZATION_TOKEN;

const MODAL_BODY_COLOR = "#1c233a";
const Modal = ({ itemId }) => {
  const [dataByItemId, setDataByItemId] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${itemId}?language=en-US`;
      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${Header}`,
      };

      try {
        const response = await axios.get(url, { headers });
        const dataByItemId = response.data;
        setDataByItemId(dataByItemId);
        console.log(dataByItemId);
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchData();
  }, [itemId]);
  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-outline-info"
        data-bs-toggle="modal"
        data-bs-target={`#staticBackdrop${itemId}`}
      >
        More
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id={`staticBackdrop${itemId}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog mw-100 mx-4 ${styles.modal_dialog}`}>
          <div
            className={`modal-content ${styles.modal_content}`}
            style={{ backgroundColor: MODAL_BODY_COLOR }}
          >
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {dataByItemId?.original_title} &nbsp;
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div
                className={`p-4 p-md-4 rounded text-body-emphasis ${styles.hero_content}`}
              >
                <div className="row d-flex flex-column flex-md-row flex-lg-row ">
                  <div className="col-lg-6 col-12 p-4 text-start">
                    <em className="text-danger my-1">
                      Collection : {dataByItemId?.belongs_to_collection?.name}
                    </em>
                    <strong className="d-block text-info-emphasis my-1">
                      Rating : {dataByItemId?.vote_average}/10
                    </strong>
                    <p>{dataByItemId?.overview}</p>
                    <em>
                      <a className="text-body-emphasis fw-bold">
                        {dataByItemId?.release_date}
                      </a>
                    </em>
                    <h4 className="my-1">
                      Runtime : {dataByItemId?.runtime} mins
                    </h4>
                    <a
                      href={dataByItemId?.homepage}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-light my-1"
                      >
                        Watch Here
                      </button>
                    </a>
                  </div>
                  <div className={` ${styles.poster} col-lg-6 col-12`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${dataByItemId?.backdrop_path}`}
                      alt={dataByItemId?.original_title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal End */}
    </>
  );
};

export default Modal;
