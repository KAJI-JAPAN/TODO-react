import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onclickBack } = props;
  return (
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
  );
};
