import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const handleAddToCart = (item) => {
    console.log(item);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <p className="absolute bg-slate-900 text-white font-semibold right-0 mr-4 mt-4 px-2 py-1">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0  border-b-4 flex my-8 bg-slate-100 border-orange-500 text-orange-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
