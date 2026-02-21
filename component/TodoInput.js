import {useState} from "react";

const TodoInput=({putcontent})=>{
    const [content,setContent] = useState("");
    return(
        <div>
            <input 
            type="text" 
            value={content}
            onChange={(e)=>setContent(e.target.value)}>
            </input>
            <button onClick={()=>putcontent(content)}>Add</button>
        </div>
    )
}

export default TodoInput;