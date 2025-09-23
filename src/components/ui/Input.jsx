export default function Input({
  className,
  type,
  onChange,
  value,
  readOnly,
  placeholder,
}) {
  return (
    <input
      type={type}
      className={className}
      onChange={onChange}
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
    />
  );
}
