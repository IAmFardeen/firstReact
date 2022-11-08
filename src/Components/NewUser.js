import React from "react";

function NewUser(props){

    const name = props.Data.map(data=>{
        return data.userName;
    })
    const age = props.Data.map(data=>{
        return data.Age;
    })
return(
    <div>
        <div>
      {name}
      </div>
        <div>{age}</div>
    
    </div>
)


}
export default NewUser;