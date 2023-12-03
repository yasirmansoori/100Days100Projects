import styles from "./Styles/styles.module.css";
const Square = ({ onMouseOver, onMouseOut }) => {
  return (
    <div
      className={styles.square}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    ></div>
  );
};

export default Square;
