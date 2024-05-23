import { useStorage } from "../../../hooks/useStorage";

export function ContentStorage() {
  const { imgsContent } = useStorage();
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-2 gap-x-5 gap-y-5 md:p-0 sm:p-3">
      {imgsContent.map((text) => {
        return (
          <div key={text.id} className="bg-amber-300 p-3 rounded-md">
            <img className="rounded-lg w-[200px] h-[200px]" src={text} />
          </div>
        );
      })}
    </div>
  );
}
