import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./features/todo/todoSlice";

const Todo = () => {
  const [text, setText] = useState([]);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.value);

  function handleAdd() {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>

      <div>
        {todos.length > 0 ? (
          <div>
            <ul>
              {todos.map((todo, idx) => (
                <li
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer",
                  }}
                  key={idx}
                  onClick={() => dispatch(toggleTodo(todo.id))}
                >
                  {todo.text}{" "}
                  <button onClick={() => dispatch(deleteTodo(todo.id))}>
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No items</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
