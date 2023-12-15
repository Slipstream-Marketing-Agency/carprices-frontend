import React from "react";
import Link from "next/link";
import { BrandCategoryHome1 } from "../../../data/data";

function index({ brandDetails }) {
  console.log(brandDetails, "brandDetails");
  return (
    <div className="brand-category-area  pt-4 mb-20">
      <div className="container">
        <div className="row mt-4 mb-30 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-end justify-content-between flex-wrap gap-4">
            <div className="section-title1">
              <span>Available Brand Car</span>
              <h2>Popular Brands</h2>
            </div>
          </div>
        </div>
        <div className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-3 row-cols-sm-3 row-cols-2 g-4 justify-content-center mb-40">
          {brandDetails.map((item, idx) => {
            return (
              <div className="col wow fadeInUp" data-wow-delay="200ms">
                <Link legacyBehavior href="/single-brand-category" key={idx}>
                  <a className="single-category1">
                    <div className="brand-icon w-50">
                      <img
                        src={item?.attributes?.brandLogo?.data?.attributes?.url}
                        alt="brand-icons"
                      />
                    </div>
                    <h6>{item?.attributes?.name}</h6>
                    {/* <div className="brand-car">
                      <img src={image} alt="brand-car image" />
                    </div> */}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <div className="view-btn-area">
              {/* <p>There will be 100+ Upcoming Car</p> */}
              <Link legacyBehavior href="/brands">
                <button className="btn mb-2 mb-md-0 btn-round btn-outline btn-block">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
