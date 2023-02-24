import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="page-wrapper">
        <section className="container-fluid position-relative px-0">
          <div className="row g-0">
            <div className="col-xl-7 col-lg-6 pe-lg-5">
              <div className="d-flex h-100 pe-xl-4">
                <video
                  className="w-100"
                  autoPlay
                  muted
                  loop
                  style={{ objectFit: "cover" }}
                >
                  <source
                    src="assets/img/landing/conference/hero-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 position-relative py-5">
              <img
                src="assets/img/landing/conference/hero-bg.png"
                className="position-absolute top-50 translate-middle-y ms-lg-n4"
                width="866"
                alt="Background shapes"
              />
              <div
                className="position-relative zindex-5 text-center text-lg-start px-3 px-lg-0 py-xl-4 py-xxl-5 mt-lg-3 mx-auto mx-lg-0"
                style={{ maxWidth: "530px" }}
              >
                <h2 className="h3 text-primary">Feb 25, 2023</h2>
                <h1 className="display-1  mb-1 position-relative">Tahseen</h1>
                <div className="h6 pl-lg-3">weds</div>
                <h1 className="display-1 pb-lg-3 mb-3 position-relative">
                  Shajahan
                </h1>
                <div className="d-flex justify-content-center justify-content-lg-start text-start mb-2">
                  <i className="bx bx-map fs-4 text-primary me-2"></i>
                  <a
                    className="location_link"
                    href="https://goo.gl/maps/pXpnSmjHrURWuAiDA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fs-xl">
                      Shiraz Hall
                      <br />
                      Egmore, Chennai
                    </div>
                  </a>
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start py-4 py-lg-5">
                  <a
                    href="#schedule"
                    className="btn btn-primary shadow-primary btn-lg me-sm-3 me-xl-4 mb-3"
                  >
                    See Schedule
                  </a>
                  {/* <a href="#" className="btn btn-outline-primary btn-lg mb-3">
                    <i className="bx bx-calendar-check fs-xl me-2 ms-n1"></i>
                    Add to calendar
                  </a> */}
                </div>
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start text-start pb-2 pt-lg-2 pb-xl-0 pt-xl-5 mt-xxl-5">
                  <div className="d-flex me-3">
                    {/* <div
                      className="d-flex align-items-center justify-content-center bg-light rounded-circle"
                      style={{ width: "52px", height: "52px" }}
                    >
                      <img
                        src="assets/img/avatar/08.jpg"
                        className="rounded-circle"
                        width="48"
                        alt="Avatar"
                      />
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                      style={{ width: "52px", height: "52px" }}
                    >
                      <img
                        src="assets/img/avatar/40.jpg"
                        className="rounded-circle"
                        width="48"
                        alt="Avatar"
                      />
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                      style={{ width: "52px", height: "52px" }}
                    >
                      <img
                        src="assets/img/avatar/09.jpg"
                        className="rounded-circle"
                        width="48"
                        alt="Avatar"
                      />
                    </div> */}
                  </div>
                  <span className="fs-sm">
                    <span className="text-primary fw-semibold">400+</span>{" "}
                    attendees are already with us
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="position-absolute d-none d-lg-block bottom-0 start-0 w-100 zindex-5 pb-xxl-5">
            <div className="container pb-4 mb-3 mb-xxl-0">
              <a
                href="#speakers"
                className="d-table text-light opacity-80 text-decoration-none w-auto py-4"
                data-scroll
                data-scroll-offset="70"
              >
                <span className="d-flex align-items-center">
                  Scroll for more
                  <i className="bx bx-down-arrow-circle fs-3 ms-2"></i>
                </span>
              </a>
            </div>
          </div>
        </section>

        <section id="schedule" className="container py-5">
          <div className="row mt-xl-2 mb-xl-3 pb-3 py-md-4 py-lg-5">
            <div className="col-12">
              <h2 className="h1 text-center text-sm-start pb-2 pb-lg-0 mb-4 mb-lg-5">
                Schedule
              </h2>
            </div>
            <div className="col-lg-3 mb-4">
              <div
                className="nav flex-nowrap flex-lg-column nav-tabs"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  href="#day-1"
                  className="nav-link d-block w-100 rounded-3 p-4 p-xl-5 me-2 me-sm-3 me-lg-0 mb-lg-3 active"
                  id="day-1-tab"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls="day-1"
                  aria-selected="true"
                >
                  <div className="fs-xl">Wedding</div>
                  <div className="fs-3 fw-bold">Feb 25, 2023</div>
                </a>
                <a
                  href="#day-2"
                  className="nav-link d-block w-100 rounded-3 p-4 p-xl-5"
                  id="day-2-tab"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls="day-2"
                  aria-selected="false"
                >
                  <div className="fs-xl">Reception</div>
                  <div className="fs-3 fw-bold">Feb 27, 2023</div>
                </a>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="day-1"
                  role="tabpanel"
                  aria-labelledby="day-1-tab"
                >
                  <div className="border-bottom pb-4">
                    <div className="row pb-1 pb-xl-3">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="h5 mb-1">9:30 – 10:30 am</div>
                        <p className="text-muted mb-0">February 14th</p>
                      </div>
                      <div className="col-sm-8">
                        <h5 className="mb-0">Opening ceremony</h5>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom py-4">
                    <div className="row py-1 py-xl-3">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="h5 mb-1">10:30 – 11:30 am</div>
                        <p className="text-muted mb-2 mb-sm-4">February 25th</p>
                        <span className="badge bg-success shadow-success fs-sm">
                          Important
                        </span>
                      </div>
                      <div className="col-sm-8">
                        <h5>Nikah (Marriage)</h5>
                        <p className="mb-4">
                          People will be gathering and the wedding ceremony will
                          begin.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom py-4">
                    <div className="row py-1 py-xl-3">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="h5 mb-1">12:00 pm – 02:00 pm</div>
                        <p className="text-muted mb-2 mb-sm-4">February 25th</p>
                      </div>
                      <div className="col-sm-8">
                        <h5>Lunch</h5>
                        <p className="mb-4">
                          Lunch will be provided. Both Veg & Non-Veg options are
                          available.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom py-4">
                    <div className="row py-1 py-xl-3">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="h5 mb-1">02:00 – 03:30 pm</div>
                        <p className="text-muted mb-0">February 25th</p>
                      </div>
                      <div className="col-sm-8">
                        <h5 className="mb-0">Closing ceremony</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="day-2"
                  role="tabpanel"
                  aria-labelledby="day-2-tab"
                >
                  <div className="border-bottom pb-4">
                    <div className="row pb-1 pb-xl-3">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="h5 mb-1">9:30 – 10:30 am</div>
                        <p className="text-muted mb-0">February 27th</p>
                      </div>
                      <div className="col-sm-8">
                        <h5 className="">Opening Ceremony</h5>
                        <p className="mb-4">Arrival of newly weds.</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom py-4">
                    <div className="row py-1 py-xl-3">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="h5 mb-1">10:30 – 11:30 am</div>
                        <p className="text-muted mb-2 mb-sm-4">February 27th</p>
                      </div>
                      <div className="col-sm-8">
                        <h5>On Stage & Guests arrivals</h5>
                        <p className="mb-4">Gifting and guests arrivals</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom py-4">
                    <div className="row py-1 py-xl-3">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="h5 mb-1">11:30 am – 01:30 pm</div>
                        <p className="text-muted mb-2 mb-sm-4">February 27th</p>
                      </div>
                      <div className="col-sm-8">
                        <h5>Lunch</h5>
                        <p className="mb-4">
                          Both Veg and Non-Veg options will be available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-5">
          <div className="container py-2 py-md-4 py-lg-5">
            <h2 className="h1 text-center pb-3 pb-lg-0 mb-4 mb-lg-5">
              What Our Friends Say
            </h2>
            <div
              className="position-relative px-sm-5 mx-auto"
              style={{ maxWidth: "976px" }}
            >
              <button
                type="button"
                id="prev"
                className="btn btn-prev btn-icon btn-sm position-absolute top-50 translate-middle-y start-0 d-none d-sm-inline-flex mt-n4"
              >
                <i className="bx bx-chevron-left"></i>
              </button>

              <button
                type="button"
                id="next"
                className="btn btn-next btn-icon btn-sm position-absolute top-50 translate-middle-y end-0 d-none d-sm-inline-flex mt-n4"
              >
                <i className="bx bx-chevron-right"></i>
              </button>

              <div
                className="swiper swiper-nav-onhover pt-1 mx-md-2"
                data-swiper-options='{
              "spaceBetween": 12,
              "loop": true,
              "pagination": {
                "el": ".swiper-pagination",
                "clickable": true
              },
              "navigation": {
                "prevEl": "#prev",
                "nextEl": "#next"
              }
            }'
              >
                <div className="swiper-wrapper pt-4 pb-3">
                  <div className="swiper-slide h-auto px-2">
                    <figure className="card h-100 position-relative border-0 shadow-sm py-3 p-0 p-xxl-4 my-0">
                      <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-xxl-5">
                        <i className="bx bxs-quote-left"></i>
                      </span>
                      <blockquote className="card-body mt-2 mb-2">
                        <p className="fs-lg mb-0">Coming Soon...</p>
                      </blockquote>
                      {/* <figcaption className="card-footer d-flex align-items-center border-0 pt-0 mt-n2 mt-lg-0">
                        <img
                          src="assets/img/avatar/14.jpg"
                          width="60"
                          className="rounded-circle"
                          alt="Annette Black"
                        />
                        <div className="ps-3">
                          <h6 className="fw-semibold lh-base mb-0">
                            Annette Black
                          </h6>
                          <span className="fs-sm text-muted">
                            QA Engineer in Company Name
                          </span>
                        </div>
                      </figcaption> */}
                    </figure>
                  </div>
                </div>

                <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="row mt-lg-3 pt-1 pt-md-4 pt-lg-5">
            <div className="col-xl-3 col-md-4 text-center text-md-start">
              <h3 className="h4">Venue</h3>
              <h2 className="h1 mb-4">Shiraz Hall, Egmore</h2>
              <div className="d-none d-md-block text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="118"
                  height="118"
                  fill="none"
                >
                  <g clip-path="url(#A)">
                    <path
                      d="M116.912 76.527c-4.963-3.081-9.413-6.675-13.52-10.782-1.37-1.369-3.766-.343-3.766 1.54 0 1.54-.171 3.081-.171 4.621-14.89 2.739-29.78 3.936-45.013 4.108-12.836.342-30.123 1.712-41.761-4.45-8.9-4.792-10.269-15.917-6.504-24.475 1.54-3.594 4.279-6.504 7.702-8.557 3.936-2.396 7.873-1.027 11.981-2.054.513-.171.685-.856.342-1.369-6.333-6.675-17.457 1.027-21.565 6.504-5.819 7.702-6.161 18.998-1.027 27.042 7.531 11.981 25.501 11.125 37.653 11.467 19.169.685 39.365.171 58.192-4.108 0 1.712.171 3.252.685 4.963 0 .342.171.513.342.685-1.369 1.198-.171 4.279 2.225 3.765 4.963-1.027 9.927-2.568 14.548-4.792 1.198-1.026.856-3.251-.343-4.107zm-13.178-4.45c2.396 2.054 4.792 4.108 7.531 5.99-2.396 1.027-4.964 1.712-7.531 2.396v-.685c-.514-2.567-.342-5.135 0-7.702z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="A">
                      <path fill="#fff" d="M0 0h118v118H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="col-xl-9 col-md-8">
              <img
                src="/assets/img/shiraz-hall.jpeg"
                className="rounded-3"
                width="952"
                alt="Venue"
              />
            </div>
          </div>
          <div className="row mb-lg-3 pb-1 pb-md-4 pb-lg-5 mt-4 mt-sm-n5">
            <div className="col-lg-4 col-md-5 offset-md-6 offset-lg-7 mt-md-n5">
              <div
                className="gallery mt-md-n4 mx-auto"
                style={{ maxWidth: "416px" }}
              >
                <a
                  href="https://goo.gl/maps/GDws4mw8w71n1Ra89"
                  data-iframe="true"
                  className="gallery-item rounded-2"
                  data-sub-html='<h6 className="fs-sm text-light">Shiraz Hall, Egmore</h6>'
                >
                  <img
                    src="assets/img/shiraz-map-light.png"
                    className="d-dark-mode-none"
                    alt="Map preview"
                  />
                  <img
                    src="assets/img/shiraz-map-light.png"
                    className="d-none d-dark-mode-block"
                    alt="Map preview"
                  />
                  <div className="gallery-item-caption fs-sm fw-medium">
                    Shiraz Hall, Egmore
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer dark-mode bg-dark pt-5 pb-4 pb-lg-5">
        <div className="container text-center pt-lg-3">
          <div className="d-flex justify-content-center pt-4 mt-lg-3">
            <a
              target="_blank"
              href="https://instagram.com/shajahan_45?igshid=YmMyMTA2M2Y="
              className="btn btn-icon btn-secondary btn-instagram mx-2"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              target="_blank"
              href="https://instagram.com/its.me.tahse_n?igshid=YmMyMTA2M2Y="
              className="btn btn-icon btn-secondary btn-instagram mx-2"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/ShajanSheriff"
              className="btn btn-icon btn-secondary btn-twitter mx-2"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/thatindiandev/"
              className="btn btn-icon btn-secondary btn-linkedin mx-2"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/tahseen-ibrahim-b2489b215/"
              className="btn btn-icon btn-secondary btn-linkedin mx-2"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <p className="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
            <span className="text-light opacity-50">
              &copy; All rights reserved. Made by &nbsp;
            </span>
            <a
              className="nav-link d-inline-block p-0"
              href="/"
              target="_blank"
              rel="noopener"
            >
              Frontend Couple
            </a>
          </p>
        </div>
      </footer>

      <a href="#top" className="btn-scroll-top" data-scroll>
        <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">
          Top
        </span>
        <i className="btn-scroll-top-icon bx bx-chevron-up"></i>
      </a>
    </>
  );
}
