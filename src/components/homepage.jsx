import { Icon } from "@iconify/react";
import GetDate from "./dateFinder";
import Burger from "./burger";
import { useState, useEffect } from "react";
import ToDo from "./toDo";
import Detail from "./toDoDetail";
import {
  collection,
  query,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

function Homepage() {
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [detail, setDetail] = useState(false);
  const [add, setAdd] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const handleDetail = () => {
    detail ? setDetail(false) : setDetail(true);
  };

  const handleAdd = () => {
    add ? setAdd(false) : setAdd(true);
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Lütfen bir görev giriniz");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="p-6 z-2  ">
      <div
        className={` 
        ${open ? "md:translate-x-64 md:w-4/5 w-full " : "block"}
        ${detail ? " md:w-9/12 w-full " : "block"}}
        ${open && detail ? "md:w-6/12 w-full ml-12" : "block"}
        `}
      >
        <div className="flex">
          <div className="flex">
            <Icon
              icon="system-uicons:menu-hamburger"
              height="1.75rem"
              color="gray"
              className="self-center hover:shadow"
              onClick={handleClick}
            />
            <p className="self-center ml-2 text-2xl">Günüm</p>
            <button className="text-gray-400 ml-5 self-center hover:shadow">
              ...
            </button>
          </div>
          <div className={`flex ml-auto mr-4 hover:shadow `}>
            <Icon icon="fluent:arrow-sort-20-regular" className="self-center" />
            <p className="text-gray-400 self-center p-2 hidden md:block">
              Sırala
            </p>
          </div>
          <div className="flex hover:shadow ">
            <Icon icon="fluent:lightbulb-20-regular" className="self-center " />
            <p className="text-gray-400 self-center p-1 hidden md:block">
              Öneriler
            </p>
          </div>
        </div>
        <GetDate />
        <div className="flex self-center">
          <input
            onClick={handleAdd}
            placeholder="Görev Ekle"
            className="bg-white w-full rounded h-14 border shadow-lg shadow-gray-500/20 placeholder-gray-400 pl-12 "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <Icon
            icon="ph:plus-thin"
            height="1.5rem"
            color="#2564cf"
            className="self-center absolute ml-3"
          />
        </div>
        <div
          className={`bg-[#ffffff] border rounded shadow-gray-500/100 h-10 ${
            add ? "flex" : "hidden"
          }`}
        >
          <Icon
            icon="uil:schedule"
            color="#71717a"
            className="self-center ml-3 m-3 "
            height="1.25rem"
          />
          <Icon
            icon="ph:bell-ringing-thin"
            color="#71717a"
            className="self-center "
            height="1.25rem"
          />
          <Icon
            icon="ph:repeat"
            color="#71717a"
            className="self-center m-3 "
            height="1.25rem"
          />
          <button
            className="border bg-white w-12 h-8 self-center ml-auto mr-3"
            onClick={createTodo}
          >
            ekle
          </button>
        </div>
        <ul onClick={handleDetail}>
          {todos.map((todo, index) => (
            <ToDo key={index} todo={todo} toggleComplete={toggleComplete} />
          ))}
        </ul>
      </div>
      <div>{open && <Burger id="sidebar" handleClick={handleClick} />}</div>

      <div>
        {todos.map(
          (todo, index) =>
            detail && <Detail key={index} todo={todo} deleteTodo={deleteTodo} />
        )}
      </div>
    </div>
  );
}
export default Homepage;

{
  /* <div>
  {detail && (
    <Detail
      id="detail"
      handleDetail={handleDetail}
      deleteTodo={deleteTodo}
      todo={todo}
    />
  )}
</div> */
}
