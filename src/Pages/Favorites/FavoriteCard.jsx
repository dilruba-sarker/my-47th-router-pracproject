import React from 'react';

const FavoriteCard = ({phone}) => {
    const { id, image, phone_name, brand_name, price, rating } = phone;
    return (
        <div>
<div className='grid grid-cols-2 mt-5'>
<div className="card w-72 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Phone" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>{ phone_name}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default FavoriteCard;