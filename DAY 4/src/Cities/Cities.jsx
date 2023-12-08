import { useEffect, useState } from "react";
import styles from "./cities.module.css";
function SmallCard({ cardWidth, cardHeight, city, temp, img }) {
  const [loadCities, setloadCities] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloadCities(true);
    }, 800);
  }, []);
  return (
    <>
      <div
        className={`${styles.cardContainer} ${loadCities && styles.loadCities}`}
      >
        <div
          className={styles.card}
          style={{ width: cardWidth, height: cardHeight }}
        >
          <div className={styles.city}>{city}</div>
          <div className="row">
            <div className="col">{temp}°</div>
            <div className="col">
              <img src={img} width={30} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmallCard;
