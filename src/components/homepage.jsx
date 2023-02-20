import { Icon } from "@iconify/react";
import GetDate from "./dateFinder";
import Burger from "./burger";
import { useState } from "react";

function ToDo() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="p-6 z-2  ">
      <div
        className={` transition duration-500 ease-out  ${
          open ? "translate-x-64 w-4/5" : "block"
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
            className="bg-white w-full rounded h-14 border shadow-lg shadow-gray-500/50 placeholder-gray-400 pl-12 "
          ></input>
          <Icon
            icon="ph:plus-thin"
            height="1.5rem"
            color="#2564cf"
            className="self-center absolute ml-3"
          />
        </div>
      </div>
      <div>{open && <Burger id="sidebar" handleClick={handleClick} />}</div>
    </div>
  );
}
export default ToDo;
