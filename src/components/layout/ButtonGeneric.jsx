export function ButtonGeneric({ title, onClick, className, children, type }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {title}
      {children}
    </button>
  );
}
