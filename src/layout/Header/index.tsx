import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" bg-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5">
        <div className="flex items-center gap-5">
          <h1>
            <Link to={"/"} className="text-3xl font-bold">
              Hotel-Motel
            </Link>
          </h1>

          <ul>
            <li>
              <Link to={"/dashboard"}>Dahboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
