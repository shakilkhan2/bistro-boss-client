import React from "react";
import MenuItem from "../../shared/menuItem/MenuItem";
import { Link } from "react-router-dom";
import Cover from "../../shared/cover/Cover";

const MenuCategory = ({ items, img, title, description }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title} description={description}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} ></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 w-[20%] mx-auto border-b-4 flex my-8 justify-center">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
