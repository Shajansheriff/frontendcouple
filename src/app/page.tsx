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
                <h1 className="display-1 pb-lg-3 mb-3 position-relative">
                  Tahseen <span className="h6">weds</span> Shajahan
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
                  <a href="#" className="btn btn-outline-primary btn-lg mb-3">
                    <i className="bx bx-calendar-check fs-xl me-2 ms-n1"></i>
                    Add to calendar
                  </a>
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

        {/* <section className="position-relative bg-dark py-5">
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
          ></div>
          <div className="container position-relative zindex-5 pt-1 pt-md-2 pb-lg-2 pt-lg-4">
            <h2 className="h3 text-light text-center text-lg-start mb-4 mb-lg-5">
              Sponsored by:
            </h2>
            <div
              className="swiper ms-xxl-n5 me-xxl-n4"
              data-swiper-options='{
            "slidesPerView": 2,
            "spaceBetween": 24,
            "pagination": {
              "el": ".swiper-pagination",
              "clickable": true
            },
            "breakpoints": {
              "500": {
                "slidesPerView": 3
              },
              "650": {
                "slidesPerView": 4
              },
              "900": {
                "slidesPerView": 5
              },
              "1100": {
                "slidesPerView": 6
              }
            }
          }'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="#" className="d-block py-3">
                    <img
                      src="assets/img/brands/01.svg"
                      className="d-block mx-auto"
                      width="154"
                      alt="Brand"
                    />
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#" className="d-block py-3">
                    <img
                      src="assets/img/brands/02.svg"
                      className="d-block mx-auto"
                      width="154"
                      alt="Brand"
                    />
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#" className="d-block py-3">
                    <img
                      src="assets/img/brands/03.svg"
                      className="d-block mx-auto"
                      width="154"
                      alt="Brand"
                    />
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#" className="d-block py-3">
                    <img
                      src="assets/img/brands/04.svg"
                      className="d-block mx-auto"
                      width="154"
                      alt="Brand"
                    />
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#" className="d-block py-3">
                    <img
                      src="assets/img/brands/05.svg"
                      className="d-block mx-auto"
                      width="154"
                      alt="Brand"
                    />
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#" className="d-block py-3">
                    <img
                      src="assets/img/brands/06.svg"
                      className="d-block mx-auto"
                      width="154"
                      alt="Brand"
                    />
                  </a>
                </div>
              </div>

              <div className="swiper-pagination position-relative pt-2 mt-4"></div>
            </div>
          </div>
        </section> */}

        {/* <section id="speakers" className="container py-5 my-2 my-md-4 my-lg-5">
          <div className="d-md-flex align-items-center justify-content-between text-center text-md-start pt-md-1 pt-lg-3">
            <h2 className="h1 mb-4 mb-md-0 me-md-3">World-Class Speakers</h2>
            <a href="#" className="btn btn-primary btn-lg">
              Become a speaker
              <i className="bx bx-right-arrow-alt fs-4 lh-1 ms-2 me-n1"></i>
            </a>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-2 mt-lg-4">
            <div className="col">
              <div className="card card-hover border-0 bg-transparent">
                <div className="position-relative">
                  <img
                    src="assets/img/team/24.jpg"
                    className="rounded-3"
                    alt="Ralph Edwards"
                  />
                  <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                    <div className="position-relative d-flex zindex-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center p-3">
                  <h3 className="fs-lg fw-semibold pt-1 mb-2">Ralph Edwards</h3>
                  <p className="fs-sm mb-0">Founder &amp; CEO, Uber</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-hover border-0 bg-transparent">
                <div className="position-relative">
                  <img
                    src="assets/img/team/25.jpg"
                    className="rounded-3"
                    alt="Albert Flores"
                  />
                  <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                    <div className="position-relative d-flex zindex-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center p-3">
                  <h3 className="fs-lg fw-semibold pt-1 mb-2">Albert Flores</h3>
                  <p className="fs-sm mb-0">Principal Consultant, Twitch</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-hover border-0 bg-transparent">
                <div className="position-relative">
                  <img
                    src="assets/img/team/26.jpg"
                    className="rounded-3"
                    alt="Jenny Wilson"
                  />
                  <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                    <div className="position-relative d-flex zindex-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center p-3">
                  <h3 className="fs-lg fw-semibold pt-1 mb-2">Jenny Wilson</h3>
                  <p className="fs-sm mb-0">UX Designer, Glassdoor</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-hover border-0 bg-transparent">
                <div className="position-relative">
                  <img
                    src="assets/img/team/27.jpg"
                    className="rounded-3"
                    alt="Marvin McKinney"
                  />
                  <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                    <div className="position-relative d-flex zindex-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center p-3">
                  <h3 className="fs-lg fw-semibold pt-1 mb-2">
                    Marvin McKinney
                  </h3>
                  <p className="fs-sm mb-0">Product Manager, Google</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-hover border-0 bg-transparent">
                <div className="position-relative">
                  <img
                    src="assets/img/team/28.jpg"
                    className="rounded-3"
                    alt="Esther Howard"
                  />
                  <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                    <div className="position-relative d-flex zindex-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center p-3">
                  <h3 className="fs-lg fw-semibold pt-1 mb-2">Esther Howard</h3>
                  <p className="fs-sm mb-0">VP of Strategy, Stretto Inc.</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-hover border-0 bg-transparent">
                <div className="position-relative">
                  <img
                    src="assets/img/team/29.jpg"
                    className="rounded-3"
                    alt="Cameron Williamson"
                  />
                  <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                    <div className="position-relative d-flex zindex-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center p-3">
                  <h3 className="fs-lg fw-semibold pt-1 mb-2">
                    Cameron Williamson
                  </h3>
                  <p className="fs-sm mb-0">Co-Founder, Invision LTD</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-hover border-0 bg-transparent">
                <div className="position-relative">
                  <img
                    src="assets/img/team/30.jpg"
                    className="rounded-3"
                    alt="Jerome Bell"
                  />
                  <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                    <div className="position-relative d-flex zindex-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center p-3">
                  <h3 className="fs-lg fw-semibold pt-1 mb-2">Jerome Bell</h3>
                  <p className="fs-sm mb-0">Strategic Advisor, Shopify</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-hover border-0 bg-transparent">
                <div className="position-relative">
                  <img
                    src="assets/img/team/31.jpg"
                    className="rounded-3"
                    alt="Darrell Steward"
                  />
                  <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                    <div className="position-relative d-flex zindex-2">
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center p-3">
                  <h3 className="fs-lg fw-semibold pt-1 mb-2">
                    Darrell Steward
                  </h3>
                  <p className="fs-sm mb-0">Senior Project Manager, Uber</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="container pb-5 mb-2 mb-md-4 mb-lg-5 mt-n3 mt-lg-0">
          <div className="row pt-xl-2 pb-md-3">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h2 className="h1 text-center text-sm-start mb-4">
                The Biggest Digital Event in 2021
              </h2>
              <p className="pb-2 pb-lg-4 pb-xl-5 mb-3">
                Et, morbi at sagittis vehicula rutrum. Lacus tortor, quam arcu
                mi et, at lectus leo nunc. Mattis cras auctor vel pharetra
                tempor. Rhoncus pellentesque habitant ac tempor. At aliquam
                euismod est in praesent ornare etiam id. Faucibus libero sit
                vehicula sed condimentum. Vitae in nam porttitor rutrum sed
                aliquam donec sed. Sapien facilisi lectus.
              </p>
              <h3 className="text-center text-sm-start mb-4">Ticket Prices</h3>

              <ul className="list-group">
                <li className="list-group-item d-flex flex-column flex-sm-row align-items-center justify-content-between p-4">
                  <div className="d-flex align-items-center">
                    <svg
                      className="flex-shrink-0 me-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.794 1.71278C23.5195 1.43819 23.0743 1.43819 22.7997 1.71278L21.4284 3.08406C20.6078 2.1197 19.3859 1.50686 18.0235 1.50686C16.8653 1.50686 15.7764 1.95789 14.9577 2.77675L0.205961 17.5284C0.00486702 17.7295 -0.0552736 18.0319 0.0535233 18.2947C0.162367 18.5574 0.418726 18.7287 0.703117 18.7287H9.44934L11.8087 21.0881H11.2469C10.8585 21.0881 10.5437 21.4029 10.5437 21.7912C10.5437 22.1795 10.8585 22.4943 11.2469 22.4943H15.7656C16.1539 22.4943 16.4687 22.1795 16.4687 21.7912C16.4687 21.4029 16.1539 21.0881 15.7656 21.0881H13.7975L11.4381 18.7287H14.2594C18.7998 18.7287 22.4937 15.0348 22.4937 10.4943V5.97709C22.4937 5.39355 22.3812 4.83578 22.1769 4.32428L23.794 2.70714C24.0687 2.43255 24.0687 1.98737 23.794 1.71278ZM2.4006 17.3224L13.5562 6.1668V8.98806C13.5562 13.5836 9.81745 17.3224 5.22187 17.3224H2.4006ZM21.0875 10.4943C21.0875 14.2594 18.0244 17.3225 14.2594 17.3225H10.2592C13.0761 15.6134 14.9625 12.5168 14.9625 8.98811V6.15995C14.9625 5.25752 15.3139 4.40913 15.952 3.77116C16.5052 3.21784 17.2409 2.91316 18.0235 2.91316C19.713 2.91316 21.0875 4.28767 21.0875 5.97719L21.0875 10.4943Z"
                        fill="currentColor"
                      />
                      <path
                        d="M18.7781 5.97526C19.1664 5.97526 19.4812 5.66046 19.4812 5.27213C19.4812 4.88381 19.1664 4.56901 18.7781 4.56901C18.3898 4.56901 18.075 4.88381 18.075 5.27213C18.075 5.66046 18.3898 5.97526 18.7781 5.97526Z"
                        fill="currentColor"
                      />
                    </svg>
                    <h4 className="fs-base fw-semibold text-nowrap ps-1 mb-0">
                      Early birds
                    </h4>
                  </div>
                  <h5 className="text-primary my-2 my-sm-0">$100</h5>
                  <div className="fs-sm">until Sep 1, 2021</div>
                </li>
                <li className="list-group-item d-flex flex-column flex-sm-row align-items-center justify-content-between p-4">
                  <div className="d-flex align-items-center">
                    <svg
                      className="flex-shrink-0 me-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.0225 2.91133C17.2397 2.91133 16.5038 3.21602 15.9507 3.76914C15.3132 4.40664 14.9616 5.25508 14.9616 6.15977V8.98633C14.9616 12.516 13.0772 15.6098 10.26 17.3207H14.2585C18.0225 17.3207 21.0882 14.2598 21.0882 10.491V5.97227C21.0882 4.28945 19.71 2.91133 18.0225 2.91133ZM18.7772 5.97695C18.3882 5.97695 18.0741 5.66289 18.0741 5.27383C18.0741 4.88477 18.3882 4.5707 18.7772 4.5707C19.1663 4.5707 19.4804 4.88477 19.4804 5.27383C19.4804 5.66289 19.1663 5.97695 18.7772 5.97695ZM23.7929 1.71133C23.5163 1.43477 23.071 1.43477 22.7991 1.71133L21.4257 3.08477C20.6054 2.11914 19.3819 1.50977 18.0225 1.50977C16.8647 1.50977 15.7772 1.95977 14.9569 2.78008L0.20535 17.527C0.00378752 17.7285 -0.05715 18.0285 0.0506625 18.291C0.158475 18.5535 0.416288 18.727 0.702225 18.727H5.22097H9.4491L11.8069 21.0848H11.2444C10.8553 21.0848 10.5413 21.3988 10.5413 21.7879C10.5413 22.177 10.8553 22.491 11.2444 22.491H15.7632C16.1522 22.491 16.4663 22.177 16.4663 21.7879C16.4663 21.3988 16.1522 21.0848 15.7632 21.0848H13.7944L11.4366 18.727H14.2585C18.8007 18.727 22.4944 15.0332 22.4944 10.491V5.97227C22.4944 5.39102 22.3819 4.8332 22.1757 4.31758L23.7929 2.70039C24.0694 2.4332 24.0694 1.98789 23.7929 1.71133ZM2.3991 17.3207L13.5554 6.16445V8.98633C13.5554 13.5801 9.81472 17.3207 5.22097 17.3207H2.3991ZM21.0882 10.4957C21.0882 14.2598 18.0272 17.3254 14.2585 17.3254H10.26C13.0772 15.6145 14.9616 12.516 14.9616 8.98633V6.15977C14.9616 5.25508 15.3132 4.40664 15.9507 3.76914C16.5038 3.21602 17.2397 2.91133 18.0225 2.91133C19.71 2.91133 21.0882 4.28477 21.0882 5.97695V10.4957Z"
                        fill="currentColor"
                      />
                    </svg>
                    <h4 className="fs-base fw-semibold text-nowrap ps-1 mb-0">
                      Late birds
                    </h4>
                  </div>
                  <h5 className="badge bg-primary fs-5 fw-bold rounded px-3 py-0 my-3 my-sm-0">
                    $150
                  </h5>
                  <div className="fs-sm">after Sep 1, 2021</div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-7 offset-xl-1 position-relative">
              <div className="position-relative">
                <div className="position-relative overflow-hidden bg-gradient-primary rounded-3 zindex-5 py-5 px-4 p-sm-5">
                  <span className="position-absolute top-50 start-0 translate-middle bg-light rounded-circle p-4"></span>
                  <span
                    className="position-absolute top-0 start-0 w-100 h-100 bg-repeat-0 bg-position-center-end bg-size-cover"
                    style={{
                      backgroundImage:
                        "url(assets/img/landing/conference/price-card-pattern.png)",
                    }}
                  ></span>
                  <div className="px-md-4 position-relative zindex-5">
                    <div className="d-sm-flex align-items-start justify-content-between">
                      <div className="text-center text-sm-start me-sm-4">
                        <div className="lead fw-semibold text-light text-uppercase mb-2">
                          Oct 14+15
                        </div>
                        <h3 className="h1 text-light">NY Digital Conference</h3>
                      </div>
                      <div className="d-table bg-white rounded-3 p-4 flex-shrink-0 mx-auto mx-sm-0">
                        <img
                          src="assets/img/landing/conference/qr.png"
                          width="102"
                          alt="QR Code"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row align-items-center pt-4 mt-2">
                      <a
                        href="#"
                        className="btn btn-light btn-lg mb-3 mb-sm-0 me-sm-3"
                      >
                        Buy access pass
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-lg text-light me-2">for only</span>
                        <span className="h4 text-light mb-0">$100</span>
                      </div>
                    </div>
                  </div>
                  <span className="position-absolute top-50 end-0 translate-middle-y bg-light rounded-circle p-4 me-n4"></span>
                </div>
                <span
                  className="position-absolute bg-gradient-primary opacity-60 bottom-0 mb-n2 d-dark-mode-none"
                  style={{
                    left: "1.5rem",
                    width: "calc(100% - 3rem)",
                    height: "5rem",
                    filter: "blur(0.625rem)",
                  }}
                ></span>
              </div>

              <div className="position-absolute bottom-0 text-primary d-none d-lg-block ms-xl-n5 mb-lg-5 mb-xl-4 pb-3">
                <div className="ms-xl-n4">
                  <svg
                    width="95"
                    height="100"
                    viewBox="0 0 95 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M78.8361 25.0939C91.1514 40.6379 81.8802 63.3086 61.7212 64.3539C60.7119 64.447 59.5832 64.3477 58.6105 64.2848C58.7669 50.9978 52.4534 36.5276 41.6324 32.847C31.8669 29.5776 26.5235 39.0204 30.5663 47.0383C35.4083 56.5589 43.9198 64.4699 54.2628 67.3808C53.4517 75.7446 49.4008 83.1867 40.4191 85.693C25.2817 89.8859 9.48935 75.832 7.25928 61.4938C7.12064 59.981 4.79 60.0942 4.92864 61.607C5.83171 80.8987 28.9103 96.1621 46.7792 87.3441C53.6867 83.8595 57.3887 76.5003 58.3558 68.173C69.2212 69.5612 79.5859 63.2659 85.1681 54.2081C91.5844 43.7002 88.5763 31.9764 81.257 23.1926C80.1091 21.7727 77.8441 23.7109 78.8361 25.0939ZM39.1221 52.6568C36.2753 49.3596 33.1435 45.1733 32.7276 40.635C32.275 36.2527 38.2211 36.1619 40.7539 36.5897C43.9108 37.163 46.2067 40.0025 47.9151 42.5401C51.7632 47.8805 54.3289 55.8821 54.5172 63.4926C48.5423 61.6026 43.3094 57.2542 39.1221 52.6568Z"
                      fill="currentColor"
                    />
                    <path
                      d="M75.1096 15.0312C74.0848 19.3973 73.3354 23.9923 73.4392 28.4577C73.5047 30.2821 76.0279 30.0497 76.1186 28.2613C76.2997 24.6849 77.2976 21.1349 78.2588 17.7408C80.2501 18.3708 82.3978 19.0372 84.3528 19.8231C85.8397 20.4997 87.9238 22.1382 89.7035 21.5672C90.5937 21.2818 90.7767 20.5022 90.6474 19.6495C90.3065 17.596 87.0302 16.8302 85.3872 16.1172C82.6885 14.993 80.073 14.2174 77.2645 13.561C76.3289 13.3423 75.3292 14.0956 75.1096 15.0312Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-5">
          <div className="container py-2 py-md-4 py-lg-5">
            <h3 className="h1 text-center mb-lg-4">Previous Year Highlights</h3>
            <p className="fs-lg text-muted text-center mb-4 mb-lg-5">
              Watch the short video and check out how the last NY Digital
              Conference unfolded.
            </p>
            <div className="position-relative overflow-hidden rounded-3 mb-4 mb-lg-5">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
              <img
                src="assets/img/landing/conference/video-cover.jpg"
                alt="Video cover"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 zindex-5 d-flex align-items-center justify-content-center">
                <a
                  href="https://www.youtube.com/watch?v=LBfAnFX15nc"
                  className="btn btn-video btn-icon bg-white btn-xl stretched-link"
                  data-bs-toggle="video"
                >
                  <i className="bx bx-play"></i>
                </a>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 pt-2 pt-md-3 pt-lg-2">
              <div className="col">
                <div className="d-flex align-items-center">
                  <div className="display-4 text-primary">20+</div>
                  <p className="ps-3 mb-0">
                    Hours of digital content,workshops &amp; side-events
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center">
                  <div className="display-4 text-primary">3K+</div>
                  <p className="ps-3 mb-0">
                    Industry experts, students, and enthusiasts
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center">
                  <div className="display-4 text-primary">18</div>
                  <p className="ps-3 mb-0">
                    Digital experts, instructors and panelists for our
                    side-events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

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
                        <p className="text-muted mb-0">October 15th</p>
                      </div>
                      <div className="col-sm-8">
                        <h5 className="mb-0">Day 2 registration</h5>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom py-4">
                    <div className="row py-1 py-xl-3">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="h5 mb-1">10:30 – 11:30 am</div>
                        <p className="text-muted mb-2 mb-sm-4">October 15th</p>
                        <span className="badge bg-success shadow-success fs-sm">
                          Workshop
                        </span>
                      </div>
                      <div className="col-sm-8">
                        <h5>
                          Workshop: Top trends and predictions for content that
                          will dominate next year
                        </h5>
                        <p className="mb-4">
                          Nec, malesuada quisque lorem id amet posuere. Risus,
                          elit, vel pharetra ac, dictum lorem nisl morbi. Lorem
                          dui id aliquam eu feugiat arcu diam.
                        </p>
                        <div className="row row-cols-1 row-cols-md-2 g-3">
                          <div className="col">
                            <div className="d-flex align-items-center">
                              <img
                                src="assets/img/avatar/01.jpg"
                                className="rounded-circle"
                                width="48"
                                alt="Jerome Bell"
                              />
                              <div className="ps-3">
                                <h6 className="fw-semibold mb-1">
                                  Jerome Bell
                                </h6>
                                <p className="fs-sm text-muted mb-0">
                                  Strategic Advisor, Shopify
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex align-items-center">
                              <img
                                src="assets/img/avatar/06.jpg"
                                className="rounded-circle"
                                width="48"
                                alt="Jenny Wilson"
                              />
                              <div className="ps-3">
                                <h6 className="fw-semibold mb-1">
                                  Jenny Wilson
                                </h6>
                                <p className="fs-sm text-muted mb-0">
                                  UX Designer, Glassdoor
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom py-4">
                    <div className="row py-1 py-xl-3">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="h5 mb-1">11:30 am – 13:00 pm</div>
                        <p className="text-muted mb-2 mb-sm-4">October 15th</p>
                        <span className="badge bg-warning shadow-warning fs-sm">
                          Lecture
                        </span>
                      </div>
                      <div className="col-sm-8">
                        <h5>
                          Product strategy: Defining your strategy, tactics,
                          metrics &amp; roadmap
                        </h5>
                        <p className="mb-4">
                          Pellentesque rhoncus viverra vestibulum, purus purus
                          quisque quisque sed. Cras vestibulum facilisis
                          dictumst consequat. In bibendum diam nunc dignissim
                          magna morbi mattis.
                        </p>
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/img/avatar/41.jpg"
                            className="rounded-circle"
                            width="48"
                            alt="Marvin McKinney"
                          />
                          <div className="ps-3">
                            <h6 className="fw-semibold mb-1">
                              Marvin McKinney
                            </h6>
                            <p className="fs-sm text-muted mb-0">
                              Product Manager, Google
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom py-4">
                    <div className="row py-1 py-xl-3">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="h5 mb-1">13:00 – 14:00 pm</div>
                        <p className="text-muted mb-0">October 15th</p>
                      </div>
                      <div className="col-sm-8">
                        <h5 className="mb-0">Interlude: attendee dinner</h5>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom py-4">
                    <div className="row py-1 py-xl-3">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="h5 mb-1">14:00 – 16:00 pm</div>
                        <p className="text-muted mb-2 mb-sm-4">October 15th</p>
                        <span className="badge bg-info shadow-info fs-sm">
                          Panel
                        </span>
                      </div>
                      <div className="col-sm-8">
                        <h5>Panel: State of speed tooling</h5>
                        <p className="mb-4">
                          Volutpat aliquam quam eget sit. Aliquam dui
                          pellentesque egestas duis amet malesuada eget. Ut
                          faucibus dignissim maecenas dui tristique vestibulum
                          facilisis dictumst consequat.
                        </p>
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/img/avatar/07.jpg"
                            className="rounded-circle"
                            width="48"
                            alt="Cameron Williamson"
                          />
                          <div className="ps-3">
                            <h6 className="fw-semibold mb-1">
                              Cameron Williamson
                            </h6>
                            <p className="fs-sm text-muted mb-0">
                              Co-Founder, Invision LTD
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom py-4">
                    <div className="row py-1 py-xl-3">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="h5 mb-1">16:00 – 17:00 pm</div>
                        <p className="text-muted mb-2 mb-sm-4">October 15th</p>
                        <span className="badge bg-warning shadow-warning fs-sm">
                          Lecture
                        </span>
                      </div>
                      <div className="col-sm-8">
                        <h5>
                          Group discussion: How to align and empower cross-team
                          success
                        </h5>
                        <p className="mb-4">
                          Pellentesque rhoncus viverra vestibulum, purus purus
                          quisque quisque sed. Cras vestibulum facilisis.
                        </p>
                        <div className="row row-cols-1 row-cols-md-2 g-3">
                          <div className="col">
                            <div className="d-flex align-items-center">
                              <img
                                src="assets/img/avatar/05.jpg"
                                className="rounded-circle"
                                width="48"
                                alt="Albert Flores"
                              />
                              <div className="ps-3">
                                <h6 className="fw-semibold mb-1">
                                  Albert Flores
                                </h6>
                                <p className="fs-sm text-muted mb-0">
                                  Principal Consultant, Twitch
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex align-items-center">
                              <img
                                src="assets/img/avatar/03.jpg"
                                className="rounded-circle"
                                width="48"
                                alt="Esther Howard"
                              />
                              <div className="ps-3">
                                <h6 className="fw-semibold mb-1">
                                  Esther Howard
                                </h6>
                                <p className="fs-sm text-muted mb-0">
                                  VP of Strategy, Stretto Inc.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="row pt-1 pt-xl-3">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="h5 mb-1">17:00 – 19:00 pm</div>
                        <p className="text-muted mb-0">October 15th</p>
                      </div>
                      <div className="col-sm-8">
                        <h5 className="mb-0">Closing farewell party</h5>
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
              What Our Attendees Say
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
                        <p className="fs-lg mb-0">
                          Dolor, a eget elementum, integer nulla volutpat, nunc,
                          sit. Quam iaculis varius mauris magna sem. Egestas sed
                          sed suscipit dolor faucibus dui imperdiet at eget.
                          Tincidunt imperdiet quis hendrerit aliquam feugiat
                          neque cras sed. Dictum quam integer volutpat tellus,
                          faucibus platea. Pulvinar turpis proin faucibus at
                          mauris. Sagittis gravida vitae porta enim, nulla arcu
                          fermentum massa lobortis facilisis.
                        </p>
                      </blockquote>
                      <figcaption className="card-footer d-flex align-items-center border-0 pt-0 mt-n2 mt-lg-0">
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
                      </figcaption>
                    </figure>
                  </div>

                  <div className="swiper-slide h-auto px-2">
                    <figure className="card h-100 position-relative border-0 shadow-sm py-3 p-0 p-xxl-4 my-0">
                      <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-xxl-5">
                        <i className="bx bxs-quote-left"></i>
                      </span>
                      <blockquote className="card-body mt-2 mb-2">
                        <p className="fs-lg mb-0">
                          Id nibh sed purus eu. Viverra eu sed quam pellentesque
                          magna ac sit odio. Mi at interdum hendrerit neque
                          vulputate semper vulputate. Et augue lacinia magna
                          tempor blandit dui porttitor in senectus. Porttitor
                          nulla in ac in quis. Et ultrices lacus, nunc at nulla
                          eu sodales. At aliquam euismod est in praesent ornare
                          etiam id.
                        </p>
                      </blockquote>
                      <figcaption className="card-footer d-flex align-items-center border-0 pt-0 mt-n2 mt-lg-0">
                        <img
                          src="assets/img/avatar/11.jpg"
                          width="60"
                          className="rounded-circle"
                          alt="Jerome Bell"
                        />
                        <div className="ps-3">
                          <h6 className="fw-semibold lh-base mb-0">
                            Jerome Bell
                          </h6>
                          <span className="fs-sm text-muted">
                            Co-founder of Lorem Company
                          </span>
                        </div>
                      </figcaption>
                    </figure>
                  </div>

                  <div className="swiper-slide h-auto px-2">
                    <figure className="card h-100 position-relative border-0 shadow-sm py-3 p-0 p-xxl-4 my-0">
                      <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-xxl-5">
                        <i className="bx bxs-quote-left"></i>
                      </span>
                      <blockquote className="card-body mt-2 mb-2">
                        <p className="fs-lg mb-0">
                          Nec iaculis fermentum interdum habitasse feugiat massa
                          id pellentesque. Ut porta gravida lobortis facilisis
                          dui augue. Fringilla nunc porttitor eget dictum
                          tempus. Lorem erat eu congue curabitur est. Pulvinar
                          morbi pulvinar venenatis rhoncus egestas euismod massa
                          mauris. Vestibulum nunc lectus auctor quis. Natoque
                          lectus tortor lacus.
                        </p>
                      </blockquote>
                      <figcaption className="card-footer d-flex align-items-center border-0 pt-0 mt-n2 mt-lg-0">
                        <img
                          src="assets/img/avatar/13.jpg"
                          width="60"
                          className="rounded-circle"
                          alt="Robert Fox"
                        />
                        <div className="ps-3">
                          <h6 className="fw-semibold lh-base mb-0">
                            Robert Fox
                          </h6>
                          <span className="fs-sm text-muted">
                            CEO of Ipsum Company
                          </span>
                        </div>
                      </figcaption>
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
              <h2 className="h1 mb-4">International Convention Centre</h2>
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
                src="assets/img/landing/conference/venue.jpg"
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
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.192027341148!2d-74.0045150840621!3d40.75780104274828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f66383c1d305%3A0xb1589156bdadde83!2sJavits%20Center!5e0!3m2!1sen!2sua!4v1638895524631!5m2!1sen!2sua"
                  data-iframe="true"
                  className="gallery-item rounded-2"
                  data-sub-html='<h6 className="fs-sm text-light">Javits Center, NY, USA</h6>'
                >
                  <img
                    src="assets/img/landing/conference/map-light.jpg"
                    className="d-dark-mode-none"
                    alt="Map preview"
                  />
                  <img
                    src="assets/img/landing/conference/map-dark.jpg"
                    className="d-none d-dark-mode-block"
                    alt="Map preview"
                  />
                  <div className="gallery-item-caption fs-sm fw-medium">
                    Javits Center, NYY, USA
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-primary py-5">
          <div className="container py-2 py-md-4 py-lg-5">
            <div className="row py-xl-3">
              <div className="col-xl-4 col-lg-5 offset-xl-1 order-lg-2 mb-4">
                <h2 className="h1 text-light text-center text-sm-start pb-4 mb-0 mb-lg-3">
                  Become a Part of the Digital Evolution!
                </h2>
                <div className="d-flex align-items-center">
                  <div className="bg-white rounded-circle text-primary flex-shrink-0 p-3">
                    <svg
                      style={{ margin: "2px" }}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.0225 2.91133C17.2397 2.91133 16.5038 3.21602 15.9507 3.76914C15.3132 4.40664 14.9616 5.25508 14.9616 6.15977V8.98633C14.9616 12.516 13.0772 15.6098 10.26 17.3207H14.2585C18.0225 17.3207 21.0882 14.2598 21.0882 10.491V5.97227C21.0882 4.28945 19.71 2.91133 18.0225 2.91133ZM18.7772 5.97695C18.3882 5.97695 18.0741 5.66289 18.0741 5.27383C18.0741 4.88477 18.3882 4.5707 18.7772 4.5707C19.1663 4.5707 19.4804 4.88477 19.4804 5.27383C19.4804 5.66289 19.1663 5.97695 18.7772 5.97695ZM23.7929 1.71133C23.5163 1.43477 23.071 1.43477 22.7991 1.71133L21.4257 3.08477C20.6054 2.11914 19.3819 1.50977 18.0225 1.50977C16.8647 1.50977 15.7772 1.95977 14.9569 2.78008L0.20535 17.527C0.00378752 17.7285 -0.05715 18.0285 0.0506625 18.291C0.158475 18.5535 0.416288 18.727 0.702225 18.727H5.22097H9.4491L11.8069 21.0848H11.2444C10.8553 21.0848 10.5413 21.3988 10.5413 21.7879C10.5413 22.177 10.8553 22.491 11.2444 22.491H15.7632C16.1522 22.491 16.4663 22.177 16.4663 21.7879C16.4663 21.3988 16.1522 21.0848 15.7632 21.0848H13.7944L11.4366 18.727H14.2585C18.8007 18.727 22.4944 15.0332 22.4944 10.491V5.97227C22.4944 5.39102 22.3819 4.8332 22.1757 4.31758L23.7929 2.70039C24.0694 2.4332 24.0694 1.98789 23.7929 1.71133ZM2.3991 17.3207L13.5554 6.16445V8.98633C13.5554 13.5801 9.81472 17.3207 5.22097 17.3207H2.3991ZM21.0882 10.4957C21.0882 14.2598 18.0272 17.3254 14.2585 17.3254H10.26C13.0772 15.6145 14.9616 12.516 14.9616 8.98633V6.15977C14.9616 5.25508 15.3132 4.40664 15.9507 3.76914C16.5038 3.21602 17.2397 2.91133 18.0225 2.91133C19.71 2.91133 21.0882 4.28477 21.0882 5.97695V10.4957Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="fs-xl text-light ps-3 mb-0">
                    Hurry up! Early birds extended until September 1, 2021.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 order-lg-1">
                <div className="ignore-dark-mode position-relative">
                  <div className="position-relative overflow-hidden rounded-3 zindex-5 py-5 px-4 p-sm-5">
                    <span
                      className="position-absolute top-0 start-0 w-100 h-100 bg-repeat-0 bg-position-center-start zindex-2"
                      style={{
                        backgroundImage:
                          "url(assets/img/landing/conference/price-card-left-bg.png)",
                      }}
                    ></span>
                    <span
                      className="position-absolute top-0 end-0 w-100 h-100 bg-repeat-0 bg-position-center-end zindex-2"
                      style={{
                        backgroundImage:
                          "url(assets/img/landing/conference/price-card-right-bg.png)",
                      }}
                    ></span>
                    <div className="px-md-4 position-relative zindex-5">
                      <div className="d-sm-flex align-items-start justify-content-between">
                        <div className="text-center text-sm-start me-sm-4">
                          <div className="lead text-primary fw-semibold text-uppercase mb-2">
                            Oct 14+15
                          </div>
                          <h3 className="h1">NY Digital Conference</h3>
                        </div>
                        <div className="d-table bg-white rounded-3 p-4 flex-shrink-0 mx-auto mx-sm-0">
                          <img
                            src="assets/img/landing/conference/qr.png"
                            width="102"
                            alt="QR Code"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-column flex-sm-row align-items-center pt-4 mt-2">
                        <a
                          href="#"
                          className="btn btn-primary shadow-primary btn-lg mb-3 mb-sm-0 me-sm-3"
                        >
                          Buy access pass
                        </a>
                        <div className="d-flex align-items-center">
                          <span className="fs-lg me-2">for only</span>
                          <span className="h4 text-body mb-0">$100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span
                    className="position-absolute bg-dark opacity-35 bottom-0 mb-n2 d-dark-mode-none"
                    style={{
                      left: "1.5rem",
                      width: "calc(100% - 3rem)",
                      height: "5rem",
                      filter: "blur(0.75rem)",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer dark-mode bg-dark pt-5 pb-4 pb-lg-5">
        <div className="container text-center pt-lg-3">
          <div className="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
            <img
              src="assets/img/logo.svg"
              className="me-2"
              width="60"
              alt="Silicon"
            />
            <span className="fs-4">Silicon</span>
          </div>
          <ul className="nav justify-content-center pt-3 pb-4 pb-lg-5">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Speakers
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Schedule
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Sponsors
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Prices
              </a>
            </li>
          </ul>
          <div className="d-flex flex-column flex-sm-row justify-content-center">
            <a
              href="#"
              className="btn btn-primary shadow-primary btn-lg me-sm-4 mb-3"
            >
              Buy access pass
            </a>
            <a href="#" className="btn btn-outline-light btn-lg mb-3">
              <i className="bx bx-calendar-check fs-xl me-2 ms-n1"></i>
              Add to calendar
            </a>
          </div>
          <div className="d-flex justify-content-center pt-4 mt-lg-3">
            <a
              href="#"
              className="btn btn-icon btn-secondary btn-facebook mx-2"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="#"
              className="btn btn-icon btn-secondary btn-instagram mx-2"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="btn btn-icon btn-secondary btn-twitter mx-2">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="btn btn-icon btn-secondary btn-youtube mx-2">
              <i className="bx bxl-youtube"></i>
            </a>
          </div>
          <p className="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
            <span className="text-light opacity-50">
              &copy; All rights reserved. Made by
            </span>
            <a
              className="nav-link d-inline-block p-0"
              href="https://createx.studio/"
              target="_blank"
              rel="noopener"
            >
              Createx Studio
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
