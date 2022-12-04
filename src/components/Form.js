import React, {useState} from "react";

//Set State - so user knows what to input
const Form = ({findName}) => {
    const[name, setName]=useState("");
    //using state function to assign state variable to the value of the input
const handleChange =(evt)=>{
    setName(evt.target.value)
}

const handleClick = () => {
findName(name)
}
    return(
        <>
        <h1>FORM</h1>
        <input
        value={name}
        placeholder="Name to Search"
        onChange={handleChange}
        ></input>

        <button 
        onClick={handleClick}
        >Submit</button>
        </>
    )
};

export default Form;