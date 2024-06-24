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
export interface UserCardListProps {
  label: string;
  icon: StaticImport;
  value: string;
}

export interface DataListTable {
  company: string;
  firstName: string;
  phoneNumber: string;
  email: string;
  dateJoined: string;
  status: string;
}

export interface DataDetails {
  firstName: string;
  email: string;
  dateJoined: string;
  status: string;
  id: number;
  accNumber: number;
  balance: string;
  bank: string;
  children: number;
  company: string;
  dataJoined: string;
  educationLevel: string;
  guarantorEmail: string;
  guarantorLastName: string;
  guarantorFirstName: string;
  guarantorNumber: string;
  guarantorRel: string | undefined;

  lastName: string;
  loanRepayment: string;
  maritalStatus: string;
  monthlyIncome: string;
  phoneNumber: string;
  residence: string;
  userId: string;
  userTeir: string;
  length?: number;
  bvn: number;
  employmentSector: string;
}

export interface FiltersProps {
  onFilterChange: (filters: {
    name: string;
    email: string;
    organization: string;
    date: string;
    status: string;
    phoneNumber: string;
  }) => void;
}
