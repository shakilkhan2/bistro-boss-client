import React from 'react';
import MenuItem from '../../shared/menuItem/MenuItem';

const MenuCategory = ({items}) => {
    return (
        <div>
             <div className="grid md:grid-cols-2 gap-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 w-[20%] mx-auto border-b-4 flex my-8 justify-center">
ORDER YOUR FAVOURITE FOOD
      </button>
        </div>
    );
};

export default MenuCategory;