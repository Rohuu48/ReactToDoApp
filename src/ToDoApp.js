import React from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import 'tachyons';

class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item:'',
            list:[]
        }
     
    }    
    
        
          
    change=(event)=>{this.newItem(event.target.value)}    

    newItem=(input)=>{
      this.setState({
            item:input
          })
        }


    addItem=()=>{
        let listArray=this.state.list;
        listArray.push(this.state.item);
        this.setState({
          list:listArray,
          item:''
        })
      }

      
      remove=(id)=>{
        
        let listArray=this.state.list;
        let top=listArray.slice(0,id);
        let bottom=listArray.slice(id+1); 
        
        this.setState({
          list:top.concat(bottom)
        })
      
      }
    

    render(){
        
        
          return(  
            <div className='tc'>
            <div className='bg-light-green dib br3 pa4 ma3 bw2 shadow-5'>
            <ToDoInput handleChange={this.change} handleAdd={this.addItem} things={this.state.item}/>
           <ToDoList handleRemove={this.remove} list={this.state.list}/>
           </div>
           </div>
        );
    }
}

export default ToDoApp;