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
import FeaturedNewCars from "../components/Home1/FeaturedNewCars/index";
import MostPopularNewCars from "../components/Home1/MostPopularNewCars/index";
import NewPopularBrands from "../components/NewPopularBrands/index";
import WhyChoose from "../components/Home1/WhyChoose/index";
import UpcomingCars from "../components/Home1/UpcomingCars/index";
import RecomandationCar from "../components/Home1/RecommendedCar/index";
import TopRateUsedCars from "../components/Home1/TopRateUsedCars/index";
import Blog from "../components/Home1/Blog/index";
import Ad728x90 from "../components/ads/Ad728x90";
import PopularBrands from "../components/PopularBrands";
import GoToTopButton from "../components/goToTop";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import axios from "axios";
import ProductCard from "../components/Home1/ProductCard";

export default function Home({ homeData, error, errorMessage, popularcars }) {
  console.log(popularcars, "datadatadatadata");
  if (error) {
    return <div>Error: {errorMessage}</div>;
  }
  const carDetails = [
    {
      carName: "Example Car 1",
      carPrice: "AED 30,000",
      emiStartingFrom: "AED 500",
      carImage: "example_car_1.jpg",
    },
    {
      carName: "Example Car 2",
      carPrice: "AED 25,000",
      emiStartingFrom: "AED 400",
      carImage: "example_car_2.jpg",
    },
    {
      carName: "Example Car 3",
      carPrice: "AED 35,000",
      emiStartingFrom: "AED 306,500* - 398,500*",
      carImage: "example_car_3.jpg",
    },
    {
      carName: "Example Car 4",
      carPrice: "AED 30,000",
      emiStartingFrom: "AED 206,500* - 398,500*",
      carImage: "example_car_1.jpg",
    },
    {
      carName: "Example Car 5",
      carPrice: "AED 25,000",
      emiStartingFrom: "AED 106,500* - 398,500*",
      carImage: "example_car_2.jpg",
    },
    {
      carName: "Example Car 6",
      carPrice: "AED 35,000",
      emiStartingFrom: "AED 600",
      carImage: "example_car_3.jpg",
    },
    {
      carName: "Example Car 7",
      carPrice: "AED 30,000",
      emiStartingFrom: "AED 500",
      carImage: "example_car_1.jpg",
    },
    {
      carName: "Example Car 8",
      carPrice: "AED 25,000",
      emiStartingFrom: "AED 400",
      carImage: "example_car_2.jpg",
    },
  ];
  const brands = [
    {
      name: "benz",
      image: "image",
      slug: "test",
    },
    {
      name: "BMW",
      image: "image",
      slug: "test",
    },
    {
      name: "LEXUS",
      image: "image",
      slug: "test",
    },
    {
      name: "brand4",
      image: "image",
      slug: "test",
    },
    {
      name: "Brand5",
      image: "image",
      slug: "test",
    },
    {
      name: "Brand6",
      image: "image",
      slug: "test",
    },
    {
      name: "Brand7",
      image: "image",
      slug: "test",
    },
    {
      name: "Brand7",
      image: "image",
      slug: "test",
    },
    {
      name: "Brand8",
      image: "image",
      slug: "test",
    },
    {
      name: "Brand9",
      image: "image",
      slug: "test",
    },
    {
      name: "Brand10",
      image: "image",
      slug: "test",
    },
    {
      name: "Brand11",
      image: "image",
      slug: "test",
    },
  ];

  const blogData = [
    {
      tag: "Buying Advice",
      title: "The Car Enthusiast: Exploring the World of Cars and Driving.",
      author: "Mr. Morris Mannu",
      date: "03 April, 2023",
    },
    {
      tag: "Car Advice",
      title: "The Best Car Brands for Performance and Reliability.",
      author: "Mr. sahin",
      date: "03 May, 2023",
    },
    {
      tag: "Driving Advice",
      title: "The Environmental Impact of Cars and How to Minimize It.",
      author: "Mr. sahin",
      date: "03 Aug, 2023",
    },
  ];

  return (
    <>
      <Modals />
      <Topbar />
      <Header />
      <Banner homeData={homeData} />
      {/* <QuickLinkArea /> */}
      <Ad728x90 dataAdSlot="5962627056" />

      <ProductCard
        subTitle={"Most Popular"}
        heading={"Most Popular New Cars"}
        carDetails={popularcars}
      />
      {/* <MostPopularNewCars
        subTitle={"Most Popular"}
        heading={"Most Popular New Cars"}
        carDetails={carDetails}
      /> */}

      <Ad728x90 dataAdSlot="5962627056" />

      <FeaturedNewCars
        subTitle={"Newly Featured"}
        heading={"Featured New Cars"}
        carDetails={carDetails}
      />
      {/* <NewPopularBrands brandsData={brands}  /> */}
      {/* <UpcomingCars /> */}
      {/* <RecomandationCar /> */}
      {/* <TopRateUsedCars /> */}
      <Ad728x90 dataAdSlot="5962627056" />
      <CompareCar />
      {/* <WhyChoose /> */}
      {/* <ShopCard /> */}
      {/* <Testimonial /> */}

      <BrandCategory />

      <Blog
        heading={"Trending Car News"}
        btnTitle={"View All Latest News"}
        blogData={blogData}
      />
      <Blog
        heading={"New Car Reviews"}
        btnTitle={"View All Reviews"}
        blogData={blogData}
      />
      <Ad728x90 dataAdSlot="5962627056" />

      <Footer1 />
      <GoToTopButton />
    </>
  );
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  try {
    const { data } = await client.query({
      query: gql`
        query CarSections {
          carSections(filters: { name: { eq: "Featured Cars" } }) {
            data {
              id
              attributes {
                name
                car_models(filters: { year: { eq: 2023 } }) {
                  data {
                    id
                    attributes {
                      name
                      year
                      metaTitle
                      slug
                      description
                      car_brands {
                        data {
                          id
                          attributes {
                            name
                            slug
                          }
                        }
                      }
                      year
                      isFeatured
                      isElectric
                      featuredImage {
                        data {
                          id
                          attributes {
                            name
                            url
                          }
                        }
                      }
                      car_trims {
                        data {
                          id
                          attributes {
                            name
                            featuredImage {
                              data {
                                id
                                attributes {
                                  name
                                  url
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });

    const axiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}pages/1?populate[0]=Sections,Sections.image`
    );

    console.log(data, "datadatadata");

    return {
      props: {
        homeData: axiosResponse?.data?.data?.attributes?.Sections[0],
        popularcars: data?.carSections?.data[0]?.attributes?.car_models?.data,
      },
    };
  } catch (error) {
    console.error("Server-side Data Fetching Error:", error.message);
    return {
      props: {
        error: true,
        errorMessage: error.message,
      },
    };
  }
}
