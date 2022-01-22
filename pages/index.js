import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  add,
  deleteTodo,
  completed,
  notCompleted,
} from "features/todos/todoSlice";

export default function Home() {
  const [state, setState] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    if (state) {
      dispatch(add(state));
      setState("");
    }
  };

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const completedHandler = (id, itemCompleted) => {
    if (itemCompleted) {
      dispatch(notCompleted(id));
    } else {
      dispatch(completed(id));
    }
  };
  console.log(todos);
  return (
    <div>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button onClick={addTodoHandler}>ekle</button>
      <ol>
        {todos?.map((item) => (
          <li key={item.id}>
            <button onClick={() => completedHandler(item.id, item.completed)}>
              {item.completed ? "Tamamlanmadi" : "Tamamlandi"}
            </button>
            <button onClick={() => deleteHandler(item.id)}>sil</button>
            <span>{item.name}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
