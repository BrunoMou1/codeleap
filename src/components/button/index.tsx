import "./styles.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: (event: React.FormEvent) => void;
  disabled?: boolean;
  className: string;
}

export function Button({
  children,
  onClick,
  type,
  className,
  disabled,
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}
