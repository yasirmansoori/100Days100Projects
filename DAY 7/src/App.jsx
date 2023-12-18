import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import styles from "./app.module.css";
function App() {
  return (
    <>
      <div
        className={`${styles.app} vh-100 d-flex flex-row justify-content-center`}
      >
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
