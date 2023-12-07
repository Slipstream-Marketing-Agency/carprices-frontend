import Footer1 from "../components/Footer/Footer1";
import Header from "../components/Home1/Header";
import Banner from "../components/Home1/Banner/index";
import QuickLinkArea from "../components/Home1/QuickLinkArea";
import Topbar from "../components/Home1/Topbar";
import BrandCategory from "../components/Home1/BrandCategory";
import ShopCard from "../components/Home1/ShopCard/index";
import CompareCar from "../components/Home1/CompareCar/index";
import Testimonial from "../components/Home1/Teatimonial/index";
import Modals from "../components/Home1/Modals";
import CarouselCardWithButton from "../components/Home1/CarouselCardWithButton/index";
import MultipleRowCards from "../components/Home1/MultipleRowCards/index";

import WhyChoose from "../components/Home1/WhyChoose/index";
import UpcomingCars from "../components/Home1/UpcomingCars/index";
import RecomandationCar from "../components/Home1/RecommendedCar/index";
import TopRateUsedCars from "../components/Home1/TopRateUsedCars/index";
import Blog from "../components/Home1/Blog/index";
import Ad728x90 from "../components/ads/Ad728x90";
import PopularBrands from "../components/PopularBrands";
export default function Home() {
  const carDetails = [
    {
      carName: "Example Car 1",
      carPrice: "AED 30,000",
      emiStartingFrom: "AED 500",
      carImage: "example_car_1.jpg"
    },
    {
      carName: "Example Car 2",
      carPrice: "AED 25,000",
      emiStartingFrom: "AED 400",
      carImage: "example_car_2.jpg"
    },
    {
      carName: "Example Car 3",
      carPrice: "AED 35,000",
      emiStartingFrom: "AED 306,500* - 398,500*",
      carImage: "example_car_3.jpg"
    },
    {
      carName: "Example Car 4",
      carPrice: "AED 30,000",
      emiStartingFrom: "AED 206,500* - 398,500*",
      carImage: "example_car_1.jpg"
    },
    {
      carName: "Example Car 5",
      carPrice: "AED 25,000",
      emiStartingFrom: "AED 106,500* - 398,500*",
      carImage: "example_car_2.jpg"
    },
    {
      carName: "Example Car 6",
      carPrice: "AED 35,000",
      emiStartingFrom: "AED 600",
      carImage: "example_car_3.jpg"
    },
    {
      carName: "Example Car 7",
      carPrice: "AED 30,000",
      emiStartingFrom: "AED 500",
      carImage: "example_car_1.jpg"
    },
    {
      carName: "Example Car 8",
      carPrice: "AED 25,000",
      emiStartingFrom: "AED 400",
      carImage: "example_car_2.jpg"
    },
    
  ];
  const brands=[
    {
      name:"benz",
      image:"image",
      slug:"test"
    },
    {
      name:"BMW",
      image:"image",
      slug:"test"
    },
    {
      name:"LEXUS",
      image:"image",
      slug:"test"
    },
    {
      name:"brand4",
      image:"image",
      slug:"test"
    },
    {
      name:"Brand5",
      image:"image",
      slug:"test"
    },
    {
      name:"Brand6",
      image:"image",
      slug:"test"
    },
    {
      name:"Brand7",
      image:"image",
      slug:"test"
    },
    {
      name:"Brand7",
      image:"image",
      slug:"test"
    },
    {
      name:"Brand8",
      image:"image",
      slug:"test"
    },
    {
      name:"Brand9",
      image:"image",
      slug:"test"
    },
    {
      name:"Brand10",
      image:"image",
      slug:"test"
    },
    {
      name:"Brand11",
      image:"image",
      slug:"test"
    },
  ]
  return (
    <>
      <Modals />
      <Topbar />
      <Header />
      <Banner />
      <QuickLinkArea />
      <Ad728x90 dataAdSlot="5962627056" />
      {/* <BrandCategory /> */}
      <MultipleRowCards heading={"Most Popular New Cars"} carDetails={carDetails}/>
      <Ad728x90 dataAdSlot="5962627056" />
      <CarouselCardWithButton heading={"Top Searched Cars"} carDetails={carDetails} />
      <Ad728x90 dataAdSlot="5962627056" />
      <WhyChoose />
      <PopularBrands brands={brands} />
      <UpcomingCars />
      <RecomandationCar />
      <TopRateUsedCars />
      <CompareCar />
      <ShopCard />
      <Testimonial />
      <Ad728x90 dataAdSlot="5962627056" />

      <Blog />
      <Footer1 />
    </>
  );
}
