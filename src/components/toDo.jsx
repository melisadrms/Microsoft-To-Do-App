import { Icon } from "@iconify/react";

function ToDo({ todo }) {
  return (
    <li>
      <div className="flex bg-[#e2e8f0] mt-4 border rounded h-12">
        <input type="checkbox" className="rounded-full m-3 " />
        <p className="self-center">{todo}</p>
        <Icon
          icon="uil:star"
          className="ml-auto self-center mr-3"
          height="1.5rem"
          color="#2564cf"
        />
      </div>
    </li>
  );
}

export default ToDo;
