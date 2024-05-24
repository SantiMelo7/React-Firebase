import { Cancel, CheckCircle, DeleteForever } from "@mui/icons-material";
import { useFirestoreRealTimeDb } from "../../../hooks/useFirestoreRealTimeDb";
import { ButtonGeneric } from "../../layout/ButtonGeneric";
import { IconButton } from "../../layout/IconButton";

export function ContentFirestoreRealTime() {
  const { musicList, handleDeleteMusic } = useFirestoreRealTimeDb();
  return (
    <div className="flex justify-center items-center max-w-screen-lg mx-auto">
      <div className="grid md:grid-cols-5 sm:grid-cols-1 mt-10">
        {musicList.map((text) => {
          return (
            <div
              key={text.id}
              className="mb-10 bg-emerald-200 w-72 mx-auto rounded-md p-3 flex flex-col justify-center items-center"
            >
              <h1 className="text-gray-800 text-xl font-extrabold">
                {text.data.title}
              </h1>
              <span className="text-amber-500 text-lg font-bold">
                Album: {text.data.album}
              </span>
              <div>
                {text.receivedAndOscar ? (
                  <CheckCircle style={{ color: "green" }} />
                ) : (
                  <Cancel style={{ color: "red" }} />
                )}
              </div>
              <div className="flex flex-col gap-y-4">
                <ButtonGeneric
                  onClick={() => handleDeleteMusic(text.id)}
                  className="removeMovie"
                >
                  <IconButton text="Remove" icon={<DeleteForever />} />
                </ButtonGeneric>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
