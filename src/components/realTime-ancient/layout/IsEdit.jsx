import { useRealTimeDb } from "../../../hooks/useRealTimeDb";
import { ButtonGeneric } from "../../layout/ButtonGeneric";
import { IconButton } from "../../layout/IconButton";

export function IsEdit() {
  const { handleEdit, isEdit, writeToDB, handleEditDeleteComplete } =
    useRealTimeDb();

  return (
    <>
      {!isEdit ? (
        <ButtonGeneric className="google" onClick={writeToDB} title="Submit" />
      ) : (
        <div className="flex gap-x-5">
          <ButtonGeneric
            className="google"
            onClick={() => handleEdit(tools)}
            title="Edit"
          />
          <ButtonGeneric className="google" onClick={handleEditDeleteComplete}>
            <IconButton icon={<Cancel />} />
          </ButtonGeneric>
        </div>
      )}
    </>
  );
}
