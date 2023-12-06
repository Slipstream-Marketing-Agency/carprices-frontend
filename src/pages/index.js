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
  return (
    <>
      <Modals />
      <Topbar />
      <Header />
      <Banner />
      <QuickLinkArea />
      <Ad728x90 dataAdSlot="5962627056" />
      {/* <BrandCategory /> */}
      <MostSearchedUsersCar />
      <Ad728x90 dataAdSlot="5962627056" />
      <RecentLaunchedCar />
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
