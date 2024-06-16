import Image from "next/image";
import auth from "./styles/auth.module.scss";
import SignIn from "./components/SignIn/SignIn";

export default function Home() {
  return (
    <main>
      <SignIn />
    </main>
  );
}
