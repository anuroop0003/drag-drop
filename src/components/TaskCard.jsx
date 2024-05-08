export default function TaskCard({ data }) {
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text", id);
  };
  return (
    <h1
      id={Math.random()}
      draggable
      onDragStart={(e) => handleDragStart(e, data.id)}
      key={data?.id}
      className="bg-white m-2 p-2 rounded-xl"
    >
      {data.title}
    </h1>
  );
}
