import Card from "../Card/Card";
import styles from "./ui.module.css";
import Cities from "../Cities/Cities";
import Forecast from "../Forecast/Forecast";
import Loader from "../Loader/Loader";
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
import { useEffect, useState } from "react";
function Ui() {
  const [loading, setLoading] = useState(true);

  const [loadCard1, setloadCard1] = useState(false);
  const [loadCard2, setloadCard2] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  const [mumbaiData, setMumbaiData] = useState(null);
  const [delhiData, setDelhiData] = useState(null);
  const [bengaluruData, setBengaluruData] = useState(null);
  const [jaipurData, setJaipurData] = useState(null);
  const [day, setDay] = useState(null);
  const [dayImage, setDayImage] = useState(null);
  const [time, setTime] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [windDirection, setWindDirection] = useState(null);
  const [windDegree, setWindDegree] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);
  const [uvIndex, setUvIndex] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setloadCard1(true);
    }, 1000);
    setTimeout(() => {
      setloadCard2(true);
    }, 2000);
    const fetchData = async (latitude, longitude) => {
      try {
        const forecastResponse = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=5`
        );
        const delhiResponse = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=New Delhi&days=5`
        );
        const bengaluruResponse = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Bengaluru&days=5`
        );
        const mumbaiResponse = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Mumbai&days=5`
        );
        const jaipurResponse = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Jaipur&days=5`
        );
        setForecastData(forecastResponse.data);
        setDelhiData(delhiResponse.data);
        setBengaluruData(bengaluruResponse.data);
        setMumbaiData(mumbaiResponse.data);
        setJaipurData(jaipurResponse.data);
        const currentDate = new Date();
        const formattedTime = currentDate.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setDayImage(forecastResponse.data.current.condition.icon);
        setTime(formattedTime);
        setWindDegree(forecastResponse.data.current.wind_degree);
        setWindDirection(forecastResponse.data.current.wind_dir);
        setWindSpeed(forecastResponse.data.current.wind_kph);
        setHumidity(forecastResponse.data.current.humidity);
        setPrecipitation(forecastResponse.data.current.precip_mm);
        setUvIndex(forecastResponse.data.current.uv);
        if (forecastResponse.data.current.is_day === 1) {
          setDay("Good Morning");
        } else {
          setDay("Good Night");
        }
        setLoading(false); // Set loading to false on error to stop the loader
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    // To get user's Live location and fetch weather data
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchData(latitude, longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
        setLoading(false); // Set loading to false on error to stop the loader
      }
    );
  }, [apiKey]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div
          className={`container-fluid ${styles.main_container} px-1 px-sm-3  mx-auto`}
        >
          <div className="row d-flex justify-content-center">
            <div className={`row ${styles.card0} justify-content-center my-5`}>
              <div
                className={`${styles.card1} ${
                  loadCard1 && styles.loadCard1
                }  row col-lg-6 col-md-7`}
              >
                <div className="row">
                  <div className="col">
                    <Card
                      temp={forecastData?.current.temp_c}
                      high={forecastData?.forecast.forecastday[0].day.maxtemp_c}
                      low={forecastData?.forecast.forecastday[0].day.mintemp_c}
                      img={forecastData?.current.condition.icon}
                      city={forecastData?.location.name}
                      state={forecastData?.location.region}
                      weather={forecastData?.current.condition.text}
                    />
                  </div>
                  <div className="col">
                    <div className="col w-100 p-0 h-50 mb-1">
                      <Cities
                        cardWidth="200px"
                        cardHeight="90px"
                        city={delhiData?.location.name}
                        temp={delhiData?.current.temp_c}
                        img={delhiData?.current.condition.icon}
                      />
                    </div>
                    <div className="col w-100 p-0 h-50 mb-2">
                      <Cities
                        cardWidth="200px"
                        cardHeight="90px"
                        city={jaipurData?.location.name}
                        temp={jaipurData?.current.temp_c}
                        img={jaipurData?.current.condition.icon}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Forecast
                      date={forecastData?.forecast.forecastday[1].date}
                      weather={forecastData?.current.condition.text}
                      img={forecastData?.current.condition.icon}
                      high={forecastData?.forecast.forecastday[1].day.maxtemp_c}
                      low={forecastData?.forecast.forecastday[1].day.mintemp_c}
                      sunrise={
                        forecastData?.forecast.forecastday[1].astro.sunrise
                      }
                      sunset={
                        forecastData?.forecast.forecastday[1].astro.sunset
                      }
                    />
                  </div>
                  <div className="col">
                    <Forecast
                      date={forecastData?.forecast.forecastday[2].date}
                      weather={forecastData?.current.condition.text}
                      img={forecastData?.current.condition.icon}
                      high={forecastData?.forecast.forecastday[2].day.maxtemp_c}
                      low={forecastData?.forecast.forecastday[2].day.mintemp_c}
                      sunrise={
                        forecastData?.forecast.forecastday[2].astro.sunrise
                      }
                      sunset={
                        forecastData?.forecast.forecastday[2].astro.sunset
                      }
                    />
                  </div>
                  <div className="col">
                    <div className="col w-100 p-0 h-50 mt-2">
                      <Cities
                        cardWidth="200px"
                        cardHeight="90px"
                        city={mumbaiData?.location.name}
                        temp={mumbaiData?.current.temp_c}
                        img={mumbaiData?.current.condition.icon}
                      />
                    </div>
                    <div className="col w-100 p-0 h-50 mt-1">
                      <Cities
                        cardWidth="200px"
                        cardHeight="90px"
                        city={bengaluruData?.location.name}
                        temp={bengaluruData?.current.temp_c}
                        img={bengaluruData?.current.condition.icon}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.card2} ${
                  loadCard2 && styles.loadCard2
                } col-lg-3 col-md-5`}
              >
                <div className="row px-3 p-3">
                  <input
                    type="text"
                    name="location"
                    placeholder="Another location"
                  />
                  <div
                    className={`fa fa-search ${styles.fa_search} mr-0 text-center`}
                  ></div>
                </div>
                <div className="mr-4">
                  <div className="align-middle text-center">
                    <span>
                      {day} User! &nbsp;{" "}
                      <img src={dayImage} width={30} alt="" />
                    </span>
                  </div>
                  <h6 className="text-center">{time}</h6>
                  <p className="text-center">Weather Details</p>
                  <div className="row px-3">
                    <p>Wind Speed</p>
                    <p className="ml-auto">{windSpeed} Kph</p>
                  </div>
                  <div className="row px-3">
                    <p>Wind Direction</p>
                    <p className="ml-auto">{windDirection}</p>
                  </div>
                  <div className="row px-3">
                    <p>Wind Degree</p>
                    <p className="ml-auto">{windDegree}°</p>
                  </div>
                  <div className="row px-3">
                    <p>Humidity</p>
                    <p className="ml-auto">{humidity}</p>
                  </div>
                  <div className="row px-3">
                    <p>Precipitation</p>
                    <p className="ml-auto">{precipitation}%</p>
                  </div>
                  <div className="row px-3">
                    <p>UV Index</p>
                    <p className="ml-auto">{uvIndex}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Ui;
