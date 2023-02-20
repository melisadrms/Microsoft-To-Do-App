import { Icon } from "@iconify/react";
import GetDate from "./dateFinder";
import Burger from "./burger";
import { useState } from "react";
import ToDo from "./toDo";

function Homepage() {
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState(["todo1"]);
  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="p-6 z-2  ">
      <div
        className={` transition duration-500 ease-out  ${
          open ? "md:translate-x-64 md:w-4/5 w-full " : "block"
        }`}
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
            placeholder="Görev Ekle"
            className="bg-white w-full rounded h-14 border shadow-lg shadow-gray-500/20 placeholder-gray-400 pl-12 "
          ></input>
          <Icon
            icon="ph:plus-thin"
            height="1.5rem"
            color="#2564cf"
            className="self-center absolute ml-3"
          />
        </div>
        <div className="bg-[#ffffff] border rounded shadow-gray-500/100 h-10 flex">
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
          <button className="border bg-white w-12 h-8 self-center ml-auto mr-3">
            ekle
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <ToDo key={index} todo={todo} />
          ))}
        </ul>
      </div>
      <div>{open && <Burger id="sidebar" handleClick={handleClick} />}</div>
    </div>
  );
}
export default Homepage;
