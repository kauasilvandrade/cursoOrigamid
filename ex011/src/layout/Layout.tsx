import { Outlet, NavLink } from "react-router";
import clsx from "clsx";

export function Layout() {
  return (
    <div>
      <nav className="mb-8">
        <ul className="flex">
          <li className="mr-4">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                clsx(
                  "block text-xl font-sans text-black p-2 rounded-[0.25rem]",
                  isActive && "bg-[#ccc]",
                )
              }
            >
              Produtos
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={"/contato"}
              className={({ isActive }) =>
                clsx(
                  "block text-xl font-sans text-black p-2 rounded-[0.25rem]",
                  isActive && "bg-[#ccc]",
                )
              }
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />

      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}
