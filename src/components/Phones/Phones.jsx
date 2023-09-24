import React from 'react';
import PhoneCards from './PhoneCards';

const Phones = ({phones}) => {
  

    return (
        <div>
            <h1 className='text-center text-4xl'>All Categorys of phones</h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
    {
        phones.map(phone=><PhoneCards key={phone.id} phone={phone}></PhoneCards>)
    }
</div>
        </div>
    );
};

export default Phones;