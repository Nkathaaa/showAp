import {useState} from 'react';
import FormField from '../widgets/FormFields/formfield';
import {useForm} from "react-hook-form"
import * as yup from 'yup'
import{ yupResolver } from '@hookform/resolvers/yup'
import style from "./reset.module.css"
import {Container,Row,Col} from "react-bootstrap";
import background from "../../images/search.svg"

function Reset() {
    const[fields,setFields]=useState({
        input:[
            {
            name:"username",
            label:"Enter email",
            type:"text"
             
            },
          
        ]   
    })
   
        
     //<p>{errors[fields.email]?.message}</p>
    return (
     <div>
         
     <div className={style.reset} style={{ backgroundImage: `url(${background})`  } }>
         <div class="container-fluid h-75">       
                <Row>   
                    
                        <Col  md={4} >      
                       
                        </Col>

                        <Col md={8}>
                     
                            <h2 className="text-center"> <strong>Reset Password</strong></h2>
                           
                              <p class="text-center ">Enter  the email associated with your<br/> 
                               account and we’ll send an email<br/> with instructions on how to reset your password</p>
                            
                            <div className="h-75  d-flex justify-content-center align-self-center mt-5">
                                     <FormField fields={fields}/> 
                        
                            </div>
                          
                           
                            
                            
                            
                        </Col>
                
                </Row>
          
    
            </div>
          </div>
          </div>
       
    )
}

export default Reset
