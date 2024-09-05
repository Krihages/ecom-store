import Navbar from "./Navbar";
import Logo from "../Logo";

export default function Header() {
  return (
    <header className="p-4 ">
      <div className="flex justify-between w-full max-w-5xl mx-auto">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
