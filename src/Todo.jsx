import { useState } from "react";
import "./index.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([""]);
  const [completeTodos, setCompleteTodos] = useState(["ううう", "えええ"]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd =() => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
    
  const onCLickEdit = () => {
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  // 全てのTodoを全削除
  const onClickDeleteAll = () =>{
    const newTodos = [...incompleteTodos, ...completeTodos];
    newTodos.splice(0, newTodos.length);
    setIncompleteTodos(newTodos);
    setCompleteTodos(newTodos);
  }

  return (
    <>
      <div>
        <input onChange={onChangeTodoText} placeholder="Todoを入力" value={todoText}/>
        <button onClick={onClickAdd}>追加</button>
        <button onClick={()=> onClickDeleteAll()}>全削除</button>
      </div>
      <div>
        <div>
          <p>未完了のTodo</p>

        </div>
        <ol>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div>
                  <p>{todo}</p>
                  <button>完了</button> 
                  <button onClick={() => onClickDelete(index)}>削除</button>
                  <button onClick={onCLickEdit}>編集</button>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div>
        <p>完了のTodo</p>

        <ol>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button>戻す</button>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};
