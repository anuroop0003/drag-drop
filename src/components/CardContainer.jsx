import TaskCard from "./TaskCard";

export default function CardContainer({
  title,
  status,
  handleUpdateList,
  items,
}) {
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    handleUpdateList(e.dataTransfer.getData("text"), status);
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="border-2 border-black rounded-xl overflow-hidden"
    >
      <h1 className="bg-slate-400 text-center text-xl p-2">{title}</h1>
      {items?.map(
        (item) =>
          status === item.status && <TaskCard key={item?.id} data={item} />
      )}
    </div>
  );
}
