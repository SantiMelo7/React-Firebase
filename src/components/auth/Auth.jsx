import { GenericInput } from "../layout/GenericInput";
import { Line } from "../layout/Line";
import { TitleContent } from "../layout/TitleContent";
import { useAuhtentication } from "../../hooks/useAuthentication";
import { ContentAuth } from "./layout/ContentAuth";
import { ButtonsAuth } from "./layout/ButtonsAuth";

export function Authentication() {
  const { formData, singIn, handleChange } = useAuhtentication();

  return (
    <>
      <TitleContent text="Authenticacion" />
      <form
        onSubmit={singIn}
        className="mt-10 flex flex-col justify-start items-start gap-y-10"
      >
        <GenericInput
          label="Email"
          placeholder="Ingresa tu email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(ev) => handleChange("email", ev.target.value)}
        />

        <GenericInput
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          id="password"
          name="password"
          value={formData.password}
          onChange={(ev) => handleChange("password", ev.target.value)}
        />
        <ButtonsAuth />
      </form>
      <ContentAuth />
      <Line />
    </>
  );
}
