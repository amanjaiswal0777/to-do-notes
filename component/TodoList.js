import  react from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todo, deletecontent }) => {
    return(
        <div>
            <ul>
            {todo.map((item)=>
            <TodoItem key={item.id} eachtodo={item} deletecontent={deletecontent}></TodoItem>
            )}
        </ul>
        </div>
    )
}

export default TodoList;