import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // ユーザーが入力した値を管理
  const [todoText, setTodoText] = useState("");

  // 未完了TODOを管理
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 完了済みTODOを管理
  const [completeTodos, setCompleteTodos] = useState([]);

  // TODO追加で入力した情報を反映
  const onChnageTodoText = (event) => setTodoText(event.target.value);
  // 追加
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  // 削除
  const onclickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 完了
  const onclickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newTodos);
    setCompleteTodos(newCompleteTodos);
  };
  // 戻す

  const onclickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
    console.log(newCompleteTodos[index]);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを追加"
          value={todoText}
          onChange={onChnageTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onclickComplete(index)}>完了</button>
                <button onClick={() => onclickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了済みのTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onclickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
