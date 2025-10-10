export default function Input({
  className,
  type,
  onChange,
  value,
  readOnly,
  placeholder,
  id,
  name,
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      className={className}
      onChange={onChange}
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
    />
  );
}
