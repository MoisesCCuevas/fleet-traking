import React from "react";
import Link from "next/link"
import SideMenu from "@components/SideMenu";
import RoundedButton from "@components/RoundedButton"
import ThemeSwitcher from "@components/ThemeSwitcher"
import { PowerIcon } from "@heroicons/react/24/outline"
import { useFormStatus } from "react-dom"
import { usePathname } from "next/navigation"
import useUI from "@hooks/uiHook";

export default function NavbarMini(props) {
  const { logout } = props;
  const {
    open,
    openClass,
    closeSideMenu,
  } = useUI();
  const status = useFormStatus()
  const pathname = usePathname()
  return (
    <SideMenu
      open={open}
      openClass={openClass}
      title=""
      onClose={closeSideMenu}
    >
      <div className="flex flex-col flex-1 items-center justify-between w-full p-4">
        <ul className="flex-col gap-3 pb-6 flex">
          <li className={"/dashboard" == pathname ? "underline underline-offset-4" : ""} onClick={closeSideMenu}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className={"/tracking" == pathname ? "underline underline-offset-4" : ""} onClick={closeSideMenu}>
            <Link href="/tracking">Monitor</Link>
          </li>
        </ul>
        <div className="gap-3 items-center justify-end flex">
          <form action={logout}>
            <RoundedButton
              type="submit"
              disabled={status.pending}
            >
              <PowerIcon className="size-5" />
            </RoundedButton>
          </form>
          <ThemeSwitcher />
        </div>
      </div>
    </SideMenu>
  );
}