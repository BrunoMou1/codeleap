import "./styles.scss";

interface TextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextArea({
  id,
  name,
  placeholder,
  value,
  onChange,
}: TextAreaProps) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
