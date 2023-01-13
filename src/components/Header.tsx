/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */
import { type Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { type FC } from "react";

const Header: FC<{
  sessionDetails: Session;
}> = ({ sessionDetails }) => {
  return (
    <header className="sticky bottom-full flex w-full flex-row justify-between px-4 py-2">
      <ProfileUI sessionDetails={sessionDetails} />
      <div className="flex select-none flex-row items-center justify-center sm:gap-2">
        <HeaderLink href="/" head="Home" />
        <HeaderLink href="/card/view" head="Viewer" />
        <HeaderLink href="/card/create" head="Create" />
        <HeaderLink href="/card/delete" head="Delete" />
      </div>
    </header>
  );
};

const ProfileUI: FC<{
  sessionDetails: Session;
}> = ({ sessionDetails }) => {
  return (
    <div className="flex select-none flex-row items-center gap-8 rounded-lg border-2 border-black/10 bg-white/25 transition-colors hover:bg-white/30 md:rounded-full">
      <img
        className="rounded-lg border-2 border-white/25 transition-colors hover:border-white/40 md:rounded-full"
        src={sessionDetails.user?.image || "/favicon.ico"}
        width={50}
        height={50}
        alt=""
      />
      <button
        onClick={() => signOut()}
        className="mr-4 text-white/75 transition-colors hover:text-white"
      >
        <i className="fa-solid fa-right-from-bracket fa-lg" />
      </button>
    </div>
  );
};

const HeaderLink: FC<{
  href: string;
  head: string;
}> = ({ href, head }) => {
  return (
    <Link
      className="flex h-[52px] items-center rounded-lg border-2 border-black/10 bg-white/25 px-4 py-2 text-lg text-white/75 transition-colors hover:bg-white/30 hover:text-white sm:px-4 md:rounded-full md:px-8"
      href={href}
    >
      {head}
    </Link>
  );
};

export default Header;
