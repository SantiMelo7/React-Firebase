import { useAuhtentication } from "../../../hooks/useAuthentication";

export function ContentAuth() {
  const { user, auhtentication } = useAuhtentication();

  return (
    <>
      {user && (
        <div className="mt-5 flex flex-col gap-y-4 justify-center items-center">
          <img
            src={auhtentication?.currentUser?.photoURL}
            width={100}
            height={100}
          />
          <h1>{auhtentication?.currentUser?.email}</h1>
          <span> {user?.currentUser?.displayName}</span>
        </div>
      )}
    </>
  );
}
