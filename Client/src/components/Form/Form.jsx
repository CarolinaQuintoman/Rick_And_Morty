import { useState } from "react";
import style from './Form.module.css';
import imageRick from '../../assets/61de2ba956418acd9ab454ceca15bbb2.jpg'

import validation from "./Validation.js";



const Form = ({login}) => {
const[userData, setUserData] = useState({
    email : "",
    password : ""
});
const [errors, setErrors] = useState({
    email : "",
    password : ""
})

const handleChange = (event) =>{
    setUserData({
        ...userData, 
        [event.target.name] : event.target.value
    })
    setErrors(validation,{
        ...errors,
        [event.target.name] : event.target.value
    })
}
const handleSubmit = (event) =>{
 event.preventDefault();
 login(userData);
}

    return (
        <>
        
        <div className={style.container}>
            <div class="col-md-9 col-lg-6 col-xl-5">
                <img src={imageRick}
          class={style.img} alt="Rick and Morty"/>
            </div>
            
            <form  onSubmit={handleSubmit} className={style.login}>
                <label htmlFor="email" className={style.label}>Email</label>
                    <input className={style.input} onChange={handleChange} value={userData.email} name="email" type="email" placeholder="ingrese su email"/>
                    { errors.email && <p>{errors.email}</p> } 
                

                <label htmlFor="password" className={style.label} >Password</label>
                    <input className={style.input} onChange={handleChange} value={userData.password} name="password" type="password" placeholder="ingrese su password"/>
                    { errors.password && <p>{errors.password}</p> }

                <button className={style.button}>Submint</button>
            </form>
            
        </div>
        </>
    )
}
export default Form;