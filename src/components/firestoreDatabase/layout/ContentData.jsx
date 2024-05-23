import { Cancel, CheckCircle, DeleteForever, Edit } from "@mui/icons-material";
import { useFirestoreDb } from "../../../hooks/useFirestoreDb";
import { ButtonGeneric } from "../../layout/ButtonGeneric";
import { IconButton } from "../../layout/IconButton";

export function ContentData() {
  const { movieList, handleDeleteMovie } = useFirestoreDb();

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:mt-7 md:mt-0 gap-x-10">
      {movieList.map((text) => (
        <div key={text.id} className="mb-10">
          <h1>{text.title}</h1>
          <span>Year: {text.releaseDate}</span>
          <div>
            {text.receivedAndOscar ? (
              <CheckCircle style={{ color: "green" }} />
            ) : (
              <Cancel style={{ color: "red" }} />
            )}
          </div>
          <div className="flex flex-col gap-y-4">
            <ButtonGeneric
              onClick={() => handleDeleteMovie(text.id)}
              className="removeMovie"
            >
              <IconButton text="Remove" icon={<DeleteForever />} />
            </ButtonGeneric>

            <ButtonGeneric
              onClick={() => handleDeleteMovie(text.id)}
              className="google"
            >
              <IconButton text="Edit" icon={<Edit />} />
            </ButtonGeneric>
          </div>
        </div>
      ))}
    </div>
  );
}
