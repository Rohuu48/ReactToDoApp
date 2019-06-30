import React from 'react';

class ToDoItems extends React.Component{
    render(){
        return(
            <li>{this.props.items}</li>
        );
    }
}

export default ToDoItems;