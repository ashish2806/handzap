import React from 'react';
const Albumview = (props) =>{
    let tri = null;
    
    
    return(
        <div  className="Order">
           <span className="albumview" onClick={props.clicked} >
           <img onClick={props.clicked} src={props.id} alt={props.name} /><br/>
           {props.name}</span>
           
            {tri}
            
        </div>
    );
    
    };


export default  Albumview; 