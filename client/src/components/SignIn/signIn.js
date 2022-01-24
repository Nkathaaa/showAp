import {useState} from 'react';
import FormField from '../widgets/FormFields/formfield';
import {useForm} from "react-hook-form"
import * as yup from 'yup'
import{ yupResolver } from '@hookform/resolvers/yup'
import style from "./signIn.module.css"
import {Container,Row,Col} from "react-bootstrap";

function SignIn() {
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
   
        
     //<p>{errors[fields.email]?.message}</p>
    return (
     <div>
         
     <div className={style.signIn}>
         <div class="container-fluid h-75">       
                <Row>   
                    
                        <Col  md={4}id={style.signUpLeft} >      
                         <p>Show Up</p>
                         <p>The best version of yourself</p>
                                             
                        </Col>

                        <Col md={8}>
                        <p className="text-right"> Not a member? <strong>Sign Up now</strong></p>
                            <h2 className="text-center">Sign In to Show Up</h2>
                             <div className="text-center">
                                 <button  type="button" className="btn btn-outline-secondary text-muted">Sign In with Google</button>
                            </div>
                              <p class="text-center ">or</p>
                            
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

export default SignIn
