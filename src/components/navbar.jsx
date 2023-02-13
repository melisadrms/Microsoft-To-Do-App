import { Icon } from "@iconify/react";

function navbar() {
  return (
    <div className="bg-blue-600 text-white flex h-12">
      <div className="flex place-content-center items-center mr-2 h-12 w-12  hover:bg-blue-700 ">
        <Icon icon="fluent-mdl2:waffle" color="white" height="2rem" />
      </div>
      <b className="self-center hover:underline">To Do</b>
      <div className="flex relative md:m-auto self-center ml-2">
        <button className="bg-white md:w-96 md:h-8 rounded w-8 h-8"> </button>
        <Icon
          icon="ant-design:search-outlined"
          color="#2564cf"
          hFlip={true}
          height="1.5rem"
          className="self-center absolute"
        />
      </div>
      <div className="flex ">
        <div className="flex place-content-center items-center h-12 w-12  hover:bg-blue-700  ">
          <Icon icon="fluent-mdl2:settings" color="white" height="1rem" />
        </div>
        <div className="flex place-content-center items-center h-12 w-12  hover:bg-blue-700 ">
          <Icon icon="ri:question-mark" color="white" height="1rem" />
        </div>
        <div className="flex place-content-center items-center h-12 w-12  hover:bg-blue-700">
          <Icon icon="mdi:announcement-outline" color="white" height="1rem" />
        </div>
        <p className="flex place-content-center items-center h-12 w-12 border rounded-full hover:bg-blue-700">
          MD
        </p>
      </div>
    </div>
  );
}

export default navbar;
