export function IconButton({ icon, text }) {
  return (
    <div className="flex justify-center items-center gap-x-4">
      {icon}
      {text}
    </div>
  );
}
