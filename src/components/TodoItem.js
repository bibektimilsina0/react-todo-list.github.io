import { Modal, ModalBody, ModalHeader } from "reactstrap";
import React, { useState } from "react";
import {RiCheckboxBlankLine} from "react-icons/ri";
import {BsFillCheckSquareFill } from "react-icons/bs";

const todostyle = {
  width: "40%",
  backgroundColor: "#f8f8ff",
  color: "#000",
}
const datestyle = {
  fontSize: 12,
  paddingTop: 25,
}

const TodoItem = ({ todoitem, onDelete, editTodo }) => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status ,setStatus]=useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) { alert("Title or Description cannot be blank ") }
    else {
      let d = new Date();
      let date = `${d.getHours()}:${d.getMinutes()} ${d.toDateString()}`
      editTodo(todoitem, title, desc, date, status);
      setModal(false);
    }
  }
  const edit = (todoitem ) => {
    setTitle(todoitem.title);
    setDesc(todoitem.desc);
    setModal(true);
   
       // editTodo(todoitem);
  }
  const icons={
    display: "flex",
    alignItems: "flex-start",
    color:"#9A9A9A",
    width:"32",
    height:"32",
    margin:"4px 4px"
  }
  return (
    <div className="text-center mt-3 mb-3  align-middle border border-succes " style={todostyle}>
      {todoitem.status==="complete"?  <BsFillCheckSquareFill style={icons}/> :<RiCheckboxBlankLine style={icons}/>}
      <h1>{todoitem.title}</h1>
      <h6>{todoitem.desc}</h6>
      {/* <FontAwesomeIcon icon="fa-duotone fa-square-check" />
      <FontAwesomeIcon icon="fa-duotone fa-square" /> */}
      <div className="d-flex justify-content-between px-4">
        <p style={datestyle}>{todoitem.date}</p>
        <button className="btn btn-sm btn-danger rounded mb-3 mt-3" onClick={() => onDelete(todoitem)}>Delete</button>
      
        <button className="btn btn-sm btn-primary rounded mb-3 mt-3" onClick={() => edit(todoitem)} >Edit</button>
  {console.log(todoitem.status)}
      </div>
      <Modal size="md" centered
        isOpen={modal}
        toggle={() => { setModal(!modal) }}
      >
        <ModalHeader toggle={() => { setModal(!modal) }} style={{ backgroundColor: "#dedfe1" }}>
          AddTodo
        </ModalHeader>
        <ModalBody >
          <form className="text-center mt-3 mb-3  align-middle" onSubmit={(e) => submit(e)} style={{ backgroundColor: "#dedfe1" }}>


            <div className="py-1 " >
              <label htmlFor="title">TITLE : </label>
              <input className="form-control" style={{ backgroundColor: "#f8f8ff" }} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>


            <div className="py-1" >
              <label htmlFor="desc">DESC : </label>
              <textarea className="form-control" style={{ backgroundColor: "#f8f8ff" }} type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div  className="py-1">
            <label htmlFor="type">
                Status :
                <select style={{ backgroundColor: "#f8f8ff" }} 
                  id="type"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Completed</option>
                </select>
              </label>
            </div>
            <div className="py-1">
              <button className="btn-sm btn-success rounded" onClick={() => { setModal(!modal) }}>Submit</button>
            </div>
            
          </form>
        </ModalBody>
      </Modal>
    </div>
  )
}
export default TodoItem;