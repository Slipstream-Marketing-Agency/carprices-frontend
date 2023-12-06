import React, { useEffect, useState } from "react";
import { breadcrumbData } from "../data/data";
import { useRouter } from "next/router";
import Link from 'next/link'
function Breadcrumb() {
    const router  = useRouter()
    console.log(router.pathname);
    const currentPathData = breadcrumbData.find((item)=> item.path===router.pathname)
    const lastPathSegment  = currentPathData?.path.split("/").pop()

      // handle dynamic crumbs
      const { brandname } = router.query;
      console.log("brand name : ",brandname);
    const [breadcrumbs, setBreadcrumbs] = useState([]);
    useEffect(() => {
      // Update breadcrumbs based on the current route
      const pathSegments = router.asPath.split('/').filter(segment => segment !== '');
      const dynamicBreadcrumb = {
        title: `Product ${router.query.productId}`, // Replace with dynamic title based on the query parameter
        path: router.asPath,
      };
      const updatedBreadcrumbs = pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        return {
          title: segment,
          path,
        };
      });
  
      // Add the dynamic breadcrumb for the dynamic route
      updatedBreadcrumbs.push(dynamicBreadcrumb);
  
      setBreadcrumbs(updatedBreadcrumbs);
    }, [router]);
    
  return (
    <div className="inner-page-banner">
      <div className="banner-wrapper">
        <div className="container-fluid">
          
        <div>
      {/* Render breadcrumbs */}
      {/* {breadcrumbs.map((breadcrumb, index) => (
       index!=breadcrumbs.length-1 && <span key={breadcrumb.path}>
          {index < breadcrumbs.length - 1 ? (
            <Link href={breadcrumb.path}>
              {breadcrumb.title}
            </Link>
          ) : (
            breadcrumb.title
          )}
          {index < breadcrumbs.length - 1 && ' / '}
        </span>
      ))} */}
    </div>
          
          <ul className="breadcrumb-list">
            <li><Link legacyBehavior href="/"><a>Home</a></Link></li>
            <li style={{textTransform:"capitalize"}}>{lastPathSegment}</li>
          </ul>
          <div className="banner-main-content-wrap">
            <div className="row">
              <div className="col-xl-6 col-lg-7 d-flex align-items-center">

                {!brandname ?
                <div className="banner-content">
                  <span className="sub-title">
                    {currentPathData?.sub_title||"Our Brief History"}
                  </span>
                  <h1>{currentPathData?.title||"Our Brief History"}</h1>
                  <div className="customar-review">
                    <ul>
                      <li>
                        <a href="#">
                          <div className="review-top">
                            <div className="logo">
                              <img src="/assets/img/home1/icon/trstpilot-logo.svg" alt="" />
                            </div>
                            <div className="star">
                              <img src="/assets/img/home1/icon/trustpilot-star.svg" alt="" />
                            </div>
                          </div>
                          <div className="content">
                            <ul>
                              <li>Trust Rating <span>5.0</span></li>
                              <li><span>2348</span> Reviews</li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="review-top">
                            <div className="logo">
                              <img src="/assets/img/home1/icon/google-logo.svg" alt="" />
                            </div>
                            <div className="star">
                              <ul>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-half" /></li>
                              </ul>
                            </div>
                          </div>
                          <div className="content">
                            <ul>
                              <li>Trust Rating <span>5.0</span></li>
                              <li><span>2348</span> Reviews</li>
                            </ul>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                :
                
                // if there is brandname
                <div className="banner-content">
                {/* <span className="sub-title">
                  {"Our Brief History"}
                </span> */}
                <div className="text-center">
                  <img src="/assets/img/menu-icon/merchedes.svg" width={50} height={50} alt="brand icon" />
                </div>
                <h2>{"Abarth Car Prices, Latest Models, Reviews & Comparison In UAE"}</h2>
                <hr style={{color:'blue'}}/>
                <p>Here are the prices for all New Abarth Cars in UAE</p>
                {/* <div className="customar-review">
                  <ul>
                    <li>
                      <a href="#">
                        <div className="review-top">
                          <div className="logo">
                            <img src="/assets/img/home1/icon/trstpilot-logo.svg" alt="" />
                          </div>
                          <div className="star">
                            <img src="/assets/img/home1/icon/trustpilot-star.svg" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          <ul>
                            <li>Trust Rating <span>5.0</span></li>
                            <li><span>2348</span> Reviews</li>
                          </ul>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="review-top">
                          <div className="logo">
                            <img src="/assets/img/home1/icon/google-logo.svg" alt="" />
                          </div>
                          <div className="star">
                            <ul>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-half" /></li>
                            </ul>
                          </div>
                        </div>
                        <div className="content">
                          <ul>
                            <li>Trust Rating <span>5.0</span></li>
                            <li><span>2348</span> Reviews</li>
                          </ul>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>

              }
              </div>
             
              <div className="col-xl-6 col-lg-5 d-lg-flex d-none align-items-center justify-content-end">
                <div className="banner-img">
                  {
                  brandname ?
                    <img src={"/assets/img/carPic.jpeg"} className="rounded-pill"  alt="brand car" />
                    :
                    <img src={currentPathData?.img_src || "/assets/img/inner-page/inner-banner-img.png"} alt="banner image" />
                
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Breadcrumb;
