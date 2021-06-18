import React from 'react'
const TodoList = (props)  => {
    //have access to all the todos we will pass the tasks as a prop
    const todos= props.tasks.map((todo, index) => {
        //whenever we use .map we use a unique key pass index as a parameter
        return <Todo content={todo} key= {index} id= {index} onDelete={props.onDelete} />
    })
    return (
        <div className= "list-wrapper">
            {todos}   
        </div>
    );
}
//   windows key + . X
// Displaying the content of the task string 
const Todo= (props) => {
    return(
        <div className= 'list-item'>
            {props.content}
            <button class="delete" onClick={() => {props.onDelete(props.id)}}> ❌ </button>
        </div>
    )
}
export default TodoList; 