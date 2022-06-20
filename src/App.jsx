import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // ユーザーが入力した値を管理
  const [todoText, setTodoText] = useState("");

  // 未完了TODOを管理
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 完了済みTODOを管理
  const [completeTodos, setCompleteTodos] = useState([]);

  // TODO追加で入力した情報を反映
  const onChangeTodoText = (event) => setTodoText(event.target.value);
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
      <InputTodo
        todoText={todoText}
        onClick={onClickAdd}
        onChange={onChangeTodoText}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          新しく追加する場合は完了するか削除してください。
        </p>
      )}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onclickComplete={onclickComplete}
        onclickDelete={onclickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onclickBack={onclickBack} />
    </>
  );
};
