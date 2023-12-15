
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
function index({ heading, carDetails }) {
  const slideSettings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      // autoplay: {
      // 	delay: 2500, // Autoplay duration in milliseconds
      // },
      navigation: {
        nextEl: ".next-3",
        prevEl: ".prev-3",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 3
        },
      }
    }
  })
  return (
    <div className="compare-car-section mt-5 mb-100">
      <div className="container-xl pb-4 container-fluid ">
        <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12">
            <div className="section-title1">
              <span>Best Car Collection</span>
              <h2>Compare Car With Brand</h2>
            </div>
          </div>
        </div>
        <div className="modal compare-modal fade" id="compareModal01" tabIndex={-1} aria-labelledby="compareModal01Label" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="compareModal01Label">Comparision</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="compare-top">
                      <div className="single-car">
                        <div className="car-img">
                          <img src="assets/img/home1/compare-md-01.png" alt="car" />
                        </div>
                        <div className="content text-center">
                          <span>SUV</span>
                          <h6 className="title"><a href="#">Kia Optima</a></h6>
                          <h6 className="price">$68, 219.000</h6>
                        </div>
                      </div>
                      <div className="vs">
                        <span>VS</span>
                      </div>
                      <div className="single-car">
                        <div className="car-img">
                          <img src="assets/img/home1/compare-md-02.png" alt="car" />
                        </div>
                        <div className="content text-center">
                          <span>(Toyota)</span>
                          <h6 className="title"><a href="#">T. Camry</a></h6>
                          <h6 className="price">$78, 729.000</h6>
                        </div>
                      </div>
                    </div>
                    <div className="compare-btm">
                      <div className="table-wrapper">
                        <table className="eg-table">
                          <thead>
                            <tr>
                              <th>SUV</th>
                              <th>TOYOTA</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Kia Optima</td>
                              <td>T. Camry</td>
                            </tr>
                            <tr>
                              <td>$54,321.00</td>
                              <td>$60,321.00</td>
                            </tr>
                            <tr>
                              <td>34,563 cc</td>
                              <td>35,533 cc</td>
                            </tr>
                            <tr>
                              <td>Convertible</td>
                              <td>Hatchback</td>
                            </tr>
                            <tr>
                              <td>140 kw 7000 rpm</td>
                              <td>142 kw 7000 rpm</td>
                            </tr>
                            <tr>
                              <td>6,7053 miles</td>
                              <td>6,378 miles</td>
                            </tr>
                            <tr>
                              <td><Link legacyBehavior href="/carDetails"><a className="primary-btn2">View Details</a></Link></td>
                              <td><Link legacyBehavior href="/carDetails"><a className="primary-btn2">View Details</a></Link></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-40 wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <Swiper {...slideSettings} className="swiper compare-car-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="single-compare-card">
                    <div className="compare-top">
                      <div className="single-car">
                        <div className="car-img">
                          <img src="assets/img/home1/cc-suv.png" alt="car" />
                        </div>
                        <div className="content text-center">
                          <span>(SUV)</span>
                          <h6 className="title"><a href="#">Kia Optima</a></h6>
                          <h6 className="price">$68, 219.000</h6>
                        </div>
                      </div>
                      <div className="vs">
                        <span>VS</span>
                      </div>
                      <div className="single-car">
                        <div className="car-img">
                          <img src="assets/img/home1/cc-toyota.png" alt="car" />
                        </div>
                        <div className="content text-center">
                          <span>(Toyota)</span>
                          <h6 className="title"><a href="#">T. Camry</a></h6>
                          <h6 className="price">$78, 729.000</h6>
                        </div>
                      </div>
                    </div>
                    <div className="compare-btm">
                      <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">Compare SUV &amp; Toyota</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="single-compare-card">
                    <div className="compare-top">
                      <div className="single-car">
                        <div className="car-img">
                          <img src="assets/img/home1/cc-sucuki.png" alt="car" />
                        </div>
                        <div className="content text-center">
                          <span>(Suzuki)</span>
                          <h6 className="title"><a href="#">Nissan 120</a></h6>
                          <h6 className="price">$70, 219.000</h6>
                        </div>
                      </div>
                      <div className="vs">
                        <span>VS</span>
                      </div>
                      <div className="single-car">
                        <div className="car-img">
                          <img src="assets/img/home1/cc-tesla.png" alt="car" />
                        </div>
                        <div className="content text-center">
                          <span>(Tesla)</span>
                          <h6 className="title"><a href="#">Tesla SS</a></h6>
                          <h6 className="price">$78, 729.000</h6>
                        </div>
                      </div>
                    </div>
                    <div className="compare-btm">
                      <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">Compare Suzuki &amp; Tesla</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="single-compare-card">
                    <div className="compare-top">
                      <div className="single-car">
                        <div className="car-img">
                          <img src="assets/img/home1/cc-merceds.png" alt="car" />
                        </div>
                        <div className="content text-center">
                          <span>(Mercedes)</span>
                          <h6 className="title"><a href="#">Subaru 46</a></h6>
                          <h6 className="price">$90, 319.000</h6>
                        </div>
                      </div>
                      <div className="vs">
                        <span>VS</span>
                      </div>
                      <div className="single-car">
                        <div className="car-img">
                          <img src="assets/img/home1/cc-bmw.png" alt="car" />
                        </div>
                        <div className="content text-center">
                          <span>(BMW)</span>
                          <h6 className="title"><a href="#">Porsche 11</a></h6>
                          <h6 className="price">$93, 740.000</h6>
                        </div>
                      </div>
                    </div>
                    <div className="compare-btm">
                      <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">Compare Mercedes &amp; BMW</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="single-compare-card">
                    <div className="compare-top">
                      <div className="single-car">
                        <div className="car-img">
                          <img src="assets/img/home1/cc-sucuki.png" alt="car" />
                        </div>
                        <div className="content text-center">
                          <span>(Suzuki)</span>
                          <h6 className="title"><a href="#">Nissan 120</a></h6>
                          <h6 className="price">$70, 219.000</h6>
                        </div>
                      </div>
                      <div className="vs">
                        <span>VS</span>
                      </div>
                      <div className="single-car">
                        <div className="car-img">
                          <img src="assets/img/home1/cc-tesla.png" alt="car" />
                        </div>
                        <div className="content text-center">
                          <span>(Tesla)</span>
                          <h6 className="title"><a href="#">Tesla SS</a></h6>
                          <h6 className="price">$78, 729.000</h6>
                        </div>
                      </div>
                    </div>
                    <div className="compare-btm">
                      <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">Compare Suzuki &amp; Tesla</button>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-12 divider">
            <div className="slider-btn-group style-2 justify-content-md-between justify-content-center">
              <div className="slider-btn prev-3 d-md-flex d-none pb-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" /></svg>
              </div>
              <div className="view-btn-area ">
                 
              <p>There are Trending Car Available</p>
<button className="button-89" role="button">View More</button>
{/* custom button begins */}
{/* <div className="buttons">
  <button className="blob-btn">
    View More
    <span className="blob-btn__inner">
      <span className="blob-btn__blobs">
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
      </span>
    </span>
  </button>
  <br/>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
    </filter>
  </defs>
</svg>
</div> */}
{/* custom button ends */}
              </div>
              <div className="slider-btn next-3 d-md-flex d-none pb-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index