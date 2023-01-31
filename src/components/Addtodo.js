import { Modal, ModalBody, ModalHeader } from "reactstrap";
import React, { useState } from "react";

const Addtodo = ({ addTodo }) => {
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
      addTodo(title, desc, date, status);
      setModal(false);
    }
  }
  return (
    <div>

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
              <input className="form-control"  style={{ backgroundColor: "#f8f8ff" }} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>


            <div className="py-1" >
              <label htmlFor="desc">DESC : </label>
              <textarea className="form-control" style={{ backgroundColor: "#f8f8ff" }} type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div>
            <label htmlFor="type">
                Status
                <select
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
              <button className="btn-sm btn-success rounded" onClick={() => setModal(!modal)}>Submit</button>
            </div>
           
          </form>
        </ModalBody>
      </Modal>
      <button className="btn btn-primary rounded" onClick={() => { setModal(true) }}>Addtodo </button>
    </div>

  )

}
export default Addtodo;