import TodoItem from './TodoItem';
const blankstyle={
    backgroundColor:"#dedfe1",
    color: "#585858",
    fontSize:" 1.6rem",
    fontWeight: "500",
    height: "auto",
    textAlign: "center",
    // width: max-content,
    borderRadius:" 8px",
    margin : "10px auto",
    padding :" 0.5rem 1rem"
}
const Todos=({todos,onDelete, editTodo})=>{
    return(
        
        <div className="d-flex flex-column align-items-center justify-content-center" >
   {todos.length===0?<h5 style={blankstyle}>No Todos</h5>: 
     todos.map((todos)=>{
         return  <TodoItem todoitem={todos} key={todos.id} onDelete={onDelete} editTodo={editTodo} />

        })} 
        
      
      
        
        </div>
    )

}
export default Todos;