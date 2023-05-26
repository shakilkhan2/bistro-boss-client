import React from 'react';

const MenuItem = ({item}) => {
const {name, image, price, recipe} = item;

    return (
        <div className='flex gap-6  space-x-2 '>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[110px] h-[104px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name} ------------------</h3>
                <p>{recipe}</p>
            </div>
            <h1 className='text-amber-500'>${price}</h1>
        </div>
    );
};

export default MenuItem;