import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import featuredImg  from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed mb-12 pb-24 pt-12 text-white">
      <SectionTitle  subHeading="---Check it out---" heading={   "FROM OUR MENU"} />
      <div className="md:flex justify-center items-center md:space-x-12 w-3/4 mx-auto ">
        <div>
            <img className="object-contain" src={featuredImg} alt="" />
        </div>
        <div className="text-white ">
            <p>March 20, 2023</p>
            <p className="uppercase">WHERE CAN I GET SOME?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos dolorem, consectetur voluptate tempora suscipit inventore veritatis nisi quam eligendi sunt incidunt nihil magni nobis facilis accusamus placeat ducimus odit atque libero optio quae voluptatibus earum ex deserunt. Vel, quas? Id vero quo in dicta error est asperiores veritatis iste odio!</p>
            <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
