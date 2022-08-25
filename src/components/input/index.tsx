import "./styles.scss";

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  id,
  name,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
