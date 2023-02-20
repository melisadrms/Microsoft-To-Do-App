import { Icon } from "@iconify/react";

function ToDo({ todo }) {
  return (
    <li>
      <div className="flex bg-[#f0f9ff] mt-4 border rounded h-12">
        <input type="checkbox" className="rounded-full m-3 " />
        <p className="self-center">{todo.text}</p>
        <Icon
          icon="bi:star"
          className="ml-auto self-center mr-3"
          height="1rem"
          color="#2564cf"
        />
      </div>
    </li>
  );
}

export default ToDo;
