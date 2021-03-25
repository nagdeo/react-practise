import React ,{ useState, useRef ,createContext,useContext} from 'react';

// Create Context Object
const EmployeeContext = createContext();

function EmployeesContext(props) {
    const [names,setNames]=useState(['Arun','Anitha','Tina','Mian'])
    return (
        <EmployeeContext.Provider value={[names, setNames]}>
            <h1>Employee Context Component</h1>
			{names}
            <Portal />
       </EmployeeContext.Provider>
    );
}

const Portal = (props) => {    
    return (
        <div>
            <h2>List of Employees Names</h2>
            <hr/>
      <br/>
         <PortalEmployee />
        </div>
    );
};
function PortalEmployee(props) {
    const refname=useRef(null);
    const [names, setNames] = useContext(EmployeeContext);
    const addNew=()=>{
        setNames([...names, refname.current.value]);
    }
    return (
        <div>
             <ul>
        {names.map((name, id) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
             <input type="text" ref={refname}/>
      <button onClick={()=>addNew()}>Add Name</button>
        </div>
    );
}

export default EmployeesContext;