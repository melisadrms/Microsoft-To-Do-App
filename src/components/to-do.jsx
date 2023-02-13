import { Icon } from "@iconify/react";
import GetDate from "./date-finder";
function ToDo() {
  return (
    <div className="p-6">
      <div className="flex">
        <div className="flex">
          <Icon
            icon="system-uicons:menu-hamburger"
            height="1.75rem"
            color="gray"
            className="self-center hover:shadow"
          />
          <p className="self-center ml-2 text-2xl">Günüm</p>
          <button className="text-gray-400 ml-5 self-center hover:shadow">
            ...
          </button>
        </div>
        <div className="flex ml-auto mr-4 hover:shadow">
          <Icon icon="fluent:arrow-sort-20-regular" className="self-center " />
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
        <button className="bg-white w-full rounded h-14 border shadow-lg shadow-gray-500/50 relative"></button>
        <Icon
          icon="ph:plus-thin"
          height="1.5rem"
          color="#2564cf"
          className="self-center absolute ml-3"
        />
        <p className="self-center absolute ml-11 text-blue-500">Görev Ekle</p>
      </div>
    </div>
  );
}
export default ToDo;
