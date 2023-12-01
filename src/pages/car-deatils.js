import React, { useEffect, useMemo, useRef, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import SelectComponent from '../utils/SelectComponent';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Marquee from 'react-fast-marquee';
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
function CarDeatilsPage() {
  const [isSticky, setIsSticky] = useState(false);

  const carSlide = useMemo(()=>{
    return {
      speed: 1500,
      spaceBetween: 40,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        420: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2
        },
      }
      }
  })
  const upcommingSlide = useMemo(()=>{
    return {
      slidesPerView: 3,
      speed: 1500,
      spaceBetween: 25,
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
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
  const slideSettings = useMemo(()=>{
    return {
        slidesPerView: "auto",
        speed: 1500,
        spaceBetween: 25,
        loop: true,
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
        },
        navigation: {
            nextEl: ".next-4",
            prevEl: ".prev-4",
        },

        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1400: {
                slidesPerView: 2
            },
        }
        }
  })
  const slideSetting = useMemo(()=>{
    return {
        slidesPerView: "auto",
        speed: 1500,
        spaceBetween: 25,
        loop: true,
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
        },
        navigation: {
            nextEl: ".product-stand-next",
            prevEl: ".product-stand-prev",
        },

        }
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 600) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const phoneInputField = useRef(null);

  useEffect(() => {
    if (phoneInputField.current) {
      window.intlTelInput(phoneInputField.current, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });
    }
  }, []);


  const [contactData, setContactData] = useState({
    phoneNumber: '+990737621432',
    email: 'info@gmail.com',
    whatsapp: '+990737621432',
  });

  const handleClick = (type) => {
    let hrefValue = '';
    let newText = '';

    switch (type) {
      case 'phoneNumber':
        hrefValue = `tel:${contactData.phoneNumber}`;
        newText = contactData.phoneNumber;
        break;
      case 'emailAdress':
        hrefValue = `mailto:${contactData.email}`;
        newText = contactData.email;
        break;
      case 'emailAdresss':
        hrefValue = contactData.whatsapp
          ? `https://api.whatsapp.com/send?phone=${contactData.whatsapp}&text=Hello this is the starting message`
          : '';
        newText = contactData.whatsapp || 'Whatsapp';
        break;
      default:
        break;
    }

    // Set the href attribute and update the text for the clicked element
    const element = document.getElementById(type);
    if (element) {
      const link = element.querySelector('a');
      link.setAttribute('href', hrefValue);
      link.textContent = `${newText}`;
    }
  };

  return (
    <MainLayout>
      <div className="car-details-area pt-100 mb-100">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12 position-relative">
              <div className={`car-details-menu ${isSticky? "sticky":""}` }>
                <nav id="navbar-example2" className="navbar">
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a className="nav-link" href="#car-img">Car Image</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#car-info">Car Info</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#kye-features">Key Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#overview">Overview</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#performance">Engine &amp; Performance</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#car-color">Color Car</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#car-milage">Mileage</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#faqs">FAQ’s</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#qus-ans">Question &amp; Answer</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset={0} className="scrollspy-example" tabIndex={0}>
              <div className="single-item mb-50" id="car-img">
                    <div className="car-img-area">
                      <div className="tab-content mb-30" id="myTab5Content">
                        <div className="tab-pane fade show active" id="exterior" role="tabpanel" aria-labelledby="exterior-tab">
                          <div className="product-img">
                            <div className="number-of-img">
                              <img src="assets/img/home1/icon/gallery-icon-1.svg" alt="" />
                              10
                            </div>
                            <a href="#" className="fav">
                              <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                </path>
                              </svg>
                            </a>
                            <div className="slider-btn-group">
                              <div className="product-stand-next swiper-arrow">
                                <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                                </svg>
                              </div>
                              <div className="product-stand-prev swiper-arrow">
                                <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                                </svg>
                              </div>
                            </div>
                            <Swiper {...slideSetting} className="swiper product-img-slider">
                              <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                  <img src="assets/img/inner-page/product-img-02.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <img src="assets/img/inner-page/product-img-03.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <img src="assets/img/inner-page/product-img-04.png" alt="image" />
                                </SwiperSlide>
                              </div>
                            </Swiper>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="interior" role="tabpanel" aria-labelledby="interior-tab">
                          <div className="product-img">
                            <div className="number-of-img">
                              <img src="assets/img/home1/icon/gallery-icon-1.svg" alt="" />
                              10
                            </div>
                            <a href="#" className="fav">
                              <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                </path>
                              </svg>
                            </a>
                            <div className="slider-btn-group">
                              <div className="product-stand-next swiper-arrow">
                                <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                                </svg>
                              </div>
                              <div className="product-stand-prev swiper-arrow">
                                <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                                </svg>
                              </div>
                            </div>
                            <Swiper {...slideSetting} className="swiper product-img-slider">
                              <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                  <img src="assets/img/inner-page/interior-01.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <img src="assets/img/inner-page/interior-02.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <img src="assets/img/inner-page/interior-03.png" alt="image" />
                                </SwiperSlide>
                              </div>
                            </Swiper>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="video-clip" role="tabpanel" aria-labelledby="video-clip-tab">
                          <div className="video-area">
                            <video autoPlay loop="loop" muted preload="auto" controls>
                              <source src="assets/video/home4/car-video.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="color-clip" role="tabpanel" aria-labelledby="color-clip-tab">
                          <div className="product-img2">
                            <div className="slider-btn-group">
                              <div className="product-stand-next swiper-arrow">
                                <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                                </svg>
                              </div>
                              <div className="product-stand-prev swiper-arrow">
                                <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                                </svg>
                              </div>
                            </div>
                            <Swiper {...slideSetting} className="swiper product-img-slider">
                              <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                  <div className="car-color-wrap">
                                    <div className="car-img">
                                      <img src="assets/img/inner-page/color-car-05.png" alt="" />
                                    </div>
                                    <div className="content">
                                      <h5>Lamborghini Murciélago (Black)</h5>
                                    </div>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <div className="car-color-wrap">
                                    <div className="car-img">
                                      <img src="assets/img/inner-page/color-car-06.png" alt="" />
                                    </div>
                                    <div className="content">
                                      <h5>Lamborghini Murciélago (Blue)</h5>
                                    </div>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <div className="car-color-wrap">
                                    <div className="car-img">
                                      <img src="assets/img/inner-page/color-car-07.png" alt="" />
                                    </div>
                                    <div className="content">
                                      <h5>Lamborghini Murciélago (Pink)</h5>
                                    </div>
                                  </div>
                                </SwiperSlide>
                                <div className="swiper-slide">
                                  <div className="car-color-wrap">
                                    <div className="car-img">
                                      <img src="assets/img/inner-page/color-car-08.png" alt="" />
                                    </div>
                                    <div className="content">
                                      <h5>Lamborghini Murciélago (Orange)</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Swiper>
                          </div>
                        </div>
                      </div>
                      <ul className="nav nav-tabs" id="myTab5" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="exterior-tab" data-bs-toggle="tab" data-bs-target="#exterior" type="button" role="tab" aria-controls="exterior" aria-selected="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M19 0H18V14H0V15H18V30H19V0Z" />
                            </svg>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                <mask id="mask0_1673_2706" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={20} height={20}>
                                  <rect width={20} height={20} fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1673_2706)">
                                  <path d="M2.62728 10.356H17.3726C17.461 10.356 17.5458 10.3205 17.6083 10.2573C17.6708 10.194 17.7059 10.1083 17.7059 10.0189V6.34867C17.7065 6.25941 17.6719 6.17359 17.6099 6.11003L15.2766 3.75061C15.2141 3.6874 15.1293 3.65187 15.0409 3.65186H2.62728C2.53887 3.65186 2.45409 3.68737 2.39158 3.75058C2.32906 3.81379 2.29395 3.89952 2.29395 3.98892V10.0189C2.29395 10.1083 2.32906 10.194 2.39158 10.2573C2.45409 10.3205 2.53887 10.356 2.62728 10.356ZM17.0393 6.48821V9.68185H10.6336V4.32631H14.9003L17.0393 6.48821ZM2.96061 4.32631H9.96695V9.68185H2.96061V4.32631Z" />
                                  <path d="M16.2257 1.43225C16.1632 1.36904 16.0784 1.33352 15.99 1.3335H0.333333C0.244928 1.3335 0.160143 1.36901 0.0976311 1.43222C0.0351189 1.49543 0 1.58116 0 1.67056V15.493C0 15.5824 0.0351189 15.6682 0.0976311 15.7314C0.160143 15.7946 0.244928 15.8301 0.333333 15.8301C1.16365 15.8306 1.95981 16.1644 2.54694 16.7581C3.13406 17.3518 3.46414 18.1568 3.46467 18.9964C3.46467 19.0858 3.49979 19.1716 3.5623 19.2348C3.62481 19.298 3.70959 19.3335 3.798 19.3335H19.6667C19.7551 19.3335 19.8399 19.298 19.9024 19.2348C19.9649 19.1716 20 19.0858 20 18.9964V5.38799C20 5.2986 19.9649 5.21288 19.9023 5.14969L16.2257 1.43225ZM0.666667 15.1708V2.00762H15.852L19.3333 5.52753V16.5854H13.2377C13.1493 16.5855 13.0645 16.621 13.002 16.6842L11.0483 18.6594H4.117C4.03735 17.7612 3.64825 16.9199 3.01762 16.2823C2.38699 15.6446 1.55491 15.2513 0.666667 15.1708ZM11.9913 18.6594L13.3767 17.2596H19.3333V18.6594H11.9913Z" />
                                  <path d="M4.81734 6.25912L5.28867 5.78252L7.53867 8.05734L7.067 8.53394L4.81734 6.25912ZM6.03967 5.81791L6.511 5.34131L7.975 6.82167L7.50367 7.29828L6.03967 5.81791ZM11.7773 6.26013L12.2487 5.78353L14.4987 8.05835L14.027 8.53495L11.7773 6.26013ZM13 5.81892L13.4713 5.34198L14.9353 6.82235L14.464 7.29895L13 5.81892ZM12.9197 13.5042C13.0081 13.5042 13.0929 13.4687 13.1554 13.4055C13.2179 13.3423 13.253 13.2566 13.253 13.1672V11.9875C13.253 11.8981 13.2179 11.8123 13.1554 11.7491C13.0929 11.6859 13.0081 11.6504 12.9197 11.6504H10.8837C10.6406 11.6504 10.4074 11.748 10.2355 11.9219C10.0636 12.0957 9.967 12.3315 9.967 12.5773C9.967 12.8231 10.0636 13.0589 10.2355 13.2327C10.4074 13.4066 10.6406 13.5042 10.8837 13.5042H12.9197ZM10.6337 12.5773C10.6338 12.5103 10.6602 12.4461 10.7071 12.3987C10.7539 12.3514 10.8174 12.3247 10.8837 12.3245H12.5863V12.8301H10.8837C10.8174 12.8299 10.7539 12.8032 10.7071 12.7559C10.6602 12.7085 10.6338 12.6443 10.6337 12.5773ZM5.24634 11.6504H3.21C2.96689 11.6504 2.73373 11.748 2.56182 11.9219C2.38991 12.0957 2.29333 12.3315 2.29333 12.5773C2.29333 12.8231 2.38991 13.0589 2.56182 13.2327C2.73373 13.4066 2.96689 13.5042 3.21 13.5042H5.24567C5.33407 13.5042 5.41886 13.4687 5.48137 13.4055C5.54388 13.3423 5.579 13.2566 5.579 13.1672V11.9875C5.579 11.8982 5.54397 11.8125 5.48161 11.7494C5.41924 11.6862 5.33463 11.6506 5.24634 11.6504ZM4.913 12.8301H3.21C3.1437 12.8301 3.08011 12.8035 3.03322 12.7561C2.98634 12.7087 2.96 12.6444 2.96 12.5773C2.96 12.5103 2.98634 12.446 3.03322 12.3986C3.08011 12.3511 3.1437 12.3245 3.21 12.3245H4.91234L4.913 12.8301Z" />
                                </g>
                              </svg>
                              Exterior(10)
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 0H1V14H19V15H1V30H0V0Z" />
                            </svg>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="Interior(15)" data-bs-toggle="tab" data-bs-target="#interior" type="button" role="tab" aria-controls="interior" aria-selected="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M19 0H18V14H0V15H18V30H19V0Z" />
                            </svg>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                <mask id="mask0_1673_2691" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={20} height={20}>
                                  <rect width={20} height={20} fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1673_2691)">
                                  <path d="M3.8709 14.58H3.17017V6.13965C3.171 5.50898 3.43648 4.90438 3.90835 4.45849C4.38023 4.0126 5.01996 3.76184 5.6872 3.76123H14.4926C15.1599 3.76184 15.7996 4.0126 16.2715 4.45849C16.7433 4.90438 17.0088 5.50898 17.0096 6.13965V14.5797H16.3089V6.13965C16.3083 5.68459 16.1167 5.24835 15.7762 4.92663C15.4357 4.60492 14.9741 4.424 14.4926 4.42356H5.6872C5.20575 4.424 4.74414 4.60492 4.40364 4.92663C4.06314 5.24835 3.87155 5.68459 3.8709 6.13965V14.58Z" />
                                  <path d="M12.9207 4.42365H7.25947C6.95361 4.42304 6.66047 4.3079 6.44423 4.10345C6.22799 3.899 6.10627 3.62189 6.10571 3.3328V1.35111C6.10627 1.06201 6.22799 0.784906 6.44423 0.580455C6.66047 0.376003 6.95361 0.260867 7.25947 0.260254H12.9207C13.2265 0.260867 13.5197 0.376003 13.7359 0.580455C13.9522 0.784906 14.0739 1.06201 14.0745 1.35111V3.3328C14.0739 3.62189 13.9522 3.899 13.7359 4.10345C13.5197 4.3079 13.2265 4.42304 12.9207 4.42365ZM7.25947 0.922582C7.13946 0.923192 7.02455 0.968546 6.93972 1.04879C6.85489 1.12903 6.807 1.23767 6.80645 1.35111V3.3328C6.807 3.44623 6.85489 3.55487 6.93972 3.63512C7.02455 3.71536 7.13946 3.76071 7.25947 3.76132H12.9207C13.0407 3.76071 13.1556 3.71536 13.2404 3.63512C13.3253 3.55487 13.3732 3.44623 13.3737 3.3328V1.35111C13.3732 1.23767 13.3253 1.12903 13.2404 1.04879C13.1556 0.968546 13.0407 0.923192 12.9207 0.922582H7.25947ZM12.8156 16.6271H7.36458C7.27166 16.6271 7.18254 16.5922 7.11683 16.5301C7.05113 16.4679 7.01421 16.3837 7.01421 16.2959V9.00299C7.01449 8.72073 7.13327 8.4501 7.34447 8.25055C7.55566 8.05099 7.84201 7.9388 8.14064 7.93863H12.0395C12.3382 7.9388 12.6245 8.05099 12.8357 8.25055C13.0469 8.4501 13.1657 8.72073 13.1659 9.00299V16.2952C13.166 16.3388 13.157 16.3819 13.1395 16.4222C13.1219 16.4624 13.0961 16.499 13.0636 16.5298C13.031 16.5606 12.9924 16.5851 12.9498 16.6018C12.9073 16.6185 12.8617 16.6271 12.8156 16.6271ZM7.71495 15.9647H12.4652V9.00299C12.465 8.89636 12.4201 8.79415 12.3403 8.71878C12.2605 8.64342 12.1523 8.60104 12.0395 8.60096H8.14064C8.02783 8.60104 7.91966 8.64342 7.83986 8.71878C7.76005 8.79415 7.71513 8.89636 7.71495 9.00299V15.9647Z" />
                                  <path d="M7.36451 13.2402H12.8159V13.9026H7.36451V13.2402ZM7.36451 5.51517H12.8159V6.1775H7.36451V5.51517ZM16.0687 20.2603H4.11135C3.39867 20.2596 2.7154 19.9916 2.21146 19.5153C1.70752 19.039 1.42408 18.3932 1.42334 17.7196V15.4537C1.42371 15.1339 1.55826 14.8273 1.79747 14.6012C2.03668 14.375 2.36103 14.2477 2.69937 14.2473H4.12957C4.38221 14.2479 4.63037 14.3104 4.84988 14.4286C5.06938 14.5468 5.25276 14.7168 5.38213 14.9219L6.03556 15.9647H14.1444L14.7982 14.9219C14.9275 14.7168 15.1108 14.5468 15.3303 14.4286C15.5497 14.3104 15.7978 14.2479 16.0504 14.2473H17.4806C17.819 14.2477 18.1433 14.375 18.3825 14.6012C18.6218 14.8273 18.7563 15.1339 18.7567 15.4537V17.7196C18.7559 18.3932 18.4725 19.039 17.9686 19.5153C17.4646 19.9916 16.7813 20.2596 16.0687 20.2603ZM2.69937 14.9096C2.54682 14.9099 2.4006 14.9673 2.29276 15.0693C2.18492 15.1713 2.12426 15.3095 2.12407 15.4537V17.7196C2.12463 18.2176 2.33418 18.695 2.70675 19.0472C3.07931 19.3993 3.58446 19.5974 4.11135 19.5979H16.0687C16.5956 19.5974 17.1007 19.3993 17.4733 19.0472C17.8458 18.695 18.0554 18.2176 18.0559 17.7196V15.4537C18.0558 15.3095 17.9951 15.1713 17.8873 15.0693C17.7794 14.9673 17.6332 14.9099 17.4806 14.9096H16.0504C15.9194 14.91 15.7907 14.9424 15.6769 15.0038C15.563 15.0651 15.468 15.1533 15.4009 15.2597L14.6448 16.4648C14.6138 16.5142 14.5697 16.5552 14.5168 16.5836C14.464 16.6121 14.4043 16.627 14.3435 16.6271H5.83551C5.7747 16.627 5.71495 16.6121 5.66212 16.5836C5.60929 16.5552 5.5652 16.5142 5.53419 16.4648L4.77915 15.2597C4.71211 15.1532 4.61703 15.0651 4.50319 15.0037C4.38934 14.9424 4.26062 14.9099 4.12957 14.9096H2.69937ZM11.8418 2.41282H8.33817C8.24525 2.41282 8.15613 2.37793 8.09043 2.31583C8.02472 2.25372 7.98781 2.16949 7.98781 2.08166V0.591418C7.98781 0.503588 8.02472 0.419355 8.09043 0.35725C8.15613 0.295144 8.24525 0.260254 8.33817 0.260254H11.8418C11.9348 0.260254 12.0239 0.295144 12.0896 0.35725C12.1553 0.419355 12.1922 0.503588 12.1922 0.591418V2.08166C12.1922 2.16949 12.1553 2.25372 12.0896 2.31583C12.0239 2.37793 11.9348 2.41282 11.8418 2.41282ZM8.68854 1.75049H11.4915V0.922582H8.68854V1.75049Z" />
                                </g>
                              </svg>
                              Interior(15)
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 0H1V14H19V15H1V30H0V0Z" />
                            </svg>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="video-clip-tab" data-bs-toggle="tab" data-bs-target="#video-clip" type="button" role="tab" aria-controls="video-clip" aria-selected="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M19 0H18V14H0V15H18V30H19V0Z" />
                            </svg>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                <mask id="mask0_1673_2677" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={20} height={20}>
                                  <rect width={20} height={20} fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1673_2677)">
                                  <path d="M10 0C4.48566 0 0 4.48609 0 10C0 15.5139 4.48566 20 10 20C15.5143 20 20 15.5139 20 10C20 4.48609 15.5143 0 10 0ZM10 19.1667C4.94547 19.1667 0.83332 15.0545 0.83332 10C0.83332 4.94547 4.94547 0.83332 10 0.83332C15.0545 0.83332 19.1667 4.94547 19.1667 10C19.1667 15.0545 15.0545 19.1667 10 19.1667Z" />
                                  <path d="M13.9754 9.6499L8.14211 5.8999C8.01434 5.8165 7.84914 5.81201 7.7173 5.88443C7.65152 5.92022 7.59661 5.97309 7.55836 6.03747C7.52012 6.10186 7.49995 6.17537 7.5 6.25025V13.7503C7.5 13.9028 7.58301 14.0428 7.7173 14.1161C7.77847 14.1494 7.84702 14.1669 7.91668 14.1669C7.99481 14.1669 8.07375 14.1449 8.14211 14.1006L13.9754 10.3506C14.0943 10.2741 14.1667 10.1419 14.1667 10.0003C14.1667 9.85865 14.0943 9.72643 13.9754 9.6499ZM8.33332 12.9869V7.01361L12.9793 10.0003L8.33332 12.9869Z" />
                                </g>
                              </svg>
                              Video Clip
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 0H1V14H19V15H1V30H0V0Z" />
                            </svg>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="color-clip-tab" data-bs-toggle="tab" data-bs-target="#color-clip" type="button" role="tab" aria-controls="color-clip" aria-selected="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M19 0H18V14H0V15H18V30H19V0Z" />
                            </svg>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="bi bi-palette" viewBox="0 0 16 16">
                                <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
                              </svg>
                              Colours
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 0H1V14H19V15H1V30H0V0Z" />
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                <div className="single-item mb-50" id="car-info">
                  <div className="car-info">
                    <div className="title mb-20">
                      <h5>Car Info</h5>
                    </div>
                    <ul>
                      <li>
                        <div className="icon">
                          <img src="assets/img/inner-page/icon/mileage.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>25,100 miles</h6>
                          <span>Mileage</span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/img/inner-page/icon/engine.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>22,231 cc</h6>
                          <span>Engine</span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/img/inner-page/icon/fuel.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Petrol + Gas</h6>
                          <span>Fuel Type</span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/img/inner-page/icon/condition.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Used Car</h6>
                          <span>Condition</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-item mb-50" id="kye-features">
                  <div className="kye-features">
                    <div className="title mb-20">
                      <h5>Key Features</h5>
                    </div>
                    <ul>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Premium Wheel
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Moonroof
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Premium Audio
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Navigation
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Front Heated Seats
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Premium Seat Material
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Bluetooth
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Premium Seat Material
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Front Heated Seats
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Remote Engine Start
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Blind Spot System
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Multi-Zone Climate Control
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-item mb-50" id="overview">
                  <div className="overview">
                    <div className="title mb-25">
                      <h5>Overviews</h5>
                    </div>
                    <div className="overview-content">
                      <ul>
                        <li><span>Make</span> lamborghini</li>
                        <li><span>Model</span> lamborghini ave11</li>
                        <li><span>Year/Month</span> 2023</li>
                        <li><span>Mileage</span> 25,100 miles</li>
                        <li><span>Door’s</span> 4 doors</li>
                        <li><span>Engine</span> 22,231 cc</li>
                        <li><span>Color’s</span> sky blue</li>
                      </ul>
                      <ul>
                        <li><span>Repaire</span> no</li>
                        <li><span>Steering</span> right</li>
                        <li><span>Steating Catacity</span> 08</li>
                        <li><span>Fuel Type</span> petrol+gas</li>
                        <li><span>No. of Cylinder</span> 03</li>
                        <li><span>Transmission</span> Manual</li>
                        <li><span>Wheel’s</span> 04</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-item mb-50" id="performance">
                  <div className="engine-performance">
                    <div className="title mb-25">
                      <h5>Engine Performance</h5>
                    </div>
                    <div className="overview-content">
                      <ul>
                        <li><span>Engine Size</span> 3.5 L</li>
                        <li><span>Induction</span> Aspirated</li>
                        <li><span>Cylinders</span> 6 cyl</li>
                        <li><span>Engine Config</span> In-line</li>
                      </ul>
                      <ul>
                        <li><span>Valve Gear</span> DOHC with VVT</li>
                        <li><span>Fuel Injection</span> Direct Injection</li>
                        <li><span>Power</span> 140 kw 7000 rpm</li>
                        <li><span>Engine Location</span> front</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-item mb-50" id="car-color">
                  <div className="car-colors">
                    <div className="title-and-slider-btn mb-25">
                      <div className="title">
                        <h5>Lamborghini Colors</h5>
                      </div>
                      <div className="slider-btn-group2">
                        <div className="slider-btn prev-2">
                          <svg width={7} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                          </svg>
                        </div>
                        <div className="slider-btn next-2">
                          <svg width={7} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <Swiper {...carSlide} className="swiper car-color-slider">
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="car-color-wrap">
                            <div className="car-img">
                              <img src="assets/img/inner-page/color-car-01.png" alt="" />
                            </div>
                            <div className="content">
                              <h6>Lamborghini Murciélago (Black)</h6>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="car-color-wrap">
                            <div className="car-img">
                              <img src="assets/img/inner-page/color-car-02.png" alt="" />
                            </div>
                            <div className="content">
                              <h6>Lamborghini Murciélago (Blue)</h6>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="car-color-wrap">
                            <div className="car-img">
                              <img src="assets/img/inner-page/color-car-03.png" alt="" />
                            </div>
                            <div className="content">
                              <h6>Lamborghini Murciélago (Pink)</h6>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="car-color-wrap">
                            <div className="car-img">
                              <img src="assets/img/inner-page/color-car-04.png" alt="" />
                            </div>
                            <div className="content">
                              <h6>Lamborghini Murciélago (Orange)</h6>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    </Swiper>
                  </div>
                </div>
                <div className="single-item mb-50" id="car-milage">
                  <div className="car-milage">
                    <div className="title mb-25">
                      <h5>Lamborghini Mileage</h5>
                    </div>
                    <div className="overview-content">
                      <ul>
                        <li><span>Petrol (Manual)</span> 24.0 kmpl</li>
                        <li><span>Petrol (Automatic)</span> 22.0 kmpl</li>
                      </ul>
                      <ul>
                        <li><span>Diesel (Manual)</span> 25.0 kmpl</li>
                        <li><span>CNG (Manual)</span> 20 km/kg</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-item mb-50" id="faqs">
                  <div className="faq-area">
                    <div className="title mb-25">
                      <h5>FAQ’s &amp; Latest Answer</h5>
                    </div>
                    <div className="faq-wrap">
                      <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                          <h5 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                              How often should I get my car serviced?
                            </button>
                          </h5>
                          <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">It's always a good idea to research and read
                              reviews specific to the dealership you're interested in, as
                              experiences can vary even within the same dealership chain.</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h5 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                              How often should I change my car's oil?
                            </button>
                          </h5>
                          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">It's always a good idea to research and read
                              reviews specific to the dealership you're interested in, as
                              experiences can vary even within the same dealership chain.</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h5 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                              What type of fuel should I use for my car?
                            </button>
                          </h5>
                          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">It's always a good idea to research and read
                              reviews specific to the dealership you're interested in, as
                              experiences can vary even within the same dealership chain.</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h5 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                              What is the recommended tire pressure for my car?
                            </button>
                          </h5>
                          <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">It's always a good idea to research and read
                              reviews specific to the dealership you're interested in, as
                              experiences can vary even within the same dealership chain.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item mb-50" id="qus-ans">
                  <div className="user-qustion-area">
                    <div className="section-title-and-filter mb-30">
                      <div className="title">
                        <h5>Latest User Question</h5>
                      </div>
                      <div className="filter-atra">
                        <h6>Filter By:</h6>
                        <form>
                          <div className="form-inner">
                            <SelectComponent options={["Newest","Older"]} placeholder="Select Condition" />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="text-input-area mb-40">
                      <form>
                        <div className="form-inner">
                          <textarea placeholder="Ask your question..." defaultValue={""} />
                          <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                              <path d="M13.8697 0.129409C13.9314 0.191213 13.9736 0.269783 13.991 0.355362C14.0085 0.44094 14.0004 0.529754 13.9678 0.610771L8.78063 13.5781C8.73492 13.6923 8.65859 13.7917 8.56003 13.8653C8.46148 13.9389 8.34453 13.9839 8.22206 13.9954C8.09958 14.0068 7.97633 13.9842 7.86586 13.9301C7.75539 13.876 7.66199 13.7924 7.59594 13.6887L4.76304 9.23607L0.310438 6.40316C0.206426 6.33718 0.122663 6.24375 0.0683925 6.13318C0.0141218 6.02261 -0.00854707 5.89919 0.00288719 5.77655C0.0143215 5.65391 0.0594144 5.53681 0.13319 5.43817C0.206966 5.33954 0.306557 5.2632 0.420973 5.21759L13.3883 0.0322452C13.4694 -0.000369522 13.5582 -0.00846329 13.6437 0.00896931C13.7293 0.0264019 13.8079 0.0685926 13.8697 0.1303V0.129409ZM5.65267 8.97578L8.11385 12.8427L12.3329 2.29554L5.65267 8.97578ZM11.7027 1.66531L1.1555 5.88436L5.02333 8.34466L11.7027 1.66531Z" />
                            </svg>       
                          </button>
                        </div>
                      </form>
                    </div>
                    <ul className="comment">
                      <li>
                        <div className="single-comment-area">
                          <div className="author-img">
                            <img src="assets/img/inner-page/comment-author-01.png" alt="" />
                          </div>
                          <div className="comment-content">
                            <div className="author-name-deg">
                              <h6>Mr. Bowmik Haldar,</h6>
                              <span>05 June, 2023</span>
                            </div>
                            <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                            <div className="replay-btn">
                              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                                <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                              </svg>
                              Reply (02)
                            </div>
                          </div>
                        </div>
                        <ul className="comment-replay">
                          <li>
                            <div className="single-comment-area">
                              <div className="author-img">
                                <img src="assets/img/inner-page/comment-author-02.png" alt="" />
                              </div>
                              <div className="comment-content">
                                <div className="author-name-deg">
                                  <h6>Jacoline Juie,</h6>
                                  <span>05 June, 2023</span>
                                </div>
                                <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                                <div className="replay-btn">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                                    <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                                  </svg>
                                  Reply
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-comment-area">
                              <div className="author-img">
                                <img src="assets/img/inner-page/comment-author-03.png" alt="" />
                              </div>
                              <div className="comment-content">
                                <div className="author-name-deg">
                                  <h6>Robert Smith,</h6>
                                  <span>05 June, 2023</span>
                                </div>
                                <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                                <div className="replay-btn">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                                    <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                                  </svg>
                                  Reply
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="single-comment-area">
                          <div className="author-img">
                            <img src="assets/img/inner-page/comment-author-04.png" alt="" />
                          </div>
                          <div className="comment-content">
                            <div className="author-name-deg">
                              <h6>Srileka Panday,</h6>
                              <span>05 June, 2023</span>
                            </div>
                            <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                            <div className="replay-btn">
                              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                                <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                              </svg>
                              Reply (02)
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-comment-area">
                          <div className="author-img">
                            <img src="assets/img/inner-page/comment-author-05.png" alt="" />
                          </div>
                          <div className="comment-content">
                            <div className="author-name-deg">
                              <h6>Mr. Bowmik Haldar,</h6>
                              <span>05 June, 2023</span>
                            </div>
                            <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                            <div className="replay-btn">
                              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                                <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                              </svg>
                              Reply (02)
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="load-moer-btn">
                      <a className="primary-btn3" href="#">Load More Question</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="car-details-sidebar">
                <div className="contact-info mb-50">
                <div className="single-contact" id="phoneNumber">
                  <a onClick={() => handleClick('phoneNumber')}>
                    <i className="bx bx-phone-call" /> Show Number
                  </a>
                </div>
                <div className="single-contact" id="emailAdress">
                  <a onClick={() => handleClick('emailAdress')}>
                    <i className="bx bx-at" /> Email Now
                  </a>
                </div>
                <div className="single-contact" id="emailAdresss">
                  <a onClick={() => handleClick('emailAdresss')}>
                    <i className="bx bxl-whatsapp" /> Whatsapp
                  </a>
                </div>
                </div>
                <div className="inquiry-form mb-40">
                  <div className="title">
                    <h4>To More inquiry </h4>
                    <p>If choose this car to contact easily with us.</p>
                  </div>
                  <form>
                    <div className="form-inner mb-20">
                      <label>Name*</label>
                      <input type="text" placeholder="Ex- Jhon Numan" />
                    </div>
                    <div className="form-inner mb-20">
                      <label>Email*</label>
                      <input type="email" placeholder="Ex- info@gmail.com" />
                    </div>
                    <div className="form-inner mb-20">
                      <label>Phone</label>
                      <input id="phone" type="tel" placeholder="phone" name="phone" />
                    </div>
                    <div className="form-inner mb-20">
                      <label>Message*</label>
                      <textarea placeholder="Write your message..." defaultValue={""} />
                    </div>
                    <div className="form-inner">
                      <button className="primary-btn3" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                          <path d="M13.8697 0.129409C13.9314 0.191213 13.9736 0.269783 13.991 0.355362C14.0085 0.44094 14.0004 0.529754 13.9678 0.610771L8.78063 13.5781C8.73492 13.6923 8.65859 13.7917 8.56003 13.8653C8.46148 13.9389 8.34453 13.9839 8.22206 13.9954C8.09958 14.0068 7.97633 13.9842 7.86586 13.9301C7.75539 13.876 7.66199 13.7924 7.59594 13.6887L4.76304 9.23607L0.310438 6.40316C0.206426 6.33718 0.122663 6.24375 0.0683925 6.13318C0.0141218 6.02261 -0.00854707 5.89919 0.00288719 5.77655C0.0143215 5.65391 0.0594144 5.53681 0.13319 5.43817C0.206966 5.33954 0.306557 5.2632 0.420973 5.21759L13.3883 0.0322452C13.4694 -0.000369522 13.5582 -0.00846329 13.6437 0.00896931C13.7293 0.0264019 13.8079 0.0685926 13.8697 0.1303V0.129409ZM5.65267 8.97578L8.11385 12.8427L12.3329 2.29554L5.65267 8.97578ZM11.7027 1.66531L1.1555 5.88436L5.02333 8.34466L11.7027 1.66531Z" />
                        </svg> Send Message
                      </button>
                    </div>
                  </form>
                </div>
                <div className="recent-car-area">
                  <div className="title mb-30">
                    <h5>Recent Used Car</h5>
                  </div>
                  <ul className="nav nav-tabs" id="myTab6" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="new-car-tab" data-bs-toggle="tab" data-bs-target="#new-car" type="button" role="tab" aria-controls="new-car" aria-selected="true">New Car</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="used-car-tab" data-bs-toggle="tab" data-bs-target="#used-car" type="button" role="tab" aria-controls="used-car" aria-selected="false">Used Car</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="auction-car-tab" data-bs-toggle="tab" data-bs-target="#auction-car" type="button" role="tab" aria-controls="auction-car" aria-selected="false">Auction Car</button>
                    </li>
                  </ul>
                  <div className="tab-content mb-30" id="myTab6Content">
                    <div className="tab-pane fade show active" id="new-car" role="tabpanel" aria-labelledby="new-car-tab">
                      <div className="product-st-card1 two mb-30">
                        <div className="product-img">
                          <div className="product-price">
                            <span>$7,656.00</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <div className="car-img">
                            <img className="img-fluid" src="assets/img/inner-page/sb-img-01.png" alt="image" />
                          </div> 
                        </div>
                        <div className="product-content">
                          <h6><Link legacyBehavior href="/car-deatils"><a>Mercedes-Benz-2023</a></Link></h6>
                          <ul className="features">
                            <li>
                              <img src="assets/img/home4/icon/menual.svg" alt="" />
                              Automatic
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/fuel.svg" alt="" />
                              Petrol
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/electric.svg" alt="" />
                              Electric
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-st-card1 two mb-30">
                        <div className="product-img">
                          <div className="product-price">
                            <span>$7,656.00</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <div className="car-img">
                            <img className="img-fluid" src="assets/img/inner-page/sb-img-02.png" alt="image" />
                          </div> 
                        </div>
                        <div className="product-content">
                          <h6><Link legacyBehavior href="/car-deatils"><a>Hyundai Sonata-2022</a></Link></h6>
                          <ul className="features">
                            <li>
                              <img src="assets/img/home4/icon/menual.svg" alt="" />
                              Automatic
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/fuel.svg" alt="" />
                              Petrol
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/electric.svg" alt="" />
                              Electric
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-st-card1 two mb-30">
                        <div className="product-img">
                          <div className="product-price">
                            <span>$7,656.00</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <div className="car-img">
                            <img className="img-fluid" src="assets/img/inner-page/sb-img-03.png" alt="image" />
                          </div> 
                        </div>
                        <div className="product-content">
                          <h6><Link legacyBehavior href="/car-deatils"><a>Lexus RX-2023</a></Link></h6>
                          <ul className="features">
                            <li>
                              <img src="assets/img/home4/icon/menual.svg" alt="" />
                              Automatic
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/fuel.svg" alt="" />
                              Petrol
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/electric.svg" alt="" />
                              Electric
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-st-card1 two mb-30">
                        <div className="product-img">
                          <div className="product-price">
                            <span>$7,656.00</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <div className="car-img">
                            <img className="img-fluid" src="assets/img/inner-page/sb-img-04.png" alt="image" />
                          </div> 
                        </div>
                        <div className="product-content">
                          <h6><Link legacyBehavior href="/car-deatils"><a>Ferrari 458 Italia</a></Link></h6>
                          <ul className="features">
                            <li>
                              <img src="assets/img/home4/icon/menual.svg" alt="" />
                              Automatic
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/fuel.svg" alt="" />
                              Petrol
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/electric.svg" alt="" />
                              Electric
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="view-all-btn">
                        <Link legacyBehavior href="/car-listing-left-sidebar">
                          <a className="primary-btn3 two" >
                          <svg width={35} height={21} viewBox="0 0 35 21" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 20C5.47715 20 1 15.7467 1 10.5C1 5.25329 5.47715 1 11 1" strokeLinecap="round" />
                            <path d="M14.2597 3C14.1569 3 14.0583 3.04166 13.9856 3.11582C13.9129 3.18997 13.8721 3.29055 13.8721 3.39542C13.8721 3.50029 13.9129 3.60086 13.9856 3.67502C14.0583 3.74917 14.1569 3.79083 14.2597 3.79083H15.8104C15.9132 3.79083 16.0118 3.74917 16.0845 3.67502C16.1572 3.60086 16.198 3.50029 16.198 3.39542C16.198 3.29055 16.1572 3.18997 16.0845 3.11582C16.0118 3.04166 15.9132 3 15.8104 3H14.2597ZM16.7795 3C16.6767 3 16.5781 3.04166 16.5054 3.11582C16.4327 3.18997 16.3919 3.29055 16.3919 3.39542C16.3919 3.50029 16.4327 3.60086 16.5054 3.67502C16.5781 3.74917 16.6767 3.79083 16.7795 3.79083H21.3346C21.4374 3.79083 21.536 3.74917 21.6087 3.67502C21.6814 3.60086 21.7222 3.50029 21.7222 3.39542C21.7222 3.29055 21.6814 3.18997 21.6087 3.11582C21.536 3.04166 21.4374 3 21.3346 3H16.7795Z" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.2292 5.76953C15.1264 5.76953 15.0278 5.81119 14.9551 5.88535C14.8824 5.9595 14.8415 6.06008 14.8415 6.16495C14.8415 6.26982 14.8824 6.3704 14.9551 6.44455C15.0278 6.51871 15.1264 6.56037 15.2292 6.56037H24.1454C25.653 6.56037 26.5822 6.79999 27.3256 7.18493C27.9575 7.51194 28.4672 7.9467 29.1055 8.49119C29.2375 8.60368 29.3749 8.72073 29.5201 8.84271L29.6101 8.91824L29.726 8.93069C33.2653 9.31069 34.0622 10.5309 34.2246 11.1557V12.6893C34.2246 12.7942 34.1838 12.8948 34.1111 12.9689C34.0384 13.0431 33.9398 13.0847 33.8369 13.0847H32.8356C32.6511 11.9627 31.6943 11.1077 30.5418 11.1077C29.3893 11.1077 28.4325 11.9627 28.248 13.0847H21.2058C21.0212 11.9627 20.0645 11.1077 18.912 11.1077C17.7594 11.1077 16.8027 11.9627 16.6182 13.0847H14.7446C14.6418 13.0847 14.5432 13.1264 14.4705 13.2006C14.3978 13.2747 14.3569 13.3753 14.3569 13.4802C14.3569 13.585 14.3978 13.6856 14.4705 13.7598C14.5432 13.8339 14.6418 13.8756 14.7446 13.8756H16.6182C16.8027 14.9976 17.7594 15.8527 18.912 15.8527C20.0645 15.8527 21.0212 14.9976 21.2058 13.8756H28.248C28.4325 14.9976 29.3893 15.8527 30.5418 15.8527C31.6943 15.8527 32.6511 14.9976 32.8356 13.8756H33.8369C34.1454 13.8756 34.4412 13.7506 34.6593 13.5281C34.8774 13.3057 34.9999 13.0039 34.9999 12.6893V11.0626L34.99 11.0187C34.7431 9.92754 33.5791 8.57502 29.9239 8.15706C29.8217 8.07086 29.7215 7.98505 29.6227 7.90063C28.9828 7.35397 28.3942 6.851 27.6766 6.4795C26.7966 6.02418 25.7391 5.76953 24.1454 5.76953H15.2292ZM28.9912 13.4802C28.9912 13.0607 29.1545 12.6584 29.4453 12.3618C29.7361 12.0651 30.1306 11.8985 30.5418 11.8985C30.9531 11.8985 31.3475 12.0651 31.6383 12.3618C31.9291 12.6584 32.0925 13.0607 32.0925 13.4802C32.0925 13.8996 31.9291 14.302 31.6383 14.5986C31.3475 14.8952 30.9531 15.0618 30.5418 15.0618C30.1306 15.0618 29.7361 14.8952 29.4453 14.5986C29.1545 14.302 28.9912 13.8996 28.9912 13.4802ZM18.912 11.8985C18.5007 11.8985 18.1063 12.0651 17.8155 12.3618C17.5247 12.6584 17.3613 13.0607 17.3613 13.4802C17.3613 13.8996 17.5247 14.302 17.8155 14.5986C18.1063 14.8952 18.5007 15.0618 18.912 15.0618C19.3232 15.0618 19.7176 14.8952 20.0084 14.5986C20.2992 14.302 20.4626 13.8996 20.4626 13.4802C20.4626 13.0607 20.2992 12.6584 20.0084 12.3618C19.7176 12.0651 19.3232 11.8985 18.912 11.8985Z" />
                            <path d="M11 8.14151C11 8.03664 11.0408 7.93606 11.1135 7.86191C11.1862 7.78775 11.2848 7.74609 11.3877 7.74609H15.7489C15.8517 7.74609 15.9503 7.78775 16.023 7.86191C16.0957 7.93606 16.1365 8.03664 16.1365 8.14151C16.1365 8.24638 16.0957 8.34696 16.023 8.42111C15.9503 8.49527 15.8517 8.53693 15.7489 8.53693H11.3877C11.2848 8.53693 11.1862 8.49527 11.1135 8.42111C11.0408 8.34696 11 8.24638 11 8.14151ZM26.6836 8.65278C26.7563 8.72694 26.7971 8.82749 26.7971 8.93234C26.7971 9.03719 26.7563 9.13775 26.6836 9.2119L26.6532 9.24294C26.2897 9.61367 25.7968 9.82197 25.2828 9.82203H19.1409C19.0381 9.82203 18.9395 9.78037 18.8668 9.70622C18.7941 9.63206 18.7532 9.53149 18.7532 9.42662C18.7532 9.32174 18.7941 9.22117 18.8668 9.14701C18.9395 9.07286 19.0381 9.0312 19.1409 9.0312H25.2826C25.4354 9.03122 25.5866 9.00055 25.7277 8.94095C25.8688 8.88134 25.997 8.79397 26.105 8.68382L26.1355 8.65278C26.2082 8.57866 26.3068 8.53701 26.4096 8.53701C26.5123 8.53701 26.6109 8.57866 26.6836 8.65278ZM19.5286 17.7304C19.5286 17.6255 19.5694 17.5249 19.6421 17.4508C19.7148 17.3766 19.8134 17.335 19.9162 17.335H21.5638C21.6666 17.335 21.7652 17.3766 21.8379 17.4508C21.9106 17.5249 21.9514 17.6255 21.9514 17.7304C21.9514 17.8352 21.9106 17.9358 21.8379 18.01C21.7652 18.0841 21.6666 18.1258 21.5638 18.1258H19.9162C19.8134 18.1258 19.7148 18.0841 19.6421 18.01C19.5694 17.9358 19.5286 17.8352 19.5286 17.7304ZM22.2422 17.7304C22.2422 17.6255 22.283 17.5249 22.3557 17.4508C22.4284 17.3766 22.527 17.335 22.6299 17.335H26.991C27.0939 17.335 27.1925 17.3766 27.2652 17.4508C27.3379 17.5249 27.3787 17.6255 27.3787 17.7304C27.3787 17.8352 27.3379 17.9358 27.2652 18.01C27.1925 18.0841 27.0939 18.1258 26.991 18.1258H22.6299C22.527 18.1258 22.4284 18.0841 22.3557 18.01C22.283 17.9358 22.2422 17.8352 22.2422 17.7304Z" />
                          </svg>
                          View All Car
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="used-car" role="tabpanel" aria-labelledby="used-car-tab">
                      <div className="product-st-card1 two mb-30">
                        <div className="product-img">
                          <div className="product-price">
                            <span>$7,656.00</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <div className="car-img">
                            <img className="img-fluid" src="assets/img/inner-page/sb-img-01.png" alt="image" />
                          </div> 
                        </div>
                        <div className="product-content">
                          <h6><Link legacyBehavior href="/car-deatils"><a>Mercedes-Benz-2023</a></Link></h6>
                          <ul className="features">
                            <li>
                              <img src="assets/img/home4/icon/menual.svg" alt="" />
                              Automatic
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/fuel.svg" alt="" />
                              Petrol
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/electric.svg" alt="" />
                              Electric
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-st-card1 two mb-30">
                        <div className="product-img">
                          <div className="product-price">
                            <span>$7,656.00</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <div className="car-img">
                            <img className="img-fluid" src="assets/img/inner-page/sb-img-02.png" alt="image" />
                          </div> 
                        </div>
                        <div className="product-content">
                          <h6><Link legacyBehavior href="/car-deatils"><a>Hyundai Sonata-2022</a></Link></h6>
                          <ul className="features">
                            <li>
                              <img src="assets/img/home4/icon/menual.svg" alt="" />
                              Automatic
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/fuel.svg" alt="" />
                              Petrol
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/electric.svg" alt="" />
                              Electric
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-st-card1 two mb-30">
                        <div className="product-img">
                          <div className="product-price">
                            <span>$7,656.00</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <div className="car-img">
                            <img className="img-fluid" src="assets/img/inner-page/sb-img-03.png" alt="image" />
                          </div> 
                        </div>
                        <div className="product-content">
                          <h6><Link legacyBehavior href="/car-deatils"><a>Lexus RX-2023</a></Link></h6>
                          <ul className="features">
                            <li>
                              <img src="assets/img/home4/icon/menual.svg" alt="" />
                              Automatic
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/fuel.svg" alt="" />
                              Petrol
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/electric.svg" alt="" />
                              Electric
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-st-card1 two mb-30">
                        <div className="product-img">
                          <div className="product-price">
                            <span>$7,656.00</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <div className="car-img">
                            <img className="img-fluid" src="assets/img/inner-page/sb-img-04.png" alt="image" />
                          </div> 
                        </div>
                        <div className="product-content">
                          <h6><Link legacyBehavior href="/car-deatils"><a>Ferrari 458 Italia</a></Link></h6>
                          <ul className="features">
                            <li>
                              <img src="assets/img/home4/icon/menual.svg" alt="" />
                              Automatic
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/fuel.svg" alt="" />
                              Petrol
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/electric.svg" alt="" />
                              Electric
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="view-all-btn">
                        <Link legacyBehavior href="/car-listing-left-sidebar">
                          <a className="primary-btn3 two">
                          <svg width={35} height={21} viewBox="0 0 35 21" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 20C5.47715 20 1 15.7467 1 10.5C1 5.25329 5.47715 1 11 1" strokeLinecap="round" />
                            <path d="M14.2597 3C14.1569 3 14.0583 3.04166 13.9856 3.11582C13.9129 3.18997 13.8721 3.29055 13.8721 3.39542C13.8721 3.50029 13.9129 3.60086 13.9856 3.67502C14.0583 3.74917 14.1569 3.79083 14.2597 3.79083H15.8104C15.9132 3.79083 16.0118 3.74917 16.0845 3.67502C16.1572 3.60086 16.198 3.50029 16.198 3.39542C16.198 3.29055 16.1572 3.18997 16.0845 3.11582C16.0118 3.04166 15.9132 3 15.8104 3H14.2597ZM16.7795 3C16.6767 3 16.5781 3.04166 16.5054 3.11582C16.4327 3.18997 16.3919 3.29055 16.3919 3.39542C16.3919 3.50029 16.4327 3.60086 16.5054 3.67502C16.5781 3.74917 16.6767 3.79083 16.7795 3.79083H21.3346C21.4374 3.79083 21.536 3.74917 21.6087 3.67502C21.6814 3.60086 21.7222 3.50029 21.7222 3.39542C21.7222 3.29055 21.6814 3.18997 21.6087 3.11582C21.536 3.04166 21.4374 3 21.3346 3H16.7795Z" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.2292 5.76953C15.1264 5.76953 15.0278 5.81119 14.9551 5.88535C14.8824 5.9595 14.8415 6.06008 14.8415 6.16495C14.8415 6.26982 14.8824 6.3704 14.9551 6.44455C15.0278 6.51871 15.1264 6.56037 15.2292 6.56037H24.1454C25.653 6.56037 26.5822 6.79999 27.3256 7.18493C27.9575 7.51194 28.4672 7.9467 29.1055 8.49119C29.2375 8.60368 29.3749 8.72073 29.5201 8.84271L29.6101 8.91824L29.726 8.93069C33.2653 9.31069 34.0622 10.5309 34.2246 11.1557V12.6893C34.2246 12.7942 34.1838 12.8948 34.1111 12.9689C34.0384 13.0431 33.9398 13.0847 33.8369 13.0847H32.8356C32.6511 11.9627 31.6943 11.1077 30.5418 11.1077C29.3893 11.1077 28.4325 11.9627 28.248 13.0847H21.2058C21.0212 11.9627 20.0645 11.1077 18.912 11.1077C17.7594 11.1077 16.8027 11.9627 16.6182 13.0847H14.7446C14.6418 13.0847 14.5432 13.1264 14.4705 13.2006C14.3978 13.2747 14.3569 13.3753 14.3569 13.4802C14.3569 13.585 14.3978 13.6856 14.4705 13.7598C14.5432 13.8339 14.6418 13.8756 14.7446 13.8756H16.6182C16.8027 14.9976 17.7594 15.8527 18.912 15.8527C20.0645 15.8527 21.0212 14.9976 21.2058 13.8756H28.248C28.4325 14.9976 29.3893 15.8527 30.5418 15.8527C31.6943 15.8527 32.6511 14.9976 32.8356 13.8756H33.8369C34.1454 13.8756 34.4412 13.7506 34.6593 13.5281C34.8774 13.3057 34.9999 13.0039 34.9999 12.6893V11.0626L34.99 11.0187C34.7431 9.92754 33.5791 8.57502 29.9239 8.15706C29.8217 8.07086 29.7215 7.98505 29.6227 7.90063C28.9828 7.35397 28.3942 6.851 27.6766 6.4795C26.7966 6.02418 25.7391 5.76953 24.1454 5.76953H15.2292ZM28.9912 13.4802C28.9912 13.0607 29.1545 12.6584 29.4453 12.3618C29.7361 12.0651 30.1306 11.8985 30.5418 11.8985C30.9531 11.8985 31.3475 12.0651 31.6383 12.3618C31.9291 12.6584 32.0925 13.0607 32.0925 13.4802C32.0925 13.8996 31.9291 14.302 31.6383 14.5986C31.3475 14.8952 30.9531 15.0618 30.5418 15.0618C30.1306 15.0618 29.7361 14.8952 29.4453 14.5986C29.1545 14.302 28.9912 13.8996 28.9912 13.4802ZM18.912 11.8985C18.5007 11.8985 18.1063 12.0651 17.8155 12.3618C17.5247 12.6584 17.3613 13.0607 17.3613 13.4802C17.3613 13.8996 17.5247 14.302 17.8155 14.5986C18.1063 14.8952 18.5007 15.0618 18.912 15.0618C19.3232 15.0618 19.7176 14.8952 20.0084 14.5986C20.2992 14.302 20.4626 13.8996 20.4626 13.4802C20.4626 13.0607 20.2992 12.6584 20.0084 12.3618C19.7176 12.0651 19.3232 11.8985 18.912 11.8985Z" />
                            <path d="M11 8.14151C11 8.03664 11.0408 7.93606 11.1135 7.86191C11.1862 7.78775 11.2848 7.74609 11.3877 7.74609H15.7489C15.8517 7.74609 15.9503 7.78775 16.023 7.86191C16.0957 7.93606 16.1365 8.03664 16.1365 8.14151C16.1365 8.24638 16.0957 8.34696 16.023 8.42111C15.9503 8.49527 15.8517 8.53693 15.7489 8.53693H11.3877C11.2848 8.53693 11.1862 8.49527 11.1135 8.42111C11.0408 8.34696 11 8.24638 11 8.14151ZM26.6836 8.65278C26.7563 8.72694 26.7971 8.82749 26.7971 8.93234C26.7971 9.03719 26.7563 9.13775 26.6836 9.2119L26.6532 9.24294C26.2897 9.61367 25.7968 9.82197 25.2828 9.82203H19.1409C19.0381 9.82203 18.9395 9.78037 18.8668 9.70622C18.7941 9.63206 18.7532 9.53149 18.7532 9.42662C18.7532 9.32174 18.7941 9.22117 18.8668 9.14701C18.9395 9.07286 19.0381 9.0312 19.1409 9.0312H25.2826C25.4354 9.03122 25.5866 9.00055 25.7277 8.94095C25.8688 8.88134 25.997 8.79397 26.105 8.68382L26.1355 8.65278C26.2082 8.57866 26.3068 8.53701 26.4096 8.53701C26.5123 8.53701 26.6109 8.57866 26.6836 8.65278ZM19.5286 17.7304C19.5286 17.6255 19.5694 17.5249 19.6421 17.4508C19.7148 17.3766 19.8134 17.335 19.9162 17.335H21.5638C21.6666 17.335 21.7652 17.3766 21.8379 17.4508C21.9106 17.5249 21.9514 17.6255 21.9514 17.7304C21.9514 17.8352 21.9106 17.9358 21.8379 18.01C21.7652 18.0841 21.6666 18.1258 21.5638 18.1258H19.9162C19.8134 18.1258 19.7148 18.0841 19.6421 18.01C19.5694 17.9358 19.5286 17.8352 19.5286 17.7304ZM22.2422 17.7304C22.2422 17.6255 22.283 17.5249 22.3557 17.4508C22.4284 17.3766 22.527 17.335 22.6299 17.335H26.991C27.0939 17.335 27.1925 17.3766 27.2652 17.4508C27.3379 17.5249 27.3787 17.6255 27.3787 17.7304C27.3787 17.8352 27.3379 17.9358 27.2652 18.01C27.1925 18.0841 27.0939 18.1258 26.991 18.1258H22.6299C22.527 18.1258 22.4284 18.0841 22.3557 18.01C22.283 17.9358 22.2422 17.8352 22.2422 17.7304Z" />
                          </svg>
                          View All Car
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="auction-car" role="tabpanel" aria-labelledby="auction-car-tab">
                      <div className="product-st-card1 two mb-30">
                        <div className="product-img">
                          <div className="product-price">
                            <span>$7,656.00</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <div className="car-img">
                            <img className="img-fluid" src="assets/img/inner-page/sb-img-01.png" alt="image" />
                          </div> 
                        </div>
                        <div className="product-content">
                          <h6><Link legacyBehavior href="/car-deatils"><a>Mercedes-Benz-2023</a></Link></h6>
                          <ul className="features">
                            <li>
                              <img src="assets/img/home4/icon/menual.svg" alt="" />
                              Automatic
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/fuel.svg" alt="" />
                              Petrol
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/electric.svg" alt="" />
                              Electric
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-st-card1 two mb-30">
                        <div className="product-img">
                          <div className="product-price">
                            <span>$7,656.00</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <div className="car-img">
                            <img className="img-fluid" src="assets/img/inner-page/sb-img-02.png" alt="image" />
                          </div> 
                        </div>
                        <div className="product-content">
                          <h6><Link legacyBehavior href="/car-deatils"><a>Hyundai Sonata-2022</a></Link></h6>
                          <ul className="features">
                            <li>
                              <img src="assets/img/home4/icon/menual.svg" alt="" />
                              Automatic
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/fuel.svg" alt="" />
                              Petrol
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/electric.svg" alt="" />
                              Electric
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-st-card1 two mb-30">
                        <div className="product-img">
                          <div className="product-price">
                            <span>$7,656.00</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <div className="car-img">
                            <img className="img-fluid" src="assets/img/inner-page/sb-img-03.png" alt="image" />
                          </div> 
                        </div>
                        <div className="product-content">
                          <h6><Link legacyBehavior href="/car-deatils"><a>Lexus RX-2023</a></Link></h6>
                          <ul className="features">
                            <li>
                              <img src="assets/img/home4/icon/menual.svg" alt="" />
                              Automatic
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/fuel.svg" alt="" />
                              Petrol
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/electric.svg" alt="" />
                              Electric
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-st-card1 two mb-30">
                        <div className="product-img">
                          <div className="product-price">
                            <span>$7,656.00</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <div className="car-img">
                            <img className="img-fluid" src="assets/img/inner-page/sb-img-04.png" alt="image" />
                          </div> 
                        </div>
                        <div className="product-content">
                          <h6><Link legacyBehavior href="/car-deatils"><a>Ferrari 458 Italia</a></Link></h6>
                          <ul className="features">
                            <li>
                              <img src="assets/img/home4/icon/menual.svg" alt="" />
                              Automatic
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/fuel.svg" alt="" />
                              Petrol
                            </li>
                            <li>
                              <img src="assets/img/home4/icon/electric.svg" alt="" />
                              Electric
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="view-all-btn">
                        <Link legacyBehavior  href="/car-listing-left-sidebar">
                          <a className="primary-btn3 two">
                          <svg width={35} height={21} viewBox="0 0 35 21" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 20C5.47715 20 1 15.7467 1 10.5C1 5.25329 5.47715 1 11 1" strokeLinecap="round" />
                            <path d="M14.2597 3C14.1569 3 14.0583 3.04166 13.9856 3.11582C13.9129 3.18997 13.8721 3.29055 13.8721 3.39542C13.8721 3.50029 13.9129 3.60086 13.9856 3.67502C14.0583 3.74917 14.1569 3.79083 14.2597 3.79083H15.8104C15.9132 3.79083 16.0118 3.74917 16.0845 3.67502C16.1572 3.60086 16.198 3.50029 16.198 3.39542C16.198 3.29055 16.1572 3.18997 16.0845 3.11582C16.0118 3.04166 15.9132 3 15.8104 3H14.2597ZM16.7795 3C16.6767 3 16.5781 3.04166 16.5054 3.11582C16.4327 3.18997 16.3919 3.29055 16.3919 3.39542C16.3919 3.50029 16.4327 3.60086 16.5054 3.67502C16.5781 3.74917 16.6767 3.79083 16.7795 3.79083H21.3346C21.4374 3.79083 21.536 3.74917 21.6087 3.67502C21.6814 3.60086 21.7222 3.50029 21.7222 3.39542C21.7222 3.29055 21.6814 3.18997 21.6087 3.11582C21.536 3.04166 21.4374 3 21.3346 3H16.7795Z" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.2292 5.76953C15.1264 5.76953 15.0278 5.81119 14.9551 5.88535C14.8824 5.9595 14.8415 6.06008 14.8415 6.16495C14.8415 6.26982 14.8824 6.3704 14.9551 6.44455C15.0278 6.51871 15.1264 6.56037 15.2292 6.56037H24.1454C25.653 6.56037 26.5822 6.79999 27.3256 7.18493C27.9575 7.51194 28.4672 7.9467 29.1055 8.49119C29.2375 8.60368 29.3749 8.72073 29.5201 8.84271L29.6101 8.91824L29.726 8.93069C33.2653 9.31069 34.0622 10.5309 34.2246 11.1557V12.6893C34.2246 12.7942 34.1838 12.8948 34.1111 12.9689C34.0384 13.0431 33.9398 13.0847 33.8369 13.0847H32.8356C32.6511 11.9627 31.6943 11.1077 30.5418 11.1077C29.3893 11.1077 28.4325 11.9627 28.248 13.0847H21.2058C21.0212 11.9627 20.0645 11.1077 18.912 11.1077C17.7594 11.1077 16.8027 11.9627 16.6182 13.0847H14.7446C14.6418 13.0847 14.5432 13.1264 14.4705 13.2006C14.3978 13.2747 14.3569 13.3753 14.3569 13.4802C14.3569 13.585 14.3978 13.6856 14.4705 13.7598C14.5432 13.8339 14.6418 13.8756 14.7446 13.8756H16.6182C16.8027 14.9976 17.7594 15.8527 18.912 15.8527C20.0645 15.8527 21.0212 14.9976 21.2058 13.8756H28.248C28.4325 14.9976 29.3893 15.8527 30.5418 15.8527C31.6943 15.8527 32.6511 14.9976 32.8356 13.8756H33.8369C34.1454 13.8756 34.4412 13.7506 34.6593 13.5281C34.8774 13.3057 34.9999 13.0039 34.9999 12.6893V11.0626L34.99 11.0187C34.7431 9.92754 33.5791 8.57502 29.9239 8.15706C29.8217 8.07086 29.7215 7.98505 29.6227 7.90063C28.9828 7.35397 28.3942 6.851 27.6766 6.4795C26.7966 6.02418 25.7391 5.76953 24.1454 5.76953H15.2292ZM28.9912 13.4802C28.9912 13.0607 29.1545 12.6584 29.4453 12.3618C29.7361 12.0651 30.1306 11.8985 30.5418 11.8985C30.9531 11.8985 31.3475 12.0651 31.6383 12.3618C31.9291 12.6584 32.0925 13.0607 32.0925 13.4802C32.0925 13.8996 31.9291 14.302 31.6383 14.5986C31.3475 14.8952 30.9531 15.0618 30.5418 15.0618C30.1306 15.0618 29.7361 14.8952 29.4453 14.5986C29.1545 14.302 28.9912 13.8996 28.9912 13.4802ZM18.912 11.8985C18.5007 11.8985 18.1063 12.0651 17.8155 12.3618C17.5247 12.6584 17.3613 13.0607 17.3613 13.4802C17.3613 13.8996 17.5247 14.302 17.8155 14.5986C18.1063 14.8952 18.5007 15.0618 18.912 15.0618C19.3232 15.0618 19.7176 14.8952 20.0084 14.5986C20.2992 14.302 20.4626 13.8996 20.4626 13.4802C20.4626 13.0607 20.2992 12.6584 20.0084 12.3618C19.7176 12.0651 19.3232 11.8985 18.912 11.8985Z" />
                            <path d="M11 8.14151C11 8.03664 11.0408 7.93606 11.1135 7.86191C11.1862 7.78775 11.2848 7.74609 11.3877 7.74609H15.7489C15.8517 7.74609 15.9503 7.78775 16.023 7.86191C16.0957 7.93606 16.1365 8.03664 16.1365 8.14151C16.1365 8.24638 16.0957 8.34696 16.023 8.42111C15.9503 8.49527 15.8517 8.53693 15.7489 8.53693H11.3877C11.2848 8.53693 11.1862 8.49527 11.1135 8.42111C11.0408 8.34696 11 8.24638 11 8.14151ZM26.6836 8.65278C26.7563 8.72694 26.7971 8.82749 26.7971 8.93234C26.7971 9.03719 26.7563 9.13775 26.6836 9.2119L26.6532 9.24294C26.2897 9.61367 25.7968 9.82197 25.2828 9.82203H19.1409C19.0381 9.82203 18.9395 9.78037 18.8668 9.70622C18.7941 9.63206 18.7532 9.53149 18.7532 9.42662C18.7532 9.32174 18.7941 9.22117 18.8668 9.14701C18.9395 9.07286 19.0381 9.0312 19.1409 9.0312H25.2826C25.4354 9.03122 25.5866 9.00055 25.7277 8.94095C25.8688 8.88134 25.997 8.79397 26.105 8.68382L26.1355 8.65278C26.2082 8.57866 26.3068 8.53701 26.4096 8.53701C26.5123 8.53701 26.6109 8.57866 26.6836 8.65278ZM19.5286 17.7304C19.5286 17.6255 19.5694 17.5249 19.6421 17.4508C19.7148 17.3766 19.8134 17.335 19.9162 17.335H21.5638C21.6666 17.335 21.7652 17.3766 21.8379 17.4508C21.9106 17.5249 21.9514 17.6255 21.9514 17.7304C21.9514 17.8352 21.9106 17.9358 21.8379 18.01C21.7652 18.0841 21.6666 18.1258 21.5638 18.1258H19.9162C19.8134 18.1258 19.7148 18.0841 19.6421 18.01C19.5694 17.9358 19.5286 17.8352 19.5286 17.7304ZM22.2422 17.7304C22.2422 17.6255 22.283 17.5249 22.3557 17.4508C22.4284 17.3766 22.527 17.335 22.6299 17.335H26.991C27.0939 17.335 27.1925 17.3766 27.2652 17.4508C27.3379 17.5249 27.3787 17.6255 27.3787 17.7304C27.3787 17.8352 27.3379 17.9358 27.2652 18.01C27.1925 18.0841 27.0939 18.1258 26.991 18.1258H22.6299C22.527 18.1258 22.4284 18.0841 22.3557 18.01C22.283 17.9358 22.2422 17.8352 22.2422 17.7304Z" />
                          </svg>
                          View All Car
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="most-search-area style-2 pt-90 pb-90 mb-100">
        <div className="container">
          <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
            <div className="col-lg-12 d-flex align-items-end justify-content-between flex-wrap gap-4">
              <div className="section-title1">
                <span>Similar Car</span>
                <h2>Similar Car From This Brand</h2>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-12 position-relative">
              <Swiper {...upcommingSlide} className="swiper upcoming-car-slider mb-50">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="product-card">
                      <div className="product-img">
                        <div className="number-of-img">
                          <img src="assets/img/home1/icon/gallery-icon-1.svg" alt="" />
                          10
                        </div>
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                        <div className="slider-btn-group">
                          <div className="product-stand-next swiper-arrow">
                            <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                            </svg>
                          </div>
                          <div className="product-stand-prev swiper-arrow">
                            <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-11.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-11.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-11.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h5><Link legacyBehavior href="/car-deatils"><a>Mercedes-Benz C-Class-2023</a></Link></h5>
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <ul className="features">
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_14491" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_14491)">
                                <path d="M13 7.3125C13 5.53674 12.284 3.9253 11.1258 2.75099C11.1167 2.73873 11.1068 2.72712 11.0962 2.71625C11.0853 2.70558 11.0737 2.69569 11.0615 2.68667C9.88716 1.52848 8.27571 0.8125 6.5 0.8125C4.72429 0.8125 3.11284 1.52852 1.93849 2.68667C1.92625 2.69572 1.91466 2.7056 1.9038 2.71625C1.89311 2.72711 1.88321 2.73872 1.87417 2.75099C0.716023 3.9253 0 5.53674 0 7.3125C0 9.04849 0.675957 10.6805 1.90333 11.9081L1.90384 11.9087L1.90418 11.909L1.90469 11.9095C1.93434 11.9392 1.96957 11.9628 2.00835 11.9788C2.04713 11.9949 2.0887 12.0031 2.13068 12.0031C2.21251 12.0031 2.29435 11.9719 2.35675 11.9094C2.36208 11.9041 2.36689 11.8984 2.37175 11.8928L3.35686 10.9077C3.41637 10.8476 3.44969 10.7665 3.44951 10.6819C3.44933 10.5974 3.41566 10.5163 3.35589 10.4566C3.29611 10.3968 3.21509 10.3631 3.13055 10.3629C3.04601 10.3627 2.96484 10.396 2.9048 10.4556L2.13605 11.2243C1.23965 10.2268 0.719603 8.97139 0.648082 7.63217H1.73527C1.91181 7.63217 2.05494 7.48909 2.05494 7.3125C2.05494 7.13591 1.91181 6.99283 1.73527 6.99283H0.648167C0.722502 5.6173 1.27336 4.36649 2.13814 3.40274L2.9048 4.1694C2.93445 4.19912 2.96968 4.22269 3.00847 4.23875C3.04726 4.25481 3.08884 4.26305 3.13083 4.263C3.19405 4.26299 3.25585 4.24424 3.30841 4.20912C3.36098 4.17399 3.40195 4.12407 3.42614 4.06566C3.45033 4.00725 3.45666 3.94298 3.44433 3.88097C3.432 3.81896 3.40156 3.762 3.35686 3.7173L2.59024 2.9506C3.55403 2.08582 4.8048 1.53496 6.18033 1.46067V2.54781C6.18033 2.72439 6.32346 2.86748 6.5 2.86748C6.67654 2.86748 6.81967 2.72439 6.81967 2.54781V1.46067C8.1952 1.53496 9.44597 2.08586 10.4098 2.95064L9.6431 3.7173C9.58358 3.77733 9.55027 3.8585 9.55045 3.94304C9.55063 4.02758 9.58429 4.10861 9.64407 4.16839C9.70384 4.22817 9.78487 4.26184 9.86941 4.26203C9.95395 4.26222 10.0351 4.22891 10.0952 4.1694L10.8618 3.40274C11.7266 4.36653 12.2775 5.6173 12.3518 6.99283H11.2646C11.0881 6.99283 10.945 7.13591 10.945 7.3125C10.945 7.48909 11.0881 7.63217 11.2646 7.63217H12.3518C12.2803 8.97139 11.7603 10.2268 10.8639 11.2243L10.0952 10.4556C10.0349 10.3973 9.95409 10.365 9.87024 10.3657C9.78638 10.3664 9.70616 10.4001 9.64687 10.4594C9.58758 10.5187 9.55396 10.5989 9.55325 10.6827C9.55254 10.7666 9.58481 10.8474 9.6431 10.9077L10.6441 11.9087C10.6738 11.9384 10.709 11.962 10.7478 11.978C10.7866 11.9941 10.8281 12.0023 10.8701 12.0023C10.9121 12.0023 10.9537 11.9941 10.9925 11.978C11.0313 11.9619 11.0665 11.9384 11.0962 11.9087C12.3239 10.6809 13 9.04866 13 7.3125Z" />
                                <path d="M7.96853 3.64648C7.92956 3.63086 7.8879 3.62307 7.84592 3.62356C7.80394 3.62404 7.76247 3.63279 7.72387 3.64931C7.68528 3.66583 7.65031 3.68979 7.62098 3.71982C7.59165 3.74986 7.56852 3.78537 7.55292 3.82435L6.62915 6.13025C6.58625 6.12537 6.54313 6.12278 6.49996 6.12249C6.05003 6.12249 5.64362 6.37171 5.43924 6.77288C5.22562 7.19225 5.28035 7.69332 5.58553 8.11316C5.61729 8.15668 5.65563 8.19499 5.69916 8.22675C5.9471 8.407 6.22402 8.50226 6.49996 8.50226C6.94989 8.50226 7.35634 8.25305 7.56067 7.85188C7.7743 7.43251 7.71957 6.93148 7.4146 6.51194C7.3828 6.46827 7.34439 6.42982 7.30076 6.39797C7.27754 6.38137 7.25388 6.36541 7.22979 6.3501L8.1464 4.06206C8.17791 3.98336 8.17688 3.89537 8.14352 3.81744C8.11016 3.73951 8.04722 3.67801 7.96853 3.64648ZM6.99093 7.56166C6.94504 7.65244 6.87483 7.72868 6.78812 7.78187C6.70142 7.83506 6.60163 7.8631 6.49992 7.86287C6.36335 7.86287 6.22589 7.81518 6.0912 7.72107C5.93776 7.50075 5.90763 7.26189 6.00894 7.06306C6.05482 6.97227 6.12504 6.89602 6.21175 6.84283C6.29845 6.78964 6.39824 6.7616 6.49996 6.76184C6.56637 6.76184 6.63294 6.77335 6.69935 6.79572C6.70152 6.79662 6.70353 6.79777 6.70574 6.79867C6.71273 6.80144 6.71976 6.80369 6.7268 6.80595C6.79115 6.83099 6.85221 6.86378 6.90863 6.9036C7.06203 7.12392 7.0922 7.36282 6.99093 7.56166Z" />
                              </g>
                            </svg>
                            2500 miles
                          </li>
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_14392" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_14392)">
                                <path d="M6.42663 3.45316H10.8878C10.949 3.45316 11.0077 3.43176 11.051 3.39366C11.0943 3.35557 11.1186 3.3039 11.1186 3.25003V1.82813C11.1186 1.77426 11.0943 1.72259 11.051 1.6845C11.0077 1.6464 10.949 1.625 10.8878 1.625H7.19516C7.15154 1.62499 7.10882 1.63587 7.07193 1.65636C7.03505 1.67685 7.00551 1.70612 6.98676 1.74078L6.21823 3.16268C6.20147 3.19365 6.1939 3.22784 6.19621 3.26208C6.19852 3.29632 6.21064 3.32948 6.23145 3.35848C6.25226 3.38748 6.28107 3.41138 6.3152 3.42793C6.34933 3.44448 6.38766 3.45316 6.42663 3.45316ZM7.34102 2.03126H10.657V3.0469H6.79197L7.34102 2.03126Z" />
                                <path d="M1.49911 3.21956C1.56073 3.24028 1.64058 3.21936 1.67497 3.2027L1.87622 3.10601L2.16332 3.56955C1.79404 3.78793 1.49148 4.08293 1.28231 4.42852C1.07314 4.77412 0.963791 5.1597 0.963905 5.55127V11.5781C0.963905 12.3622 1.68859 13 2.57944 13H10.8879C11.7787 13 12.5034 12.3622 12.5034 11.5781V1.42187C12.5034 0.861847 11.9858 0.406229 11.3495 0.406229H7.42603C7.03602 0.404981 6.6534 0.499924 6.32156 0.680298C5.98972 0.860671 5.72194 1.11926 5.54855 1.42675L5.17444 2.08732L4.57947 2.3778L4.30759 1.93944L4.51115 1.84174C4.56484 1.81594 4.60469 1.77244 4.62196 1.72079C4.63923 1.66914 4.63249 1.61358 4.60324 1.5663L3.82986 0.316853C3.74165 0.175448 3.59347 0.0704953 3.41766 0.0249036C3.24185 -0.0206881 3.05269 -0.00321658 2.89147 0.0735044L0.862588 1.04649C0.53025 1.20635 0.405854 1.57645 0.586101 1.87261L1.36156 3.12186C1.37608 3.1453 1.39574 3.16598 1.41938 3.18272C1.44303 3.19945 1.4702 3.2119 1.49934 3.21936L1.49911 3.21956ZM3.11164 0.430605C3.16571 0.406431 3.22823 0.401358 3.2864 0.416425C3.34458 0.431492 3.39402 0.465558 3.42459 0.511653L4.08742 1.58255L3.58084 1.82529L3.24804 1.28984C3.21792 1.24381 3.16853 1.21 3.11043 1.19564C3.05234 1.18128 2.99016 1.18752 2.93723 1.21302C2.8843 1.23852 2.84482 1.28125 2.82725 1.33206C2.80968 1.38287 2.81541 1.43771 2.84323 1.48484L3.17557 2.01948L2.56697 2.31117L2.2351 1.77714C2.20498 1.73112 2.15559 1.69731 2.09749 1.68295C2.0394 1.66859 1.97723 1.67483 1.92429 1.70033C1.87136 1.72583 1.83188 1.76856 1.81431 1.81936C1.79674 1.87017 1.80248 1.92502 1.83029 1.97215L2.16171 2.50536L1.85845 2.6508L1.85729 2.65121L1.65604 2.74851L0.992292 1.67924C0.963266 1.63183 0.956605 1.57627 0.973751 1.52457C0.990897 1.47288 1.03047 1.4292 1.08392 1.40298L3.11164 0.430605ZM3.60391 3.33778L5.46085 2.41212C5.5017 2.39222 5.53448 2.36175 5.55548 2.32519L5.96144 1.60834C6.09866 1.36989 6.30803 1.16942 6.56646 1.02903C6.82489 0.888634 7.12234 0.81377 7.42603 0.812689H11.3495C11.7312 0.812689 12.0418 1.0861 12.0418 1.42208V11.5783C12.0418 12.1383 11.5242 12.5939 10.8879 12.5939H2.57944C1.94315 12.5939 1.42549 12.1383 1.42549 11.5783V5.55148C1.42528 5.19819 1.53251 4.8513 1.73603 4.5468C1.93955 4.2423 2.23196 3.99128 2.5829 3.81981C2.63616 3.7938 2.67559 3.75032 2.69258 3.69883C2.70957 3.64735 2.70275 3.59205 2.6736 3.54497L2.28149 2.91182L3.9021 2.13424L4.17743 2.57808L3.37359 2.98596C3.34732 2.99928 3.32429 3.01703 3.30582 3.03818C3.28735 3.05934 3.27379 3.08349 3.26593 3.10926C3.25806 3.13502 3.25604 3.1619 3.25998 3.18836C3.26392 3.21481 3.27374 3.24032 3.28889 3.26344C3.33158 3.32864 3.47629 3.38795 3.60415 3.33798L3.60391 3.33778Z" />
                                <path d="M9.50334 9.46291V6.58418L10.8205 5.42492C10.8419 5.40607 10.8589 5.38369 10.8705 5.35904C10.8822 5.3344 10.8881 5.30799 10.8881 5.28131C10.8881 5.25463 10.8822 5.22822 10.8705 5.20357C10.8589 5.17893 10.8419 5.15654 10.8205 5.1377L9.8973 4.32518C9.87589 4.3063 9.85046 4.29132 9.82246 4.2811C9.79446 4.27089 9.76445 4.26562 9.73414 4.26562C9.70382 4.26562 9.67381 4.27089 9.64581 4.2811C9.61781 4.29132 9.59238 4.3063 9.57097 4.32518L8.25385 5.48444H5.21388L3.89676 4.32518C3.87534 4.3063 3.84991 4.29132 3.82191 4.2811C3.79391 4.27089 3.7639 4.26562 3.73359 4.26562C3.70328 4.26562 3.67326 4.27089 3.64527 4.2811C3.61727 4.29132 3.59183 4.3063 3.57042 4.32518L2.64726 5.1377C2.62581 5.15654 2.60879 5.17893 2.59718 5.20357C2.58557 5.22822 2.57959 5.25463 2.57959 5.28131C2.57959 5.30799 2.58557 5.3344 2.59718 5.35904C2.60879 5.38369 2.62581 5.40607 2.64726 5.42492L3.96438 6.58418V9.46291L2.64726 10.6222C2.62581 10.641 2.60879 10.6634 2.59718 10.688C2.58557 10.7127 2.57959 10.7391 2.57959 10.7658C2.57959 10.7925 2.58557 10.8189 2.59718 10.8435C2.60879 10.8682 2.62581 10.8905 2.64726 10.9094L3.57042 11.7219C3.59183 11.7408 3.61727 11.7558 3.64527 11.766C3.67326 11.7762 3.70328 11.7815 3.73359 11.7815C3.7639 11.7815 3.79391 11.7762 3.82191 11.766C3.84991 11.7558 3.87534 11.7408 3.89676 11.7219L5.21388 10.5627H8.25385L9.57097 11.7219C9.59235 11.7408 9.61777 11.7559 9.64578 11.7661C9.67378 11.7764 9.70381 11.7816 9.73414 11.7816C9.76446 11.7816 9.79449 11.7764 9.82249 11.7661C9.8505 11.7559 9.87592 11.7408 9.8973 11.7219L10.8205 10.9094C10.8419 10.8905 10.8589 10.8682 10.8705 10.8435C10.8822 10.8189 10.8881 10.7925 10.8881 10.7658C10.8881 10.7391 10.8822 10.7127 10.8705 10.688C10.8589 10.6634 10.8419 10.641 10.8205 10.6222L9.50334 9.46291ZM9.73414 11.2911L8.51256 10.2159C8.46929 10.1778 8.4106 10.1564 8.34939 10.1564H5.11833C5.08802 10.1564 5.058 10.1616 5.03 10.1718C5.002 10.182 4.97656 10.197 4.95516 10.2159L3.73359 11.2911L3.13676 10.7658L4.35834 9.69062C4.40162 9.65254 4.42595 9.60088 4.42596 9.54701V6.50008C4.42599 6.4734 4.42003 6.44698 4.40843 6.42234C4.39682 6.39769 4.3798 6.37531 4.35834 6.35647L3.13676 5.28131L3.73359 4.75602L4.95516 5.83118C4.99843 5.86927 5.05712 5.89068 5.11833 5.89069H8.34939C8.41055 5.89069 8.4694 5.86937 8.51256 5.83118L9.73414 4.75602L10.331 5.28131L9.10939 6.35647C9.0661 6.39455 9.04178 6.44621 9.04176 6.50008V9.54701C9.04176 9.60084 9.066 9.65264 9.10939 9.69062L10.331 10.7658L9.73414 11.2911Z" />
                                <path d="M8.11844 6.5H5.34895C5.28774 6.5 5.22904 6.5214 5.18576 6.55949C5.14248 6.59759 5.11816 6.64926 5.11816 6.70313V9.3438C5.11816 9.39767 5.14248 9.44934 5.18576 9.48743C5.22904 9.52553 5.28774 9.54693 5.34895 9.54693H7.19528C7.25649 9.54693 7.31519 9.52553 7.35847 9.48743C7.40175 9.44934 7.42607 9.39767 7.42607 9.3438C7.42607 9.28993 7.40175 9.23826 7.35847 9.20017C7.31519 9.16207 7.25649 9.14067 7.19528 9.14067H5.57974V6.90626H7.88765V8.53129C7.88765 8.58516 7.91196 8.63683 7.95524 8.67492C7.99853 8.71301 8.05723 8.73441 8.11844 8.73441C8.17965 8.73441 8.23835 8.71301 8.28163 8.67492C8.32491 8.63683 8.34923 8.58516 8.34923 8.53129V6.70313C8.34923 6.64926 8.32491 6.59759 8.28163 6.55949C8.23835 6.5214 8.17965 6.5 8.11844 6.5ZM11.1187 6.5C11.0575 6.5 10.9988 6.5214 10.9555 6.55949C10.9122 6.59759 10.8879 6.64926 10.8879 6.70313V8.53129C10.8879 8.58516 10.9122 8.63683 10.9555 8.67492C10.9988 8.71301 11.0575 8.73441 11.1187 8.73441C11.1799 8.73441 11.2386 8.71301 11.2819 8.67492C11.3252 8.63683 11.3495 8.58516 11.3495 8.53129V6.70313C11.3495 6.64926 11.3252 6.59759 11.2819 6.55949C11.2386 6.5214 11.1799 6.5 11.1187 6.5Z" />
                                <path d="M11.1187 9.54713C11.2462 9.54713 11.3495 9.45618 11.3495 9.344C11.3495 9.23181 11.2462 9.14087 11.1187 9.14087C10.9913 9.14087 10.8879 9.23181 10.8879 9.344C10.8879 9.45618 10.9913 9.54713 11.1187 9.54713Z" />
                              </g>
                            </svg>
                            Petrol + Gas
                          </li>
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_14323" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_14323)">
                                <path d="M8.28713 6.95811H7.8187L8.04511 5.25406C8.05414 5.18229 8.0395 5.10942 8.00367 5.04772C7.96783 4.98603 7.91299 4.93928 7.84838 4.91536C7.71188 4.86288 7.56173 4.91605 7.49608 5.02788L5.69038 7.50535C5.65489 7.56344 5.63505 7.63066 5.63299 7.69979C5.63093 7.76892 5.64673 7.83733 5.67868 7.89767C5.74498 8.02486 5.87281 8.10369 6.01256 8.10369H6.481L6.25458 9.80774C6.24555 9.87951 6.26019 9.95238 6.29602 10.0141C6.33186 10.0758 6.3867 10.1225 6.45131 10.1464C6.48728 10.1604 6.52433 10.1668 6.56051 10.1668C6.66148 10.1668 6.7553 10.1162 6.80361 10.0339L8.60931 7.55645C8.6448 7.49836 8.66464 7.43113 8.6667 7.36201C8.66876 7.29288 8.65297 7.22446 8.62101 7.16412C8.58787 7.10133 8.53941 7.0491 8.48068 7.01286C8.42196 6.97663 8.35512 6.95772 8.28713 6.95811ZM6.75226 9.35537L6.94488 7.90684C6.94922 7.87436 6.94692 7.84127 6.93813 7.80981C6.92934 7.77836 6.91427 7.74926 6.89394 7.7245C6.8736 7.69973 6.84848 7.67987 6.82026 7.66626C6.79204 7.65264 6.76139 7.6456 6.73038 7.64559H6.13433L7.54743 5.70665L7.35481 7.15519C7.35047 7.18767 7.35277 7.22075 7.36156 7.25221C7.37035 7.28367 7.38542 7.31276 7.40575 7.33753C7.42609 7.36229 7.45121 7.38215 7.47943 7.39577C7.50765 7.40938 7.5383 7.41643 7.56931 7.41643H8.16536L6.75226 9.35537Z" />
                                <path d="M12.35 4.89575H11.9167C11.5583 4.89575 11.2667 5.2042 11.2667 5.58324V6.27072H10.8333V4.20827C10.8333 3.70274 10.4446 3.29162 9.96667 3.29162H8.88333V2.83329H10.1833C10.5417 2.83329 10.8333 2.52484 10.8333 2.14581V1.68749C10.8333 1.30845 10.5417 1 10.1833 1H5.85C5.49163 1 5.2 1.30845 5.2 1.68749V2.14581C5.2 2.52484 5.49163 2.83329 5.85 2.83329H7.15V3.29162H5.86863C5.66627 3.29162 5.46932 3.36701 5.31397 3.50405L4.37515 4.3311C4.29737 4.39972 4.19932 4.43735 4.09803 4.43743H3.03333C2.55537 4.43743 2.16667 4.84854 2.16667 5.35408V6.27072H1.73333V4.89575C1.73333 4.51672 1.4417 4.20827 1.08333 4.20827H0.65C0.291633 4.20827 0 4.51672 0 4.89575V9.47899C0 9.85802 0.291633 10.1665 0.65 10.1665H1.08333C1.4417 10.1665 1.73333 9.85802 1.73333 9.47899V8.10402H2.16667V9.47899C2.16667 9.98452 2.55537 10.3956 3.03333 10.3956H3.73945C3.89458 10.3956 4.03888 10.4841 4.11558 10.6266L4.60807 11.5378C4.68391 11.6781 4.79344 11.7947 4.92557 11.8759C5.0577 11.957 5.20775 11.9998 5.36055 12H9.22892C9.35599 12.0002 9.48154 11.9707 9.59662 11.9137C9.7117 11.8567 9.81349 11.7736 9.89473 11.6702L10.6325 10.7339C10.7622 10.569 10.8332 10.3614 10.8333 10.147V8.10425H11.2667V8.79173C11.2667 9.17077 11.5583 9.47922 11.9167 9.47922H12.35C12.7084 9.47922 13 9.17077 13 8.79173V5.58347C13 5.20443 12.7084 4.89575 12.35 4.89575ZM1.3 9.47899C1.3 9.53977 1.27717 9.59805 1.23654 9.64103C1.19591 9.68401 1.1408 9.70815 1.08333 9.70815H0.65C0.592536 9.70815 0.537426 9.68401 0.496794 9.64103C0.456161 9.59805 0.433333 9.53977 0.433333 9.47899V4.89575C0.433333 4.83497 0.456161 4.77669 0.496794 4.73371C0.537426 4.69073 0.592536 4.66659 0.65 4.66659H1.08333C1.1408 4.66659 1.19591 4.69073 1.23654 4.73371C1.27717 4.77669 1.3 4.83497 1.3 4.89575V9.47899ZM1.73333 7.64569V6.72905H2.16667V7.64569H1.73333ZM5.63333 2.14581V1.68749C5.63333 1.62671 5.65616 1.56842 5.69679 1.52544C5.73743 1.48247 5.79254 1.45832 5.85 1.45832H10.1833C10.2408 1.45832 10.2959 1.48247 10.3365 1.52544C10.3772 1.56842 10.4 1.62671 10.4 1.68749V2.14581C10.4 2.20659 10.3772 2.26488 10.3365 2.30785C10.2959 2.35083 10.2408 2.37497 10.1833 2.37497H5.85C5.79254 2.37497 5.73743 2.35083 5.69679 2.30785C5.65616 2.26488 5.63333 2.20659 5.63333 2.14581ZM7.58333 2.83329H8.45V3.29162H7.58333V2.83329ZM10.4 10.1468C10.4 10.2538 10.3643 10.3578 10.2995 10.4401L9.56193 11.3764C9.52126 11.4281 9.47034 11.4697 9.41279 11.4982C9.35524 11.5267 9.29247 11.5415 9.22892 11.5414H5.36055C5.28417 11.5414 5.20916 11.52 5.14311 11.4794C5.07706 11.4389 5.02232 11.3806 4.98442 11.3105L4.49193 10.3993C4.41609 10.259 4.30656 10.1424 4.17443 10.0612C4.0423 9.98006 3.89225 9.93724 3.73945 9.93708H3.03333C2.79435 9.93708 2.6 9.73153 2.6 9.47876V5.35385C2.6 5.10108 2.79435 4.89552 3.03333 4.89552H4.09803C4.3004 4.89552 4.49735 4.82013 4.6527 4.68309L5.59152 3.85604C5.66929 3.78742 5.76735 3.7498 5.86863 3.74971H9.96667C10.2057 3.74971 10.4 3.95527 10.4 4.20804V10.1465V10.1468ZM10.8333 7.64569V6.72905H11.2667V7.64569H10.8333ZM12.5667 8.7915C12.5667 8.85228 12.5438 8.91057 12.5032 8.95355C12.4626 8.99652 12.4075 9.02067 12.35 9.02067H11.9167C11.8592 9.02067 11.8041 8.99652 11.7635 8.95355C11.7228 8.91057 11.7 8.85228 11.7 8.7915V5.58324C11.7 5.52246 11.7228 5.46417 11.7635 5.4212C11.8041 5.37822 11.8592 5.35408 11.9167 5.35408H12.35C12.4075 5.35408 12.4626 5.37822 12.5032 5.4212C12.5438 5.46417 12.5667 5.52246 12.5667 5.58324V8.7915Z" />
                              </g>
                            </svg>
                            Electric
                          </li>
                        </ul>
                        <div className="content-btm">
                          <Link legacyBehavior href="/car-deatils">
                            <a className="view-btn2">
                            <svg width={35} height={21} viewBox="0 0 35 21" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 20C5.47715 20 1 15.7467 1 10.5C1 5.25329 5.47715 1 11 1" strokeLinecap="round" />
                              <path d="M14.2597 3C14.1569 3 14.0583 3.04166 13.9856 3.11582C13.9129 3.18997 13.8721 3.29055 13.8721 3.39542C13.8721 3.50029 13.9129 3.60086 13.9856 3.67502C14.0583 3.74917 14.1569 3.79083 14.2597 3.79083H15.8104C15.9132 3.79083 16.0118 3.74917 16.0845 3.67502C16.1572 3.60086 16.198 3.50029 16.198 3.39542C16.198 3.29055 16.1572 3.18997 16.0845 3.11582C16.0118 3.04166 15.9132 3 15.8104 3H14.2597ZM16.7795 3C16.6767 3 16.5781 3.04166 16.5054 3.11582C16.4327 3.18997 16.3919 3.29055 16.3919 3.39542C16.3919 3.50029 16.4327 3.60086 16.5054 3.67502C16.5781 3.74917 16.6767 3.79083 16.7795 3.79083H21.3346C21.4374 3.79083 21.536 3.74917 21.6087 3.67502C21.6814 3.60086 21.7222 3.50029 21.7222 3.39542C21.7222 3.29055 21.6814 3.18997 21.6087 3.11582C21.536 3.04166 21.4374 3 21.3346 3H16.7795Z" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M15.2292 5.76953C15.1264 5.76953 15.0278 5.81119 14.9551 5.88535C14.8824 5.9595 14.8415 6.06008 14.8415 6.16495C14.8415 6.26982 14.8824 6.3704 14.9551 6.44455C15.0278 6.51871 15.1264 6.56037 15.2292 6.56037H24.1454C25.653 6.56037 26.5822 6.79999 27.3256 7.18493C27.9575 7.51194 28.4672 7.9467 29.1055 8.49119C29.2375 8.60368 29.3749 8.72073 29.5201 8.84271L29.6101 8.91824L29.726 8.93069C33.2653 9.31069 34.0622 10.5309 34.2246 11.1557V12.6893C34.2246 12.7942 34.1838 12.8948 34.1111 12.9689C34.0384 13.0431 33.9398 13.0847 33.8369 13.0847H32.8356C32.6511 11.9627 31.6943 11.1077 30.5418 11.1077C29.3893 11.1077 28.4325 11.9627 28.248 13.0847H21.2058C21.0212 11.9627 20.0645 11.1077 18.912 11.1077C17.7594 11.1077 16.8027 11.9627 16.6182 13.0847H14.7446C14.6418 13.0847 14.5432 13.1264 14.4705 13.2006C14.3978 13.2747 14.3569 13.3753 14.3569 13.4802C14.3569 13.585 14.3978 13.6856 14.4705 13.7598C14.5432 13.8339 14.6418 13.8756 14.7446 13.8756H16.6182C16.8027 14.9976 17.7594 15.8527 18.912 15.8527C20.0645 15.8527 21.0212 14.9976 21.2058 13.8756H28.248C28.4325 14.9976 29.3893 15.8527 30.5418 15.8527C31.6943 15.8527 32.6511 14.9976 32.8356 13.8756H33.8369C34.1454 13.8756 34.4412 13.7506 34.6593 13.5281C34.8774 13.3057 34.9999 13.0039 34.9999 12.6893V11.0626L34.99 11.0187C34.7431 9.92754 33.5791 8.57502 29.9239 8.15706C29.8217 8.07086 29.7215 7.98505 29.6227 7.90063C28.9828 7.35397 28.3942 6.851 27.6766 6.4795C26.7966 6.02418 25.7391 5.76953 24.1454 5.76953H15.2292ZM28.9912 13.4802C28.9912 13.0607 29.1545 12.6584 29.4453 12.3618C29.7361 12.0651 30.1306 11.8985 30.5418 11.8985C30.9531 11.8985 31.3475 12.0651 31.6383 12.3618C31.9291 12.6584 32.0925 13.0607 32.0925 13.4802C32.0925 13.8996 31.9291 14.302 31.6383 14.5986C31.3475 14.8952 30.9531 15.0618 30.5418 15.0618C30.1306 15.0618 29.7361 14.8952 29.4453 14.5986C29.1545 14.302 28.9912 13.8996 28.9912 13.4802ZM18.912 11.8985C18.5007 11.8985 18.1063 12.0651 17.8155 12.3618C17.5247 12.6584 17.3613 13.0607 17.3613 13.4802C17.3613 13.8996 17.5247 14.302 17.8155 14.5986C18.1063 14.8952 18.5007 15.0618 18.912 15.0618C19.3232 15.0618 19.7176 14.8952 20.0084 14.5986C20.2992 14.302 20.4626 13.8996 20.4626 13.4802C20.4626 13.0607 20.2992 12.6584 20.0084 12.3618C19.7176 12.0651 19.3232 11.8985 18.912 11.8985Z" />
                              <path d="M11 8.14151C11 8.03664 11.0408 7.93606 11.1135 7.86191C11.1862 7.78775 11.2848 7.74609 11.3877 7.74609H15.7489C15.8517 7.74609 15.9503 7.78775 16.023 7.86191C16.0957 7.93606 16.1365 8.03664 16.1365 8.14151C16.1365 8.24638 16.0957 8.34696 16.023 8.42111C15.9503 8.49527 15.8517 8.53693 15.7489 8.53693H11.3877C11.2848 8.53693 11.1862 8.49527 11.1135 8.42111C11.0408 8.34696 11 8.24638 11 8.14151ZM26.6836 8.65278C26.7563 8.72694 26.7971 8.82749 26.7971 8.93234C26.7971 9.03719 26.7563 9.13775 26.6836 9.2119L26.6532 9.24294C26.2897 9.61367 25.7968 9.82197 25.2828 9.82203H19.1409C19.0381 9.82203 18.9395 9.78037 18.8668 9.70622C18.7941 9.63206 18.7532 9.53149 18.7532 9.42662C18.7532 9.32174 18.7941 9.22117 18.8668 9.14701C18.9395 9.07286 19.0381 9.0312 19.1409 9.0312H25.2826C25.4354 9.03122 25.5866 9.00055 25.7277 8.94095C25.8688 8.88134 25.997 8.79397 26.105 8.68382L26.1355 8.65278C26.2082 8.57866 26.3068 8.53701 26.4096 8.53701C26.5123 8.53701 26.6109 8.57866 26.6836 8.65278ZM19.5286 17.7304C19.5286 17.6255 19.5694 17.5249 19.6421 17.4508C19.7148 17.3766 19.8134 17.335 19.9162 17.335H21.5638C21.6666 17.335 21.7652 17.3766 21.8379 17.4508C21.9106 17.5249 21.9514 17.6255 21.9514 17.7304C21.9514 17.8352 21.9106 17.9358 21.8379 18.01C21.7652 18.0841 21.6666 18.1258 21.5638 18.1258H19.9162C19.8134 18.1258 19.7148 18.0841 19.6421 18.01C19.5694 17.9358 19.5286 17.8352 19.5286 17.7304ZM22.2422 17.7304C22.2422 17.6255 22.283 17.5249 22.3557 17.4508C22.4284 17.3766 22.527 17.335 22.6299 17.335H26.991C27.0939 17.335 27.1925 17.3766 27.2652 17.4508C27.3379 17.5249 27.3787 17.6255 27.3787 17.7304C27.3787 17.8352 27.3379 17.9358 27.2652 18.01C27.1925 18.0841 27.0939 18.1258 26.991 18.1258H22.6299C22.527 18.1258 22.4284 18.0841 22.3557 18.01C22.283 17.9358 22.2422 17.8352 22.2422 17.7304Z" />
                            </svg>
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="product-card">
                      <div className="product-img">
                        <div className="number-of-img">
                          <img src="assets/img/home1/icon/gallery-icon-1.svg" alt="" />
                          10
                        </div>
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                        <div className="slider-btn-group">
                          <div className="product-stand-next swiper-arrow">
                            <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                            </svg>
                          </div>
                          <div className="product-stand-prev swiper-arrow">
                            <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-12.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-12.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-12.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h5><Link legacyBehavior href="/car-deatils"><a>Chevrolet Silverado-2023</a></Link></h5>
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <ul className="features">
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_14494" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_14494)">
                                <path d="M13 7.3125C13 5.53674 12.284 3.9253 11.1258 2.75099C11.1167 2.73873 11.1068 2.72712 11.0962 2.71625C11.0853 2.70558 11.0737 2.69569 11.0615 2.68667C9.88716 1.52848 8.27571 0.8125 6.5 0.8125C4.72429 0.8125 3.11284 1.52852 1.93849 2.68667C1.92625 2.69572 1.91466 2.7056 1.9038 2.71625C1.89311 2.72711 1.88321 2.73872 1.87417 2.75099C0.716023 3.9253 0 5.53674 0 7.3125C0 9.04849 0.675957 10.6805 1.90333 11.9081L1.90384 11.9087L1.90418 11.909L1.90469 11.9095C1.93434 11.9392 1.96957 11.9628 2.00835 11.9788C2.04713 11.9949 2.0887 12.0031 2.13068 12.0031C2.21251 12.0031 2.29435 11.9719 2.35675 11.9094C2.36208 11.9041 2.36689 11.8984 2.37175 11.8928L3.35686 10.9077C3.41637 10.8476 3.44969 10.7665 3.44951 10.6819C3.44933 10.5974 3.41566 10.5163 3.35589 10.4566C3.29611 10.3968 3.21509 10.3631 3.13055 10.3629C3.04601 10.3627 2.96484 10.396 2.9048 10.4556L2.13605 11.2243C1.23965 10.2268 0.719603 8.97139 0.648082 7.63217H1.73527C1.91181 7.63217 2.05494 7.48909 2.05494 7.3125C2.05494 7.13591 1.91181 6.99283 1.73527 6.99283H0.648167C0.722502 5.6173 1.27336 4.36649 2.13814 3.40274L2.9048 4.1694C2.93445 4.19912 2.96968 4.22269 3.00847 4.23875C3.04726 4.25481 3.08884 4.26305 3.13083 4.263C3.19405 4.26299 3.25585 4.24424 3.30841 4.20912C3.36098 4.17399 3.40195 4.12407 3.42614 4.06566C3.45033 4.00725 3.45666 3.94298 3.44433 3.88097C3.432 3.81896 3.40156 3.762 3.35686 3.7173L2.59024 2.9506C3.55403 2.08582 4.8048 1.53496 6.18033 1.46067V2.54781C6.18033 2.72439 6.32346 2.86748 6.5 2.86748C6.67654 2.86748 6.81967 2.72439 6.81967 2.54781V1.46067C8.1952 1.53496 9.44597 2.08586 10.4098 2.95064L9.6431 3.7173C9.58358 3.77733 9.55027 3.8585 9.55045 3.94304C9.55063 4.02758 9.58429 4.10861 9.64407 4.16839C9.70384 4.22817 9.78487 4.26184 9.86941 4.26203C9.95395 4.26222 10.0351 4.22891 10.0952 4.1694L10.8618 3.40274C11.7266 4.36653 12.2775 5.6173 12.3518 6.99283H11.2646C11.0881 6.99283 10.945 7.13591 10.945 7.3125C10.945 7.48909 11.0881 7.63217 11.2646 7.63217H12.3518C12.2803 8.97139 11.7603 10.2268 10.8639 11.2243L10.0952 10.4556C10.0349 10.3973 9.95409 10.365 9.87024 10.3657C9.78638 10.3664 9.70616 10.4001 9.64687 10.4594C9.58758 10.5187 9.55396 10.5989 9.55325 10.6827C9.55254 10.7666 9.58481 10.8474 9.6431 10.9077L10.6441 11.9087C10.6738 11.9384 10.709 11.962 10.7478 11.978C10.7866 11.9941 10.8281 12.0023 10.8701 12.0023C10.9121 12.0023 10.9537 11.9941 10.9925 11.978C11.0313 11.9619 11.0665 11.9384 11.0962 11.9087C12.3239 10.6809 13 9.04866 13 7.3125Z" />
                                <path d="M7.96853 3.64648C7.92956 3.63086 7.8879 3.62307 7.84592 3.62356C7.80394 3.62404 7.76247 3.63279 7.72387 3.64931C7.68528 3.66583 7.65031 3.68979 7.62098 3.71982C7.59165 3.74986 7.56852 3.78537 7.55292 3.82435L6.62915 6.13025C6.58625 6.12537 6.54313 6.12278 6.49996 6.12249C6.05003 6.12249 5.64362 6.37171 5.43924 6.77288C5.22562 7.19225 5.28035 7.69332 5.58553 8.11316C5.61729 8.15668 5.65563 8.19499 5.69916 8.22675C5.9471 8.407 6.22402 8.50226 6.49996 8.50226C6.94989 8.50226 7.35634 8.25305 7.56067 7.85188C7.7743 7.43251 7.71957 6.93148 7.4146 6.51194C7.3828 6.46827 7.34439 6.42982 7.30076 6.39797C7.27754 6.38137 7.25388 6.36541 7.22979 6.3501L8.1464 4.06206C8.17791 3.98336 8.17688 3.89537 8.14352 3.81744C8.11016 3.73951 8.04722 3.67801 7.96853 3.64648ZM6.99093 7.56166C6.94504 7.65244 6.87483 7.72868 6.78812 7.78187C6.70142 7.83506 6.60163 7.8631 6.49992 7.86287C6.36335 7.86287 6.22589 7.81518 6.0912 7.72107C5.93776 7.50075 5.90763 7.26189 6.00894 7.06306C6.05482 6.97227 6.12504 6.89602 6.21175 6.84283C6.29845 6.78964 6.39824 6.7616 6.49996 6.76184C6.56637 6.76184 6.63294 6.77335 6.69935 6.79572C6.70152 6.79662 6.70353 6.79777 6.70574 6.79867C6.71273 6.80144 6.71976 6.80369 6.7268 6.80595C6.79115 6.83099 6.85221 6.86378 6.90863 6.9036C7.06203 7.12392 7.0922 7.36282 6.99093 7.56166Z" />
                              </g>
                            </svg>
                            2500 miles
                          </li>
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_14395" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_14395)">
                                <path d="M6.42663 3.45316H10.8878C10.949 3.45316 11.0077 3.43176 11.051 3.39366C11.0943 3.35557 11.1186 3.3039 11.1186 3.25003V1.82813C11.1186 1.77426 11.0943 1.72259 11.051 1.6845C11.0077 1.6464 10.949 1.625 10.8878 1.625H7.19516C7.15154 1.62499 7.10882 1.63587 7.07193 1.65636C7.03505 1.67685 7.00551 1.70612 6.98676 1.74078L6.21823 3.16268C6.20147 3.19365 6.1939 3.22784 6.19621 3.26208C6.19852 3.29632 6.21064 3.32948 6.23145 3.35848C6.25226 3.38748 6.28107 3.41138 6.3152 3.42793C6.34933 3.44448 6.38766 3.45316 6.42663 3.45316ZM7.34102 2.03126H10.657V3.0469H6.79197L7.34102 2.03126Z" />
                                <path d="M1.49911 3.21956C1.56073 3.24028 1.64058 3.21936 1.67497 3.2027L1.87622 3.10601L2.16332 3.56955C1.79404 3.78793 1.49148 4.08293 1.28231 4.42852C1.07314 4.77412 0.963791 5.1597 0.963905 5.55127V11.5781C0.963905 12.3622 1.68859 13 2.57944 13H10.8879C11.7787 13 12.5034 12.3622 12.5034 11.5781V1.42187C12.5034 0.861847 11.9858 0.406229 11.3495 0.406229H7.42603C7.03602 0.404981 6.6534 0.499924 6.32156 0.680298C5.98972 0.860671 5.72194 1.11926 5.54855 1.42675L5.17444 2.08732L4.57947 2.3778L4.30759 1.93944L4.51115 1.84174C4.56484 1.81594 4.60469 1.77244 4.62196 1.72079C4.63923 1.66914 4.63249 1.61358 4.60324 1.5663L3.82986 0.316853C3.74165 0.175448 3.59347 0.0704953 3.41766 0.0249036C3.24185 -0.0206881 3.05269 -0.00321658 2.89147 0.0735044L0.862588 1.04649C0.53025 1.20635 0.405854 1.57645 0.586101 1.87261L1.36156 3.12186C1.37608 3.1453 1.39574 3.16598 1.41938 3.18272C1.44303 3.19945 1.4702 3.2119 1.49934 3.21936L1.49911 3.21956ZM3.11164 0.430605C3.16571 0.406431 3.22823 0.401358 3.2864 0.416425C3.34458 0.431492 3.39402 0.465558 3.42459 0.511653L4.08742 1.58255L3.58084 1.82529L3.24804 1.28984C3.21792 1.24381 3.16853 1.21 3.11043 1.19564C3.05234 1.18128 2.99016 1.18752 2.93723 1.21302C2.8843 1.23852 2.84482 1.28125 2.82725 1.33206C2.80968 1.38287 2.81541 1.43771 2.84323 1.48484L3.17557 2.01948L2.56697 2.31117L2.2351 1.77714C2.20498 1.73112 2.15559 1.69731 2.09749 1.68295C2.0394 1.66859 1.97723 1.67483 1.92429 1.70033C1.87136 1.72583 1.83188 1.76856 1.81431 1.81936C1.79674 1.87017 1.80248 1.92502 1.83029 1.97215L2.16171 2.50536L1.85845 2.6508L1.85729 2.65121L1.65604 2.74851L0.992292 1.67924C0.963266 1.63183 0.956605 1.57627 0.973751 1.52457C0.990897 1.47288 1.03047 1.4292 1.08392 1.40298L3.11164 0.430605ZM3.60391 3.33778L5.46085 2.41212C5.5017 2.39222 5.53448 2.36175 5.55548 2.32519L5.96144 1.60834C6.09866 1.36989 6.30803 1.16942 6.56646 1.02903C6.82489 0.888634 7.12234 0.81377 7.42603 0.812689H11.3495C11.7312 0.812689 12.0418 1.0861 12.0418 1.42208V11.5783C12.0418 12.1383 11.5242 12.5939 10.8879 12.5939H2.57944C1.94315 12.5939 1.42549 12.1383 1.42549 11.5783V5.55148C1.42528 5.19819 1.53251 4.8513 1.73603 4.5468C1.93955 4.2423 2.23196 3.99128 2.5829 3.81981C2.63616 3.7938 2.67559 3.75032 2.69258 3.69883C2.70957 3.64735 2.70275 3.59205 2.6736 3.54497L2.28149 2.91182L3.9021 2.13424L4.17743 2.57808L3.37359 2.98596C3.34732 2.99928 3.32429 3.01703 3.30582 3.03818C3.28735 3.05934 3.27379 3.08349 3.26593 3.10926C3.25806 3.13502 3.25604 3.1619 3.25998 3.18836C3.26392 3.21481 3.27374 3.24032 3.28889 3.26344C3.33158 3.32864 3.47629 3.38795 3.60415 3.33798L3.60391 3.33778Z" />
                                <path d="M9.50334 9.46291V6.58418L10.8205 5.42492C10.8419 5.40607 10.8589 5.38369 10.8705 5.35904C10.8822 5.3344 10.8881 5.30799 10.8881 5.28131C10.8881 5.25463 10.8822 5.22822 10.8705 5.20357C10.8589 5.17893 10.8419 5.15654 10.8205 5.1377L9.8973 4.32518C9.87589 4.3063 9.85046 4.29132 9.82246 4.2811C9.79446 4.27089 9.76445 4.26562 9.73414 4.26562C9.70382 4.26562 9.67381 4.27089 9.64581 4.2811C9.61781 4.29132 9.59238 4.3063 9.57097 4.32518L8.25385 5.48444H5.21388L3.89676 4.32518C3.87534 4.3063 3.84991 4.29132 3.82191 4.2811C3.79391 4.27089 3.7639 4.26562 3.73359 4.26562C3.70328 4.26562 3.67326 4.27089 3.64527 4.2811C3.61727 4.29132 3.59183 4.3063 3.57042 4.32518L2.64726 5.1377C2.62581 5.15654 2.60879 5.17893 2.59718 5.20357C2.58557 5.22822 2.57959 5.25463 2.57959 5.28131C2.57959 5.30799 2.58557 5.3344 2.59718 5.35904C2.60879 5.38369 2.62581 5.40607 2.64726 5.42492L3.96438 6.58418V9.46291L2.64726 10.6222C2.62581 10.641 2.60879 10.6634 2.59718 10.688C2.58557 10.7127 2.57959 10.7391 2.57959 10.7658C2.57959 10.7925 2.58557 10.8189 2.59718 10.8435C2.60879 10.8682 2.62581 10.8905 2.64726 10.9094L3.57042 11.7219C3.59183 11.7408 3.61727 11.7558 3.64527 11.766C3.67326 11.7762 3.70328 11.7815 3.73359 11.7815C3.7639 11.7815 3.79391 11.7762 3.82191 11.766C3.84991 11.7558 3.87534 11.7408 3.89676 11.7219L5.21388 10.5627H8.25385L9.57097 11.7219C9.59235 11.7408 9.61777 11.7559 9.64578 11.7661C9.67378 11.7764 9.70381 11.7816 9.73414 11.7816C9.76446 11.7816 9.79449 11.7764 9.82249 11.7661C9.8505 11.7559 9.87592 11.7408 9.8973 11.7219L10.8205 10.9094C10.8419 10.8905 10.8589 10.8682 10.8705 10.8435C10.8822 10.8189 10.8881 10.7925 10.8881 10.7658C10.8881 10.7391 10.8822 10.7127 10.8705 10.688C10.8589 10.6634 10.8419 10.641 10.8205 10.6222L9.50334 9.46291ZM9.73414 11.2911L8.51256 10.2159C8.46929 10.1778 8.4106 10.1564 8.34939 10.1564H5.11833C5.08802 10.1564 5.058 10.1616 5.03 10.1718C5.002 10.182 4.97656 10.197 4.95516 10.2159L3.73359 11.2911L3.13676 10.7658L4.35834 9.69062C4.40162 9.65254 4.42595 9.60088 4.42596 9.54701V6.50008C4.42599 6.4734 4.42003 6.44698 4.40843 6.42234C4.39682 6.39769 4.3798 6.37531 4.35834 6.35647L3.13676 5.28131L3.73359 4.75602L4.95516 5.83118C4.99843 5.86927 5.05712 5.89068 5.11833 5.89069H8.34939C8.41055 5.89069 8.4694 5.86937 8.51256 5.83118L9.73414 4.75602L10.331 5.28131L9.10939 6.35647C9.0661 6.39455 9.04178 6.44621 9.04176 6.50008V9.54701C9.04176 9.60084 9.066 9.65264 9.10939 9.69062L10.331 10.7658L9.73414 11.2911Z" />
                                <path d="M8.11844 6.5H5.34895C5.28774 6.5 5.22904 6.5214 5.18576 6.55949C5.14248 6.59759 5.11816 6.64926 5.11816 6.70313V9.3438C5.11816 9.39767 5.14248 9.44934 5.18576 9.48743C5.22904 9.52553 5.28774 9.54693 5.34895 9.54693H7.19528C7.25649 9.54693 7.31519 9.52553 7.35847 9.48743C7.40175 9.44934 7.42607 9.39767 7.42607 9.3438C7.42607 9.28993 7.40175 9.23826 7.35847 9.20017C7.31519 9.16207 7.25649 9.14067 7.19528 9.14067H5.57974V6.90626H7.88765V8.53129C7.88765 8.58516 7.91196 8.63683 7.95524 8.67492C7.99853 8.71301 8.05723 8.73441 8.11844 8.73441C8.17965 8.73441 8.23835 8.71301 8.28163 8.67492C8.32491 8.63683 8.34923 8.58516 8.34923 8.53129V6.70313C8.34923 6.64926 8.32491 6.59759 8.28163 6.55949C8.23835 6.5214 8.17965 6.5 8.11844 6.5ZM11.1187 6.5C11.0575 6.5 10.9988 6.5214 10.9555 6.55949C10.9122 6.59759 10.8879 6.64926 10.8879 6.70313V8.53129C10.8879 8.58516 10.9122 8.63683 10.9555 8.67492C10.9988 8.71301 11.0575 8.73441 11.1187 8.73441C11.1799 8.73441 11.2386 8.71301 11.2819 8.67492C11.3252 8.63683 11.3495 8.58516 11.3495 8.53129V6.70313C11.3495 6.64926 11.3252 6.59759 11.2819 6.55949C11.2386 6.5214 11.1799 6.5 11.1187 6.5Z" />
                                <path d="M11.1187 9.54713C11.2462 9.54713 11.3495 9.45618 11.3495 9.344C11.3495 9.23181 11.2462 9.14087 11.1187 9.14087C10.9913 9.14087 10.8879 9.23181 10.8879 9.344C10.8879 9.45618 10.9913 9.54713 11.1187 9.54713Z" />
                              </g>
                            </svg>
                            Petrol + Gas
                          </li>
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_14326" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_14326)">
                                <path d="M8.28713 6.95811H7.8187L8.04511 5.25406C8.05414 5.18229 8.0395 5.10942 8.00367 5.04772C7.96783 4.98603 7.91299 4.93928 7.84838 4.91536C7.71188 4.86288 7.56173 4.91605 7.49608 5.02788L5.69038 7.50535C5.65489 7.56344 5.63505 7.63066 5.63299 7.69979C5.63093 7.76892 5.64673 7.83733 5.67868 7.89767C5.74498 8.02486 5.87281 8.10369 6.01256 8.10369H6.481L6.25458 9.80774C6.24555 9.87951 6.26019 9.95238 6.29602 10.0141C6.33186 10.0758 6.3867 10.1225 6.45131 10.1464C6.48728 10.1604 6.52433 10.1668 6.56051 10.1668C6.66148 10.1668 6.7553 10.1162 6.80361 10.0339L8.60931 7.55645C8.6448 7.49836 8.66464 7.43113 8.6667 7.36201C8.66876 7.29288 8.65297 7.22446 8.62101 7.16412C8.58787 7.10133 8.53941 7.0491 8.48068 7.01286C8.42196 6.97663 8.35512 6.95772 8.28713 6.95811ZM6.75226 9.35537L6.94488 7.90684C6.94922 7.87436 6.94692 7.84127 6.93813 7.80981C6.92934 7.77836 6.91427 7.74926 6.89394 7.7245C6.8736 7.69973 6.84848 7.67987 6.82026 7.66626C6.79204 7.65264 6.76139 7.6456 6.73038 7.64559H6.13433L7.54743 5.70665L7.35481 7.15519C7.35047 7.18767 7.35277 7.22075 7.36156 7.25221C7.37035 7.28367 7.38542 7.31276 7.40575 7.33753C7.42609 7.36229 7.45121 7.38215 7.47943 7.39577C7.50765 7.40938 7.5383 7.41643 7.56931 7.41643H8.16536L6.75226 9.35537Z" />
                                <path d="M12.35 4.89575H11.9167C11.5583 4.89575 11.2667 5.2042 11.2667 5.58324V6.27072H10.8333V4.20827C10.8333 3.70274 10.4446 3.29162 9.96667 3.29162H8.88333V2.83329H10.1833C10.5417 2.83329 10.8333 2.52484 10.8333 2.14581V1.68749C10.8333 1.30845 10.5417 1 10.1833 1H5.85C5.49163 1 5.2 1.30845 5.2 1.68749V2.14581C5.2 2.52484 5.49163 2.83329 5.85 2.83329H7.15V3.29162H5.86863C5.66627 3.29162 5.46932 3.36701 5.31397 3.50405L4.37515 4.3311C4.29737 4.39972 4.19932 4.43735 4.09803 4.43743H3.03333C2.55537 4.43743 2.16667 4.84854 2.16667 5.35408V6.27072H1.73333V4.89575C1.73333 4.51672 1.4417 4.20827 1.08333 4.20827H0.65C0.291633 4.20827 0 4.51672 0 4.89575V9.47899C0 9.85802 0.291633 10.1665 0.65 10.1665H1.08333C1.4417 10.1665 1.73333 9.85802 1.73333 9.47899V8.10402H2.16667V9.47899C2.16667 9.98452 2.55537 10.3956 3.03333 10.3956H3.73945C3.89458 10.3956 4.03888 10.4841 4.11558 10.6266L4.60807 11.5378C4.68391 11.6781 4.79344 11.7947 4.92557 11.8759C5.0577 11.957 5.20775 11.9998 5.36055 12H9.22892C9.35599 12.0002 9.48154 11.9707 9.59662 11.9137C9.7117 11.8567 9.81349 11.7736 9.89473 11.6702L10.6325 10.7339C10.7622 10.569 10.8332 10.3614 10.8333 10.147V8.10425H11.2667V8.79173C11.2667 9.17077 11.5583 9.47922 11.9167 9.47922H12.35C12.7084 9.47922 13 9.17077 13 8.79173V5.58347C13 5.20443 12.7084 4.89575 12.35 4.89575ZM1.3 9.47899C1.3 9.53977 1.27717 9.59805 1.23654 9.64103C1.19591 9.68401 1.1408 9.70815 1.08333 9.70815H0.65C0.592536 9.70815 0.537426 9.68401 0.496794 9.64103C0.456161 9.59805 0.433333 9.53977 0.433333 9.47899V4.89575C0.433333 4.83497 0.456161 4.77669 0.496794 4.73371C0.537426 4.69073 0.592536 4.66659 0.65 4.66659H1.08333C1.1408 4.66659 1.19591 4.69073 1.23654 4.73371C1.27717 4.77669 1.3 4.83497 1.3 4.89575V9.47899ZM1.73333 7.64569V6.72905H2.16667V7.64569H1.73333ZM5.63333 2.14581V1.68749C5.63333 1.62671 5.65616 1.56842 5.69679 1.52544C5.73743 1.48247 5.79254 1.45832 5.85 1.45832H10.1833C10.2408 1.45832 10.2959 1.48247 10.3365 1.52544C10.3772 1.56842 10.4 1.62671 10.4 1.68749V2.14581C10.4 2.20659 10.3772 2.26488 10.3365 2.30785C10.2959 2.35083 10.2408 2.37497 10.1833 2.37497H5.85C5.79254 2.37497 5.73743 2.35083 5.69679 2.30785C5.65616 2.26488 5.63333 2.20659 5.63333 2.14581ZM7.58333 2.83329H8.45V3.29162H7.58333V2.83329ZM10.4 10.1468C10.4 10.2538 10.3643 10.3578 10.2995 10.4401L9.56193 11.3764C9.52126 11.4281 9.47034 11.4697 9.41279 11.4982C9.35524 11.5267 9.29247 11.5415 9.22892 11.5414H5.36055C5.28417 11.5414 5.20916 11.52 5.14311 11.4794C5.07706 11.4389 5.02232 11.3806 4.98442 11.3105L4.49193 10.3993C4.41609 10.259 4.30656 10.1424 4.17443 10.0612C4.0423 9.98006 3.89225 9.93724 3.73945 9.93708H3.03333C2.79435 9.93708 2.6 9.73153 2.6 9.47876V5.35385C2.6 5.10108 2.79435 4.89552 3.03333 4.89552H4.09803C4.3004 4.89552 4.49735 4.82013 4.6527 4.68309L5.59152 3.85604C5.66929 3.78742 5.76735 3.7498 5.86863 3.74971H9.96667C10.2057 3.74971 10.4 3.95527 10.4 4.20804V10.1465V10.1468ZM10.8333 7.64569V6.72905H11.2667V7.64569H10.8333ZM12.5667 8.7915C12.5667 8.85228 12.5438 8.91057 12.5032 8.95355C12.4626 8.99652 12.4075 9.02067 12.35 9.02067H11.9167C11.8592 9.02067 11.8041 8.99652 11.7635 8.95355C11.7228 8.91057 11.7 8.85228 11.7 8.7915V5.58324C11.7 5.52246 11.7228 5.46417 11.7635 5.4212C11.8041 5.37822 11.8592 5.35408 11.9167 5.35408H12.35C12.4075 5.35408 12.4626 5.37822 12.5032 5.4212C12.5438 5.46417 12.5667 5.52246 12.5667 5.58324V8.7915Z" />
                              </g>
                            </svg>
                            Electric
                          </li>
                        </ul>
                        <div className="content-btm">
                         <Link legacyBehavior href="/car-deatils">
                            <a className="view-btn2">
                            <svg width={35} height={21} viewBox="0 0 35 21" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 20C5.47715 20 1 15.7467 1 10.5C1 5.25329 5.47715 1 11 1" strokeLinecap="round" />
                              <path d="M14.2597 3C14.1569 3 14.0583 3.04166 13.9856 3.11582C13.9129 3.18997 13.8721 3.29055 13.8721 3.39542C13.8721 3.50029 13.9129 3.60086 13.9856 3.67502C14.0583 3.74917 14.1569 3.79083 14.2597 3.79083H15.8104C15.9132 3.79083 16.0118 3.74917 16.0845 3.67502C16.1572 3.60086 16.198 3.50029 16.198 3.39542C16.198 3.29055 16.1572 3.18997 16.0845 3.11582C16.0118 3.04166 15.9132 3 15.8104 3H14.2597ZM16.7795 3C16.6767 3 16.5781 3.04166 16.5054 3.11582C16.4327 3.18997 16.3919 3.29055 16.3919 3.39542C16.3919 3.50029 16.4327 3.60086 16.5054 3.67502C16.5781 3.74917 16.6767 3.79083 16.7795 3.79083H21.3346C21.4374 3.79083 21.536 3.74917 21.6087 3.67502C21.6814 3.60086 21.7222 3.50029 21.7222 3.39542C21.7222 3.29055 21.6814 3.18997 21.6087 3.11582C21.536 3.04166 21.4374 3 21.3346 3H16.7795Z" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M15.2292 5.76953C15.1264 5.76953 15.0278 5.81119 14.9551 5.88535C14.8824 5.9595 14.8415 6.06008 14.8415 6.16495C14.8415 6.26982 14.8824 6.3704 14.9551 6.44455C15.0278 6.51871 15.1264 6.56037 15.2292 6.56037H24.1454C25.653 6.56037 26.5822 6.79999 27.3256 7.18493C27.9575 7.51194 28.4672 7.9467 29.1055 8.49119C29.2375 8.60368 29.3749 8.72073 29.5201 8.84271L29.6101 8.91824L29.726 8.93069C33.2653 9.31069 34.0622 10.5309 34.2246 11.1557V12.6893C34.2246 12.7942 34.1838 12.8948 34.1111 12.9689C34.0384 13.0431 33.9398 13.0847 33.8369 13.0847H32.8356C32.6511 11.9627 31.6943 11.1077 30.5418 11.1077C29.3893 11.1077 28.4325 11.9627 28.248 13.0847H21.2058C21.0212 11.9627 20.0645 11.1077 18.912 11.1077C17.7594 11.1077 16.8027 11.9627 16.6182 13.0847H14.7446C14.6418 13.0847 14.5432 13.1264 14.4705 13.2006C14.3978 13.2747 14.3569 13.3753 14.3569 13.4802C14.3569 13.585 14.3978 13.6856 14.4705 13.7598C14.5432 13.8339 14.6418 13.8756 14.7446 13.8756H16.6182C16.8027 14.9976 17.7594 15.8527 18.912 15.8527C20.0645 15.8527 21.0212 14.9976 21.2058 13.8756H28.248C28.4325 14.9976 29.3893 15.8527 30.5418 15.8527C31.6943 15.8527 32.6511 14.9976 32.8356 13.8756H33.8369C34.1454 13.8756 34.4412 13.7506 34.6593 13.5281C34.8774 13.3057 34.9999 13.0039 34.9999 12.6893V11.0626L34.99 11.0187C34.7431 9.92754 33.5791 8.57502 29.9239 8.15706C29.8217 8.07086 29.7215 7.98505 29.6227 7.90063C28.9828 7.35397 28.3942 6.851 27.6766 6.4795C26.7966 6.02418 25.7391 5.76953 24.1454 5.76953H15.2292ZM28.9912 13.4802C28.9912 13.0607 29.1545 12.6584 29.4453 12.3618C29.7361 12.0651 30.1306 11.8985 30.5418 11.8985C30.9531 11.8985 31.3475 12.0651 31.6383 12.3618C31.9291 12.6584 32.0925 13.0607 32.0925 13.4802C32.0925 13.8996 31.9291 14.302 31.6383 14.5986C31.3475 14.8952 30.9531 15.0618 30.5418 15.0618C30.1306 15.0618 29.7361 14.8952 29.4453 14.5986C29.1545 14.302 28.9912 13.8996 28.9912 13.4802ZM18.912 11.8985C18.5007 11.8985 18.1063 12.0651 17.8155 12.3618C17.5247 12.6584 17.3613 13.0607 17.3613 13.4802C17.3613 13.8996 17.5247 14.302 17.8155 14.5986C18.1063 14.8952 18.5007 15.0618 18.912 15.0618C19.3232 15.0618 19.7176 14.8952 20.0084 14.5986C20.2992 14.302 20.4626 13.8996 20.4626 13.4802C20.4626 13.0607 20.2992 12.6584 20.0084 12.3618C19.7176 12.0651 19.3232 11.8985 18.912 11.8985Z" />
                              <path d="M11 8.14151C11 8.03664 11.0408 7.93606 11.1135 7.86191C11.1862 7.78775 11.2848 7.74609 11.3877 7.74609H15.7489C15.8517 7.74609 15.9503 7.78775 16.023 7.86191C16.0957 7.93606 16.1365 8.03664 16.1365 8.14151C16.1365 8.24638 16.0957 8.34696 16.023 8.42111C15.9503 8.49527 15.8517 8.53693 15.7489 8.53693H11.3877C11.2848 8.53693 11.1862 8.49527 11.1135 8.42111C11.0408 8.34696 11 8.24638 11 8.14151ZM26.6836 8.65278C26.7563 8.72694 26.7971 8.82749 26.7971 8.93234C26.7971 9.03719 26.7563 9.13775 26.6836 9.2119L26.6532 9.24294C26.2897 9.61367 25.7968 9.82197 25.2828 9.82203H19.1409C19.0381 9.82203 18.9395 9.78037 18.8668 9.70622C18.7941 9.63206 18.7532 9.53149 18.7532 9.42662C18.7532 9.32174 18.7941 9.22117 18.8668 9.14701C18.9395 9.07286 19.0381 9.0312 19.1409 9.0312H25.2826C25.4354 9.03122 25.5866 9.00055 25.7277 8.94095C25.8688 8.88134 25.997 8.79397 26.105 8.68382L26.1355 8.65278C26.2082 8.57866 26.3068 8.53701 26.4096 8.53701C26.5123 8.53701 26.6109 8.57866 26.6836 8.65278ZM19.5286 17.7304C19.5286 17.6255 19.5694 17.5249 19.6421 17.4508C19.7148 17.3766 19.8134 17.335 19.9162 17.335H21.5638C21.6666 17.335 21.7652 17.3766 21.8379 17.4508C21.9106 17.5249 21.9514 17.6255 21.9514 17.7304C21.9514 17.8352 21.9106 17.9358 21.8379 18.01C21.7652 18.0841 21.6666 18.1258 21.5638 18.1258H19.9162C19.8134 18.1258 19.7148 18.0841 19.6421 18.01C19.5694 17.9358 19.5286 17.8352 19.5286 17.7304ZM22.2422 17.7304C22.2422 17.6255 22.283 17.5249 22.3557 17.4508C22.4284 17.3766 22.527 17.335 22.6299 17.335H26.991C27.0939 17.335 27.1925 17.3766 27.2652 17.4508C27.3379 17.5249 27.3787 17.6255 27.3787 17.7304C27.3787 17.8352 27.3379 17.9358 27.2652 18.01C27.1925 18.0841 27.0939 18.1258 26.991 18.1258H22.6299C22.527 18.1258 22.4284 18.0841 22.3557 18.01C22.283 17.9358 22.2422 17.8352 22.2422 17.7304Z" />
                            </svg>
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="product-card">
                      <div className="product-img">
                        <div className="number-of-img">
                          <img src="assets/img/home1/icon/gallery-icon-1.svg" alt="" />
                          10
                        </div>
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                        <div className="slider-btn-group">
                          <div className="product-stand-next swiper-arrow">
                            <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                            </svg>
                          </div>
                          <div className="product-stand-prev swiper-arrow">
                            <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-13.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-13.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-13.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-13.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h5><Link legacyBehavior href="/car-deatils"><a>Hyundai Sonata-2022</a></Link></h5>
                        <div className="price-location">
                          <div className="price">
                            <strong>$17,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Sydne City</a>
                          </div>
                        </div>
                        <ul className="features">
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_14497" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_14497)">
                                <path d="M13 7.3125C13 5.53674 12.284 3.9253 11.1258 2.75099C11.1167 2.73873 11.1068 2.72712 11.0962 2.71625C11.0853 2.70558 11.0737 2.69569 11.0615 2.68667C9.88716 1.52848 8.27571 0.8125 6.5 0.8125C4.72429 0.8125 3.11284 1.52852 1.93849 2.68667C1.92625 2.69572 1.91466 2.7056 1.9038 2.71625C1.89311 2.72711 1.88321 2.73872 1.87417 2.75099C0.716023 3.9253 0 5.53674 0 7.3125C0 9.04849 0.675957 10.6805 1.90333 11.9081L1.90384 11.9087L1.90418 11.909L1.90469 11.9095C1.93434 11.9392 1.96957 11.9628 2.00835 11.9788C2.04713 11.9949 2.0887 12.0031 2.13068 12.0031C2.21251 12.0031 2.29435 11.9719 2.35675 11.9094C2.36208 11.9041 2.36689 11.8984 2.37175 11.8928L3.35686 10.9077C3.41637 10.8476 3.44969 10.7665 3.44951 10.6819C3.44933 10.5974 3.41566 10.5163 3.35589 10.4566C3.29611 10.3968 3.21509 10.3631 3.13055 10.3629C3.04601 10.3627 2.96484 10.396 2.9048 10.4556L2.13605 11.2243C1.23965 10.2268 0.719603 8.97139 0.648082 7.63217H1.73527C1.91181 7.63217 2.05494 7.48909 2.05494 7.3125C2.05494 7.13591 1.91181 6.99283 1.73527 6.99283H0.648167C0.722502 5.6173 1.27336 4.36649 2.13814 3.40274L2.9048 4.1694C2.93445 4.19912 2.96968 4.22269 3.00847 4.23875C3.04726 4.25481 3.08884 4.26305 3.13083 4.263C3.19405 4.26299 3.25585 4.24424 3.30841 4.20912C3.36098 4.17399 3.40195 4.12407 3.42614 4.06566C3.45033 4.00725 3.45666 3.94298 3.44433 3.88097C3.432 3.81896 3.40156 3.762 3.35686 3.7173L2.59024 2.9506C3.55403 2.08582 4.8048 1.53496 6.18033 1.46067V2.54781C6.18033 2.72439 6.32346 2.86748 6.5 2.86748C6.67654 2.86748 6.81967 2.72439 6.81967 2.54781V1.46067C8.1952 1.53496 9.44597 2.08586 10.4098 2.95064L9.6431 3.7173C9.58358 3.77733 9.55027 3.8585 9.55045 3.94304C9.55063 4.02758 9.58429 4.10861 9.64407 4.16839C9.70384 4.22817 9.78487 4.26184 9.86941 4.26203C9.95395 4.26222 10.0351 4.22891 10.0952 4.1694L10.8618 3.40274C11.7266 4.36653 12.2775 5.6173 12.3518 6.99283H11.2646C11.0881 6.99283 10.945 7.13591 10.945 7.3125C10.945 7.48909 11.0881 7.63217 11.2646 7.63217H12.3518C12.2803 8.97139 11.7603 10.2268 10.8639 11.2243L10.0952 10.4556C10.0349 10.3973 9.95409 10.365 9.87024 10.3657C9.78638 10.3664 9.70616 10.4001 9.64687 10.4594C9.58758 10.5187 9.55396 10.5989 9.55325 10.6827C9.55254 10.7666 9.58481 10.8474 9.6431 10.9077L10.6441 11.9087C10.6738 11.9384 10.709 11.962 10.7478 11.978C10.7866 11.9941 10.8281 12.0023 10.8701 12.0023C10.9121 12.0023 10.9537 11.9941 10.9925 11.978C11.0313 11.9619 11.0665 11.9384 11.0962 11.9087C12.3239 10.6809 13 9.04866 13 7.3125Z" />
                                <path d="M7.96853 3.64648C7.92956 3.63086 7.8879 3.62307 7.84592 3.62356C7.80394 3.62404 7.76247 3.63279 7.72387 3.64931C7.68528 3.66583 7.65031 3.68979 7.62098 3.71982C7.59165 3.74986 7.56852 3.78537 7.55292 3.82435L6.62915 6.13025C6.58625 6.12537 6.54313 6.12278 6.49996 6.12249C6.05003 6.12249 5.64362 6.37171 5.43924 6.77288C5.22562 7.19225 5.28035 7.69332 5.58553 8.11316C5.61729 8.15668 5.65563 8.19499 5.69916 8.22675C5.9471 8.407 6.22402 8.50226 6.49996 8.50226C6.94989 8.50226 7.35634 8.25305 7.56067 7.85188C7.7743 7.43251 7.71957 6.93148 7.4146 6.51194C7.3828 6.46827 7.34439 6.42982 7.30076 6.39797C7.27754 6.38137 7.25388 6.36541 7.22979 6.3501L8.1464 4.06206C8.17791 3.98336 8.17688 3.89537 8.14352 3.81744C8.11016 3.73951 8.04722 3.67801 7.96853 3.64648ZM6.99093 7.56166C6.94504 7.65244 6.87483 7.72868 6.78812 7.78187C6.70142 7.83506 6.60163 7.8631 6.49992 7.86287C6.36335 7.86287 6.22589 7.81518 6.0912 7.72107C5.93776 7.50075 5.90763 7.26189 6.00894 7.06306C6.05482 6.97227 6.12504 6.89602 6.21175 6.84283C6.29845 6.78964 6.39824 6.7616 6.49996 6.76184C6.56637 6.76184 6.63294 6.77335 6.69935 6.79572C6.70152 6.79662 6.70353 6.79777 6.70574 6.79867C6.71273 6.80144 6.71976 6.80369 6.7268 6.80595C6.79115 6.83099 6.85221 6.86378 6.90863 6.9036C7.06203 7.12392 7.0922 7.36282 6.99093 7.56166Z" />
                              </g>
                            </svg>
                            2500 miles
                          </li>
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_1855855" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_1855855)">
                                <path d="M6.42663 3.45316H10.8878C10.949 3.45316 11.0077 3.43176 11.051 3.39366C11.0943 3.35557 11.1186 3.3039 11.1186 3.25003V1.82813C11.1186 1.77426 11.0943 1.72259 11.051 1.6845C11.0077 1.6464 10.949 1.625 10.8878 1.625H7.19516C7.15154 1.62499 7.10882 1.63587 7.07193 1.65636C7.03505 1.67685 7.00551 1.70612 6.98676 1.74078L6.21823 3.16268C6.20147 3.19365 6.1939 3.22784 6.19621 3.26208C6.19852 3.29632 6.21064 3.32948 6.23145 3.35848C6.25226 3.38748 6.28107 3.41138 6.3152 3.42793C6.34933 3.44448 6.38766 3.45316 6.42663 3.45316ZM7.34102 2.03126H10.657V3.0469H6.79197L7.34102 2.03126Z" />
                                <path d="M1.49911 3.21956C1.56073 3.24028 1.64058 3.21936 1.67497 3.2027L1.87622 3.10601L2.16332 3.56955C1.79404 3.78793 1.49148 4.08293 1.28231 4.42852C1.07314 4.77412 0.963791 5.1597 0.963905 5.55127V11.5781C0.963905 12.3622 1.68859 13 2.57944 13H10.8879C11.7787 13 12.5034 12.3622 12.5034 11.5781V1.42187C12.5034 0.861847 11.9858 0.406229 11.3495 0.406229H7.42603C7.03602 0.404981 6.6534 0.499924 6.32156 0.680298C5.98972 0.860671 5.72194 1.11926 5.54855 1.42675L5.17444 2.08732L4.57947 2.3778L4.30759 1.93944L4.51115 1.84174C4.56484 1.81594 4.60469 1.77244 4.62196 1.72079C4.63923 1.66914 4.63249 1.61358 4.60324 1.5663L3.82986 0.316853C3.74165 0.175448 3.59347 0.0704953 3.41766 0.0249036C3.24185 -0.0206881 3.05269 -0.00321658 2.89147 0.0735044L0.862588 1.04649C0.53025 1.20635 0.405854 1.57645 0.586101 1.87261L1.36156 3.12186C1.37608 3.1453 1.39574 3.16598 1.41938 3.18272C1.44303 3.19945 1.4702 3.2119 1.49934 3.21936L1.49911 3.21956ZM3.11164 0.430605C3.16571 0.406431 3.22823 0.401358 3.2864 0.416425C3.34458 0.431492 3.39402 0.465558 3.42459 0.511653L4.08742 1.58255L3.58084 1.82529L3.24804 1.28984C3.21792 1.24381 3.16853 1.21 3.11043 1.19564C3.05234 1.18128 2.99016 1.18752 2.93723 1.21302C2.8843 1.23852 2.84482 1.28125 2.82725 1.33206C2.80968 1.38287 2.81541 1.43771 2.84323 1.48484L3.17557 2.01948L2.56697 2.31117L2.2351 1.77714C2.20498 1.73112 2.15559 1.69731 2.09749 1.68295C2.0394 1.66859 1.97723 1.67483 1.92429 1.70033C1.87136 1.72583 1.83188 1.76856 1.81431 1.81936C1.79674 1.87017 1.80248 1.92502 1.83029 1.97215L2.16171 2.50536L1.85845 2.6508L1.85729 2.65121L1.65604 2.74851L0.992292 1.67924C0.963266 1.63183 0.956605 1.57627 0.973751 1.52457C0.990897 1.47288 1.03047 1.4292 1.08392 1.40298L3.11164 0.430605ZM3.60391 3.33778L5.46085 2.41212C5.5017 2.39222 5.53448 2.36175 5.55548 2.32519L5.96144 1.60834C6.09866 1.36989 6.30803 1.16942 6.56646 1.02903C6.82489 0.888634 7.12234 0.81377 7.42603 0.812689H11.3495C11.7312 0.812689 12.0418 1.0861 12.0418 1.42208V11.5783C12.0418 12.1383 11.5242 12.5939 10.8879 12.5939H2.57944C1.94315 12.5939 1.42549 12.1383 1.42549 11.5783V5.55148C1.42528 5.19819 1.53251 4.8513 1.73603 4.5468C1.93955 4.2423 2.23196 3.99128 2.5829 3.81981C2.63616 3.7938 2.67559 3.75032 2.69258 3.69883C2.70957 3.64735 2.70275 3.59205 2.6736 3.54497L2.28149 2.91182L3.9021 2.13424L4.17743 2.57808L3.37359 2.98596C3.34732 2.99928 3.32429 3.01703 3.30582 3.03818C3.28735 3.05934 3.27379 3.08349 3.26593 3.10926C3.25806 3.13502 3.25604 3.1619 3.25998 3.18836C3.26392 3.21481 3.27374 3.24032 3.28889 3.26344C3.33158 3.32864 3.47629 3.38795 3.60415 3.33798L3.60391 3.33778Z" />
                                <path d="M9.50334 9.46291V6.58418L10.8205 5.42492C10.8419 5.40607 10.8589 5.38369 10.8705 5.35904C10.8822 5.3344 10.8881 5.30799 10.8881 5.28131C10.8881 5.25463 10.8822 5.22822 10.8705 5.20357C10.8589 5.17893 10.8419 5.15654 10.8205 5.1377L9.8973 4.32518C9.87589 4.3063 9.85046 4.29132 9.82246 4.2811C9.79446 4.27089 9.76445 4.26562 9.73414 4.26562C9.70382 4.26562 9.67381 4.27089 9.64581 4.2811C9.61781 4.29132 9.59238 4.3063 9.57097 4.32518L8.25385 5.48444H5.21388L3.89676 4.32518C3.87534 4.3063 3.84991 4.29132 3.82191 4.2811C3.79391 4.27089 3.7639 4.26562 3.73359 4.26562C3.70328 4.26562 3.67326 4.27089 3.64527 4.2811C3.61727 4.29132 3.59183 4.3063 3.57042 4.32518L2.64726 5.1377C2.62581 5.15654 2.60879 5.17893 2.59718 5.20357C2.58557 5.22822 2.57959 5.25463 2.57959 5.28131C2.57959 5.30799 2.58557 5.3344 2.59718 5.35904C2.60879 5.38369 2.62581 5.40607 2.64726 5.42492L3.96438 6.58418V9.46291L2.64726 10.6222C2.62581 10.641 2.60879 10.6634 2.59718 10.688C2.58557 10.7127 2.57959 10.7391 2.57959 10.7658C2.57959 10.7925 2.58557 10.8189 2.59718 10.8435C2.60879 10.8682 2.62581 10.8905 2.64726 10.9094L3.57042 11.7219C3.59183 11.7408 3.61727 11.7558 3.64527 11.766C3.67326 11.7762 3.70328 11.7815 3.73359 11.7815C3.7639 11.7815 3.79391 11.7762 3.82191 11.766C3.84991 11.7558 3.87534 11.7408 3.89676 11.7219L5.21388 10.5627H8.25385L9.57097 11.7219C9.59235 11.7408 9.61777 11.7559 9.64578 11.7661C9.67378 11.7764 9.70381 11.7816 9.73414 11.7816C9.76446 11.7816 9.79449 11.7764 9.82249 11.7661C9.8505 11.7559 9.87592 11.7408 9.8973 11.7219L10.8205 10.9094C10.8419 10.8905 10.8589 10.8682 10.8705 10.8435C10.8822 10.8189 10.8881 10.7925 10.8881 10.7658C10.8881 10.7391 10.8822 10.7127 10.8705 10.688C10.8589 10.6634 10.8419 10.641 10.8205 10.6222L9.50334 9.46291ZM9.73414 11.2911L8.51256 10.2159C8.46929 10.1778 8.4106 10.1564 8.34939 10.1564H5.11833C5.08802 10.1564 5.058 10.1616 5.03 10.1718C5.002 10.182 4.97656 10.197 4.95516 10.2159L3.73359 11.2911L3.13676 10.7658L4.35834 9.69062C4.40162 9.65254 4.42595 9.60088 4.42596 9.54701V6.50008C4.42599 6.4734 4.42003 6.44698 4.40843 6.42234C4.39682 6.39769 4.3798 6.37531 4.35834 6.35647L3.13676 5.28131L3.73359 4.75602L4.95516 5.83118C4.99843 5.86927 5.05712 5.89068 5.11833 5.89069H8.34939C8.41055 5.89069 8.4694 5.86937 8.51256 5.83118L9.73414 4.75602L10.331 5.28131L9.10939 6.35647C9.0661 6.39455 9.04178 6.44621 9.04176 6.50008V9.54701C9.04176 9.60084 9.066 9.65264 9.10939 9.69062L10.331 10.7658L9.73414 11.2911Z" />
                                <path d="M8.11844 6.5H5.34895C5.28774 6.5 5.22904 6.5214 5.18576 6.55949C5.14248 6.59759 5.11816 6.64926 5.11816 6.70313V9.3438C5.11816 9.39767 5.14248 9.44934 5.18576 9.48743C5.22904 9.52553 5.28774 9.54693 5.34895 9.54693H7.19528C7.25649 9.54693 7.31519 9.52553 7.35847 9.48743C7.40175 9.44934 7.42607 9.39767 7.42607 9.3438C7.42607 9.28993 7.40175 9.23826 7.35847 9.20017C7.31519 9.16207 7.25649 9.14067 7.19528 9.14067H5.57974V6.90626H7.88765V8.53129C7.88765 8.58516 7.91196 8.63683 7.95524 8.67492C7.99853 8.71301 8.05723 8.73441 8.11844 8.73441C8.17965 8.73441 8.23835 8.71301 8.28163 8.67492C8.32491 8.63683 8.34923 8.58516 8.34923 8.53129V6.70313C8.34923 6.64926 8.32491 6.59759 8.28163 6.55949C8.23835 6.5214 8.17965 6.5 8.11844 6.5ZM11.1187 6.5C11.0575 6.5 10.9988 6.5214 10.9555 6.55949C10.9122 6.59759 10.8879 6.64926 10.8879 6.70313V8.53129C10.8879 8.58516 10.9122 8.63683 10.9555 8.67492C10.9988 8.71301 11.0575 8.73441 11.1187 8.73441C11.1799 8.73441 11.2386 8.71301 11.2819 8.67492C11.3252 8.63683 11.3495 8.58516 11.3495 8.53129V6.70313C11.3495 6.64926 11.3252 6.59759 11.2819 6.55949C11.2386 6.5214 11.1799 6.5 11.1187 6.5Z" />
                                <path d="M11.1187 9.54713C11.2462 9.54713 11.3495 9.45618 11.3495 9.344C11.3495 9.23181 11.2462 9.14087 11.1187 9.14087C10.9913 9.14087 10.8879 9.23181 10.8879 9.344C10.8879 9.45618 10.9913 9.54713 11.1187 9.54713Z" />
                              </g>
                            </svg>
                            Petrol + Gas
                          </li>
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_1432777" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_1432777)">
                                <path d="M8.28713 6.95811H7.8187L8.04511 5.25406C8.05414 5.18229 8.0395 5.10942 8.00367 5.04772C7.96783 4.98603 7.91299 4.93928 7.84838 4.91536C7.71188 4.86288 7.56173 4.91605 7.49608 5.02788L5.69038 7.50535C5.65489 7.56344 5.63505 7.63066 5.63299 7.69979C5.63093 7.76892 5.64673 7.83733 5.67868 7.89767C5.74498 8.02486 5.87281 8.10369 6.01256 8.10369H6.481L6.25458 9.80774C6.24555 9.87951 6.26019 9.95238 6.29602 10.0141C6.33186 10.0758 6.3867 10.1225 6.45131 10.1464C6.48728 10.1604 6.52433 10.1668 6.56051 10.1668C6.66148 10.1668 6.7553 10.1162 6.80361 10.0339L8.60931 7.55645C8.6448 7.49836 8.66464 7.43113 8.6667 7.36201C8.66876 7.29288 8.65297 7.22446 8.62101 7.16412C8.58787 7.10133 8.53941 7.0491 8.48068 7.01286C8.42196 6.97663 8.35512 6.95772 8.28713 6.95811ZM6.75226 9.35537L6.94488 7.90684C6.94922 7.87436 6.94692 7.84127 6.93813 7.80981C6.92934 7.77836 6.91427 7.74926 6.89394 7.7245C6.8736 7.69973 6.84848 7.67987 6.82026 7.66626C6.79204 7.65264 6.76139 7.6456 6.73038 7.64559H6.13433L7.54743 5.70665L7.35481 7.15519C7.35047 7.18767 7.35277 7.22075 7.36156 7.25221C7.37035 7.28367 7.38542 7.31276 7.40575 7.33753C7.42609 7.36229 7.45121 7.38215 7.47943 7.39577C7.50765 7.40938 7.5383 7.41643 7.56931 7.41643H8.16536L6.75226 9.35537Z" />
                                <path d="M12.35 4.89575H11.9167C11.5583 4.89575 11.2667 5.2042 11.2667 5.58324V6.27072H10.8333V4.20827C10.8333 3.70274 10.4446 3.29162 9.96667 3.29162H8.88333V2.83329H10.1833C10.5417 2.83329 10.8333 2.52484 10.8333 2.14581V1.68749C10.8333 1.30845 10.5417 1 10.1833 1H5.85C5.49163 1 5.2 1.30845 5.2 1.68749V2.14581C5.2 2.52484 5.49163 2.83329 5.85 2.83329H7.15V3.29162H5.86863C5.66627 3.29162 5.46932 3.36701 5.31397 3.50405L4.37515 4.3311C4.29737 4.39972 4.19932 4.43735 4.09803 4.43743H3.03333C2.55537 4.43743 2.16667 4.84854 2.16667 5.35408V6.27072H1.73333V4.89575C1.73333 4.51672 1.4417 4.20827 1.08333 4.20827H0.65C0.291633 4.20827 0 4.51672 0 4.89575V9.47899C0 9.85802 0.291633 10.1665 0.65 10.1665H1.08333C1.4417 10.1665 1.73333 9.85802 1.73333 9.47899V8.10402H2.16667V9.47899C2.16667 9.98452 2.55537 10.3956 3.03333 10.3956H3.73945C3.89458 10.3956 4.03888 10.4841 4.11558 10.6266L4.60807 11.5378C4.68391 11.6781 4.79344 11.7947 4.92557 11.8759C5.0577 11.957 5.20775 11.9998 5.36055 12H9.22892C9.35599 12.0002 9.48154 11.9707 9.59662 11.9137C9.7117 11.8567 9.81349 11.7736 9.89473 11.6702L10.6325 10.7339C10.7622 10.569 10.8332 10.3614 10.8333 10.147V8.10425H11.2667V8.79173C11.2667 9.17077 11.5583 9.47922 11.9167 9.47922H12.35C12.7084 9.47922 13 9.17077 13 8.79173V5.58347C13 5.20443 12.7084 4.89575 12.35 4.89575ZM1.3 9.47899C1.3 9.53977 1.27717 9.59805 1.23654 9.64103C1.19591 9.68401 1.1408 9.70815 1.08333 9.70815H0.65C0.592536 9.70815 0.537426 9.68401 0.496794 9.64103C0.456161 9.59805 0.433333 9.53977 0.433333 9.47899V4.89575C0.433333 4.83497 0.456161 4.77669 0.496794 4.73371C0.537426 4.69073 0.592536 4.66659 0.65 4.66659H1.08333C1.1408 4.66659 1.19591 4.69073 1.23654 4.73371C1.27717 4.77669 1.3 4.83497 1.3 4.89575V9.47899ZM1.73333 7.64569V6.72905H2.16667V7.64569H1.73333ZM5.63333 2.14581V1.68749C5.63333 1.62671 5.65616 1.56842 5.69679 1.52544C5.73743 1.48247 5.79254 1.45832 5.85 1.45832H10.1833C10.2408 1.45832 10.2959 1.48247 10.3365 1.52544C10.3772 1.56842 10.4 1.62671 10.4 1.68749V2.14581C10.4 2.20659 10.3772 2.26488 10.3365 2.30785C10.2959 2.35083 10.2408 2.37497 10.1833 2.37497H5.85C5.79254 2.37497 5.73743 2.35083 5.69679 2.30785C5.65616 2.26488 5.63333 2.20659 5.63333 2.14581ZM7.58333 2.83329H8.45V3.29162H7.58333V2.83329ZM10.4 10.1468C10.4 10.2538 10.3643 10.3578 10.2995 10.4401L9.56193 11.3764C9.52126 11.4281 9.47034 11.4697 9.41279 11.4982C9.35524 11.5267 9.29247 11.5415 9.22892 11.5414H5.36055C5.28417 11.5414 5.20916 11.52 5.14311 11.4794C5.07706 11.4389 5.02232 11.3806 4.98442 11.3105L4.49193 10.3993C4.41609 10.259 4.30656 10.1424 4.17443 10.0612C4.0423 9.98006 3.89225 9.93724 3.73945 9.93708H3.03333C2.79435 9.93708 2.6 9.73153 2.6 9.47876V5.35385C2.6 5.10108 2.79435 4.89552 3.03333 4.89552H4.09803C4.3004 4.89552 4.49735 4.82013 4.6527 4.68309L5.59152 3.85604C5.66929 3.78742 5.76735 3.7498 5.86863 3.74971H9.96667C10.2057 3.74971 10.4 3.95527 10.4 4.20804V10.1465V10.1468ZM10.8333 7.64569V6.72905H11.2667V7.64569H10.8333ZM12.5667 8.7915C12.5667 8.85228 12.5438 8.91057 12.5032 8.95355C12.4626 8.99652 12.4075 9.02067 12.35 9.02067H11.9167C11.8592 9.02067 11.8041 8.99652 11.7635 8.95355C11.7228 8.91057 11.7 8.85228 11.7 8.7915V5.58324C11.7 5.52246 11.7228 5.46417 11.7635 5.4212C11.8041 5.37822 11.8592 5.35408 11.9167 5.35408H12.35C12.4075 5.35408 12.4626 5.37822 12.5032 5.4212C12.5438 5.46417 12.5667 5.52246 12.5667 5.58324V8.7915Z" />
                              </g>
                            </svg>
                            Electric
                          </li>
                        </ul>
                        <div className="content-btm">
                         <Link legacyBehavior href="/car-deatils">
                            <a className="view-btn2">
                            <svg width={35} height={21} viewBox="0 0 35 21" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 20C5.47715 20 1 15.7467 1 10.5C1 5.25329 5.47715 1 11 1" strokeLinecap="round" />
                              <path d="M14.2597 3C14.1569 3 14.0583 3.04166 13.9856 3.11582C13.9129 3.18997 13.8721 3.29055 13.8721 3.39542C13.8721 3.50029 13.9129 3.60086 13.9856 3.67502C14.0583 3.74917 14.1569 3.79083 14.2597 3.79083H15.8104C15.9132 3.79083 16.0118 3.74917 16.0845 3.67502C16.1572 3.60086 16.198 3.50029 16.198 3.39542C16.198 3.29055 16.1572 3.18997 16.0845 3.11582C16.0118 3.04166 15.9132 3 15.8104 3H14.2597ZM16.7795 3C16.6767 3 16.5781 3.04166 16.5054 3.11582C16.4327 3.18997 16.3919 3.29055 16.3919 3.39542C16.3919 3.50029 16.4327 3.60086 16.5054 3.67502C16.5781 3.74917 16.6767 3.79083 16.7795 3.79083H21.3346C21.4374 3.79083 21.536 3.74917 21.6087 3.67502C21.6814 3.60086 21.7222 3.50029 21.7222 3.39542C21.7222 3.29055 21.6814 3.18997 21.6087 3.11582C21.536 3.04166 21.4374 3 21.3346 3H16.7795Z" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M15.2292 5.76953C15.1264 5.76953 15.0278 5.81119 14.9551 5.88535C14.8824 5.9595 14.8415 6.06008 14.8415 6.16495C14.8415 6.26982 14.8824 6.3704 14.9551 6.44455C15.0278 6.51871 15.1264 6.56037 15.2292 6.56037H24.1454C25.653 6.56037 26.5822 6.79999 27.3256 7.18493C27.9575 7.51194 28.4672 7.9467 29.1055 8.49119C29.2375 8.60368 29.3749 8.72073 29.5201 8.84271L29.6101 8.91824L29.726 8.93069C33.2653 9.31069 34.0622 10.5309 34.2246 11.1557V12.6893C34.2246 12.7942 34.1838 12.8948 34.1111 12.9689C34.0384 13.0431 33.9398 13.0847 33.8369 13.0847H32.8356C32.6511 11.9627 31.6943 11.1077 30.5418 11.1077C29.3893 11.1077 28.4325 11.9627 28.248 13.0847H21.2058C21.0212 11.9627 20.0645 11.1077 18.912 11.1077C17.7594 11.1077 16.8027 11.9627 16.6182 13.0847H14.7446C14.6418 13.0847 14.5432 13.1264 14.4705 13.2006C14.3978 13.2747 14.3569 13.3753 14.3569 13.4802C14.3569 13.585 14.3978 13.6856 14.4705 13.7598C14.5432 13.8339 14.6418 13.8756 14.7446 13.8756H16.6182C16.8027 14.9976 17.7594 15.8527 18.912 15.8527C20.0645 15.8527 21.0212 14.9976 21.2058 13.8756H28.248C28.4325 14.9976 29.3893 15.8527 30.5418 15.8527C31.6943 15.8527 32.6511 14.9976 32.8356 13.8756H33.8369C34.1454 13.8756 34.4412 13.7506 34.6593 13.5281C34.8774 13.3057 34.9999 13.0039 34.9999 12.6893V11.0626L34.99 11.0187C34.7431 9.92754 33.5791 8.57502 29.9239 8.15706C29.8217 8.07086 29.7215 7.98505 29.6227 7.90063C28.9828 7.35397 28.3942 6.851 27.6766 6.4795C26.7966 6.02418 25.7391 5.76953 24.1454 5.76953H15.2292ZM28.9912 13.4802C28.9912 13.0607 29.1545 12.6584 29.4453 12.3618C29.7361 12.0651 30.1306 11.8985 30.5418 11.8985C30.9531 11.8985 31.3475 12.0651 31.6383 12.3618C31.9291 12.6584 32.0925 13.0607 32.0925 13.4802C32.0925 13.8996 31.9291 14.302 31.6383 14.5986C31.3475 14.8952 30.9531 15.0618 30.5418 15.0618C30.1306 15.0618 29.7361 14.8952 29.4453 14.5986C29.1545 14.302 28.9912 13.8996 28.9912 13.4802ZM18.912 11.8985C18.5007 11.8985 18.1063 12.0651 17.8155 12.3618C17.5247 12.6584 17.3613 13.0607 17.3613 13.4802C17.3613 13.8996 17.5247 14.302 17.8155 14.5986C18.1063 14.8952 18.5007 15.0618 18.912 15.0618C19.3232 15.0618 19.7176 14.8952 20.0084 14.5986C20.2992 14.302 20.4626 13.8996 20.4626 13.4802C20.4626 13.0607 20.2992 12.6584 20.0084 12.3618C19.7176 12.0651 19.3232 11.8985 18.912 11.8985Z" />
                              <path d="M11 8.14151C11 8.03664 11.0408 7.93606 11.1135 7.86191C11.1862 7.78775 11.2848 7.74609 11.3877 7.74609H15.7489C15.8517 7.74609 15.9503 7.78775 16.023 7.86191C16.0957 7.93606 16.1365 8.03664 16.1365 8.14151C16.1365 8.24638 16.0957 8.34696 16.023 8.42111C15.9503 8.49527 15.8517 8.53693 15.7489 8.53693H11.3877C11.2848 8.53693 11.1862 8.49527 11.1135 8.42111C11.0408 8.34696 11 8.24638 11 8.14151ZM26.6836 8.65278C26.7563 8.72694 26.7971 8.82749 26.7971 8.93234C26.7971 9.03719 26.7563 9.13775 26.6836 9.2119L26.6532 9.24294C26.2897 9.61367 25.7968 9.82197 25.2828 9.82203H19.1409C19.0381 9.82203 18.9395 9.78037 18.8668 9.70622C18.7941 9.63206 18.7532 9.53149 18.7532 9.42662C18.7532 9.32174 18.7941 9.22117 18.8668 9.14701C18.9395 9.07286 19.0381 9.0312 19.1409 9.0312H25.2826C25.4354 9.03122 25.5866 9.00055 25.7277 8.94095C25.8688 8.88134 25.997 8.79397 26.105 8.68382L26.1355 8.65278C26.2082 8.57866 26.3068 8.53701 26.4096 8.53701C26.5123 8.53701 26.6109 8.57866 26.6836 8.65278ZM19.5286 17.7304C19.5286 17.6255 19.5694 17.5249 19.6421 17.4508C19.7148 17.3766 19.8134 17.335 19.9162 17.335H21.5638C21.6666 17.335 21.7652 17.3766 21.8379 17.4508C21.9106 17.5249 21.9514 17.6255 21.9514 17.7304C21.9514 17.8352 21.9106 17.9358 21.8379 18.01C21.7652 18.0841 21.6666 18.1258 21.5638 18.1258H19.9162C19.8134 18.1258 19.7148 18.0841 19.6421 18.01C19.5694 17.9358 19.5286 17.8352 19.5286 17.7304ZM22.2422 17.7304C22.2422 17.6255 22.283 17.5249 22.3557 17.4508C22.4284 17.3766 22.527 17.335 22.6299 17.335H26.991C27.0939 17.335 27.1925 17.3766 27.2652 17.4508C27.3379 17.5249 27.3787 17.6255 27.3787 17.7304C27.3787 17.8352 27.3379 17.9358 27.2652 18.01C27.1925 18.0841 27.0939 18.1258 26.991 18.1258H22.6299C22.527 18.1258 22.4284 18.0841 22.3557 18.01C22.283 17.9358 22.2422 17.8352 22.2422 17.7304Z" />
                            </svg>
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="product-card">
                      <div className="product-img">
                        <div className="number-of-img">
                          <img src="assets/img/home1/icon/gallery-icon-1.svg" alt="" />
                          10
                        </div>
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                        <div className="slider-btn-group">
                          <div className="product-stand-next swiper-arrow">
                            <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                            </svg>
                          </div>
                          <div className="product-stand-prev swiper-arrow">
                            <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-11.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-11.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-11.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-11.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h5><Link legacyBehavior href="/car-deatils"><a>Jeep Grand Cherokee-2022</a></Link></h5>
                        <div className="price-location">
                          <div className="price">
                            <strong>$22,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <ul className="features">
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_1449888" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_1449888)">
                                <path d="M13 7.3125C13 5.53674 12.284 3.9253 11.1258 2.75099C11.1167 2.73873 11.1068 2.72712 11.0962 2.71625C11.0853 2.70558 11.0737 2.69569 11.0615 2.68667C9.88716 1.52848 8.27571 0.8125 6.5 0.8125C4.72429 0.8125 3.11284 1.52852 1.93849 2.68667C1.92625 2.69572 1.91466 2.7056 1.9038 2.71625C1.89311 2.72711 1.88321 2.73872 1.87417 2.75099C0.716023 3.9253 0 5.53674 0 7.3125C0 9.04849 0.675957 10.6805 1.90333 11.9081L1.90384 11.9087L1.90418 11.909L1.90469 11.9095C1.93434 11.9392 1.96957 11.9628 2.00835 11.9788C2.04713 11.9949 2.0887 12.0031 2.13068 12.0031C2.21251 12.0031 2.29435 11.9719 2.35675 11.9094C2.36208 11.9041 2.36689 11.8984 2.37175 11.8928L3.35686 10.9077C3.41637 10.8476 3.44969 10.7665 3.44951 10.6819C3.44933 10.5974 3.41566 10.5163 3.35589 10.4566C3.29611 10.3968 3.21509 10.3631 3.13055 10.3629C3.04601 10.3627 2.96484 10.396 2.9048 10.4556L2.13605 11.2243C1.23965 10.2268 0.719603 8.97139 0.648082 7.63217H1.73527C1.91181 7.63217 2.05494 7.48909 2.05494 7.3125C2.05494 7.13591 1.91181 6.99283 1.73527 6.99283H0.648167C0.722502 5.6173 1.27336 4.36649 2.13814 3.40274L2.9048 4.1694C2.93445 4.19912 2.96968 4.22269 3.00847 4.23875C3.04726 4.25481 3.08884 4.26305 3.13083 4.263C3.19405 4.26299 3.25585 4.24424 3.30841 4.20912C3.36098 4.17399 3.40195 4.12407 3.42614 4.06566C3.45033 4.00725 3.45666 3.94298 3.44433 3.88097C3.432 3.81896 3.40156 3.762 3.35686 3.7173L2.59024 2.9506C3.55403 2.08582 4.8048 1.53496 6.18033 1.46067V2.54781C6.18033 2.72439 6.32346 2.86748 6.5 2.86748C6.67654 2.86748 6.81967 2.72439 6.81967 2.54781V1.46067C8.1952 1.53496 9.44597 2.08586 10.4098 2.95064L9.6431 3.7173C9.58358 3.77733 9.55027 3.8585 9.55045 3.94304C9.55063 4.02758 9.58429 4.10861 9.64407 4.16839C9.70384 4.22817 9.78487 4.26184 9.86941 4.26203C9.95395 4.26222 10.0351 4.22891 10.0952 4.1694L10.8618 3.40274C11.7266 4.36653 12.2775 5.6173 12.3518 6.99283H11.2646C11.0881 6.99283 10.945 7.13591 10.945 7.3125C10.945 7.48909 11.0881 7.63217 11.2646 7.63217H12.3518C12.2803 8.97139 11.7603 10.2268 10.8639 11.2243L10.0952 10.4556C10.0349 10.3973 9.95409 10.365 9.87024 10.3657C9.78638 10.3664 9.70616 10.4001 9.64687 10.4594C9.58758 10.5187 9.55396 10.5989 9.55325 10.6827C9.55254 10.7666 9.58481 10.8474 9.6431 10.9077L10.6441 11.9087C10.6738 11.9384 10.709 11.962 10.7478 11.978C10.7866 11.9941 10.8281 12.0023 10.8701 12.0023C10.9121 12.0023 10.9537 11.9941 10.9925 11.978C11.0313 11.9619 11.0665 11.9384 11.0962 11.9087C12.3239 10.6809 13 9.04866 13 7.3125Z" />
                                <path d="M7.96853 3.64648C7.92956 3.63086 7.8879 3.62307 7.84592 3.62356C7.80394 3.62404 7.76247 3.63279 7.72387 3.64931C7.68528 3.66583 7.65031 3.68979 7.62098 3.71982C7.59165 3.74986 7.56852 3.78537 7.55292 3.82435L6.62915 6.13025C6.58625 6.12537 6.54313 6.12278 6.49996 6.12249C6.05003 6.12249 5.64362 6.37171 5.43924 6.77288C5.22562 7.19225 5.28035 7.69332 5.58553 8.11316C5.61729 8.15668 5.65563 8.19499 5.69916 8.22675C5.9471 8.407 6.22402 8.50226 6.49996 8.50226C6.94989 8.50226 7.35634 8.25305 7.56067 7.85188C7.7743 7.43251 7.71957 6.93148 7.4146 6.51194C7.3828 6.46827 7.34439 6.42982 7.30076 6.39797C7.27754 6.38137 7.25388 6.36541 7.22979 6.3501L8.1464 4.06206C8.17791 3.98336 8.17688 3.89537 8.14352 3.81744C8.11016 3.73951 8.04722 3.67801 7.96853 3.64648ZM6.99093 7.56166C6.94504 7.65244 6.87483 7.72868 6.78812 7.78187C6.70142 7.83506 6.60163 7.8631 6.49992 7.86287C6.36335 7.86287 6.22589 7.81518 6.0912 7.72107C5.93776 7.50075 5.90763 7.26189 6.00894 7.06306C6.05482 6.97227 6.12504 6.89602 6.21175 6.84283C6.29845 6.78964 6.39824 6.7616 6.49996 6.76184C6.56637 6.76184 6.63294 6.77335 6.69935 6.79572C6.70152 6.79662 6.70353 6.79777 6.70574 6.79867C6.71273 6.80144 6.71976 6.80369 6.7268 6.80595C6.79115 6.83099 6.85221 6.86378 6.90863 6.9036C7.06203 7.12392 7.0922 7.36282 6.99093 7.56166Z" />
                              </g>
                            </svg>
                            2500 miles
                          </li>
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_1439999" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_1439999)">
                                <path d="M6.42663 3.45316H10.8878C10.949 3.45316 11.0077 3.43176 11.051 3.39366C11.0943 3.35557 11.1186 3.3039 11.1186 3.25003V1.82813C11.1186 1.77426 11.0943 1.72259 11.051 1.6845C11.0077 1.6464 10.949 1.625 10.8878 1.625H7.19516C7.15154 1.62499 7.10882 1.63587 7.07193 1.65636C7.03505 1.67685 7.00551 1.70612 6.98676 1.74078L6.21823 3.16268C6.20147 3.19365 6.1939 3.22784 6.19621 3.26208C6.19852 3.29632 6.21064 3.32948 6.23145 3.35848C6.25226 3.38748 6.28107 3.41138 6.3152 3.42793C6.34933 3.44448 6.38766 3.45316 6.42663 3.45316ZM7.34102 2.03126H10.657V3.0469H6.79197L7.34102 2.03126Z" />
                                <path d="M1.49911 3.21956C1.56073 3.24028 1.64058 3.21936 1.67497 3.2027L1.87622 3.10601L2.16332 3.56955C1.79404 3.78793 1.49148 4.08293 1.28231 4.42852C1.07314 4.77412 0.963791 5.1597 0.963905 5.55127V11.5781C0.963905 12.3622 1.68859 13 2.57944 13H10.8879C11.7787 13 12.5034 12.3622 12.5034 11.5781V1.42187C12.5034 0.861847 11.9858 0.406229 11.3495 0.406229H7.42603C7.03602 0.404981 6.6534 0.499924 6.32156 0.680298C5.98972 0.860671 5.72194 1.11926 5.54855 1.42675L5.17444 2.08732L4.57947 2.3778L4.30759 1.93944L4.51115 1.84174C4.56484 1.81594 4.60469 1.77244 4.62196 1.72079C4.63923 1.66914 4.63249 1.61358 4.60324 1.5663L3.82986 0.316853C3.74165 0.175448 3.59347 0.0704953 3.41766 0.0249036C3.24185 -0.0206881 3.05269 -0.00321658 2.89147 0.0735044L0.862588 1.04649C0.53025 1.20635 0.405854 1.57645 0.586101 1.87261L1.36156 3.12186C1.37608 3.1453 1.39574 3.16598 1.41938 3.18272C1.44303 3.19945 1.4702 3.2119 1.49934 3.21936L1.49911 3.21956ZM3.11164 0.430605C3.16571 0.406431 3.22823 0.401358 3.2864 0.416425C3.34458 0.431492 3.39402 0.465558 3.42459 0.511653L4.08742 1.58255L3.58084 1.82529L3.24804 1.28984C3.21792 1.24381 3.16853 1.21 3.11043 1.19564C3.05234 1.18128 2.99016 1.18752 2.93723 1.21302C2.8843 1.23852 2.84482 1.28125 2.82725 1.33206C2.80968 1.38287 2.81541 1.43771 2.84323 1.48484L3.17557 2.01948L2.56697 2.31117L2.2351 1.77714C2.20498 1.73112 2.15559 1.69731 2.09749 1.68295C2.0394 1.66859 1.97723 1.67483 1.92429 1.70033C1.87136 1.72583 1.83188 1.76856 1.81431 1.81936C1.79674 1.87017 1.80248 1.92502 1.83029 1.97215L2.16171 2.50536L1.85845 2.6508L1.85729 2.65121L1.65604 2.74851L0.992292 1.67924C0.963266 1.63183 0.956605 1.57627 0.973751 1.52457C0.990897 1.47288 1.03047 1.4292 1.08392 1.40298L3.11164 0.430605ZM3.60391 3.33778L5.46085 2.41212C5.5017 2.39222 5.53448 2.36175 5.55548 2.32519L5.96144 1.60834C6.09866 1.36989 6.30803 1.16942 6.56646 1.02903C6.82489 0.888634 7.12234 0.81377 7.42603 0.812689H11.3495C11.7312 0.812689 12.0418 1.0861 12.0418 1.42208V11.5783C12.0418 12.1383 11.5242 12.5939 10.8879 12.5939H2.57944C1.94315 12.5939 1.42549 12.1383 1.42549 11.5783V5.55148C1.42528 5.19819 1.53251 4.8513 1.73603 4.5468C1.93955 4.2423 2.23196 3.99128 2.5829 3.81981C2.63616 3.7938 2.67559 3.75032 2.69258 3.69883C2.70957 3.64735 2.70275 3.59205 2.6736 3.54497L2.28149 2.91182L3.9021 2.13424L4.17743 2.57808L3.37359 2.98596C3.34732 2.99928 3.32429 3.01703 3.30582 3.03818C3.28735 3.05934 3.27379 3.08349 3.26593 3.10926C3.25806 3.13502 3.25604 3.1619 3.25998 3.18836C3.26392 3.21481 3.27374 3.24032 3.28889 3.26344C3.33158 3.32864 3.47629 3.38795 3.60415 3.33798L3.60391 3.33778Z" />
                                <path d="M9.50334 9.46291V6.58418L10.8205 5.42492C10.8419 5.40607 10.8589 5.38369 10.8705 5.35904C10.8822 5.3344 10.8881 5.30799 10.8881 5.28131C10.8881 5.25463 10.8822 5.22822 10.8705 5.20357C10.8589 5.17893 10.8419 5.15654 10.8205 5.1377L9.8973 4.32518C9.87589 4.3063 9.85046 4.29132 9.82246 4.2811C9.79446 4.27089 9.76445 4.26562 9.73414 4.26562C9.70382 4.26562 9.67381 4.27089 9.64581 4.2811C9.61781 4.29132 9.59238 4.3063 9.57097 4.32518L8.25385 5.48444H5.21388L3.89676 4.32518C3.87534 4.3063 3.84991 4.29132 3.82191 4.2811C3.79391 4.27089 3.7639 4.26562 3.73359 4.26562C3.70328 4.26562 3.67326 4.27089 3.64527 4.2811C3.61727 4.29132 3.59183 4.3063 3.57042 4.32518L2.64726 5.1377C2.62581 5.15654 2.60879 5.17893 2.59718 5.20357C2.58557 5.22822 2.57959 5.25463 2.57959 5.28131C2.57959 5.30799 2.58557 5.3344 2.59718 5.35904C2.60879 5.38369 2.62581 5.40607 2.64726 5.42492L3.96438 6.58418V9.46291L2.64726 10.6222C2.62581 10.641 2.60879 10.6634 2.59718 10.688C2.58557 10.7127 2.57959 10.7391 2.57959 10.7658C2.57959 10.7925 2.58557 10.8189 2.59718 10.8435C2.60879 10.8682 2.62581 10.8905 2.64726 10.9094L3.57042 11.7219C3.59183 11.7408 3.61727 11.7558 3.64527 11.766C3.67326 11.7762 3.70328 11.7815 3.73359 11.7815C3.7639 11.7815 3.79391 11.7762 3.82191 11.766C3.84991 11.7558 3.87534 11.7408 3.89676 11.7219L5.21388 10.5627H8.25385L9.57097 11.7219C9.59235 11.7408 9.61777 11.7559 9.64578 11.7661C9.67378 11.7764 9.70381 11.7816 9.73414 11.7816C9.76446 11.7816 9.79449 11.7764 9.82249 11.7661C9.8505 11.7559 9.87592 11.7408 9.8973 11.7219L10.8205 10.9094C10.8419 10.8905 10.8589 10.8682 10.8705 10.8435C10.8822 10.8189 10.8881 10.7925 10.8881 10.7658C10.8881 10.7391 10.8822 10.7127 10.8705 10.688C10.8589 10.6634 10.8419 10.641 10.8205 10.6222L9.50334 9.46291ZM9.73414 11.2911L8.51256 10.2159C8.46929 10.1778 8.4106 10.1564 8.34939 10.1564H5.11833C5.08802 10.1564 5.058 10.1616 5.03 10.1718C5.002 10.182 4.97656 10.197 4.95516 10.2159L3.73359 11.2911L3.13676 10.7658L4.35834 9.69062C4.40162 9.65254 4.42595 9.60088 4.42596 9.54701V6.50008C4.42599 6.4734 4.42003 6.44698 4.40843 6.42234C4.39682 6.39769 4.3798 6.37531 4.35834 6.35647L3.13676 5.28131L3.73359 4.75602L4.95516 5.83118C4.99843 5.86927 5.05712 5.89068 5.11833 5.89069H8.34939C8.41055 5.89069 8.4694 5.86937 8.51256 5.83118L9.73414 4.75602L10.331 5.28131L9.10939 6.35647C9.0661 6.39455 9.04178 6.44621 9.04176 6.50008V9.54701C9.04176 9.60084 9.066 9.65264 9.10939 9.69062L10.331 10.7658L9.73414 11.2911Z" />
                                <path d="M8.11844 6.5H5.34895C5.28774 6.5 5.22904 6.5214 5.18576 6.55949C5.14248 6.59759 5.11816 6.64926 5.11816 6.70313V9.3438C5.11816 9.39767 5.14248 9.44934 5.18576 9.48743C5.22904 9.52553 5.28774 9.54693 5.34895 9.54693H7.19528C7.25649 9.54693 7.31519 9.52553 7.35847 9.48743C7.40175 9.44934 7.42607 9.39767 7.42607 9.3438C7.42607 9.28993 7.40175 9.23826 7.35847 9.20017C7.31519 9.16207 7.25649 9.14067 7.19528 9.14067H5.57974V6.90626H7.88765V8.53129C7.88765 8.58516 7.91196 8.63683 7.95524 8.67492C7.99853 8.71301 8.05723 8.73441 8.11844 8.73441C8.17965 8.73441 8.23835 8.71301 8.28163 8.67492C8.32491 8.63683 8.34923 8.58516 8.34923 8.53129V6.70313C8.34923 6.64926 8.32491 6.59759 8.28163 6.55949C8.23835 6.5214 8.17965 6.5 8.11844 6.5ZM11.1187 6.5C11.0575 6.5 10.9988 6.5214 10.9555 6.55949C10.9122 6.59759 10.8879 6.64926 10.8879 6.70313V8.53129C10.8879 8.58516 10.9122 8.63683 10.9555 8.67492C10.9988 8.71301 11.0575 8.73441 11.1187 8.73441C11.1799 8.73441 11.2386 8.71301 11.2819 8.67492C11.3252 8.63683 11.3495 8.58516 11.3495 8.53129V6.70313C11.3495 6.64926 11.3252 6.59759 11.2819 6.55949C11.2386 6.5214 11.1799 6.5 11.1187 6.5Z" />
                                <path d="M11.1187 9.54713C11.2462 9.54713 11.3495 9.45618 11.3495 9.344C11.3495 9.23181 11.2462 9.14087 11.1187 9.14087C10.9913 9.14087 10.8879 9.23181 10.8879 9.344C10.8879 9.45618 10.9913 9.54713 11.1187 9.54713Z" />
                              </g>
                            </svg>
                            Petrol + Gas
                          </li>
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_143299" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_143299)">
                                <path d="M8.28713 6.95811H7.8187L8.04511 5.25406C8.05414 5.18229 8.0395 5.10942 8.00367 5.04772C7.96783 4.98603 7.91299 4.93928 7.84838 4.91536C7.71188 4.86288 7.56173 4.91605 7.49608 5.02788L5.69038 7.50535C5.65489 7.56344 5.63505 7.63066 5.63299 7.69979C5.63093 7.76892 5.64673 7.83733 5.67868 7.89767C5.74498 8.02486 5.87281 8.10369 6.01256 8.10369H6.481L6.25458 9.80774C6.24555 9.87951 6.26019 9.95238 6.29602 10.0141C6.33186 10.0758 6.3867 10.1225 6.45131 10.1464C6.48728 10.1604 6.52433 10.1668 6.56051 10.1668C6.66148 10.1668 6.7553 10.1162 6.80361 10.0339L8.60931 7.55645C8.6448 7.49836 8.66464 7.43113 8.6667 7.36201C8.66876 7.29288 8.65297 7.22446 8.62101 7.16412C8.58787 7.10133 8.53941 7.0491 8.48068 7.01286C8.42196 6.97663 8.35512 6.95772 8.28713 6.95811ZM6.75226 9.35537L6.94488 7.90684C6.94922 7.87436 6.94692 7.84127 6.93813 7.80981C6.92934 7.77836 6.91427 7.74926 6.89394 7.7245C6.8736 7.69973 6.84848 7.67987 6.82026 7.66626C6.79204 7.65264 6.76139 7.6456 6.73038 7.64559H6.13433L7.54743 5.70665L7.35481 7.15519C7.35047 7.18767 7.35277 7.22075 7.36156 7.25221C7.37035 7.28367 7.38542 7.31276 7.40575 7.33753C7.42609 7.36229 7.45121 7.38215 7.47943 7.39577C7.50765 7.40938 7.5383 7.41643 7.56931 7.41643H8.16536L6.75226 9.35537Z" />
                                <path d="M12.35 4.89575H11.9167C11.5583 4.89575 11.2667 5.2042 11.2667 5.58324V6.27072H10.8333V4.20827C10.8333 3.70274 10.4446 3.29162 9.96667 3.29162H8.88333V2.83329H10.1833C10.5417 2.83329 10.8333 2.52484 10.8333 2.14581V1.68749C10.8333 1.30845 10.5417 1 10.1833 1H5.85C5.49163 1 5.2 1.30845 5.2 1.68749V2.14581C5.2 2.52484 5.49163 2.83329 5.85 2.83329H7.15V3.29162H5.86863C5.66627 3.29162 5.46932 3.36701 5.31397 3.50405L4.37515 4.3311C4.29737 4.39972 4.19932 4.43735 4.09803 4.43743H3.03333C2.55537 4.43743 2.16667 4.84854 2.16667 5.35408V6.27072H1.73333V4.89575C1.73333 4.51672 1.4417 4.20827 1.08333 4.20827H0.65C0.291633 4.20827 0 4.51672 0 4.89575V9.47899C0 9.85802 0.291633 10.1665 0.65 10.1665H1.08333C1.4417 10.1665 1.73333 9.85802 1.73333 9.47899V8.10402H2.16667V9.47899C2.16667 9.98452 2.55537 10.3956 3.03333 10.3956H3.73945C3.89458 10.3956 4.03888 10.4841 4.11558 10.6266L4.60807 11.5378C4.68391 11.6781 4.79344 11.7947 4.92557 11.8759C5.0577 11.957 5.20775 11.9998 5.36055 12H9.22892C9.35599 12.0002 9.48154 11.9707 9.59662 11.9137C9.7117 11.8567 9.81349 11.7736 9.89473 11.6702L10.6325 10.7339C10.7622 10.569 10.8332 10.3614 10.8333 10.147V8.10425H11.2667V8.79173C11.2667 9.17077 11.5583 9.47922 11.9167 9.47922H12.35C12.7084 9.47922 13 9.17077 13 8.79173V5.58347C13 5.20443 12.7084 4.89575 12.35 4.89575ZM1.3 9.47899C1.3 9.53977 1.27717 9.59805 1.23654 9.64103C1.19591 9.68401 1.1408 9.70815 1.08333 9.70815H0.65C0.592536 9.70815 0.537426 9.68401 0.496794 9.64103C0.456161 9.59805 0.433333 9.53977 0.433333 9.47899V4.89575C0.433333 4.83497 0.456161 4.77669 0.496794 4.73371C0.537426 4.69073 0.592536 4.66659 0.65 4.66659H1.08333C1.1408 4.66659 1.19591 4.69073 1.23654 4.73371C1.27717 4.77669 1.3 4.83497 1.3 4.89575V9.47899ZM1.73333 7.64569V6.72905H2.16667V7.64569H1.73333ZM5.63333 2.14581V1.68749C5.63333 1.62671 5.65616 1.56842 5.69679 1.52544C5.73743 1.48247 5.79254 1.45832 5.85 1.45832H10.1833C10.2408 1.45832 10.2959 1.48247 10.3365 1.52544C10.3772 1.56842 10.4 1.62671 10.4 1.68749V2.14581C10.4 2.20659 10.3772 2.26488 10.3365 2.30785C10.2959 2.35083 10.2408 2.37497 10.1833 2.37497H5.85C5.79254 2.37497 5.73743 2.35083 5.69679 2.30785C5.65616 2.26488 5.63333 2.20659 5.63333 2.14581ZM7.58333 2.83329H8.45V3.29162H7.58333V2.83329ZM10.4 10.1468C10.4 10.2538 10.3643 10.3578 10.2995 10.4401L9.56193 11.3764C9.52126 11.4281 9.47034 11.4697 9.41279 11.4982C9.35524 11.5267 9.29247 11.5415 9.22892 11.5414H5.36055C5.28417 11.5414 5.20916 11.52 5.14311 11.4794C5.07706 11.4389 5.02232 11.3806 4.98442 11.3105L4.49193 10.3993C4.41609 10.259 4.30656 10.1424 4.17443 10.0612C4.0423 9.98006 3.89225 9.93724 3.73945 9.93708H3.03333C2.79435 9.93708 2.6 9.73153 2.6 9.47876V5.35385C2.6 5.10108 2.79435 4.89552 3.03333 4.89552H4.09803C4.3004 4.89552 4.49735 4.82013 4.6527 4.68309L5.59152 3.85604C5.66929 3.78742 5.76735 3.7498 5.86863 3.74971H9.96667C10.2057 3.74971 10.4 3.95527 10.4 4.20804V10.1465V10.1468ZM10.8333 7.64569V6.72905H11.2667V7.64569H10.8333ZM12.5667 8.7915C12.5667 8.85228 12.5438 8.91057 12.5032 8.95355C12.4626 8.99652 12.4075 9.02067 12.35 9.02067H11.9167C11.8592 9.02067 11.8041 8.99652 11.7635 8.95355C11.7228 8.91057 11.7 8.85228 11.7 8.7915V5.58324C11.7 5.52246 11.7228 5.46417 11.7635 5.4212C11.8041 5.37822 11.8592 5.35408 11.9167 5.35408H12.35C12.4075 5.35408 12.4626 5.37822 12.5032 5.4212C12.5438 5.46417 12.5667 5.52246 12.5667 5.58324V8.7915Z" />
                              </g>
                            </svg>
                            Electric
                          </li>
                        </ul>
                        <div className="content-btm">
                         <Link legacyBehavior href="/car-deatils">
                            <a className="view-btn2">
                            <svg width={35} height={21} viewBox="0 0 35 21" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 20C5.47715 20 1 15.7467 1 10.5C1 5.25329 5.47715 1 11 1" strokeLinecap="round" />
                              <path d="M14.2597 3C14.1569 3 14.0583 3.04166 13.9856 3.11582C13.9129 3.18997 13.8721 3.29055 13.8721 3.39542C13.8721 3.50029 13.9129 3.60086 13.9856 3.67502C14.0583 3.74917 14.1569 3.79083 14.2597 3.79083H15.8104C15.9132 3.79083 16.0118 3.74917 16.0845 3.67502C16.1572 3.60086 16.198 3.50029 16.198 3.39542C16.198 3.29055 16.1572 3.18997 16.0845 3.11582C16.0118 3.04166 15.9132 3 15.8104 3H14.2597ZM16.7795 3C16.6767 3 16.5781 3.04166 16.5054 3.11582C16.4327 3.18997 16.3919 3.29055 16.3919 3.39542C16.3919 3.50029 16.4327 3.60086 16.5054 3.67502C16.5781 3.74917 16.6767 3.79083 16.7795 3.79083H21.3346C21.4374 3.79083 21.536 3.74917 21.6087 3.67502C21.6814 3.60086 21.7222 3.50029 21.7222 3.39542C21.7222 3.29055 21.6814 3.18997 21.6087 3.11582C21.536 3.04166 21.4374 3 21.3346 3H16.7795Z" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M15.2292 5.76953C15.1264 5.76953 15.0278 5.81119 14.9551 5.88535C14.8824 5.9595 14.8415 6.06008 14.8415 6.16495C14.8415 6.26982 14.8824 6.3704 14.9551 6.44455C15.0278 6.51871 15.1264 6.56037 15.2292 6.56037H24.1454C25.653 6.56037 26.5822 6.79999 27.3256 7.18493C27.9575 7.51194 28.4672 7.9467 29.1055 8.49119C29.2375 8.60368 29.3749 8.72073 29.5201 8.84271L29.6101 8.91824L29.726 8.93069C33.2653 9.31069 34.0622 10.5309 34.2246 11.1557V12.6893C34.2246 12.7942 34.1838 12.8948 34.1111 12.9689C34.0384 13.0431 33.9398 13.0847 33.8369 13.0847H32.8356C32.6511 11.9627 31.6943 11.1077 30.5418 11.1077C29.3893 11.1077 28.4325 11.9627 28.248 13.0847H21.2058C21.0212 11.9627 20.0645 11.1077 18.912 11.1077C17.7594 11.1077 16.8027 11.9627 16.6182 13.0847H14.7446C14.6418 13.0847 14.5432 13.1264 14.4705 13.2006C14.3978 13.2747 14.3569 13.3753 14.3569 13.4802C14.3569 13.585 14.3978 13.6856 14.4705 13.7598C14.5432 13.8339 14.6418 13.8756 14.7446 13.8756H16.6182C16.8027 14.9976 17.7594 15.8527 18.912 15.8527C20.0645 15.8527 21.0212 14.9976 21.2058 13.8756H28.248C28.4325 14.9976 29.3893 15.8527 30.5418 15.8527C31.6943 15.8527 32.6511 14.9976 32.8356 13.8756H33.8369C34.1454 13.8756 34.4412 13.7506 34.6593 13.5281C34.8774 13.3057 34.9999 13.0039 34.9999 12.6893V11.0626L34.99 11.0187C34.7431 9.92754 33.5791 8.57502 29.9239 8.15706C29.8217 8.07086 29.7215 7.98505 29.6227 7.90063C28.9828 7.35397 28.3942 6.851 27.6766 6.4795C26.7966 6.02418 25.7391 5.76953 24.1454 5.76953H15.2292ZM28.9912 13.4802C28.9912 13.0607 29.1545 12.6584 29.4453 12.3618C29.7361 12.0651 30.1306 11.8985 30.5418 11.8985C30.9531 11.8985 31.3475 12.0651 31.6383 12.3618C31.9291 12.6584 32.0925 13.0607 32.0925 13.4802C32.0925 13.8996 31.9291 14.302 31.6383 14.5986C31.3475 14.8952 30.9531 15.0618 30.5418 15.0618C30.1306 15.0618 29.7361 14.8952 29.4453 14.5986C29.1545 14.302 28.9912 13.8996 28.9912 13.4802ZM18.912 11.8985C18.5007 11.8985 18.1063 12.0651 17.8155 12.3618C17.5247 12.6584 17.3613 13.0607 17.3613 13.4802C17.3613 13.8996 17.5247 14.302 17.8155 14.5986C18.1063 14.8952 18.5007 15.0618 18.912 15.0618C19.3232 15.0618 19.7176 14.8952 20.0084 14.5986C20.2992 14.302 20.4626 13.8996 20.4626 13.4802C20.4626 13.0607 20.2992 12.6584 20.0084 12.3618C19.7176 12.0651 19.3232 11.8985 18.912 11.8985Z" />
                              <path d="M11 8.14151C11 8.03664 11.0408 7.93606 11.1135 7.86191C11.1862 7.78775 11.2848 7.74609 11.3877 7.74609H15.7489C15.8517 7.74609 15.9503 7.78775 16.023 7.86191C16.0957 7.93606 16.1365 8.03664 16.1365 8.14151C16.1365 8.24638 16.0957 8.34696 16.023 8.42111C15.9503 8.49527 15.8517 8.53693 15.7489 8.53693H11.3877C11.2848 8.53693 11.1862 8.49527 11.1135 8.42111C11.0408 8.34696 11 8.24638 11 8.14151ZM26.6836 8.65278C26.7563 8.72694 26.7971 8.82749 26.7971 8.93234C26.7971 9.03719 26.7563 9.13775 26.6836 9.2119L26.6532 9.24294C26.2897 9.61367 25.7968 9.82197 25.2828 9.82203H19.1409C19.0381 9.82203 18.9395 9.78037 18.8668 9.70622C18.7941 9.63206 18.7532 9.53149 18.7532 9.42662C18.7532 9.32174 18.7941 9.22117 18.8668 9.14701C18.9395 9.07286 19.0381 9.0312 19.1409 9.0312H25.2826C25.4354 9.03122 25.5866 9.00055 25.7277 8.94095C25.8688 8.88134 25.997 8.79397 26.105 8.68382L26.1355 8.65278C26.2082 8.57866 26.3068 8.53701 26.4096 8.53701C26.5123 8.53701 26.6109 8.57866 26.6836 8.65278ZM19.5286 17.7304C19.5286 17.6255 19.5694 17.5249 19.6421 17.4508C19.7148 17.3766 19.8134 17.335 19.9162 17.335H21.5638C21.6666 17.335 21.7652 17.3766 21.8379 17.4508C21.9106 17.5249 21.9514 17.6255 21.9514 17.7304C21.9514 17.8352 21.9106 17.9358 21.8379 18.01C21.7652 18.0841 21.6666 18.1258 21.5638 18.1258H19.9162C19.8134 18.1258 19.7148 18.0841 19.6421 18.01C19.5694 17.9358 19.5286 17.8352 19.5286 17.7304ZM22.2422 17.7304C22.2422 17.6255 22.283 17.5249 22.3557 17.4508C22.4284 17.3766 22.527 17.335 22.6299 17.335H26.991C27.0939 17.335 27.1925 17.3766 27.2652 17.4508C27.3379 17.5249 27.3787 17.6255 27.3787 17.7304C27.3787 17.8352 27.3379 17.9358 27.2652 18.01C27.1925 18.0841 27.0939 18.1258 26.991 18.1258H22.6299C22.527 18.1258 22.4284 18.0841 22.3557 18.01C22.283 17.9358 22.2422 17.8352 22.2422 17.7304Z" />
                            </svg>
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="product-card">
                      <div className="product-img">
                        <div className="number-of-img">
                          <img src="assets/img/home1/icon/gallery-icon-1.svg" alt="" />
                          10
                        </div>
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                        <div className="slider-btn-group">
                          <div className="product-stand-next swiper-arrow">
                            <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                            </svg>
                          </div>
                          <div className="product-stand-prev swiper-arrow">
                            <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-12.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-12.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-12.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h5><Link legacyBehavior href="/car-deatils"><a>Mercedes-Benz C-Class-2023</a></Link></h5>
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <ul className="features">
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_144966" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_144966)">
                                <path d="M13 7.3125C13 5.53674 12.284 3.9253 11.1258 2.75099C11.1167 2.73873 11.1068 2.72712 11.0962 2.71625C11.0853 2.70558 11.0737 2.69569 11.0615 2.68667C9.88716 1.52848 8.27571 0.8125 6.5 0.8125C4.72429 0.8125 3.11284 1.52852 1.93849 2.68667C1.92625 2.69572 1.91466 2.7056 1.9038 2.71625C1.89311 2.72711 1.88321 2.73872 1.87417 2.75099C0.716023 3.9253 0 5.53674 0 7.3125C0 9.04849 0.675957 10.6805 1.90333 11.9081L1.90384 11.9087L1.90418 11.909L1.90469 11.9095C1.93434 11.9392 1.96957 11.9628 2.00835 11.9788C2.04713 11.9949 2.0887 12.0031 2.13068 12.0031C2.21251 12.0031 2.29435 11.9719 2.35675 11.9094C2.36208 11.9041 2.36689 11.8984 2.37175 11.8928L3.35686 10.9077C3.41637 10.8476 3.44969 10.7665 3.44951 10.6819C3.44933 10.5974 3.41566 10.5163 3.35589 10.4566C3.29611 10.3968 3.21509 10.3631 3.13055 10.3629C3.04601 10.3627 2.96484 10.396 2.9048 10.4556L2.13605 11.2243C1.23965 10.2268 0.719603 8.97139 0.648082 7.63217H1.73527C1.91181 7.63217 2.05494 7.48909 2.05494 7.3125C2.05494 7.13591 1.91181 6.99283 1.73527 6.99283H0.648167C0.722502 5.6173 1.27336 4.36649 2.13814 3.40274L2.9048 4.1694C2.93445 4.19912 2.96968 4.22269 3.00847 4.23875C3.04726 4.25481 3.08884 4.26305 3.13083 4.263C3.19405 4.26299 3.25585 4.24424 3.30841 4.20912C3.36098 4.17399 3.40195 4.12407 3.42614 4.06566C3.45033 4.00725 3.45666 3.94298 3.44433 3.88097C3.432 3.81896 3.40156 3.762 3.35686 3.7173L2.59024 2.9506C3.55403 2.08582 4.8048 1.53496 6.18033 1.46067V2.54781C6.18033 2.72439 6.32346 2.86748 6.5 2.86748C6.67654 2.86748 6.81967 2.72439 6.81967 2.54781V1.46067C8.1952 1.53496 9.44597 2.08586 10.4098 2.95064L9.6431 3.7173C9.58358 3.77733 9.55027 3.8585 9.55045 3.94304C9.55063 4.02758 9.58429 4.10861 9.64407 4.16839C9.70384 4.22817 9.78487 4.26184 9.86941 4.26203C9.95395 4.26222 10.0351 4.22891 10.0952 4.1694L10.8618 3.40274C11.7266 4.36653 12.2775 5.6173 12.3518 6.99283H11.2646C11.0881 6.99283 10.945 7.13591 10.945 7.3125C10.945 7.48909 11.0881 7.63217 11.2646 7.63217H12.3518C12.2803 8.97139 11.7603 10.2268 10.8639 11.2243L10.0952 10.4556C10.0349 10.3973 9.95409 10.365 9.87024 10.3657C9.78638 10.3664 9.70616 10.4001 9.64687 10.4594C9.58758 10.5187 9.55396 10.5989 9.55325 10.6827C9.55254 10.7666 9.58481 10.8474 9.6431 10.9077L10.6441 11.9087C10.6738 11.9384 10.709 11.962 10.7478 11.978C10.7866 11.9941 10.8281 12.0023 10.8701 12.0023C10.9121 12.0023 10.9537 11.9941 10.9925 11.978C11.0313 11.9619 11.0665 11.9384 11.0962 11.9087C12.3239 10.6809 13 9.04866 13 7.3125Z" />
                                <path d="M7.96853 3.64648C7.92956 3.63086 7.8879 3.62307 7.84592 3.62356C7.80394 3.62404 7.76247 3.63279 7.72387 3.64931C7.68528 3.66583 7.65031 3.68979 7.62098 3.71982C7.59165 3.74986 7.56852 3.78537 7.55292 3.82435L6.62915 6.13025C6.58625 6.12537 6.54313 6.12278 6.49996 6.12249C6.05003 6.12249 5.64362 6.37171 5.43924 6.77288C5.22562 7.19225 5.28035 7.69332 5.58553 8.11316C5.61729 8.15668 5.65563 8.19499 5.69916 8.22675C5.9471 8.407 6.22402 8.50226 6.49996 8.50226C6.94989 8.50226 7.35634 8.25305 7.56067 7.85188C7.7743 7.43251 7.71957 6.93148 7.4146 6.51194C7.3828 6.46827 7.34439 6.42982 7.30076 6.39797C7.27754 6.38137 7.25388 6.36541 7.22979 6.3501L8.1464 4.06206C8.17791 3.98336 8.17688 3.89537 8.14352 3.81744C8.11016 3.73951 8.04722 3.67801 7.96853 3.64648ZM6.99093 7.56166C6.94504 7.65244 6.87483 7.72868 6.78812 7.78187C6.70142 7.83506 6.60163 7.8631 6.49992 7.86287C6.36335 7.86287 6.22589 7.81518 6.0912 7.72107C5.93776 7.50075 5.90763 7.26189 6.00894 7.06306C6.05482 6.97227 6.12504 6.89602 6.21175 6.84283C6.29845 6.78964 6.39824 6.7616 6.49996 6.76184C6.56637 6.76184 6.63294 6.77335 6.69935 6.79572C6.70152 6.79662 6.70353 6.79777 6.70574 6.79867C6.71273 6.80144 6.71976 6.80369 6.7268 6.80595C6.79115 6.83099 6.85221 6.86378 6.90863 6.9036C7.06203 7.12392 7.0922 7.36282 6.99093 7.56166Z" />
                              </g>
                            </svg>
                            2500 miles
                          </li>
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_143901" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_143901)">
                                <path d="M6.42663 3.45316H10.8878C10.949 3.45316 11.0077 3.43176 11.051 3.39366C11.0943 3.35557 11.1186 3.3039 11.1186 3.25003V1.82813C11.1186 1.77426 11.0943 1.72259 11.051 1.6845C11.0077 1.6464 10.949 1.625 10.8878 1.625H7.19516C7.15154 1.62499 7.10882 1.63587 7.07193 1.65636C7.03505 1.67685 7.00551 1.70612 6.98676 1.74078L6.21823 3.16268C6.20147 3.19365 6.1939 3.22784 6.19621 3.26208C6.19852 3.29632 6.21064 3.32948 6.23145 3.35848C6.25226 3.38748 6.28107 3.41138 6.3152 3.42793C6.34933 3.44448 6.38766 3.45316 6.42663 3.45316ZM7.34102 2.03126H10.657V3.0469H6.79197L7.34102 2.03126Z" />
                                <path d="M1.49911 3.21956C1.56073 3.24028 1.64058 3.21936 1.67497 3.2027L1.87622 3.10601L2.16332 3.56955C1.79404 3.78793 1.49148 4.08293 1.28231 4.42852C1.07314 4.77412 0.963791 5.1597 0.963905 5.55127V11.5781C0.963905 12.3622 1.68859 13 2.57944 13H10.8879C11.7787 13 12.5034 12.3622 12.5034 11.5781V1.42187C12.5034 0.861847 11.9858 0.406229 11.3495 0.406229H7.42603C7.03602 0.404981 6.6534 0.499924 6.32156 0.680298C5.98972 0.860671 5.72194 1.11926 5.54855 1.42675L5.17444 2.08732L4.57947 2.3778L4.30759 1.93944L4.51115 1.84174C4.56484 1.81594 4.60469 1.77244 4.62196 1.72079C4.63923 1.66914 4.63249 1.61358 4.60324 1.5663L3.82986 0.316853C3.74165 0.175448 3.59347 0.0704953 3.41766 0.0249036C3.24185 -0.0206881 3.05269 -0.00321658 2.89147 0.0735044L0.862588 1.04649C0.53025 1.20635 0.405854 1.57645 0.586101 1.87261L1.36156 3.12186C1.37608 3.1453 1.39574 3.16598 1.41938 3.18272C1.44303 3.19945 1.4702 3.2119 1.49934 3.21936L1.49911 3.21956ZM3.11164 0.430605C3.16571 0.406431 3.22823 0.401358 3.2864 0.416425C3.34458 0.431492 3.39402 0.465558 3.42459 0.511653L4.08742 1.58255L3.58084 1.82529L3.24804 1.28984C3.21792 1.24381 3.16853 1.21 3.11043 1.19564C3.05234 1.18128 2.99016 1.18752 2.93723 1.21302C2.8843 1.23852 2.84482 1.28125 2.82725 1.33206C2.80968 1.38287 2.81541 1.43771 2.84323 1.48484L3.17557 2.01948L2.56697 2.31117L2.2351 1.77714C2.20498 1.73112 2.15559 1.69731 2.09749 1.68295C2.0394 1.66859 1.97723 1.67483 1.92429 1.70033C1.87136 1.72583 1.83188 1.76856 1.81431 1.81936C1.79674 1.87017 1.80248 1.92502 1.83029 1.97215L2.16171 2.50536L1.85845 2.6508L1.85729 2.65121L1.65604 2.74851L0.992292 1.67924C0.963266 1.63183 0.956605 1.57627 0.973751 1.52457C0.990897 1.47288 1.03047 1.4292 1.08392 1.40298L3.11164 0.430605ZM3.60391 3.33778L5.46085 2.41212C5.5017 2.39222 5.53448 2.36175 5.55548 2.32519L5.96144 1.60834C6.09866 1.36989 6.30803 1.16942 6.56646 1.02903C6.82489 0.888634 7.12234 0.81377 7.42603 0.812689H11.3495C11.7312 0.812689 12.0418 1.0861 12.0418 1.42208V11.5783C12.0418 12.1383 11.5242 12.5939 10.8879 12.5939H2.57944C1.94315 12.5939 1.42549 12.1383 1.42549 11.5783V5.55148C1.42528 5.19819 1.53251 4.8513 1.73603 4.5468C1.93955 4.2423 2.23196 3.99128 2.5829 3.81981C2.63616 3.7938 2.67559 3.75032 2.69258 3.69883C2.70957 3.64735 2.70275 3.59205 2.6736 3.54497L2.28149 2.91182L3.9021 2.13424L4.17743 2.57808L3.37359 2.98596C3.34732 2.99928 3.32429 3.01703 3.30582 3.03818C3.28735 3.05934 3.27379 3.08349 3.26593 3.10926C3.25806 3.13502 3.25604 3.1619 3.25998 3.18836C3.26392 3.21481 3.27374 3.24032 3.28889 3.26344C3.33158 3.32864 3.47629 3.38795 3.60415 3.33798L3.60391 3.33778Z" />
                                <path d="M9.50334 9.46291V6.58418L10.8205 5.42492C10.8419 5.40607 10.8589 5.38369 10.8705 5.35904C10.8822 5.3344 10.8881 5.30799 10.8881 5.28131C10.8881 5.25463 10.8822 5.22822 10.8705 5.20357C10.8589 5.17893 10.8419 5.15654 10.8205 5.1377L9.8973 4.32518C9.87589 4.3063 9.85046 4.29132 9.82246 4.2811C9.79446 4.27089 9.76445 4.26562 9.73414 4.26562C9.70382 4.26562 9.67381 4.27089 9.64581 4.2811C9.61781 4.29132 9.59238 4.3063 9.57097 4.32518L8.25385 5.48444H5.21388L3.89676 4.32518C3.87534 4.3063 3.84991 4.29132 3.82191 4.2811C3.79391 4.27089 3.7639 4.26562 3.73359 4.26562C3.70328 4.26562 3.67326 4.27089 3.64527 4.2811C3.61727 4.29132 3.59183 4.3063 3.57042 4.32518L2.64726 5.1377C2.62581 5.15654 2.60879 5.17893 2.59718 5.20357C2.58557 5.22822 2.57959 5.25463 2.57959 5.28131C2.57959 5.30799 2.58557 5.3344 2.59718 5.35904C2.60879 5.38369 2.62581 5.40607 2.64726 5.42492L3.96438 6.58418V9.46291L2.64726 10.6222C2.62581 10.641 2.60879 10.6634 2.59718 10.688C2.58557 10.7127 2.57959 10.7391 2.57959 10.7658C2.57959 10.7925 2.58557 10.8189 2.59718 10.8435C2.60879 10.8682 2.62581 10.8905 2.64726 10.9094L3.57042 11.7219C3.59183 11.7408 3.61727 11.7558 3.64527 11.766C3.67326 11.7762 3.70328 11.7815 3.73359 11.7815C3.7639 11.7815 3.79391 11.7762 3.82191 11.766C3.84991 11.7558 3.87534 11.7408 3.89676 11.7219L5.21388 10.5627H8.25385L9.57097 11.7219C9.59235 11.7408 9.61777 11.7559 9.64578 11.7661C9.67378 11.7764 9.70381 11.7816 9.73414 11.7816C9.76446 11.7816 9.79449 11.7764 9.82249 11.7661C9.8505 11.7559 9.87592 11.7408 9.8973 11.7219L10.8205 10.9094C10.8419 10.8905 10.8589 10.8682 10.8705 10.8435C10.8822 10.8189 10.8881 10.7925 10.8881 10.7658C10.8881 10.7391 10.8822 10.7127 10.8705 10.688C10.8589 10.6634 10.8419 10.641 10.8205 10.6222L9.50334 9.46291ZM9.73414 11.2911L8.51256 10.2159C8.46929 10.1778 8.4106 10.1564 8.34939 10.1564H5.11833C5.08802 10.1564 5.058 10.1616 5.03 10.1718C5.002 10.182 4.97656 10.197 4.95516 10.2159L3.73359 11.2911L3.13676 10.7658L4.35834 9.69062C4.40162 9.65254 4.42595 9.60088 4.42596 9.54701V6.50008C4.42599 6.4734 4.42003 6.44698 4.40843 6.42234C4.39682 6.39769 4.3798 6.37531 4.35834 6.35647L3.13676 5.28131L3.73359 4.75602L4.95516 5.83118C4.99843 5.86927 5.05712 5.89068 5.11833 5.89069H8.34939C8.41055 5.89069 8.4694 5.86937 8.51256 5.83118L9.73414 4.75602L10.331 5.28131L9.10939 6.35647C9.0661 6.39455 9.04178 6.44621 9.04176 6.50008V9.54701C9.04176 9.60084 9.066 9.65264 9.10939 9.69062L10.331 10.7658L9.73414 11.2911Z" />
                                <path d="M8.11844 6.5H5.34895C5.28774 6.5 5.22904 6.5214 5.18576 6.55949C5.14248 6.59759 5.11816 6.64926 5.11816 6.70313V9.3438C5.11816 9.39767 5.14248 9.44934 5.18576 9.48743C5.22904 9.52553 5.28774 9.54693 5.34895 9.54693H7.19528C7.25649 9.54693 7.31519 9.52553 7.35847 9.48743C7.40175 9.44934 7.42607 9.39767 7.42607 9.3438C7.42607 9.28993 7.40175 9.23826 7.35847 9.20017C7.31519 9.16207 7.25649 9.14067 7.19528 9.14067H5.57974V6.90626H7.88765V8.53129C7.88765 8.58516 7.91196 8.63683 7.95524 8.67492C7.99853 8.71301 8.05723 8.73441 8.11844 8.73441C8.17965 8.73441 8.23835 8.71301 8.28163 8.67492C8.32491 8.63683 8.34923 8.58516 8.34923 8.53129V6.70313C8.34923 6.64926 8.32491 6.59759 8.28163 6.55949C8.23835 6.5214 8.17965 6.5 8.11844 6.5ZM11.1187 6.5C11.0575 6.5 10.9988 6.5214 10.9555 6.55949C10.9122 6.59759 10.8879 6.64926 10.8879 6.70313V8.53129C10.8879 8.58516 10.9122 8.63683 10.9555 8.67492C10.9988 8.71301 11.0575 8.73441 11.1187 8.73441C11.1799 8.73441 11.2386 8.71301 11.2819 8.67492C11.3252 8.63683 11.3495 8.58516 11.3495 8.53129V6.70313C11.3495 6.64926 11.3252 6.59759 11.2819 6.55949C11.2386 6.5214 11.1799 6.5 11.1187 6.5Z" />
                                <path d="M11.1187 9.54713C11.2462 9.54713 11.3495 9.45618 11.3495 9.344C11.3495 9.23181 11.2462 9.14087 11.1187 9.14087C10.9913 9.14087 10.8879 9.23181 10.8879 9.344C10.8879 9.45618 10.9913 9.54713 11.1187 9.54713Z" />
                              </g>
                            </svg>
                            Petrol + Gas
                          </li>
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_143202" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_143202)">
                                <path d="M8.28713 6.95811H7.8187L8.04511 5.25406C8.05414 5.18229 8.0395 5.10942 8.00367 5.04772C7.96783 4.98603 7.91299 4.93928 7.84838 4.91536C7.71188 4.86288 7.56173 4.91605 7.49608 5.02788L5.69038 7.50535C5.65489 7.56344 5.63505 7.63066 5.63299 7.69979C5.63093 7.76892 5.64673 7.83733 5.67868 7.89767C5.74498 8.02486 5.87281 8.10369 6.01256 8.10369H6.481L6.25458 9.80774C6.24555 9.87951 6.26019 9.95238 6.29602 10.0141C6.33186 10.0758 6.3867 10.1225 6.45131 10.1464C6.48728 10.1604 6.52433 10.1668 6.56051 10.1668C6.66148 10.1668 6.7553 10.1162 6.80361 10.0339L8.60931 7.55645C8.6448 7.49836 8.66464 7.43113 8.6667 7.36201C8.66876 7.29288 8.65297 7.22446 8.62101 7.16412C8.58787 7.10133 8.53941 7.0491 8.48068 7.01286C8.42196 6.97663 8.35512 6.95772 8.28713 6.95811ZM6.75226 9.35537L6.94488 7.90684C6.94922 7.87436 6.94692 7.84127 6.93813 7.80981C6.92934 7.77836 6.91427 7.74926 6.89394 7.7245C6.8736 7.69973 6.84848 7.67987 6.82026 7.66626C6.79204 7.65264 6.76139 7.6456 6.73038 7.64559H6.13433L7.54743 5.70665L7.35481 7.15519C7.35047 7.18767 7.35277 7.22075 7.36156 7.25221C7.37035 7.28367 7.38542 7.31276 7.40575 7.33753C7.42609 7.36229 7.45121 7.38215 7.47943 7.39577C7.50765 7.40938 7.5383 7.41643 7.56931 7.41643H8.16536L6.75226 9.35537Z" />
                                <path d="M12.35 4.89575H11.9167C11.5583 4.89575 11.2667 5.2042 11.2667 5.58324V6.27072H10.8333V4.20827C10.8333 3.70274 10.4446 3.29162 9.96667 3.29162H8.88333V2.83329H10.1833C10.5417 2.83329 10.8333 2.52484 10.8333 2.14581V1.68749C10.8333 1.30845 10.5417 1 10.1833 1H5.85C5.49163 1 5.2 1.30845 5.2 1.68749V2.14581C5.2 2.52484 5.49163 2.83329 5.85 2.83329H7.15V3.29162H5.86863C5.66627 3.29162 5.46932 3.36701 5.31397 3.50405L4.37515 4.3311C4.29737 4.39972 4.19932 4.43735 4.09803 4.43743H3.03333C2.55537 4.43743 2.16667 4.84854 2.16667 5.35408V6.27072H1.73333V4.89575C1.73333 4.51672 1.4417 4.20827 1.08333 4.20827H0.65C0.291633 4.20827 0 4.51672 0 4.89575V9.47899C0 9.85802 0.291633 10.1665 0.65 10.1665H1.08333C1.4417 10.1665 1.73333 9.85802 1.73333 9.47899V8.10402H2.16667V9.47899C2.16667 9.98452 2.55537 10.3956 3.03333 10.3956H3.73945C3.89458 10.3956 4.03888 10.4841 4.11558 10.6266L4.60807 11.5378C4.68391 11.6781 4.79344 11.7947 4.92557 11.8759C5.0577 11.957 5.20775 11.9998 5.36055 12H9.22892C9.35599 12.0002 9.48154 11.9707 9.59662 11.9137C9.7117 11.8567 9.81349 11.7736 9.89473 11.6702L10.6325 10.7339C10.7622 10.569 10.8332 10.3614 10.8333 10.147V8.10425H11.2667V8.79173C11.2667 9.17077 11.5583 9.47922 11.9167 9.47922H12.35C12.7084 9.47922 13 9.17077 13 8.79173V5.58347C13 5.20443 12.7084 4.89575 12.35 4.89575ZM1.3 9.47899C1.3 9.53977 1.27717 9.59805 1.23654 9.64103C1.19591 9.68401 1.1408 9.70815 1.08333 9.70815H0.65C0.592536 9.70815 0.537426 9.68401 0.496794 9.64103C0.456161 9.59805 0.433333 9.53977 0.433333 9.47899V4.89575C0.433333 4.83497 0.456161 4.77669 0.496794 4.73371C0.537426 4.69073 0.592536 4.66659 0.65 4.66659H1.08333C1.1408 4.66659 1.19591 4.69073 1.23654 4.73371C1.27717 4.77669 1.3 4.83497 1.3 4.89575V9.47899ZM1.73333 7.64569V6.72905H2.16667V7.64569H1.73333ZM5.63333 2.14581V1.68749C5.63333 1.62671 5.65616 1.56842 5.69679 1.52544C5.73743 1.48247 5.79254 1.45832 5.85 1.45832H10.1833C10.2408 1.45832 10.2959 1.48247 10.3365 1.52544C10.3772 1.56842 10.4 1.62671 10.4 1.68749V2.14581C10.4 2.20659 10.3772 2.26488 10.3365 2.30785C10.2959 2.35083 10.2408 2.37497 10.1833 2.37497H5.85C5.79254 2.37497 5.73743 2.35083 5.69679 2.30785C5.65616 2.26488 5.63333 2.20659 5.63333 2.14581ZM7.58333 2.83329H8.45V3.29162H7.58333V2.83329ZM10.4 10.1468C10.4 10.2538 10.3643 10.3578 10.2995 10.4401L9.56193 11.3764C9.52126 11.4281 9.47034 11.4697 9.41279 11.4982C9.35524 11.5267 9.29247 11.5415 9.22892 11.5414H5.36055C5.28417 11.5414 5.20916 11.52 5.14311 11.4794C5.07706 11.4389 5.02232 11.3806 4.98442 11.3105L4.49193 10.3993C4.41609 10.259 4.30656 10.1424 4.17443 10.0612C4.0423 9.98006 3.89225 9.93724 3.73945 9.93708H3.03333C2.79435 9.93708 2.6 9.73153 2.6 9.47876V5.35385C2.6 5.10108 2.79435 4.89552 3.03333 4.89552H4.09803C4.3004 4.89552 4.49735 4.82013 4.6527 4.68309L5.59152 3.85604C5.66929 3.78742 5.76735 3.7498 5.86863 3.74971H9.96667C10.2057 3.74971 10.4 3.95527 10.4 4.20804V10.1465V10.1468ZM10.8333 7.64569V6.72905H11.2667V7.64569H10.8333ZM12.5667 8.7915C12.5667 8.85228 12.5438 8.91057 12.5032 8.95355C12.4626 8.99652 12.4075 9.02067 12.35 9.02067H11.9167C11.8592 9.02067 11.8041 8.99652 11.7635 8.95355C11.7228 8.91057 11.7 8.85228 11.7 8.7915V5.58324C11.7 5.52246 11.7228 5.46417 11.7635 5.4212C11.8041 5.37822 11.8592 5.35408 11.9167 5.35408H12.35C12.4075 5.35408 12.4626 5.37822 12.5032 5.4212C12.5438 5.46417 12.5667 5.52246 12.5667 5.58324V8.7915Z" />
                              </g>
                            </svg>
                            Electric
                          </li>
                        </ul>
                        <div className="content-btm">
                         <Link legacyBehavior href="/car-deatils">
                            <a className="view-btn2">
                            <svg width={35} height={21} viewBox="0 0 35 21" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 20C5.47715 20 1 15.7467 1 10.5C1 5.25329 5.47715 1 11 1" strokeLinecap="round" />
                              <path d="M14.2597 3C14.1569 3 14.0583 3.04166 13.9856 3.11582C13.9129 3.18997 13.8721 3.29055 13.8721 3.39542C13.8721 3.50029 13.9129 3.60086 13.9856 3.67502C14.0583 3.74917 14.1569 3.79083 14.2597 3.79083H15.8104C15.9132 3.79083 16.0118 3.74917 16.0845 3.67502C16.1572 3.60086 16.198 3.50029 16.198 3.39542C16.198 3.29055 16.1572 3.18997 16.0845 3.11582C16.0118 3.04166 15.9132 3 15.8104 3H14.2597ZM16.7795 3C16.6767 3 16.5781 3.04166 16.5054 3.11582C16.4327 3.18997 16.3919 3.29055 16.3919 3.39542C16.3919 3.50029 16.4327 3.60086 16.5054 3.67502C16.5781 3.74917 16.6767 3.79083 16.7795 3.79083H21.3346C21.4374 3.79083 21.536 3.74917 21.6087 3.67502C21.6814 3.60086 21.7222 3.50029 21.7222 3.39542C21.7222 3.29055 21.6814 3.18997 21.6087 3.11582C21.536 3.04166 21.4374 3 21.3346 3H16.7795Z" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M15.2292 5.76953C15.1264 5.76953 15.0278 5.81119 14.9551 5.88535C14.8824 5.9595 14.8415 6.06008 14.8415 6.16495C14.8415 6.26982 14.8824 6.3704 14.9551 6.44455C15.0278 6.51871 15.1264 6.56037 15.2292 6.56037H24.1454C25.653 6.56037 26.5822 6.79999 27.3256 7.18493C27.9575 7.51194 28.4672 7.9467 29.1055 8.49119C29.2375 8.60368 29.3749 8.72073 29.5201 8.84271L29.6101 8.91824L29.726 8.93069C33.2653 9.31069 34.0622 10.5309 34.2246 11.1557V12.6893C34.2246 12.7942 34.1838 12.8948 34.1111 12.9689C34.0384 13.0431 33.9398 13.0847 33.8369 13.0847H32.8356C32.6511 11.9627 31.6943 11.1077 30.5418 11.1077C29.3893 11.1077 28.4325 11.9627 28.248 13.0847H21.2058C21.0212 11.9627 20.0645 11.1077 18.912 11.1077C17.7594 11.1077 16.8027 11.9627 16.6182 13.0847H14.7446C14.6418 13.0847 14.5432 13.1264 14.4705 13.2006C14.3978 13.2747 14.3569 13.3753 14.3569 13.4802C14.3569 13.585 14.3978 13.6856 14.4705 13.7598C14.5432 13.8339 14.6418 13.8756 14.7446 13.8756H16.6182C16.8027 14.9976 17.7594 15.8527 18.912 15.8527C20.0645 15.8527 21.0212 14.9976 21.2058 13.8756H28.248C28.4325 14.9976 29.3893 15.8527 30.5418 15.8527C31.6943 15.8527 32.6511 14.9976 32.8356 13.8756H33.8369C34.1454 13.8756 34.4412 13.7506 34.6593 13.5281C34.8774 13.3057 34.9999 13.0039 34.9999 12.6893V11.0626L34.99 11.0187C34.7431 9.92754 33.5791 8.57502 29.9239 8.15706C29.8217 8.07086 29.7215 7.98505 29.6227 7.90063C28.9828 7.35397 28.3942 6.851 27.6766 6.4795C26.7966 6.02418 25.7391 5.76953 24.1454 5.76953H15.2292ZM28.9912 13.4802C28.9912 13.0607 29.1545 12.6584 29.4453 12.3618C29.7361 12.0651 30.1306 11.8985 30.5418 11.8985C30.9531 11.8985 31.3475 12.0651 31.6383 12.3618C31.9291 12.6584 32.0925 13.0607 32.0925 13.4802C32.0925 13.8996 31.9291 14.302 31.6383 14.5986C31.3475 14.8952 30.9531 15.0618 30.5418 15.0618C30.1306 15.0618 29.7361 14.8952 29.4453 14.5986C29.1545 14.302 28.9912 13.8996 28.9912 13.4802ZM18.912 11.8985C18.5007 11.8985 18.1063 12.0651 17.8155 12.3618C17.5247 12.6584 17.3613 13.0607 17.3613 13.4802C17.3613 13.8996 17.5247 14.302 17.8155 14.5986C18.1063 14.8952 18.5007 15.0618 18.912 15.0618C19.3232 15.0618 19.7176 14.8952 20.0084 14.5986C20.2992 14.302 20.4626 13.8996 20.4626 13.4802C20.4626 13.0607 20.2992 12.6584 20.0084 12.3618C19.7176 12.0651 19.3232 11.8985 18.912 11.8985Z" />
                              <path d="M11 8.14151C11 8.03664 11.0408 7.93606 11.1135 7.86191C11.1862 7.78775 11.2848 7.74609 11.3877 7.74609H15.7489C15.8517 7.74609 15.9503 7.78775 16.023 7.86191C16.0957 7.93606 16.1365 8.03664 16.1365 8.14151C16.1365 8.24638 16.0957 8.34696 16.023 8.42111C15.9503 8.49527 15.8517 8.53693 15.7489 8.53693H11.3877C11.2848 8.53693 11.1862 8.49527 11.1135 8.42111C11.0408 8.34696 11 8.24638 11 8.14151ZM26.6836 8.65278C26.7563 8.72694 26.7971 8.82749 26.7971 8.93234C26.7971 9.03719 26.7563 9.13775 26.6836 9.2119L26.6532 9.24294C26.2897 9.61367 25.7968 9.82197 25.2828 9.82203H19.1409C19.0381 9.82203 18.9395 9.78037 18.8668 9.70622C18.7941 9.63206 18.7532 9.53149 18.7532 9.42662C18.7532 9.32174 18.7941 9.22117 18.8668 9.14701C18.9395 9.07286 19.0381 9.0312 19.1409 9.0312H25.2826C25.4354 9.03122 25.5866 9.00055 25.7277 8.94095C25.8688 8.88134 25.997 8.79397 26.105 8.68382L26.1355 8.65278C26.2082 8.57866 26.3068 8.53701 26.4096 8.53701C26.5123 8.53701 26.6109 8.57866 26.6836 8.65278ZM19.5286 17.7304C19.5286 17.6255 19.5694 17.5249 19.6421 17.4508C19.7148 17.3766 19.8134 17.335 19.9162 17.335H21.5638C21.6666 17.335 21.7652 17.3766 21.8379 17.4508C21.9106 17.5249 21.9514 17.6255 21.9514 17.7304C21.9514 17.8352 21.9106 17.9358 21.8379 18.01C21.7652 18.0841 21.6666 18.1258 21.5638 18.1258H19.9162C19.8134 18.1258 19.7148 18.0841 19.6421 18.01C19.5694 17.9358 19.5286 17.8352 19.5286 17.7304ZM22.2422 17.7304C22.2422 17.6255 22.283 17.5249 22.3557 17.4508C22.4284 17.3766 22.527 17.335 22.6299 17.335H26.991C27.0939 17.335 27.1925 17.3766 27.2652 17.4508C27.3379 17.5249 27.3787 17.6255 27.3787 17.7304C27.3787 17.8352 27.3379 17.9358 27.2652 18.01C27.1925 18.0841 27.0939 18.1258 26.991 18.1258H22.6299C22.527 18.1258 22.4284 18.0841 22.3557 18.01C22.283 17.9358 22.2422 17.8352 22.2422 17.7304Z" />
                            </svg>
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="product-card">
                      <div className="product-img">
                        <div className="number-of-img">
                          <img src="assets/img/home1/icon/gallery-icon-1.svg" alt="" />
                          10
                        </div>
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                        <div className="slider-btn-group">
                          <div className="product-stand-next swiper-arrow">
                            <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                            </svg>
                          </div>
                          <div className="product-stand-prev swiper-arrow">
                            <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-13.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-13.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home1/product-img-13.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h5><Link legacyBehavior href="/car-deatils"><a>Chevrolet Silverado-2023</a></Link></h5>
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <ul className="features">
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_144904" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_144904)">
                                <path d="M13 7.3125C13 5.53674 12.284 3.9253 11.1258 2.75099C11.1167 2.73873 11.1068 2.72712 11.0962 2.71625C11.0853 2.70558 11.0737 2.69569 11.0615 2.68667C9.88716 1.52848 8.27571 0.8125 6.5 0.8125C4.72429 0.8125 3.11284 1.52852 1.93849 2.68667C1.92625 2.69572 1.91466 2.7056 1.9038 2.71625C1.89311 2.72711 1.88321 2.73872 1.87417 2.75099C0.716023 3.9253 0 5.53674 0 7.3125C0 9.04849 0.675957 10.6805 1.90333 11.9081L1.90384 11.9087L1.90418 11.909L1.90469 11.9095C1.93434 11.9392 1.96957 11.9628 2.00835 11.9788C2.04713 11.9949 2.0887 12.0031 2.13068 12.0031C2.21251 12.0031 2.29435 11.9719 2.35675 11.9094C2.36208 11.9041 2.36689 11.8984 2.37175 11.8928L3.35686 10.9077C3.41637 10.8476 3.44969 10.7665 3.44951 10.6819C3.44933 10.5974 3.41566 10.5163 3.35589 10.4566C3.29611 10.3968 3.21509 10.3631 3.13055 10.3629C3.04601 10.3627 2.96484 10.396 2.9048 10.4556L2.13605 11.2243C1.23965 10.2268 0.719603 8.97139 0.648082 7.63217H1.73527C1.91181 7.63217 2.05494 7.48909 2.05494 7.3125C2.05494 7.13591 1.91181 6.99283 1.73527 6.99283H0.648167C0.722502 5.6173 1.27336 4.36649 2.13814 3.40274L2.9048 4.1694C2.93445 4.19912 2.96968 4.22269 3.00847 4.23875C3.04726 4.25481 3.08884 4.26305 3.13083 4.263C3.19405 4.26299 3.25585 4.24424 3.30841 4.20912C3.36098 4.17399 3.40195 4.12407 3.42614 4.06566C3.45033 4.00725 3.45666 3.94298 3.44433 3.88097C3.432 3.81896 3.40156 3.762 3.35686 3.7173L2.59024 2.9506C3.55403 2.08582 4.8048 1.53496 6.18033 1.46067V2.54781C6.18033 2.72439 6.32346 2.86748 6.5 2.86748C6.67654 2.86748 6.81967 2.72439 6.81967 2.54781V1.46067C8.1952 1.53496 9.44597 2.08586 10.4098 2.95064L9.6431 3.7173C9.58358 3.77733 9.55027 3.8585 9.55045 3.94304C9.55063 4.02758 9.58429 4.10861 9.64407 4.16839C9.70384 4.22817 9.78487 4.26184 9.86941 4.26203C9.95395 4.26222 10.0351 4.22891 10.0952 4.1694L10.8618 3.40274C11.7266 4.36653 12.2775 5.6173 12.3518 6.99283H11.2646C11.0881 6.99283 10.945 7.13591 10.945 7.3125C10.945 7.48909 11.0881 7.63217 11.2646 7.63217H12.3518C12.2803 8.97139 11.7603 10.2268 10.8639 11.2243L10.0952 10.4556C10.0349 10.3973 9.95409 10.365 9.87024 10.3657C9.78638 10.3664 9.70616 10.4001 9.64687 10.4594C9.58758 10.5187 9.55396 10.5989 9.55325 10.6827C9.55254 10.7666 9.58481 10.8474 9.6431 10.9077L10.6441 11.9087C10.6738 11.9384 10.709 11.962 10.7478 11.978C10.7866 11.9941 10.8281 12.0023 10.8701 12.0023C10.9121 12.0023 10.9537 11.9941 10.9925 11.978C11.0313 11.9619 11.0665 11.9384 11.0962 11.9087C12.3239 10.6809 13 9.04866 13 7.3125Z" />
                                <path d="M7.96853 3.64648C7.92956 3.63086 7.8879 3.62307 7.84592 3.62356C7.80394 3.62404 7.76247 3.63279 7.72387 3.64931C7.68528 3.66583 7.65031 3.68979 7.62098 3.71982C7.59165 3.74986 7.56852 3.78537 7.55292 3.82435L6.62915 6.13025C6.58625 6.12537 6.54313 6.12278 6.49996 6.12249C6.05003 6.12249 5.64362 6.37171 5.43924 6.77288C5.22562 7.19225 5.28035 7.69332 5.58553 8.11316C5.61729 8.15668 5.65563 8.19499 5.69916 8.22675C5.9471 8.407 6.22402 8.50226 6.49996 8.50226C6.94989 8.50226 7.35634 8.25305 7.56067 7.85188C7.7743 7.43251 7.71957 6.93148 7.4146 6.51194C7.3828 6.46827 7.34439 6.42982 7.30076 6.39797C7.27754 6.38137 7.25388 6.36541 7.22979 6.3501L8.1464 4.06206C8.17791 3.98336 8.17688 3.89537 8.14352 3.81744C8.11016 3.73951 8.04722 3.67801 7.96853 3.64648ZM6.99093 7.56166C6.94504 7.65244 6.87483 7.72868 6.78812 7.78187C6.70142 7.83506 6.60163 7.8631 6.49992 7.86287C6.36335 7.86287 6.22589 7.81518 6.0912 7.72107C5.93776 7.50075 5.90763 7.26189 6.00894 7.06306C6.05482 6.97227 6.12504 6.89602 6.21175 6.84283C6.29845 6.78964 6.39824 6.7616 6.49996 6.76184C6.56637 6.76184 6.63294 6.77335 6.69935 6.79572C6.70152 6.79662 6.70353 6.79777 6.70574 6.79867C6.71273 6.80144 6.71976 6.80369 6.7268 6.80595C6.79115 6.83099 6.85221 6.86378 6.90863 6.9036C7.06203 7.12392 7.0922 7.36282 6.99093 7.56166Z" />
                              </g>
                            </svg>
                            2500 miles
                          </li>
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_143905" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_143905)">
                                <path d="M6.42663 3.45316H10.8878C10.949 3.45316 11.0077 3.43176 11.051 3.39366C11.0943 3.35557 11.1186 3.3039 11.1186 3.25003V1.82813C11.1186 1.77426 11.0943 1.72259 11.051 1.6845C11.0077 1.6464 10.949 1.625 10.8878 1.625H7.19516C7.15154 1.62499 7.10882 1.63587 7.07193 1.65636C7.03505 1.67685 7.00551 1.70612 6.98676 1.74078L6.21823 3.16268C6.20147 3.19365 6.1939 3.22784 6.19621 3.26208C6.19852 3.29632 6.21064 3.32948 6.23145 3.35848C6.25226 3.38748 6.28107 3.41138 6.3152 3.42793C6.34933 3.44448 6.38766 3.45316 6.42663 3.45316ZM7.34102 2.03126H10.657V3.0469H6.79197L7.34102 2.03126Z" />
                                <path d="M1.49911 3.21956C1.56073 3.24028 1.64058 3.21936 1.67497 3.2027L1.87622 3.10601L2.16332 3.56955C1.79404 3.78793 1.49148 4.08293 1.28231 4.42852C1.07314 4.77412 0.963791 5.1597 0.963905 5.55127V11.5781C0.963905 12.3622 1.68859 13 2.57944 13H10.8879C11.7787 13 12.5034 12.3622 12.5034 11.5781V1.42187C12.5034 0.861847 11.9858 0.406229 11.3495 0.406229H7.42603C7.03602 0.404981 6.6534 0.499924 6.32156 0.680298C5.98972 0.860671 5.72194 1.11926 5.54855 1.42675L5.17444 2.08732L4.57947 2.3778L4.30759 1.93944L4.51115 1.84174C4.56484 1.81594 4.60469 1.77244 4.62196 1.72079C4.63923 1.66914 4.63249 1.61358 4.60324 1.5663L3.82986 0.316853C3.74165 0.175448 3.59347 0.0704953 3.41766 0.0249036C3.24185 -0.0206881 3.05269 -0.00321658 2.89147 0.0735044L0.862588 1.04649C0.53025 1.20635 0.405854 1.57645 0.586101 1.87261L1.36156 3.12186C1.37608 3.1453 1.39574 3.16598 1.41938 3.18272C1.44303 3.19945 1.4702 3.2119 1.49934 3.21936L1.49911 3.21956ZM3.11164 0.430605C3.16571 0.406431 3.22823 0.401358 3.2864 0.416425C3.34458 0.431492 3.39402 0.465558 3.42459 0.511653L4.08742 1.58255L3.58084 1.82529L3.24804 1.28984C3.21792 1.24381 3.16853 1.21 3.11043 1.19564C3.05234 1.18128 2.99016 1.18752 2.93723 1.21302C2.8843 1.23852 2.84482 1.28125 2.82725 1.33206C2.80968 1.38287 2.81541 1.43771 2.84323 1.48484L3.17557 2.01948L2.56697 2.31117L2.2351 1.77714C2.20498 1.73112 2.15559 1.69731 2.09749 1.68295C2.0394 1.66859 1.97723 1.67483 1.92429 1.70033C1.87136 1.72583 1.83188 1.76856 1.81431 1.81936C1.79674 1.87017 1.80248 1.92502 1.83029 1.97215L2.16171 2.50536L1.85845 2.6508L1.85729 2.65121L1.65604 2.74851L0.992292 1.67924C0.963266 1.63183 0.956605 1.57627 0.973751 1.52457C0.990897 1.47288 1.03047 1.4292 1.08392 1.40298L3.11164 0.430605ZM3.60391 3.33778L5.46085 2.41212C5.5017 2.39222 5.53448 2.36175 5.55548 2.32519L5.96144 1.60834C6.09866 1.36989 6.30803 1.16942 6.56646 1.02903C6.82489 0.888634 7.12234 0.81377 7.42603 0.812689H11.3495C11.7312 0.812689 12.0418 1.0861 12.0418 1.42208V11.5783C12.0418 12.1383 11.5242 12.5939 10.8879 12.5939H2.57944C1.94315 12.5939 1.42549 12.1383 1.42549 11.5783V5.55148C1.42528 5.19819 1.53251 4.8513 1.73603 4.5468C1.93955 4.2423 2.23196 3.99128 2.5829 3.81981C2.63616 3.7938 2.67559 3.75032 2.69258 3.69883C2.70957 3.64735 2.70275 3.59205 2.6736 3.54497L2.28149 2.91182L3.9021 2.13424L4.17743 2.57808L3.37359 2.98596C3.34732 2.99928 3.32429 3.01703 3.30582 3.03818C3.28735 3.05934 3.27379 3.08349 3.26593 3.10926C3.25806 3.13502 3.25604 3.1619 3.25998 3.18836C3.26392 3.21481 3.27374 3.24032 3.28889 3.26344C3.33158 3.32864 3.47629 3.38795 3.60415 3.33798L3.60391 3.33778Z" />
                                <path d="M9.50334 9.46291V6.58418L10.8205 5.42492C10.8419 5.40607 10.8589 5.38369 10.8705 5.35904C10.8822 5.3344 10.8881 5.30799 10.8881 5.28131C10.8881 5.25463 10.8822 5.22822 10.8705 5.20357C10.8589 5.17893 10.8419 5.15654 10.8205 5.1377L9.8973 4.32518C9.87589 4.3063 9.85046 4.29132 9.82246 4.2811C9.79446 4.27089 9.76445 4.26562 9.73414 4.26562C9.70382 4.26562 9.67381 4.27089 9.64581 4.2811C9.61781 4.29132 9.59238 4.3063 9.57097 4.32518L8.25385 5.48444H5.21388L3.89676 4.32518C3.87534 4.3063 3.84991 4.29132 3.82191 4.2811C3.79391 4.27089 3.7639 4.26562 3.73359 4.26562C3.70328 4.26562 3.67326 4.27089 3.64527 4.2811C3.61727 4.29132 3.59183 4.3063 3.57042 4.32518L2.64726 5.1377C2.62581 5.15654 2.60879 5.17893 2.59718 5.20357C2.58557 5.22822 2.57959 5.25463 2.57959 5.28131C2.57959 5.30799 2.58557 5.3344 2.59718 5.35904C2.60879 5.38369 2.62581 5.40607 2.64726 5.42492L3.96438 6.58418V9.46291L2.64726 10.6222C2.62581 10.641 2.60879 10.6634 2.59718 10.688C2.58557 10.7127 2.57959 10.7391 2.57959 10.7658C2.57959 10.7925 2.58557 10.8189 2.59718 10.8435C2.60879 10.8682 2.62581 10.8905 2.64726 10.9094L3.57042 11.7219C3.59183 11.7408 3.61727 11.7558 3.64527 11.766C3.67326 11.7762 3.70328 11.7815 3.73359 11.7815C3.7639 11.7815 3.79391 11.7762 3.82191 11.766C3.84991 11.7558 3.87534 11.7408 3.89676 11.7219L5.21388 10.5627H8.25385L9.57097 11.7219C9.59235 11.7408 9.61777 11.7559 9.64578 11.7661C9.67378 11.7764 9.70381 11.7816 9.73414 11.7816C9.76446 11.7816 9.79449 11.7764 9.82249 11.7661C9.8505 11.7559 9.87592 11.7408 9.8973 11.7219L10.8205 10.9094C10.8419 10.8905 10.8589 10.8682 10.8705 10.8435C10.8822 10.8189 10.8881 10.7925 10.8881 10.7658C10.8881 10.7391 10.8822 10.7127 10.8705 10.688C10.8589 10.6634 10.8419 10.641 10.8205 10.6222L9.50334 9.46291ZM9.73414 11.2911L8.51256 10.2159C8.46929 10.1778 8.4106 10.1564 8.34939 10.1564H5.11833C5.08802 10.1564 5.058 10.1616 5.03 10.1718C5.002 10.182 4.97656 10.197 4.95516 10.2159L3.73359 11.2911L3.13676 10.7658L4.35834 9.69062C4.40162 9.65254 4.42595 9.60088 4.42596 9.54701V6.50008C4.42599 6.4734 4.42003 6.44698 4.40843 6.42234C4.39682 6.39769 4.3798 6.37531 4.35834 6.35647L3.13676 5.28131L3.73359 4.75602L4.95516 5.83118C4.99843 5.86927 5.05712 5.89068 5.11833 5.89069H8.34939C8.41055 5.89069 8.4694 5.86937 8.51256 5.83118L9.73414 4.75602L10.331 5.28131L9.10939 6.35647C9.0661 6.39455 9.04178 6.44621 9.04176 6.50008V9.54701C9.04176 9.60084 9.066 9.65264 9.10939 9.69062L10.331 10.7658L9.73414 11.2911Z" />
                                <path d="M8.11844 6.5H5.34895C5.28774 6.5 5.22904 6.5214 5.18576 6.55949C5.14248 6.59759 5.11816 6.64926 5.11816 6.70313V9.3438C5.11816 9.39767 5.14248 9.44934 5.18576 9.48743C5.22904 9.52553 5.28774 9.54693 5.34895 9.54693H7.19528C7.25649 9.54693 7.31519 9.52553 7.35847 9.48743C7.40175 9.44934 7.42607 9.39767 7.42607 9.3438C7.42607 9.28993 7.40175 9.23826 7.35847 9.20017C7.31519 9.16207 7.25649 9.14067 7.19528 9.14067H5.57974V6.90626H7.88765V8.53129C7.88765 8.58516 7.91196 8.63683 7.95524 8.67492C7.99853 8.71301 8.05723 8.73441 8.11844 8.73441C8.17965 8.73441 8.23835 8.71301 8.28163 8.67492C8.32491 8.63683 8.34923 8.58516 8.34923 8.53129V6.70313C8.34923 6.64926 8.32491 6.59759 8.28163 6.55949C8.23835 6.5214 8.17965 6.5 8.11844 6.5ZM11.1187 6.5C11.0575 6.5 10.9988 6.5214 10.9555 6.55949C10.9122 6.59759 10.8879 6.64926 10.8879 6.70313V8.53129C10.8879 8.58516 10.9122 8.63683 10.9555 8.67492C10.9988 8.71301 11.0575 8.73441 11.1187 8.73441C11.1799 8.73441 11.2386 8.71301 11.2819 8.67492C11.3252 8.63683 11.3495 8.58516 11.3495 8.53129V6.70313C11.3495 6.64926 11.3252 6.59759 11.2819 6.55949C11.2386 6.5214 11.1799 6.5 11.1187 6.5Z" />
                                <path d="M11.1187 9.54713C11.2462 9.54713 11.3495 9.45618 11.3495 9.344C11.3495 9.23181 11.2462 9.14087 11.1187 9.14087C10.9913 9.14087 10.8879 9.23181 10.8879 9.344C10.8879 9.45618 10.9913 9.54713 11.1187 9.54713Z" />
                              </g>
                            </svg>
                            Petrol + Gas
                          </li>
                          <li>
                            <svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0_611_143206" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={13}>
                                <rect width={13} height={13} />
                              </mask>
                              <g mask="url(#mask0_611_143206)">
                                <path d="M8.28713 6.95811H7.8187L8.04511 5.25406C8.05414 5.18229 8.0395 5.10942 8.00367 5.04772C7.96783 4.98603 7.91299 4.93928 7.84838 4.91536C7.71188 4.86288 7.56173 4.91605 7.49608 5.02788L5.69038 7.50535C5.65489 7.56344 5.63505 7.63066 5.63299 7.69979C5.63093 7.76892 5.64673 7.83733 5.67868 7.89767C5.74498 8.02486 5.87281 8.10369 6.01256 8.10369H6.481L6.25458 9.80774C6.24555 9.87951 6.26019 9.95238 6.29602 10.0141C6.33186 10.0758 6.3867 10.1225 6.45131 10.1464C6.48728 10.1604 6.52433 10.1668 6.56051 10.1668C6.66148 10.1668 6.7553 10.1162 6.80361 10.0339L8.60931 7.55645C8.6448 7.49836 8.66464 7.43113 8.6667 7.36201C8.66876 7.29288 8.65297 7.22446 8.62101 7.16412C8.58787 7.10133 8.53941 7.0491 8.48068 7.01286C8.42196 6.97663 8.35512 6.95772 8.28713 6.95811ZM6.75226 9.35537L6.94488 7.90684C6.94922 7.87436 6.94692 7.84127 6.93813 7.80981C6.92934 7.77836 6.91427 7.74926 6.89394 7.7245C6.8736 7.69973 6.84848 7.67987 6.82026 7.66626C6.79204 7.65264 6.76139 7.6456 6.73038 7.64559H6.13433L7.54743 5.70665L7.35481 7.15519C7.35047 7.18767 7.35277 7.22075 7.36156 7.25221C7.37035 7.28367 7.38542 7.31276 7.40575 7.33753C7.42609 7.36229 7.45121 7.38215 7.47943 7.39577C7.50765 7.40938 7.5383 7.41643 7.56931 7.41643H8.16536L6.75226 9.35537Z" />
                                <path d="M12.35 4.89575H11.9167C11.5583 4.89575 11.2667 5.2042 11.2667 5.58324V6.27072H10.8333V4.20827C10.8333 3.70274 10.4446 3.29162 9.96667 3.29162H8.88333V2.83329H10.1833C10.5417 2.83329 10.8333 2.52484 10.8333 2.14581V1.68749C10.8333 1.30845 10.5417 1 10.1833 1H5.85C5.49163 1 5.2 1.30845 5.2 1.68749V2.14581C5.2 2.52484 5.49163 2.83329 5.85 2.83329H7.15V3.29162H5.86863C5.66627 3.29162 5.46932 3.36701 5.31397 3.50405L4.37515 4.3311C4.29737 4.39972 4.19932 4.43735 4.09803 4.43743H3.03333C2.55537 4.43743 2.16667 4.84854 2.16667 5.35408V6.27072H1.73333V4.89575C1.73333 4.51672 1.4417 4.20827 1.08333 4.20827H0.65C0.291633 4.20827 0 4.51672 0 4.89575V9.47899C0 9.85802 0.291633 10.1665 0.65 10.1665H1.08333C1.4417 10.1665 1.73333 9.85802 1.73333 9.47899V8.10402H2.16667V9.47899C2.16667 9.98452 2.55537 10.3956 3.03333 10.3956H3.73945C3.89458 10.3956 4.03888 10.4841 4.11558 10.6266L4.60807 11.5378C4.68391 11.6781 4.79344 11.7947 4.92557 11.8759C5.0577 11.957 5.20775 11.9998 5.36055 12H9.22892C9.35599 12.0002 9.48154 11.9707 9.59662 11.9137C9.7117 11.8567 9.81349 11.7736 9.89473 11.6702L10.6325 10.7339C10.7622 10.569 10.8332 10.3614 10.8333 10.147V8.10425H11.2667V8.79173C11.2667 9.17077 11.5583 9.47922 11.9167 9.47922H12.35C12.7084 9.47922 13 9.17077 13 8.79173V5.58347C13 5.20443 12.7084 4.89575 12.35 4.89575ZM1.3 9.47899C1.3 9.53977 1.27717 9.59805 1.23654 9.64103C1.19591 9.68401 1.1408 9.70815 1.08333 9.70815H0.65C0.592536 9.70815 0.537426 9.68401 0.496794 9.64103C0.456161 9.59805 0.433333 9.53977 0.433333 9.47899V4.89575C0.433333 4.83497 0.456161 4.77669 0.496794 4.73371C0.537426 4.69073 0.592536 4.66659 0.65 4.66659H1.08333C1.1408 4.66659 1.19591 4.69073 1.23654 4.73371C1.27717 4.77669 1.3 4.83497 1.3 4.89575V9.47899ZM1.73333 7.64569V6.72905H2.16667V7.64569H1.73333ZM5.63333 2.14581V1.68749C5.63333 1.62671 5.65616 1.56842 5.69679 1.52544C5.73743 1.48247 5.79254 1.45832 5.85 1.45832H10.1833C10.2408 1.45832 10.2959 1.48247 10.3365 1.52544C10.3772 1.56842 10.4 1.62671 10.4 1.68749V2.14581C10.4 2.20659 10.3772 2.26488 10.3365 2.30785C10.2959 2.35083 10.2408 2.37497 10.1833 2.37497H5.85C5.79254 2.37497 5.73743 2.35083 5.69679 2.30785C5.65616 2.26488 5.63333 2.20659 5.63333 2.14581ZM7.58333 2.83329H8.45V3.29162H7.58333V2.83329ZM10.4 10.1468C10.4 10.2538 10.3643 10.3578 10.2995 10.4401L9.56193 11.3764C9.52126 11.4281 9.47034 11.4697 9.41279 11.4982C9.35524 11.5267 9.29247 11.5415 9.22892 11.5414H5.36055C5.28417 11.5414 5.20916 11.52 5.14311 11.4794C5.07706 11.4389 5.02232 11.3806 4.98442 11.3105L4.49193 10.3993C4.41609 10.259 4.30656 10.1424 4.17443 10.0612C4.0423 9.98006 3.89225 9.93724 3.73945 9.93708H3.03333C2.79435 9.93708 2.6 9.73153 2.6 9.47876V5.35385C2.6 5.10108 2.79435 4.89552 3.03333 4.89552H4.09803C4.3004 4.89552 4.49735 4.82013 4.6527 4.68309L5.59152 3.85604C5.66929 3.78742 5.76735 3.7498 5.86863 3.74971H9.96667C10.2057 3.74971 10.4 3.95527 10.4 4.20804V10.1465V10.1468ZM10.8333 7.64569V6.72905H11.2667V7.64569H10.8333ZM12.5667 8.7915C12.5667 8.85228 12.5438 8.91057 12.5032 8.95355C12.4626 8.99652 12.4075 9.02067 12.35 9.02067H11.9167C11.8592 9.02067 11.8041 8.99652 11.7635 8.95355C11.7228 8.91057 11.7 8.85228 11.7 8.7915V5.58324C11.7 5.52246 11.7228 5.46417 11.7635 5.4212C11.8041 5.37822 11.8592 5.35408 11.9167 5.35408H12.35C12.4075 5.35408 12.4626 5.37822 12.5032 5.4212C12.5438 5.46417 12.5667 5.52246 12.5667 5.58324V8.7915Z" />
                              </g>
                            </svg>
                            Electric
                          </li>
                        </ul>
                        <div className="content-btm">
                         <Link legacyBehavior href="/car-deatils">
                            <a className="view-btn2">
                            <svg width={35} height={21} viewBox="0 0 35 21" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 20C5.47715 20 1 15.7467 1 10.5C1 5.25329 5.47715 1 11 1" strokeLinecap="round" />
                              <path d="M14.2597 3C14.1569 3 14.0583 3.04166 13.9856 3.11582C13.9129 3.18997 13.8721 3.29055 13.8721 3.39542C13.8721 3.50029 13.9129 3.60086 13.9856 3.67502C14.0583 3.74917 14.1569 3.79083 14.2597 3.79083H15.8104C15.9132 3.79083 16.0118 3.74917 16.0845 3.67502C16.1572 3.60086 16.198 3.50029 16.198 3.39542C16.198 3.29055 16.1572 3.18997 16.0845 3.11582C16.0118 3.04166 15.9132 3 15.8104 3H14.2597ZM16.7795 3C16.6767 3 16.5781 3.04166 16.5054 3.11582C16.4327 3.18997 16.3919 3.29055 16.3919 3.39542C16.3919 3.50029 16.4327 3.60086 16.5054 3.67502C16.5781 3.74917 16.6767 3.79083 16.7795 3.79083H21.3346C21.4374 3.79083 21.536 3.74917 21.6087 3.67502C21.6814 3.60086 21.7222 3.50029 21.7222 3.39542C21.7222 3.29055 21.6814 3.18997 21.6087 3.11582C21.536 3.04166 21.4374 3 21.3346 3H16.7795Z" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M15.2292 5.76953C15.1264 5.76953 15.0278 5.81119 14.9551 5.88535C14.8824 5.9595 14.8415 6.06008 14.8415 6.16495C14.8415 6.26982 14.8824 6.3704 14.9551 6.44455C15.0278 6.51871 15.1264 6.56037 15.2292 6.56037H24.1454C25.653 6.56037 26.5822 6.79999 27.3256 7.18493C27.9575 7.51194 28.4672 7.9467 29.1055 8.49119C29.2375 8.60368 29.3749 8.72073 29.5201 8.84271L29.6101 8.91824L29.726 8.93069C33.2653 9.31069 34.0622 10.5309 34.2246 11.1557V12.6893C34.2246 12.7942 34.1838 12.8948 34.1111 12.9689C34.0384 13.0431 33.9398 13.0847 33.8369 13.0847H32.8356C32.6511 11.9627 31.6943 11.1077 30.5418 11.1077C29.3893 11.1077 28.4325 11.9627 28.248 13.0847H21.2058C21.0212 11.9627 20.0645 11.1077 18.912 11.1077C17.7594 11.1077 16.8027 11.9627 16.6182 13.0847H14.7446C14.6418 13.0847 14.5432 13.1264 14.4705 13.2006C14.3978 13.2747 14.3569 13.3753 14.3569 13.4802C14.3569 13.585 14.3978 13.6856 14.4705 13.7598C14.5432 13.8339 14.6418 13.8756 14.7446 13.8756H16.6182C16.8027 14.9976 17.7594 15.8527 18.912 15.8527C20.0645 15.8527 21.0212 14.9976 21.2058 13.8756H28.248C28.4325 14.9976 29.3893 15.8527 30.5418 15.8527C31.6943 15.8527 32.6511 14.9976 32.8356 13.8756H33.8369C34.1454 13.8756 34.4412 13.7506 34.6593 13.5281C34.8774 13.3057 34.9999 13.0039 34.9999 12.6893V11.0626L34.99 11.0187C34.7431 9.92754 33.5791 8.57502 29.9239 8.15706C29.8217 8.07086 29.7215 7.98505 29.6227 7.90063C28.9828 7.35397 28.3942 6.851 27.6766 6.4795C26.7966 6.02418 25.7391 5.76953 24.1454 5.76953H15.2292ZM28.9912 13.4802C28.9912 13.0607 29.1545 12.6584 29.4453 12.3618C29.7361 12.0651 30.1306 11.8985 30.5418 11.8985C30.9531 11.8985 31.3475 12.0651 31.6383 12.3618C31.9291 12.6584 32.0925 13.0607 32.0925 13.4802C32.0925 13.8996 31.9291 14.302 31.6383 14.5986C31.3475 14.8952 30.9531 15.0618 30.5418 15.0618C30.1306 15.0618 29.7361 14.8952 29.4453 14.5986C29.1545 14.302 28.9912 13.8996 28.9912 13.4802ZM18.912 11.8985C18.5007 11.8985 18.1063 12.0651 17.8155 12.3618C17.5247 12.6584 17.3613 13.0607 17.3613 13.4802C17.3613 13.8996 17.5247 14.302 17.8155 14.5986C18.1063 14.8952 18.5007 15.0618 18.912 15.0618C19.3232 15.0618 19.7176 14.8952 20.0084 14.5986C20.2992 14.302 20.4626 13.8996 20.4626 13.4802C20.4626 13.0607 20.2992 12.6584 20.0084 12.3618C19.7176 12.0651 19.3232 11.8985 18.912 11.8985Z" />
                              <path d="M11 8.14151C11 8.03664 11.0408 7.93606 11.1135 7.86191C11.1862 7.78775 11.2848 7.74609 11.3877 7.74609H15.7489C15.8517 7.74609 15.9503 7.78775 16.023 7.86191C16.0957 7.93606 16.1365 8.03664 16.1365 8.14151C16.1365 8.24638 16.0957 8.34696 16.023 8.42111C15.9503 8.49527 15.8517 8.53693 15.7489 8.53693H11.3877C11.2848 8.53693 11.1862 8.49527 11.1135 8.42111C11.0408 8.34696 11 8.24638 11 8.14151ZM26.6836 8.65278C26.7563 8.72694 26.7971 8.82749 26.7971 8.93234C26.7971 9.03719 26.7563 9.13775 26.6836 9.2119L26.6532 9.24294C26.2897 9.61367 25.7968 9.82197 25.2828 9.82203H19.1409C19.0381 9.82203 18.9395 9.78037 18.8668 9.70622C18.7941 9.63206 18.7532 9.53149 18.7532 9.42662C18.7532 9.32174 18.7941 9.22117 18.8668 9.14701C18.9395 9.07286 19.0381 9.0312 19.1409 9.0312H25.2826C25.4354 9.03122 25.5866 9.00055 25.7277 8.94095C25.8688 8.88134 25.997 8.79397 26.105 8.68382L26.1355 8.65278C26.2082 8.57866 26.3068 8.53701 26.4096 8.53701C26.5123 8.53701 26.6109 8.57866 26.6836 8.65278ZM19.5286 17.7304C19.5286 17.6255 19.5694 17.5249 19.6421 17.4508C19.7148 17.3766 19.8134 17.335 19.9162 17.335H21.5638C21.6666 17.335 21.7652 17.3766 21.8379 17.4508C21.9106 17.5249 21.9514 17.6255 21.9514 17.7304C21.9514 17.8352 21.9106 17.9358 21.8379 18.01C21.7652 18.0841 21.6666 18.1258 21.5638 18.1258H19.9162C19.8134 18.1258 19.7148 18.0841 19.6421 18.01C19.5694 17.9358 19.5286 17.8352 19.5286 17.7304ZM22.2422 17.7304C22.2422 17.6255 22.283 17.5249 22.3557 17.4508C22.4284 17.3766 22.527 17.335 22.6299 17.335H26.991C27.0939 17.335 27.1925 17.3766 27.2652 17.4508C27.3379 17.5249 27.3787 17.6255 27.3787 17.7304C27.3787 17.8352 27.3379 17.9358 27.2652 18.01C27.1925 18.0841 27.0939 18.1258 26.991 18.1258H22.6299C22.527 18.1258 22.4284 18.0841 22.3557 18.01C22.283 17.9358 22.2422 17.8352 22.2422 17.7304Z" />
                            </svg>
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="400ms">
            <div className="col-lg-12 divider">
              <div className="slider-btn-group style-2 justify-content-md-between justify-content-center">
                <div className="slider-btn prev-2 d-md-flex d-none">
                  <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                  </svg>
                </div>
                <div className="view-btn-area">
                  <p>There will be 100+ Similar Car</p>
                  <Link legacyBehavior  href="/single-brand-category"><a className="view-btn">View More</a></Link>
                </div>
                <div className="slider-btn next-2 d-md-flex d-none">
                  <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="customar-feedback-area mb-100">
        <div className="container">
          <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
            <div className="col-lg-12">
              <div className="section-title1">
                <span>Customer Feedback</span>
                <h2>What Our Customers Are Saying</h2>
              </div>
            </div>
          </div>
          <div className="row g-4 mb-100">
            <div className="col-lg-3 wow fadeInUp" data-wow-delay="200ms">
              <div className="customer-feedback-left">
                <a href="#" className="trustpilot">
                  <h5>Excellent!</h5>
                  <img className="star" src="assets/img/home1/icon/trustpilot-star3.svg" alt="" />
                  <span>Based On <strong>2348</strong> Reviews</span>
                  <img className="logo" src="assets/img/home1/icon/trustpilot-log3.svg" alt="" />
                </a>
                <a href="#" className="google">
                  <img className="logo" src="assets/img/home1/icon/google3.svg" alt="" />
                  <div className="star">
                    <ul>
                      <li className="active"><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li className><i className="bi bi-star-half" /></li>
                    </ul>
                  </div>
                  <span>Based On <strong>1448</strong> Reviews</span>
                </a>
              </div>
            </div>
            <div className="col-lg-9 wow fadeInUp" data-wow-delay="200ms">
              <div className="customer-feedback-right">
                <Swiper {...slideSettings} className="swiper customer-feedback-slider mb-40">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="feedback-card">
                        <div className="feedback-top">
                          <div className="stat-area">
                            <div className="star">
                              <ul>
                                <li className="active"><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li className><i className="bi bi-star-half" /></li>
                              </ul>
                            </div>
                            <span>Great Services!</span>
                          </div>
                          <div className="logo">
                            <img src="assets/img/home1/icon/google3.svg" alt="" />
                          </div>
                        </div>
                        <p>Drivco-Agency to the actively encourage customers to leave
                          reviews to the help promote their products and services.”</p>
                        <div className="author-name">
                          <h6>Nowry Jahan</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="feedback-card">
                        <div className="feedback-top">
                          <div className="stat-area">
                            <img src="assets/img/home1/icon/trustpilot-star.svg" alt="" />
                            <span>Trusted Company</span>
                          </div>
                          <div className="logo">
                            <img src="assets/img/home1/icon/trustpilot-log3.svg" alt="" />
                          </div>
                        </div>
                        <p>Drivco-Agency customer feedback is an invaluable source of
                          information that can help businesses improve their offerings and provide
                          better experiences.</p>
                        <div className="author-name">
                          <h6>Jhon Abraham</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="feedback-card">
                        <div className="feedback-top">
                          <div className="stat-area">
                            <div className="star">
                              <ul>
                                <li className="active"><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li className><i className="bi bi-star-half" /></li>
                              </ul>
                            </div>
                            <span>Great Services!</span>
                          </div>
                          <div className="logo">
                            <img src="assets/img/home1/icon/google3.svg" alt="" />
                          </div>
                        </div>
                        <p>Drivco-Agency to the actively encourage customers to leave
                          reviews to the help promote their products and services.”</p>
                        <div className="author-name">
                          <h6>Nowry Jahan</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="feedback-card">
                        <div className="feedback-top">
                          <div className="stat-area">
                            <img src="assets/img/home1/icon/trustpilot-star.svg" alt="" />
                            <span>Trusted Company</span>
                          </div>
                          <div className="logo">
                            <img src="assets/img/home1/icon/trustpilot-log3.svg" alt="" />
                          </div>
                        </div>
                        <p>Drivco-Agency customer feedback is an invaluable source of
                          information that can help businesses improve their offerings and provide
                          better experiences.</p>
                        <div className="author-name">
                          <h6>Jhon Abraham</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                <div className="row ">
                  <div className="col-lg-12 divider">
                    <div className="slider-btn-group style-2 justify-content-md-between justify-content-center">
                      <div className="slider-btn prev-4 d-md-flex d-none">
                        <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                        </svg>
                      </div>
                      <div className="view-btn-area">
                        <p>Thousand of People Reviews to Us</p>
                        <Link legacyBehavior  href="/customer-review"><a className="view-btn">View All Review</a></Link>
                      </div>
                      <div className="slider-btn next-4 d-md-flex d-none">
                        <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="400ms">
            <div className="col-lg-12">
              <div className="sub-title">
                <h6>Our Trusted Partners</h6>
                <div className="dash" />
              </div>
              <div className="partner-slider">
                <h2 className="marquee_text2">
                <Marquee autoFill="true">
                  <img src="assets/img/home1/company-logo-01.png" alt="" />
                  <img src="assets/img/home1/company-logo-02.png" alt="" />
                  <img src="assets/img/home1/company-logo-03.png" alt="" />
                  <img src="assets/img/home1/company-logo-04.png" alt="" />
                  <img src="assets/img/home1/company-logo-05.png" alt="" />
                  <img src="assets/img/home1/company-logo-06.png" alt="" />
                  <img src="assets/img/home1/company-logo-01.png" alt="" />
                  <img src="assets/img/home1/company-logo-02.png" alt="" />
                  <img src="assets/img/home1/company-logo-03.png" alt="" />
                  <img src="assets/img/home1/company-logo-04.png" alt="" />
                  <img src="assets/img/home1/company-logo-05.png" alt="" />
                  <img src="assets/img/home1/company-logo-06.png" alt="" />
                  <img src="assets/img/home1/company-logo-01.png" alt="" />
                  <img src="assets/img/home1/company-logo-02.png" alt="" />
                  <img src="assets/img/home1/company-logo-03.png" alt="" />
                  <img src="assets/img/home1/company-logo-04.png" alt="" />
                  <img src="assets/img/home1/company-logo-05.png" alt="" />
                  <img src="assets/img/home1/company-logo-06.png" alt="" />
                  <img src="assets/img/home1/company-logo-01.png" alt="" />
                  <img src="assets/img/home1/company-logo-02.png" alt="" />
                  <img src="assets/img/home1/company-logo-03.png" alt="" />
                  <img src="assets/img/home1/company-logo-04.png" alt="" />
                  <img src="assets/img/home1/company-logo-05.png" alt="" />
                  <img src="assets/img/home1/company-logo-06.png" alt="" />
                  </Marquee>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-section two pt-90 pb-90">
        <div className="container">
          <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
            <div className="col-lg-12 d-flex align-items-end justify-content-between flex-wrap gap-4">
              <div className="section-title-2">
                <h2>Latest Car Advice</h2>
                <p>Here are some of the featured cars in different categories</p>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
              <div className="news-card style-2">
                <div className="news-img">
                  <Link legacyBehavior href="/blog-details"><a><img src="assets/img/home1/news-01.png" alt="" /></a></Link>
                  <div className="date">
                    <Link legacyBehavior href="/blog-standard"><a>Buying Advice</a></Link>
                  </div>
                </div>
                <div className="content">
                  <h6><Link legacyBehavior href="/blog-details"><a>The Car Enthusiast: Exploring the World of Cars and Driving.</a></Link>
                  </h6>
                  <div className="news-btm d-flex align-items-center justify-content-between">
                    <div className="author-area">
                      <div className="author-img">
                        <img src="assets/img/home1/author-01.png" alt="" />
                      </div>
                      <div className="author-content">
                        <h6>Mr. Morris Mannu</h6>
                        <Link legacyBehavior href="/blog-standard"><a>Posted on -  03 April, 2023</a></Link>
                      </div>
                    </div>
                    <div className="social-area">
                      <ul className="social-icons">
                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                        <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                        <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                      </ul>
                      <div className="share-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={13} viewBox="0 0 12 13">
                          <path d="M10.125 0.750223C9.82667 0.750223 9.54052 0.868748 9.32955 1.07972C9.11857 1.2907 9.00005 1.57684 9.00005 1.8752C9.00005 2.17357 9.11857 2.45971 9.32955 2.67069C9.54052 2.88166 9.82667 3.00019 10.125 3.00019C10.4234 3.00019 10.7095 2.88166 10.9205 2.67069C11.1315 2.45971 11.25 2.17357 11.25 1.8752C11.25 1.57684 11.1315 1.2907 10.9205 1.07972C10.7095 0.868748 10.4234 0.750223 10.125 0.750223ZM8.25006 1.8752C8.25001 1.43529 8.40464 1.00936 8.68691 0.671933C8.96917 0.33451 9.3611 0.107081 9.79411 0.0294379C10.2271 -0.0482056 10.6736 0.0288801 11.0556 0.247208C11.4375 0.465536 11.7305 0.811204 11.8833 1.22373C12.0361 1.63626 12.0389 2.08939 11.8914 2.50382C11.7439 2.91826 11.4553 3.26762 11.0762 3.49078C10.6971 3.71395 10.2515 3.7967 9.81758 3.72456C9.38362 3.65243 8.98883 3.42999 8.7023 3.09618L3.66389 5.43615C3.77972 5.80322 3.77972 6.19705 3.66389 6.56413L8.7023 8.90409C9.00518 8.55184 9.42804 8.32458 9.88893 8.26634C10.3498 8.2081 10.8159 8.32303 11.1969 8.58886C11.5779 8.85469 11.8466 9.25249 11.951 9.70517C12.0554 10.1578 11.988 10.6332 11.7619 11.039C11.5359 11.4448 11.1672 11.7523 10.7273 11.9018C10.2875 12.0512 9.8078 12.0321 9.38125 11.8481C8.9547 11.6641 8.61165 11.3282 8.4186 10.9057C8.22554 10.4832 8.19621 10.004 8.33631 9.56108L3.29789 7.22112C3.04847 7.51179 2.71602 7.7191 2.34524 7.81517C1.97447 7.91124 1.58317 7.89145 1.22398 7.75847C0.864793 7.62548 0.554947 7.38569 0.336124 7.07133C0.117301 6.75698 0 6.38315 0 6.00014C0 5.61712 0.117301 5.24329 0.336124 4.92894C0.554947 4.61459 0.864793 4.37479 1.22398 4.24181C1.58317 4.10882 1.97447 4.08903 2.34524 4.1851C2.71602 4.28117 3.04847 4.48848 3.29789 4.77916L8.33631 2.4392C8.27896 2.2567 8.24987 2.0665 8.25006 1.8752ZM1.87517 4.87515C1.5768 4.87515 1.29066 4.99368 1.07969 5.20465C0.868711 5.41563 0.750187 5.70177 0.750187 6.00014C0.750187 6.2985 0.868711 6.58464 1.07969 6.79562C1.29066 7.00659 1.5768 7.12512 1.87517 7.12512C2.17353 7.12512 2.45968 7.00659 2.67065 6.79562C2.88162 6.58464 3.00015 6.2985 3.00015 6.00014C3.00015 5.70177 2.88162 5.41563 2.67065 5.20465C2.45968 4.99368 2.17353 4.87515 1.87517 4.87515ZM10.125 9.00009C9.82667 9.00009 9.54052 9.11861 9.32955 9.32959C9.11857 9.54056 9.00005 9.8267 9.00005 10.1251C9.00005 10.4234 9.11857 10.7096 9.32955 10.9205C9.54052 11.1315 9.82667 11.25 10.125 11.25C10.4234 11.25 10.7095 11.1315 10.9205 10.9205C11.1315 10.7096 11.25 10.4234 11.25 10.1251C11.25 9.8267 11.1315 9.54056 10.9205 9.32959C10.7095 9.11861 10.4234 9.00009 10.125 9.00009Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
              <div className="news-card style-2">
                <div className="news-img">
                  <Link legacyBehavior href="/blog-details"><a><img src="assets/img/home1/news-02.png" alt="" /></a></Link>
                  <div className="date">
                    <Link legacyBehavior href="/blog-standard"><a>Car Advice</a></Link>
                  </div>
                </div>
                <div className="content">
                  <h6><Link legacyBehavior href="/blog-details"><a>The Best Car Brands for Performance and Reliability.</a></Link>
                  </h6>
                  <div className="news-btm d-flex align-items-center justify-content-between">
                    <div className="author-area">
                      <div className="author-img">
                        <img src="assets/img/home1/author-02.png" alt="" />
                      </div>
                      <div className="author-content">
                        <h6>Mulish Kary</h6>
                        <Link legacyBehavior href="/blog-standard"><a>Posted on -  03 April, 2023</a></Link>
                      </div>
                    </div>
                    <div className="social-area">
                      <ul className="social-icons">
                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                        <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                        <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                      </ul>
                      <div className="share-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={13} viewBox="0 0 12 13">
                          <path d="M10.125 0.750223C9.82667 0.750223 9.54052 0.868748 9.32955 1.07972C9.11857 1.2907 9.00005 1.57684 9.00005 1.8752C9.00005 2.17357 9.11857 2.45971 9.32955 2.67069C9.54052 2.88166 9.82667 3.00019 10.125 3.00019C10.4234 3.00019 10.7095 2.88166 10.9205 2.67069C11.1315 2.45971 11.25 2.17357 11.25 1.8752C11.25 1.57684 11.1315 1.2907 10.9205 1.07972C10.7095 0.868748 10.4234 0.750223 10.125 0.750223ZM8.25006 1.8752C8.25001 1.43529 8.40464 1.00936 8.68691 0.671933C8.96917 0.33451 9.3611 0.107081 9.79411 0.0294379C10.2271 -0.0482056 10.6736 0.0288801 11.0556 0.247208C11.4375 0.465536 11.7305 0.811204 11.8833 1.22373C12.0361 1.63626 12.0389 2.08939 11.8914 2.50382C11.7439 2.91826 11.4553 3.26762 11.0762 3.49078C10.6971 3.71395 10.2515 3.7967 9.81758 3.72456C9.38362 3.65243 8.98883 3.42999 8.7023 3.09618L3.66389 5.43615C3.77972 5.80322 3.77972 6.19705 3.66389 6.56413L8.7023 8.90409C9.00518 8.55184 9.42804 8.32458 9.88893 8.26634C10.3498 8.2081 10.8159 8.32303 11.1969 8.58886C11.5779 8.85469 11.8466 9.25249 11.951 9.70517C12.0554 10.1578 11.988 10.6332 11.7619 11.039C11.5359 11.4448 11.1672 11.7523 10.7273 11.9018C10.2875 12.0512 9.8078 12.0321 9.38125 11.8481C8.9547 11.6641 8.61165 11.3282 8.4186 10.9057C8.22554 10.4832 8.19621 10.004 8.33631 9.56108L3.29789 7.22112C3.04847 7.51179 2.71602 7.7191 2.34524 7.81517C1.97447 7.91124 1.58317 7.89145 1.22398 7.75847C0.864793 7.62548 0.554947 7.38569 0.336124 7.07133C0.117301 6.75698 0 6.38315 0 6.00014C0 5.61712 0.117301 5.24329 0.336124 4.92894C0.554947 4.61459 0.864793 4.37479 1.22398 4.24181C1.58317 4.10882 1.97447 4.08903 2.34524 4.1851C2.71602 4.28117 3.04847 4.48848 3.29789 4.77916L8.33631 2.4392C8.27896 2.2567 8.24987 2.0665 8.25006 1.8752ZM1.87517 4.87515C1.5768 4.87515 1.29066 4.99368 1.07969 5.20465C0.868711 5.41563 0.750187 5.70177 0.750187 6.00014C0.750187 6.2985 0.868711 6.58464 1.07969 6.79562C1.29066 7.00659 1.5768 7.12512 1.87517 7.12512C2.17353 7.12512 2.45968 7.00659 2.67065 6.79562C2.88162 6.58464 3.00015 6.2985 3.00015 6.00014C3.00015 5.70177 2.88162 5.41563 2.67065 5.20465C2.45968 4.99368 2.17353 4.87515 1.87517 4.87515ZM10.125 9.00009C9.82667 9.00009 9.54052 9.11861 9.32955 9.32959C9.11857 9.54056 9.00005 9.8267 9.00005 10.1251C9.00005 10.4234 9.11857 10.7096 9.32955 10.9205C9.54052 11.1315 9.82667 11.25 10.125 11.25C10.4234 11.25 10.7095 11.1315 10.9205 10.9205C11.1315 10.7096 11.25 10.4234 11.25 10.1251C11.25 9.8267 11.1315 9.54056 10.9205 9.32959C10.7095 9.11861 10.4234 9.00009 10.125 9.00009Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
              <div className="news-card style-2">
                <div className="news-img">
                  <Link legacyBehavior href="/blog-details"><a><img src="assets/img/home1/news-03.png" alt="" /></a></Link>
                  <div className="date">
                    <Link legacyBehavior href="/blog-standard"><a>Driving Advice</a></Link>
                  </div>
                </div>
                <div className="content">
                  <h6><Link legacyBehavior href="/blog-details"><a>The Environmental Impact of Cars and How to Minimize It.</a></Link>
                  </h6>
                  <div className="news-btm d-flex align-items-center justify-content-between">
                    <div className="author-area">
                      <div className="author-img">
                        <img src="assets/img/home1/author-03.png" alt="" />
                      </div>
                      <div className="author-content">
                        <h6>Daniel Scoot</h6>
                        <Link legacyBehavior href="/blog-standard"><a>Posted on -  03 April, 2023</a></Link>
                      </div>
                    </div>
                    <div className="social-area">
                      <ul className="social-icons">
                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                        <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                        <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                      </ul>
                      <div className="share-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={13} viewBox="0 0 12 13">
                          <path d="M10.125 0.750223C9.82667 0.750223 9.54052 0.868748 9.32955 1.07972C9.11857 1.2907 9.00005 1.57684 9.00005 1.8752C9.00005 2.17357 9.11857 2.45971 9.32955 2.67069C9.54052 2.88166 9.82667 3.00019 10.125 3.00019C10.4234 3.00019 10.7095 2.88166 10.9205 2.67069C11.1315 2.45971 11.25 2.17357 11.25 1.8752C11.25 1.57684 11.1315 1.2907 10.9205 1.07972C10.7095 0.868748 10.4234 0.750223 10.125 0.750223ZM8.25006 1.8752C8.25001 1.43529 8.40464 1.00936 8.68691 0.671933C8.96917 0.33451 9.3611 0.107081 9.79411 0.0294379C10.2271 -0.0482056 10.6736 0.0288801 11.0556 0.247208C11.4375 0.465536 11.7305 0.811204 11.8833 1.22373C12.0361 1.63626 12.0389 2.08939 11.8914 2.50382C11.7439 2.91826 11.4553 3.26762 11.0762 3.49078C10.6971 3.71395 10.2515 3.7967 9.81758 3.72456C9.38362 3.65243 8.98883 3.42999 8.7023 3.09618L3.66389 5.43615C3.77972 5.80322 3.77972 6.19705 3.66389 6.56413L8.7023 8.90409C9.00518 8.55184 9.42804 8.32458 9.88893 8.26634C10.3498 8.2081 10.8159 8.32303 11.1969 8.58886C11.5779 8.85469 11.8466 9.25249 11.951 9.70517C12.0554 10.1578 11.988 10.6332 11.7619 11.039C11.5359 11.4448 11.1672 11.7523 10.7273 11.9018C10.2875 12.0512 9.8078 12.0321 9.38125 11.8481C8.9547 11.6641 8.61165 11.3282 8.4186 10.9057C8.22554 10.4832 8.19621 10.004 8.33631 9.56108L3.29789 7.22112C3.04847 7.51179 2.71602 7.7191 2.34524 7.81517C1.97447 7.91124 1.58317 7.89145 1.22398 7.75847C0.864793 7.62548 0.554947 7.38569 0.336124 7.07133C0.117301 6.75698 0 6.38315 0 6.00014C0 5.61712 0.117301 5.24329 0.336124 4.92894C0.554947 4.61459 0.864793 4.37479 1.22398 4.24181C1.58317 4.10882 1.97447 4.08903 2.34524 4.1851C2.71602 4.28117 3.04847 4.48848 3.29789 4.77916L8.33631 2.4392C8.27896 2.2567 8.24987 2.0665 8.25006 1.8752ZM1.87517 4.87515C1.5768 4.87515 1.29066 4.99368 1.07969 5.20465C0.868711 5.41563 0.750187 5.70177 0.750187 6.00014C0.750187 6.2985 0.868711 6.58464 1.07969 6.79562C1.29066 7.00659 1.5768 7.12512 1.87517 7.12512C2.17353 7.12512 2.45968 7.00659 2.67065 6.79562C2.88162 6.58464 3.00015 6.2985 3.00015 6.00014C3.00015 5.70177 2.88162 5.41563 2.67065 5.20465C2.45968 4.99368 2.17353 4.87515 1.87517 4.87515ZM10.125 9.00009C9.82667 9.00009 9.54052 9.11861 9.32955 9.32959C9.11857 9.54056 9.00005 9.8267 9.00005 10.1251C9.00005 10.4234 9.11857 10.7096 9.32955 10.9205C9.54052 11.1315 9.82667 11.25 10.125 11.25C10.4234 11.25 10.7095 11.1315 10.9205 10.9205C11.1315 10.7096 11.25 10.4234 11.25 10.1251C11.25 9.8267 11.1315 9.54056 10.9205 9.32959C10.7095 9.11861 10.4234 9.00009 10.125 9.00009Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        
    </MainLayout>
  )
}

export default CarDeatilsPage