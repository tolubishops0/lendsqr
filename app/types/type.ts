export interface InputFieldProps {
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  text?: string;
  className: string;
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
