import React, { Component } from 'react';
import {Carousel, Container,Row,Col} from "react-bootstrap";
import style from "./HeroCarousel.module.css"
 class HeroCarousel extends Component {
    render() {
        return (
            <div className={style.hero_Jumbotron}>
                  <div class="container-fluid  p-5 h-75">
                <Container>
                <Row>   
                <Col>     
               <img src="landing-page-girl.png"/>
              
             
             
                </Col>
                <Col id={style.leftSide}>
                <p>Live the best version of you</p>
                <a class="btn" href="#" role="button">Start your journey</a>
                 </Col>
	          
              </Row>
            
              </Container>
              </div>
            </div>
        )
    }
}
export default HeroCarousel