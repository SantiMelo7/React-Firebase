import { TitleContent } from "../layout/TitleContent";
import { GenericInput } from "../layout/GenericInput";
import { ButtonGeneric } from "../layout/ButtonGeneric";
import { Line } from "../layout/Line";
import { useFirestoreRealTimeDb } from "../../hooks/useFirestoreRealTimeDb";
import { ContentFirestoreRealTime } from "./layout/ContentFirestoreRealTime";

export function FirestoreRealTime() {
  const { formMusic, handleChange, handleSubmit } = useFirestoreRealTimeDb();

  return (
    <>
      <div className="text-center">
        <TitleContent text="Firestore Database Real Time" />
      </div>
      <div>
        <form
          className="flex flex-col justify-center items-center gap-y-4 mt-5"
          onSubmit={handleSubmit}
        >
          <GenericInput
            label="Title"
            placeholder="Ingresa el título de la película"
            id="title"
            name="title"
            value={formMusic.title}
            onChange={(ev) => handleChange("title", ev.target.value)}
          />
          <GenericInput
            label="Album"
            placeholder="Ingresa el album donde pertenece"
            id="album"
            name="album"
            value={formMusic.album}
            onChange={(ev) => handleChange("album", ev.target.value)}
          />
          <GenericInput
            label="Received And Billboard"
            id="receivedAndBillboard"
            type="checkbox"
            name="receivedAndBillboard"
            checked={formMusic.receivedAndBillboard}
            onChange={(ev) =>
              handleChange("receivedAndBillboard", ev.target.checked)
            }
          />
          <ButtonGeneric title="Submit" className="generic" />
        </form>
        <ContentFirestoreRealTime />
      </div>
      <Line />
    </>
  );
}
