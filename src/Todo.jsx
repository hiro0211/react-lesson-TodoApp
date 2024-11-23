import { useState } from "react";
import "./index.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState(["ううう", "えええ"]);
  const [isComplete, setIsComplete] = useState(false);
  // const [status, setStatus] = useState("未着手", "作業中", "完了");

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const filterOptions = [
    { value: "notStarted", label: "未着手" },
    { value: "inProgress", label: "作業中" },
    { value: "done", label: "完了" },
  ];

  // const onClickChangeStatus = (e) => setStatus(e.target.value);

  const onClickAdd = (index) => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onCLickEdit = () => {
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickComplete = (index) => {
    setIsComplete(index, !isComplete);
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 全てのTodoを全削除
  const onClickDeleteAll = () => {
    const newTodos = [...incompleteTodos, ...completeTodos];
    newTodos.splice(0, newTodos.length);
    setIncompleteTodos(newTodos);
    setCompleteTodos(newTodos);
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
        <button onClick={() => onClickDeleteAll()}>全削除</button>
      </div>
      <div>
        <div>
          <p>Todo</p>
        </div>
        <ol>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div>
                  <p
                    style={
                      isComplete
                        ? { textDecoration: "line-through" }
                        : { textDecoration: "none" }
                    }
                  >
                    {todo}
                  </p>
                  {/* <button>完了</button> */}
                  <button onClick={() => onClickDelete(index)}>削除</button>
                  <button onClick={onClickComplete}>完了</button>
                  <select>
                    {filterOptions.map(({ value, label }) => (
                      <option value={value}>{label}</option>
                    ))}
                  </select>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div></div>
    </>
  );
};
