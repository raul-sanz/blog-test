import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { LoginIcon, LogoutIcon, PencilIcon } from "../lib/Icons";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="left">
      <Link href="/" legacyBehavior>
        <a className="bold" data-active={isActive("/")}>
          Raul's Blog
        </a>
      </Link>
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      <div className="left">
        <Link href="/" legacyBehavior>
          <a className="bold" data-active={isActive("/")}>
            Raul's Blog
          </a>
        </Link>
      </div>
    );
    right = (
      <div className="right">
        <p>Validating session ...</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="bg-info rounded-md text-primary px-4">
        <Link href="/api/auth/signin" legacyBehavior>
          <a className="flex gap-3" data-active={isActive("/signup")}>Log in <LoginIcon/></a>
        </Link>
      </div>
    );
  }

  if (session) {
    left = (
      <div className="flex gap-4">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold" data-active={isActive("/")}>
            <span className="lg:inline-block hidden">Raul's Blog</span>
            <span className="lg:hidden inline-block">RB</span>
          </a>
        </Link>
        <Link href="/drafts" legacyBehavior >
          <a className="bg-info rounded-md text-primary px-1 lg:px-4" data-active={isActive("/drafts")}>My drafts</a>
        </Link>
      </div>
    );
    right = (
      <div className="flex gap-4">
        <p className="hidden lg:inline-block">
          {session.user.name} ({session.user.email})
        </p>
        <Link href="/create" legacyBehavior>
          <button className="bg-info rounded-md text-primary  px-1 lg:px-4">
            <a className="flex gap-2">New post <i className="hidden lg:inline-block"><PencilIcon/></i></a>
          </button>
        </Link>
        <button onClick={() => signOut()} className="bg-info rounded-md text-primary  px-1 lg:px-4">
          <a className="flex gap-2">Log out <i className="hidden lg:inline-block"><LogoutIcon/></i></a>
        </button>
      </div>
    );
  }

  return (
    <nav className="flex justify-between p-4 bg-primary text-white">
      {left}
      {right}
    </nav>
  );
};

export default Header;
