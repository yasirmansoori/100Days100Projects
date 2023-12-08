import { useEffect, useState } from "react";
import styles from "./forecast.module.css";
function SmallCard({ date, weather, img, high, low, sunrise, sunset }) {
  const [loadForecast, setloadForecast] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloadForecast(true);
    }, 800);
  }, []);
  return (
    <>
      <div
        className={`${styles.cardContainer} ${
          loadForecast && styles.loadForecast
        }`}
      >
        <div className={styles.card}>
          <div className={styles.city}>{date}</div>
          <p>
            {weather} <img src={img} width={30} alt={weather} />
          </p>
          <small>{`H: ${high}° L: ${low}°`}</small>
          <small>{`Sunrise: ${sunrise}`}</small>
          <small>{`Sunset: ${sunset}`}</small>
        </div>
      </div>
    </>
  );
}

export default SmallCard;
