import React, { useEffect, useState } from 'react';
import PhoneCard from '../Phone/PhoneCard';
import FavoriteCard from './FavoriteCard';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
const [noFound, setNofound] = useState("");
const [isShow,setIsShow] = useState(false)
useEffect(()=>{
    const favoriteItem= JSON.parse(localStorage.getItem("favourites"))
    if(favoriteItem){
        setFavorites(favoriteItem)
    }
    else{
        // console.log("No data fountd");
        setNofound("No Data Found")

    }
},[])
// console.log(favorites)
console.log(isShow);
const handleClick=()=>{
    localStorage.clear()
    setFavorites([])
    setNofound("No Data Found")
}
    return (
        <div>
           {
            noFound? <p>{noFound}</p>
            :
            <div>
                <div>
                    {favorites.length> 0 && (<div className='text-center'><button 
                    onClick={handleClick}
                    className='text-xl bg-slate-500'>Delete all data</button></div>)}
                </div>
               <div className='grid grid-cols-3'>
              
                {
                    isShow? favorites.map(phone=><FavoriteCard key={phone.id}
                         phone={phone}></FavoriteCard>) 
                         :
                         favorites.slice(0,2).map(phone=><FavoriteCard key={phone.id}
                            phone={phone}></FavoriteCard>) 
                    // favorites.map(phone=><FavoriteCard key={phone.id}
                    // phone={phone}></FavoriteCard>)
                }
               </div>
               {/* <button onClick={()=>setIsShow(!isShow)}
               className='px-5 bg-green-200 block mx-auto mt-4
               '>{isShow? "less":"more"}</button> */}
               
          {favorites.length > 2 && <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
            {isShow ? "See less" : "See more"}
          </button>}
            </div>
           }
           
        
        </div>
    );
};

export default Favorites;

