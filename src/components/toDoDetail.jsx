import { Icon } from "@iconify/react";

function Detail({ handleDetail }) {
  return (
    <div
      className={`bg-[#f8fafc] fixed inset-y-0 right-0 p-6 mt-12 w-3/12 shadow-lg `}
    >
      <div className="bg-white flex h-12 rounded">
        <input type="checkbox" height="1rem" className="ml-4" />
        <p className=" ml-3 self-center ">todo1</p>
        <Icon
          icon="bi:star"
          className="ml-auto self-center mr-3"
          height="1rem"
          color="#2564cf"
        />
      </div>
      <div className="bg-white flex h-12 rounded ">
        <input
          type="text"
          placeholder="Adım ekle"
          className="placeholder-blue-500 pl-12 w-full text-xs"
        />
        <Icon
          icon="ph:plus-thin"
          height="1.5rem"
          color="#2564cf"
          className="self-center absolute ml-3"
        />
      </div>
      <div className="bg-white flex h-12 rounded mt-3">
        <Icon
          icon="ph:sun-light"
          className="inline mr-3 ml-3 m-3"
          height="1.5rem"
          color="#2564cf"
        />
        <p className="self-center text-blue-500 text-xs">
          Günüm görünümüne eklendi
        </p>
      </div>
      <div className="bg-white flex h-12 rounded mt-3">
        <Icon
          icon="ph:bell-ringing-thin"
          color="#71717a"
          className="self-center ml-3"
          height="1.25rem"
        />
        <p className="self-center ml-3 text-gray-500 text-xs">Bana anımsat</p>
      </div>
      <div className="bg-white flex h-12 rounded mt-1">
        <Icon
          icon="uil:schedule"
          color="#71717a"
          className="self-center ml-3 "
          height="1.25rem"
        />
        <p className="self-center ml-3 text-gray-500 text-xs">Son tarih ekle</p>
      </div>
      <div className="bg-white flex h-12 rounded mt-1">
        <Icon
          icon="ph:repeat"
          color="#71717a"
          className="self-center m-3 "
          height="1.25rem"
        />
        <p className="self-center  text-gray-500 text-xs">Yinele</p>
      </div>
      <div className="bg-white flex h-12 rounded mt-3">
        <Icon
          icon="simple-line-icons:tag"
          color="#71717a"
          className="self-center m-3 "
          height="1.25rem"
        />
        <p className="self-center  text-gray-500 text-xs">Bir kategori seçin</p>
      </div>
      <div className="bg-white flex h-12 rounded mt-3">
        <Icon
          icon="fluent:attach-20-regular"
          height="1.5rem"
          className="self-center m-3"
        />
        <p className="self-center  text-gray-500 text-xs">Dosya ekle</p>
      </div>
      <div className="bg-white flex h-12 rounded mt-3">
        <input
          type="text"
          placeholder="Not ekle"
          className="placeholder-gray-500 pl-6 w-full h-20 text-xs"
        />
      </div>
      <hr className="mt-14" />
      <div className="h-12 flex justify-between">
        <Icon
          icon="material-symbols:arrow-back-rounded"
          color="#71717a"
          className="self-center"
        />
        <p className="self-center text-xs text-gray-500"> Bugün oluşturuldu</p>
        <Icon
          icon="octicon:trash-24"
          color="#71717a"
          className="self-center"
          onClick={handleDetail}
        />
      </div>
    </div>
  );
}

export default Detail;
