import react from "react";
import reactDOM from "react-dom";
import {useState,useEffect} from "react"; 
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
const App = () => {
    const [todo,setTodo] = useState(() => {
                                    const saved = localStorage.getItem("todo");
                                     return saved ? JSON.parse(saved) : [];
                                    });
    const putcontent=(e)=>{
        setTodo([...todo,{id:Date.now(),value:e}]);
    }
    const deletecontent=(x)=>{
        const newtodo = todo.filter((item)=>item.id!==x);
        setTodo(newtodo);
    }
    useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
    }, [todo]);
    return (
        <div>
        <TodoInput putcontent={putcontent}></TodoInput>
        <TodoList todo={todo} deletecontent={deletecontent}></TodoList>
        {/* <TodoItem deletecontent={deletecontent} todo={todo}></TodoItem> */}
        </div>
        
    )
}

export default App;