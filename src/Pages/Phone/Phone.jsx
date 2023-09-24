import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import PhoneCard from './PhoneCard';




const Phone = () => {
    const [phone,setPhone]=useState({})
    const  phones =useLoaderData()
 
     const {id} = useParams()
console.log(phones);
useEffect(()=>{
    if(phones){

const findPhone=phones?.find(phone=>phone.id===id)
setPhone(findPhone)
    }

},[id, phones])
//  console.log(phone);
    return (
        <div>
  <PhoneCard phone={phone}></PhoneCard>
        </div>
    );
};

export default Phone;
