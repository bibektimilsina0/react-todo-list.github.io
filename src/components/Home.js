import { useEffect, useState } from 'react';
import Addtodo from './Addtodo';
import Todos from './Todos';

const Home = () => {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  let [todos, setTodos] = useState(initTodo)
  const addTodo = (title, desc, date ,status) => {
    let id;
    todos.length === 0 ? id = 1 : id = todos[todos.length - 1].id + 1;

    const myTodo = {
      id: id,
      title: title,
      desc: desc,
      date: date,
      status:status,
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  const onDelete = (todoitem) => {

    setTodos(todos.filter((e) => {
      return e !== todoitem;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function editTodo(todoitem, title, desc, date ,status) {
    setTodos(todos.filter((id = todoitem.id) => {
      return (todoitem.title = title,
        todoitem.desc = desc,
        todoitem.date = date,
        todoitem.status = status
      )
    })
    )
  }
  return (
    <div className='text-center home'>
      <h1>TO DO LIST</h1>
      <div className="text-center">
        <Addtodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} editTodo={editTodo} />
      </div>

    </div>
  );
}

export default Home;