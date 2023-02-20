function GetDate() {
  const date = new Date();
  const day = date.toLocaleString("tr-TR", {
    day: "numeric",
    month: "long",
    weekday: "long",
  });
  return (
    <div>
      <p className="text-gray-500 ml-9 text-sm mb-5">{day}</p>
    </div>
  );
}

export default GetDate;
