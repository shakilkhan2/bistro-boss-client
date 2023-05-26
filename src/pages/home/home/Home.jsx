import Banner from "../banner/Banner";
import FoodCategory from "../foodCategory/FoodCategory";
import PopularMenu from "../popularMenu/PopularMenu";
import Featured from "../featured/Featured";
import Testimonials from "../testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Home - Bistro Boss</title>
       
      </Helmet>
      <Banner />
      <FoodCategory />
      <PopularMenu />
    
      <Featured />
      
      <Testimonials/>
    </div>
  );
};

export default Home;
