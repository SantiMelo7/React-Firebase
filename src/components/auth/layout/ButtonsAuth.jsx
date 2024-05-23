import { IconButton } from "../../layout/IconButton";
import { useAuhtentication } from "../../../hooks/useAuthentication";
import { ButtonGeneric } from "../../layout/ButtonGeneric";
import { Google, Logout } from "@mui/icons-material";

export function ButtonsAuth() {
  const { authenticacion, handleSingInWithGoogle, logout, singIn } =
    useAuhtentication();

  return (
    <>
      {authenticacion.currentUser ? (
        <ButtonGeneric type="button" onClick={logout} className="logout">
          <IconButton text="Logout" icon={<Logout />} />
        </ButtonGeneric>
      ) : (
        <>
          <ButtonGeneric onClick={singIn} title="Sing In" className="generic" />
          <ButtonGeneric
            type="submit"
            onClick={handleSingInWithGoogle}
            className="google"
          >
            <IconButton text="Sign In With Google" icon={<Google />} />
          </ButtonGeneric>
        </>
      )}
    </>
  );
}
