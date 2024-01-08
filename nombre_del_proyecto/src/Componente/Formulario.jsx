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
 
    const ValidacionesName=()=>{
        if(firstName.length >= 1 && firstName.length <= 2 ){
            return <h6>First Name must be at least 2 characters</h6>
        }    
    }
    const ValidacionLastName=()=>{
        if(lastName.length >= 1 && lastName.length <= 2 ){
            return <h6>Last name must be at least 2 characters</h6>
        }
    } 
    const ValidacionEmail=()=>{
        if(email.length >= 1 && email.length <= 5 ){
            return <h6>Email must be at least 5 characters</h6>
        }
    }
    const ValidacionPassword=()=>{
        if((password.length >= 1 && password.length <= 8 ) || (password !== confirmPassword)){
            return <h6>Password must be at least 8 characters <hr/> Passwords must match</h6>
        }
    }
    return(
        <header>
            <div action="#" className={styles.formulario}>
                <InputComponent label="First name" type="text" state={firstName} setState={setFirstName}/>
                <ValidacionesName/>
                <InputComponent label="Last name" type="text" state={lastName} setState={setLastName}/>
                <ValidacionLastName/>
                <InputComponent label="Email" type="text" state={email} setState={setEmail}/>    
                <ValidacionEmail/>
                <InputComponent label="Password" type="password" state={password} setState={setPassword}/>
                <ValidacionPassword/>
                <InputComponent label="Confirm Password" type="password" state={confirmPassword} setState={setConfirmPassword}/>
                <ValidacionPassword/>
            </div>
           
        </header>
    )
}

 
export default Formulario;

