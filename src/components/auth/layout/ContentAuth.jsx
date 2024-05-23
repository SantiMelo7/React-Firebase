import { useAuhtentication } from "../../../hooks/useAuthentication";

export function ContentAuth() {
  const { authenticacion } = useAuhtentication();

  return (
    <>
      {authenticacion.currentUser && (
        <div className="mt-5 flex flex-col gap-y-4 justify-center items-center">
          <img
            src={authenticacion?.currentUser?.photoURL}
            width={100}
            height={100}
          />
          <h1>{authenticacion?.currentUser?.email}</h1>
          <span> {authenticacion?.currentUser?.displayName}</span>
        </div>
      )}
    </>
  );
}
