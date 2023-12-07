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
import MostSearchedUsersCar from "../components/Home1/TopSearchedCars/index";
import RecentLaunchedCar from "../components/Home1/RecentLaunchedCar/index";
import WhyChoose from "../components/Home1/WhyChoose/index";
import UpcomingCars from "../components/Home1/UpcomingCars/index";
import RecomandationCar from "../components/Home1/RecommendedCar/index";
import TopRateUsedCars from "../components/Home1/TopRateUsedCars/index";
import Blog from "../components/Home1/Blog/index";
import Ad728x90 from "../components/ads/Ad728x90";
export default function Home() {
  const carDetails = [
    {
      carName: "Example Car 1",
      carPrice: "$30,000",
      emiStartingFrom: "$500",
      carImage: "example_car_1.jpg"
    },
    {
      carName: "Example Car 2",
      carPrice: "$25,000",
      emiStartingFrom: "$400",
      carImage: "example_car_2.jpg"
    },
    {
      carName: "Example Car 3",
      carPrice: "$35,000",
      emiStartingFrom: "$600",
      carImage: "example_car_3.jpg"
    },
    {
      carName: "Example Car 4",
      carPrice: "$30,000",
      emiStartingFrom: "$500",
      carImage: "example_car_1.jpg"
    },
    {
      carName: "Example Car 5",
      carPrice: "$25,000",
      emiStartingFrom: "$400",
      carImage: "example_car_2.jpg"
    },
    {
      carName: "Example Car 6",
      carPrice: "$35,000",
      emiStartingFrom: "$600",
      carImage: "example_car_3.jpg"
    },
    {
      carName: "Example Car 7",
      carPrice: "$30,000",
      emiStartingFrom: "$500",
      carImage: "example_car_1.jpg"
    },
    {
      carName: "Example Car 8",
      carPrice: "$25,000",
      emiStartingFrom: "$400",
      carImage: "example_car_2.jpg"
    },
    {
      carName: "Example Car 9",
      carPrice: "$35,000",
      emiStartingFrom: "$600",
      carImage: "example_car_3.jpg"
    },
  ];

  return (
    <>
      <Modals />
      <Topbar />
      <Header />
      <Banner />
      <QuickLinkArea />
      <Ad728x90 dataAdSlot="5962627056" />
      {/* <BrandCategory /> */}
      <RecentLaunchedCar heading={"Most Popular New Cars"} carDetails={carDetails}/>
      <Ad728x90 dataAdSlot="5962627056" />
      <MostSearchedUsersCar heading={"Top Searched Cars"} carDetails={carDetails} />
      <Ad728x90 dataAdSlot="5962627056" />
      <WhyChoose />
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
