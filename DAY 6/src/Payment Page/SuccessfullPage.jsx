import sample from "./sample.png";

function SuccessfullPage() {
  return (
    <div className="container col-xxl-8 px-4 py-3">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={sample}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Thanks for shopping with us
          </h1>
          <p className="lead">
            {/* write description here ---> */}
            {/* Sample ---> */}
            Thanks for choosing us for your shopping needs! Dive into a world of
            quality, style, and satisfaction. Your satisfaction is our priority.
            Explore more, discover more, and shop with confidence. Welcome to a
            seamless shopping experience.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              <a href="/" className="text-decoration-none text-info">
                Go Home
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessfullPage;
