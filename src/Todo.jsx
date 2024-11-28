import { useState } from "react";
import "./index.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todos, { text: todoText, isComplete: false }];
    setTodos(newTodos);
    setTodoText("");
  };

  const onClickComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div>
        <input
          onChange={onChangeTodoText}
          placeholder="Todoを入力"
          value={todoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <p>Todo</p>
        <ol>
          {todos.map((todo, index) => (
            <li key={index}>
              <div>
                <p style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}>
                  {todo.text}
                </p>
                <button onClick={() => onClickDelete(index)}>削除</button>
                <button onClick={() => onClickComplete(index)}>完了</button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};