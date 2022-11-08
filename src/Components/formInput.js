import React ,{useState} from "react"
function FormInput(props){

    const[userNameChanged, setUserName]=useState("")
    const[ageChanged,setAgeChange]=useState("")
    const userName=(event)=>{
           setUserName(event.target.value);
    
    }
    const age =(event)=>{
             setAgeChange(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const userAge = {
            userName : userNameChanged,
            Age: ageChanged
        }
        props.onSubmition(userAge)
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div>
            <label><h1>UserName</h1></label>
            <input type="text" onChange={userName}></input>
            </div>
            <div>
                <label><h1>Age</h1></label>
                <input type="numeber" onChange={age}></input>
            </div>
           <div>
            <button type="number">Add User</button>
           </div>
        </form>

    )
}

export default FormInput