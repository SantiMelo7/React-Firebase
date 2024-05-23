export function GenericInput({
  label,
  placeholder,
  id,
  name,
  value,
  onChange,
  type = "text",
}) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
