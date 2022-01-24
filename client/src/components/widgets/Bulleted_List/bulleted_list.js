import React, { Component } from 'react';
import {Carousel, Container,Row,Col} from "react-bootstrap";
import style from "./bulletedList.module.css"

class BulletedList extends Component{
    render(){
    return (
        <div>
            <div className={style.aboutSummary}>
                  <div class="container  p-5 h-75">
                      <h1 class="text-center">Show Up is a mental health platform</h1>
                      <h2 class="text-center">We offer a space where you being ok is our only goal</h2>
                <Container>
                <Row>   
                <Col>     
                <p> <i class="bi bi-check "></i>Learn about your options</p>
                <p> <i class="bi bi-check " ></i>Talk to a professional</p>
             
                </Col>
                <Col id={style.leftSide}>
                <p><i class="bi bi-check " ></i>Get info on how to deal/cope</p>
                <p><i class="bi bi-check " ></i>Meet other people going  through similar experiences</p>
               
               
                 </Col>
	          
              </Row>
            
              </Container>
              </div>
            </div>
        </div>
    );
    }
};

export default BulletedList;