export interface InputFieldProps {
  type?: string;
  placeholder?: string;
  value?: string | number;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  text?: string;
  className: string;
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SideBarProps {
  toggleSideBar: boolean;
  viewportWidth?: number;
  handleToggleSidebar: () => void;
}
