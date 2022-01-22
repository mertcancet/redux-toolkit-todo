import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, deleteTodo } from "features/todos/todoSlice";

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

  return (
    <div>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button onClick={addTodoHandler}>ekle</button>
      <ol>
        {todos?.map((item) => (
          <li key={item.id}>
            <button>Tamamlandı</button>
            <button onClick={() => deleteHandler(item.id)}>sil</button>
            <span>{item.name}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
