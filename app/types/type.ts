import { StaticImport } from "next/dist/shared/lib/get-img-props";

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

export interface SideBarToggleProps {
  toggleSideBar: boolean;
  viewportWidth?: number;
  handleToggleSidebar: () => void;
}

export interface SiderBarListProps {
  label: string;
  icon: StaticImport;
  icon2?: StaticImport;
}
