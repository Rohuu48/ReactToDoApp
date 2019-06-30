import React from 'react';
import 'tachyons';

class ToDoList extends React.Component{
    


    
    render(){

    



        return(
            <div>
                
                <ul>
                {
                    
                    this.props.list.map((item,i)=>
                    <li key={i}>{item} <button onClick={()=>this.props.handleRemove(i)}>Delete</button></li>
                    )
                }
                </ul>
            </div>
        );
    }
    }


export default ToDoList;