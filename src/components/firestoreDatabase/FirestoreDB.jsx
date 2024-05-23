import { useFirestoreDb } from "../../hooks/useFirestoreDb";
import { TitleContent } from "../layout/TitleContent";
import { GenericInput } from "../layout/GenericInput";
import { Line } from "../layout/Line";
import { ButtonGeneric } from "../layout/ButtonGeneric";
import { ContentData } from "./layout/ContentData";

export function FirestoreDB() {
  const { formMovies, handleChange, handleSubmit } = useFirestoreDb();

  return (
    <>
      <TitleContent text="Firestore Database" />
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-x-20 mt-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-y-4"
        >
          <GenericInput
            label="Title"
            placeholder="Ingresa el título de la película"
            id="title"
            name="tite"
            value={formMovies.title}
            onChange={(ev) => handleChange("title", ev.target.value)}
          />
          <GenericInput
            label="ReleaseDate"
            placeholder="Ingresa la fecha de estreno"
            id="releaseDate"
            name="releaseDate"
            value={formMovies.releaseDate}
            onChange={(ev) => handleChange("releaseDate", ev.target.value)}
          />
          <GenericInput
            label="Received And Oscar"
            id="receivedAndOscar"
            type="checkbox"
            name="receivedAndOscar"
            checked={formMovies.receivedAndOscar}
            onChange={(ev) =>
              handleChange("receivedAndOscar", ev.target.checked)
            }
          />
          <ButtonGeneric title="Submit" className="generic" />
        </form>
        <ContentData />
      </div>
      <Line />
    </>
  );
}
