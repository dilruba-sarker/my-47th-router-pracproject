import React from 'react';

import Baner from '../../components/Header/Navbar/Banner/Baner';
import { useLoaderData } from 'react-router-dom';
import Phones from '../../components/Phones/Phones';

const Home = () => {
    const phones= useLoaderData()
    return (
        <div>
<h2>total phones:{phones.length}</h2>


 <Baner></Baner>
<Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;