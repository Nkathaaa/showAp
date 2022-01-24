import {useState} from 'react';
import FormField from '../widgets/FormFields/formfield';
import {useForm} from "react-hook-form"
import * as yup from 'yup'
import{ yupResolver } from '@hookform/resolvers/yup'
import style from "./signUp.module.css"
import {Container,Row,Col} from "react-bootstrap";

function SignUp() {
    const[fields,setFields]=useState({
        input:[
            {
            name:"username",
            label:"Enter username/email",
            type:"text"
             
            },
             {   
              name:"password",
              label:"Enter password",
               type:"password"

            
            },
            {   
                name:"password",
                label:"Enter password again",
                 type:"password2"
  
              
              }
        ]   
    })
   
    return (
     <div>
         
     <div>
              
                <Row>       
                        <Col  md={4} className="d-none d-md-block" >    
                              <img src="showup.jpg" className={style.leftImage}/>                        
                        </Col>
                        <Col md={8}>
                       
                            <h2 className="text-center">Sign Up</h2>
                             <div className="text-center">
                                 <button  type="button" className="btn btn-outline-secondary text-muted">Sign Up with Google</button>
                            </div>
                              <p class="text-center ">or</p>
                            
                            <div className="h-75  d-flex justify-content-center align-self-center mt-5">
                                     <FormField fields={fields}/> 
                        
                            </div>      
                          
                        </Col>
                
                </Row>
          
    
            
          </div>
          </div>
       
    )
}

export default SignUp
