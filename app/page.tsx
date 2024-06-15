import Image from "next/image";
import auth from "./styles/auth.module.scss";
import Signin from "./pages/SignIn";



export default function Home() {
  return (
    <main>
      <p>hello welcom to the home page</p>
      <p className={auth.title}>testting font aventir</p>
      <Signin />
    </main>
  );
}
