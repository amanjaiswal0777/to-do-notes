
const TodoItem = ({ eachtodo, deletecontent }) => {
    return (
        <div>
            <span>{eachtodo.value}</span>
            <button onClick={() => deletecontent(eachtodo.id)}>Delete</button>
            <br></br>
        </div>
    )
}
export default TodoItem;