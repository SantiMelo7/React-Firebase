import { TitleContent } from "../layout/TitleContent";
import { ButtonGeneric } from "../layout/ButtonGeneric";
import { GenericInput } from "../layout/GenericInput";
import { Line } from "../layout/Line";
import { useStorage } from "../../hooks/useStorage";
import { ContentStorage } from "./layout/ContentStorage";

export const Storage = () => {
  const { handleChange, handleSubmit } = useStorage();

  return (
    <>
      <TitleContent text="Storage" />
      <div className="mt-3 mb-10 flex flex-col gap-y-4">
        <ButtonGeneric
          type="button"
          className="w-72 p-1 rounded-md border-[1px] text-white bg-pink-300
          text-xl text-center h-10 font-bold hover:scale-110 hover:transition-all hover:bg-blue-900 hover:text-white"
        >
          <GenericInput
            label="Agregar una nueva foto"
            id="storage"
            type="file"
            name="storage"
            onChange={handleChange}
          />
        </ButtonGeneric>
        <ButtonGeneric
          type="submit"
          onClick={handleSubmit}
          className="generic"
          title="Upload"
        />
      </div>
      <ContentStorage />
      <Line />
    </>
  );
};
