import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} /></figure>
  <p className='absolute bg-slate-900 text-white font-semibold right-0 mr-4 mt-4 px-2 py-1'>${price}</p>
  <div className="card-body">
    <h2 className="card-title text-center">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;