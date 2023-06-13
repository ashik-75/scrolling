import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" sticky left-0 top-0 bg-zinc-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5">
        <div className="flex items-center justify-between gap-5">
          <Link to={"/"} className="text-3xl font-bold">
            RQ
          </Link>
        </div>
        <ul>
          <li>
            <Link to={"/"}>Dahboard</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
