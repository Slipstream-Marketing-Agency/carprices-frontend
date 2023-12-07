import React from "react";
import Brands from "../brands";

// import ViewAllButton from "../common/ViewAllButton";

export default function PopularBrands(props) {
  
  return (
   <div className="container">
        <section className="my-2">
          <div className="card_wrapper">
            <h2 className="popularCarText">Popular Car Brands</h2>
            <div className="row">
              <Brands  props={props.brands}/>
            </div>
            {/* <ViewAllButton text={"View All Brands"} link="/brands"/> */}
          </div>
        </section>
   </div>
  );
}
