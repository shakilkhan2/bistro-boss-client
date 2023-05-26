import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        {reviews.map((review) => (
          <SwiperSlide key={review._id} review={review}>
            <div className="flex flex-col items-center w-3/4 mx-auto text-center">
              <Rating
             
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-center text-amber-500">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
