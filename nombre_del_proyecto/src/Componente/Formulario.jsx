import { useState } from "react"
import styles from "./style.module.css"
const InputComponent= ({ label , type , state , setState })=>{
    return(
        <div className= {styles.inputElement}>
            <label htmlFor={`${label}Input`}>{label}</label>:
 
            <input  
                type={type}
                id={`${label}Input`}
                value={state}
                onChange={(e)=>setState(e.target.value)}
            
            />
        </div>
    )
}
const Formulario= ()=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    return(
        <header>
            <div action="#" className={styles.formulario}>
                <InputComponent label="First name" type="text" state={firstName} setState={setFirstName}/>
                <InputComponent label="Last name" type="text" state={lastName} setState={setLastName}/>
                <InputComponent label="Email" type="text" state={email} setState={setEmail}/>    
                <InputComponent label="Password" type="password" state={password} setState={setPassword}/>
                <InputComponent label="Confirm Password" type="password" state={confirmPassword} setState={setConfirmPassword}/>
            </div>
            <hr/>
            <div className={styles.datos}>
                <h2>YOUR FORM DATA</h2>
                <ul>
                    <li>First name: {firstName}</li>
                    <li>Last name: {lastName}</li>
                    <li>Email: {email}</li>
                    <li>Password: {password}</li>
                    <li>Confirm password: {confirmPassword}</li>
                </ul>
            </div>
        </header>
    )
}

export default Formulario;

