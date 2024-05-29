import { TitleContent } from "../layout/TitleContent";
import { GenericInput } from "../layout/GenericInput";
import { Line } from "../layout/Line";
import { IsEdit } from "./layout/IsEdit";
import { ContentRealTime } from "./layout/ContentRealTime";
import { ButtonGeneric } from "../layout/ButtonGeneric";
import { useRealTimeDb } from "../../hooks/useRealTimeDb";

export const RealTimeDataBase = () => {
  const { tools, isEdit, handleChange, writeToDB } = useRealTimeDb();

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
        {!isEdit ? (
          <ButtonGeneric onClick={writeToDB} className="google" title="Add" />
        ) : (
          <IsEdit />
        )}
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-x-10">
        <ContentRealTime />
      </div>
      <Line />
    </>
  );
};
