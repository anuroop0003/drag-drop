import { statusTypes, tasks } from "../../../utils/data";
import CardContainer from "../../components/CardContainer";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";

export default function Board() {
  const { listItems, handleUpdateList } = useDragAndDrop(tasks);

  return (
    <div className="bg-gray-200 h-screen w-screen grid grid-cols-3 p-10 gap-5">
      {statusTypes.map((type) => (
        <CardContainer
          key={type.title}
          title={type.title}
          handleUpdateList={handleUpdateList}
          items={listItems}
          status={type.status}
        />
      ))}
    </div>
  );
}
