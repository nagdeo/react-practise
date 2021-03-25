// props drilling -> data from grandparent to innermost child
// this is only  3rd innermost but what if we have to pass to many components , so we use useContext 

import React ,{ useState, useRef }from 'react';

const Employee = () => {
    const [names,setNames]=useState(['Arun','Anitha','Tina','Mian'])
    
    const addName = (newname) => {
        setNames([...names, newname]);
      };
    return (
        <div align="center">
            <hr/>
            <h1>Employee Component</h1>            
            <p>{names}</p>
            <hr/>
            <Portal names={names}  add={addName} />         
        </div>
    );
};

const Portal = (props) => {
  return (
        <div>
            <h2>Portal Component</h2>
            <hr/>
      <br/>
         <PortalEmployee list={props.names}  add={props.add}/>
         {props.names}
         
        </div>
    );
};

function PortalEmployee(props) {
    const refname=useRef(null);  //reference variable to bind for text box
    const addNew=()=>{
        props.add(refname.current.value)
    }
    return (
        <div>
            <h1>List of Employees</h1>
             <ul>
        {props.list.map((name, id) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
         
       <input type="text" ref={refname}/>
      <button onClick={()=>addNew()}>Add Name</button>
        </div>
    );
}

export default Employee;