/**
 * Navbar component that renders a navigation bar with links and a logout button.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.logout - The function to call when the logout button is clicked.
 *
 * @returns {JSX.Element} The rendered Navbar component.
 */
"use client"
import React from "react"
import Link from "next/link"
import RoundedButton from "@components/RoundedButton"
import ThemeSwitcher from "@components/ThemeSwitcher"
import { useFormStatus } from "react-dom"
import { PowerIcon, Bars3Icon } from "@heroicons/react/24/outline"
import { usePathname } from "next/navigation"
import useUI from "@hooks/uiHook"

export default function Navbar({ logout }){
  const status = useFormStatus()
  const pathname = usePathname()
  const { open, openSideMenu, closeSideMenu } = useUI()
  return (
    <nav className="fixed md:left-0 top-0 flex flex-col justify-between py-2 md:py-4 px-3 w-full md:w-1/5 h-fit md:h-screen shadow-md z-50">
      <ul className="flex-col gap-3 hidden md:flex">
        <li>
          <h1 className="text-3xl font-semibold">Fleet Tracking</h1>
        </li>
        <li className={"/dashboard" == pathname ? "underline underline-offset-4" : ""}>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className={"/tracking" == pathname ? "underline underline-offset-4" : ""}>
          <Link href="/tracking">Monitor</Link>
        </li>
      </ul>
      <div className="gap-3 items-center justify-end hidden md:flex">
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
      <div className="gap-3 items-center justify-between flex md:hidden">
        <h1 className="text-3xl font-semibold">Fleet Tracking</h1>
        <RoundedButton
          type="submit"
          disabled={status.pending}
          onClick={() => open ? closeSideMenu() : openSideMenu()}
        >
          <Bars3Icon className="size-5" />
        </RoundedButton>
      </div>
    </nav>
  )
}
