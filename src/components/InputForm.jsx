const InputForm = (props) => {
  const { addTodo, todoText } = props;
  
  return  
  <>
    <input
      label='タイトル'
      value={todoText}
      placeholder="タスクを入力"
    />
    <button onClick={addTodo}>作成</button>
  </>
};

export default InputForm;
