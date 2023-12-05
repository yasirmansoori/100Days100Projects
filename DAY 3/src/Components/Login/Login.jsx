import styles from "./login.module.css";
import Footer from "../Footer/Footer";
function Login() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.card_inner}>
          <h1>W E L C O M E</h1>
          <p>Fill your data to enter. Thank you!!!</p>
          <div className={`${styles.form__group} ${styles.field}`}>
            <input
              type="input"
              className={styles.form__field}
              placeholder="Username"
              required=""
            />
            <label htmlFor="name" className={styles.form__label}>
              Username
            </label>
          </div>
          <div className={`${styles.form__group} ${styles.field}`}>
            <input
              type="password"
              className={styles.form__field}
              placeholder="Password"
              required=""
            />
            <label htmlFor="name" className={styles.form__label}>
              Password
            </label>
          </div>
          <div className="form-check mt-3 ">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Remember me
            </label>
          </div>
          <button className={styles.Btn}>
            <div className={styles.sign}>
              <svg viewBox="0 0 512 512">
                <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </svg>
            </div>
            <div className={styles.text}>Login</div>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
