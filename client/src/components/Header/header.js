import React from 'react';
import { Button, Card } from 'react-bootstrap';
import HeroCarousel from './HeroCarousel/HeroCarousel';
import Navigation from './Navigation/Navigation';
import BulletedList from '../widgets/Bulleted_List/bulleted_list';




const Header = () => {
    return (
        <div>
      
        <Navigation/>
        <HeroCarousel/>
        <BulletedList/>

       

        

        </div>
    );
};

export default Header;