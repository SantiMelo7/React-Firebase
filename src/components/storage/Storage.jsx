import { useStorage } from "../../hooks/useStorage";
import { ButtonGeneric } from "../layout/ButtonGeneric";
import { TitleContent } from "../layout/TitleContent";
import { Line } from "../layout/Line";
import { ContentStorage } from "../storage/layout/ContentStorage";

export const Storage = () => {
  const { setFiles, handleSubmit } = useStorage();

  return (
    <>
      <TitleContent text="Storage" />
      <div className="mt-3 mb-10 flex flex-col gap-y-4">
        <ButtonGeneric
          type="button"
          className="w-72 p-1 rounded-md border-[1px] text-white bg-pink-300
          text-xl text-center mx-auto h-10 font-bold hover:scale-110 hover:transition-all hover:bg-red-300 hover:text-white"
        >
          <label htmlFor="storage" className="mx-auto text-center">
            Añade
          </label>
          <input
            id="storage"
            type="file"
            name="storage"
            onChange={(ev) => setFiles(ev.target.files[0])}
          />
        </ButtonGeneric>
        <ButtonGeneric
          type="submit"
          onClick={handleSubmit}
          className="generic"
          title="Upload"
        />
        <ContentStorage />
      </div>
      <Line />
    </>
  );
};
