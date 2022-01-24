import React from 'react'
import {useForm} from "react-hook-form"
import style from "./formfield.module.css"
import * as yup from 'yup'
import{ yupResolver } from '@hookform/resolvers/yup'
//Loop through the fields
//render field in jsx
//hannlde validation
//handle saving/posting

function FormField({fields}) {
  
  const schema=yup.object().shape({
    username:yup.string().required(),
    password:yup.string().required().min(8),

  })

  const{ register,handleSubmit, formState: { errors }}=useForm({
    resolver:yupResolver(schema),
  }) 
 const onSubmit=(data)=> console.log(data)
   
    return (
        <div >
          <form onSubmit={handleSubmit(onSubmit)}>
              { fields.input.map((field,i)=>{
              return(
              <div key={i} className="form-group ">       
               <label ><strong>{field.label}</strong></label>
                <input
                  name={field.name}
                  type={field.type}
                  {...register(field.name)}
                  className={`form-control ${errors[field.name]? 'is-invalid' : ''}`}
                  id={style.inputField}
                />
                <div className="invalid-feedback">
                {errors[field.name]?.message}
                
                </div>
           </div>
                
                
              );
              
})}
                 <button type="submit"  className={style.buttoncolor}>Submit</button>

        </form>
        
        </div>
    )

}

export default FormField
