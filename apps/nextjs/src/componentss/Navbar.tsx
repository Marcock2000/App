import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">GrayHouse</h1>
        <div>
          {isSignedIn ? (
            <div className="flex items-center space-x-4">
              <Link legacyBehavior href="/">
                <a className="text-white">Dashboard</a>
              </Link>
              <Link legacyBehavior href="/profile">
                <a className="text-white">Profile</a>
              </Link>
              <UserButton/>
            </div>
          ) : (
            <Link legacyBehavior href="/sign-in">
              <a className="text-white">Sign In</a>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
