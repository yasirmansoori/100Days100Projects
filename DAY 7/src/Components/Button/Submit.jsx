import styles from "./submit.module.css";
function Submit() {
  return (
    <button type="submit" className={styles.cta}>
      <span className={styles.hover_underline_animation}> Submit</span>
    </button>
  );
}

export default Submit;
