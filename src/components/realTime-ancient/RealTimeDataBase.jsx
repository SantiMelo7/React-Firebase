import { useRealTimeDb } from "../../hooks/useRealTimeDb";
import { TitleContent } from "../layout/TitleContent";
import { GenericInput } from "../layout/GenericInput";
import { IsEdit } from "./layout/IsEdit";
import { ContentRealTime } from "./layout/ContentRealTime";

export const RealTimeDataBase = () => {
  const { tools, handleChange } = useRealTimeDb();
  return (
    <>
      <TitleContent text="Real Time DataBase" />
      <div className="mt-10 mb-10 flex gap-y-5 flex-col">
        <GenericInput
          label="Tarea"
          type="text"
          placeholder="Agrega una tarea"
          value={tools}
          onChange={handleChange}
        />
        <IsEdit />
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-10">
        <ContentRealTime />
      </div>
    </>
  );
};
