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
      <label className="flex flex-col gap-y-3">
        {label}
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}
