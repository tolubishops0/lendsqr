import { SiderBarListProps, UserCardListProps } from "../types/type";

import logo from "../../public/assets/logoimg.svg";
import signin from "../../public/assets/signinimg.svg";

import org from "../../public/assets/switcorgicon.svg";
import arrdown from "../../public/assets/arrdown.svg";
import moreicn from "../../public/assets/moreicn.svg";

import dashbrd from "../../public/assets/dashbrdicn.svg";

//NAVBAR
import searchicn from "../../public/assets/serachicn.svg";
import bellicn from "../../public/assets/bellicn.svg";
import avatar from "../../public/assets/avatar.svg";
import avdownarricn from "../../public/assets/avdownarricn.svg";
import menuicn from "../../public/assets/menuicn.svg";
import filtericn from "../../public/assets/filtericn.svg";

//SIDEBAR
// CUSTOMERS
import usericn from "../../public/assets/usericn.svg";
import gurricn from "../../public/assets/gurricn.svg";
import loanicn from "../../public/assets/loanicn.svg";
import decicn from "../../public/assets/decicn.svg";
import savingsicn from "../../public/assets/savingsicn.svg";
import loanreqicn from "../../public/assets/loanreqicn.svg";
import whitelisticn from "../../public/assets/whitelisticn.svg";
import karmaicn from "../../public/assets/karmaicn.svg";
//BUSINESS
import orgicn from "../../public/assets/orgicn.svg";
import loanprdicn from "../../public/assets/loanprdicn.svg";
import savprdicn from "../../public/assets/savprdicn.svg";
import feesicn from "../../public/assets/feesicn.svg";
import transicn from "../../public/assets/transicn.svg";
import servicsicn from "../../public/assets/servicsicn.svg";
import serviceaccicn from "../../public/assets/serviceaccicn.svg";
import settlementsicn from "../../public/assets/settlementsicn.svg";
import reportsicn from "../../public/assets/reportsicn.svg";

//SETTINGS
import preficn from "../../public/assets/preficn.svg";
import feesandpricingicn from "../../public/assets/feesandpricingicn.svg";
import auditlogsicn from "../../public/assets/auditlogsicn.svg";

//USERS
import userdashbrdicn from "../../public/assets/userdashbrdicn.svg";
import acusericn from "../../public/assets/acusericn.svg";
import userloansicn from "../../public/assets/userloansicn.svg";
import usersavingsicn from "../../public/assets/usersavingsicn.svg";

//AUTH SCREEN
export const logoimg = logo;
export const signinimg = signin;

export const avataricn = avatar;
export const avatararricn = avdownarricn;
export const searchicon = searchicn;
export const bell = bellicn;
export const menu = menuicn;

//TABLE
export const filter = filtericn;
export const more = moreicn;

// SIDEBAR

export const sworgicn = org;
export const arrdownicn = arrdown;
export const dashbrdicn = dashbrd;

export const cutomersFeature: SiderBarListProps[] = [
  {
    label: "Users",
    icon: usericn,
  },
  {
    label: "Guarantors",
    icon: gurricn,
  },
  {
    label: "Loans",
    icon: loanicn,
  },
  {
    label: "Decision Models",
    icon: decicn,
  },
  {
    label: "Savings",
    icon: savingsicn,
  },
  {
    label: "Loan Requests",
    icon: loanreqicn,
  },
  {
    label: "Whitelist",
    icon: whitelisticn,
  },
  {
    label: "Karma",
    icon: karmaicn,
  },
];

export const businessFeatures: SiderBarListProps[] = [
  {
    label: "Organization",
    icon: orgicn,
  },
  {
    label: "Loan Products",
    icon: loanprdicn,
  },
  {
    label: "Savings Products",
    icon: savprdicn,
  },
  {
    label: "Fees and Charges",
    icon: feesicn,
  },
  {
    label: "Transactions",
    icon: transicn,
  },
  {
    label: "Services",
    icon: servicsicn,
  },
  {
    label: "Service Account",
    icon: serviceaccicn,
  },
  {
    label: "Settlements",
    icon: settlementsicn,
  },
  {
    label: "Reports",
    icon: reportsicn,
  },
];

export const settings: SiderBarListProps[] = [
  {
    label: "Preferences",
    icon: preficn,
  },
  {
    label: "Fees and Pricing",
    icon: feesandpricingicn,
  },
  {
    label: "Audit Logs",
    icon: auditlogsicn,
  },
];
export const userCard: UserCardListProps[] = [
  {
    label: "USERS",
    icon: userdashbrdicn,
    value: "2,543",
  },
  {
    label: "ACTIVE USERS",
    icon: acusericn,
    value: "2,453",
  },
  {
    label: "USERS WITH LOANS",
    icon: userloansicn,
    value: "12,453",
  },
  {
    label: "USERS WITH SAVINGS",
    icon: usersavingsicn,
    value: "102,453",
  },
];

export const dashboardTableData = [
  "Organization",
  "Username",
  "Email",
  "Phone number",
  "Date joined",
  "Status",
];
