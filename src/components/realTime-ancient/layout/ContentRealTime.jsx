import { Delete, Edit } from "@mui/icons-material";
import { useRealTimeDb } from "../../../hooks/useRealTimeDb";
import { ButtonGeneric } from "../../layout/ButtonGeneric";
import { IconButton } from "../../layout/IconButton";

export function ContentRealTime() {
  const { toolsContent, handleDelete, handleEditSub } = useRealTimeDb();
  return (
    <>
      {toolsContent.map((tools) => (
        <>
          <div
            key={tools.id}
            className="bg-blue-200 p-4 mb-4 flex flex-col justify-center items-center rounded-md w-72"
          >
            <h1 className="text-2xl font-extrabold">{tools.todo}</h1>
            <div className="flex flex-row mt-3 gap-x-5">
              <ButtonGeneric onClick={() => handleDelete(tools)}>
                <IconButton
                  icon={
                    <Delete
                      className="text-red-500"
                      style={{ width: "30px", height: "30px" }}
                    />
                  }
                />
              </ButtonGeneric>
              <ButtonGeneric onClick={() => handleEditSub(tools)}>
                <IconButton
                  icon={
                    <Edit
                      className="text-green-500"
                      style={{ width: "30px", height: "30px" }}
                    />
                  }
                />
              </ButtonGeneric>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
