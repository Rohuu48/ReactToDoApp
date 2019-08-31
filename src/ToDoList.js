import React from "react";
import "tachyons";

class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((item, i) => (
            <li key={i}>
              {item.items}{" "}
              <button onClick={() => this.props.handleRemove(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
