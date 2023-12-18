import sample from "../Contact/sample.avif";
import styles from "../Contact/contact.module.css";
import Submit from "../Button/Submit";
import { useState } from "react";
const email = "YOUR_EMAIL_ADDRESS";
const redirect_url = "YOUR_REDIRECT_URL";
function Contact() {
  const [toggle, setToggle] = useState(false);
  const toggleShow = () => {
    setToggle(!toggle);
    const first = document.querySelector(`.${styles.first}`);
    const third = document.querySelector(`.${styles.third}`);
    if (toggle) {
      third.classList.add(styles.show);
      first.classList.add(styles.hide);
    }
  };
  return (
    <form
      action={`https://formsubmit.co/${email}`}
      method="POST"
      className={styles.outer}
    >
      <input type="hidden" name="_next" value={redirect_url} />

      <div className={`${styles.first}`}>
        {/* Next button to toggle the form when on mobile view */}
        <div className={styles.next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            type="button"
            onClick={toggleShow}
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </div>
        {/* Content goes here */}
        <div className={styles.content}>
          <small>Get in Touch</small>
          <h3 className="my-2">Let&apos;s Chat, Reach Out to Us. </h3>
          <p className="mb-1">
            Have questions or feedback? We&apos;re here to help. Send us a
            message, and we&apos;ll respond within 24 hours.
          </p>
          <hr />

          {/* Name field  */}
          <div className="d-flex gap-3 mb-3">
            <div>
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                type="name"
                className="form-control "
                id="firstname"
                placeholder="John"
                name="firstname"
                required
              />
            </div>
            <div>
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type="name"
                className="form-control"
                id="lastname"
                placeholder="Doe"
                name="lastname"
                required
              />
            </div>
          </div>
          {/* Email field */}
          <div className="mb-3">
            <label htmlFor="emailAddress" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              placeholder="john@gmail.com"
              name="email"
              required
            />
          </div>
          {/* Message field */}
          <div>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              placeholder="Your message here..."
              name="message"
            ></textarea>
          </div>
        </div>
      </div>
      <div className={`${styles.second}`}>
        <img src={sample} alt="Sample Image" />
      </div>
      <div className={`${styles.third}`}>
        <div className="d-flex flex-row p-3 align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>
          <div>
            <h6 className="m-1">Email</h6>
            <p className="m-1">yourmail@gmail.com</p>
          </div>
        </div>
        <div className="d-flex flex-row p-3 align-items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-phone-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
          </svg>
          <div>
            <h6 className="m-1">Phone</h6>
            <p className="m-1">+91 XXXXXXXXXX</p>
          </div>
        </div>
        <Submit />
      </div>
    </form>
  );
}

export default Contact;
