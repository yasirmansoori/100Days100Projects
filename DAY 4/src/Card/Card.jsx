import { useEffect } from "react";
import styles from "./card.module.css";
import { useState } from "react";
function Card({ temp, high, low, img, city, state, weather }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className={`${styles.card} ${loaded && styles.loaded}`}>
      <svg
        fill="none"
        viewBox="0 0 342 175"
        height={175}
        width={342}
        xmlns="http://www.w3.org/2000/svg"
        className={styles.background}
      >
        <path
          fill="url(#paint0_linear_103_640)"
          d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2={128}
            x2="354.142"
            y1={128}
            x1={0}
            id="paint0_linear_103_640"
          >
            <stop stopColor="#5936B4" />
            <stop stopColor="#362A84" offset={1} />
          </linearGradient>
        </defs>
      </svg>
      <div className={`${styles.image_container} ${loaded && styles.loaded}`}>
        <img src={img} className={styles.image} alt={weather} />
      </div>
      <p className={styles.main_text}>{temp}°</p>
      <div className={styles.info}>
        <div>
          <p className={styles.text_gray}>{`H: ${high}° L: ${low}°`}</p>
          <p>
            {city}, {state}
          </p>
        </div>
        <p className={styles.info_right}>{weather}</p>
      </div>
    </div>
  );
}

export default Card;
