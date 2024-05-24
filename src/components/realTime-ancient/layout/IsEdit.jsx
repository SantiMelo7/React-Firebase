import { Cancel } from "@mui/icons-material";
import { useRealTimeDb } from "../../../hooks/useRealTimeDb";
import { ButtonGeneric } from "../../layout/ButtonGeneric";
import { IconButton } from "../../layout/IconButton";

export function IsEdit() {
  const { handleEdit, handleEditDeleteComplete } = useRealTimeDb();

  return (
    <>
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
    </>
  );
}
