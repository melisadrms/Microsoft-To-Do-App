import { Icon } from "@iconify/react";
import { useState } from "react";
function Burger({ handleClick }) {
  return (
    <div className="bg-white fixed inset-y-0 left-0 w-52 p-6 mt-12 ">
      <Icon
        icon="system-uicons:menu-hamburger"
        height="2rem"
        color="gray"
        className=" hover:shadow mb-5"
        onClick={handleClick}
      />
      <div classname="flex">
        <Icon
          icon="ph:sun-light"
          className="inline mr-3 ml-1 m-3"
          height="1.5rem"
        />
        <small>Günüm</small>
      </div>
      <div>
        <Icon
          icon="ic:round-star-outline"
          className="inline mr-3 ml-1 m-3"
          height="1.5rem"
        />
        <small>Önemli</small>
      </div>
      <div>
        <Icon
          icon="healthicons:i-schedule-school-date-time-outline"
          className="inline mr-3 ml-1 m-3 "
          height="1.5rem"
        />
        <small>Planlanan</small>
      </div>
      <div>
        <Icon
          icon="clarity:avatar-line"
          className="inline mr-3 ml-1 m-3"
          height="1.5rem"
        />
        <small>Bana Atanmış</small>
      </div>
      <div>
        <Icon
          icon="material-symbols:home-outline-rounded"
          className="inline mr-3 ml-1 m-3"
          height="1.5rem"
        />
        <small>Görevler</small>
      </div>
      <hr className="mt-2" />
      <div className="flex mt-3">
        <Icon icon="ph:plus-thin" height="1.5rem" className="ml-1" />
        <small className="ml-auto self-center">Yeni Liste</small>
        <Icon
          icon="fluent:task-list-square-add-24-regular"
          height="1.5rem"
          className="ml-auto"
        />
      </div>
      <div className="flex mt-60 gap-4">
        <Icon icon="pepicons-pop:letter" inline={true} height="1.5rem" />
        <Icon icon="uil:schedule" inline={true} height="1.5rem" />
        <Icon icon="ri:group-line" inline={true} height="1.5rem" />
        <Icon icon="fluent:attach-20-regular" inline={true} height="1.5rem" />
        <Icon icon="noto-v1:check-mark-button" inline={true} height="1.5rem" />
      </div>
    </div>
  );
}

export default Burger;
