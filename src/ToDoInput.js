import React from 'react';
import 'tachyons';

class  ToDoInput extends React.Component{
    
    render(){
        return(
            <div className='bg-white dib br3 pa2 ma2 grow bw2 shadow-5'>
                <input onChange={this.props.handleChange} value={this.props.things} type="text" placeholder="Enter item here"/>
                <button onClick={this.props.handleAdd} disabled={this.props.things.length<1}>Add To List</button>
            </div>
        );
    }
}

export default ToDoInput;