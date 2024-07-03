import {
  ArrowRightEndOnRectangleIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid"; // Correcting the import
import Link from "next/link";
import PageRoutes from "../(misc)/PageRoutes";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <nav className="bg-neutral text-neutral-content">
      <div className="navbar max-w-screen-xl ml-auto mr-auto p-2">
        <div className="navbar-start">
          <Link href={PageRoutes.Home} className="flex items-center">
            <Image
              src="/beetjamIconSmall.png"
              alt="beetjam icon"
              height="25"
              width="25"
            />
            <h1 className="text-primary text-xl font-bold ml-2">beetjam.</h1>
          </Link>
        </div>
        <div className="navbar-end">
          {session ? (
            <Link href={PageRoutes.SignOut}>Logout</Link>
          ) : (
            <Link href={PageRoutes.SignIn}>Login</Link>
          )}
          <button className="btn btn-ghost btn-circle">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <Bars3Icon className="h-5 w-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
