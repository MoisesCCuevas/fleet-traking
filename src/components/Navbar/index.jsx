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
import { useFormStatus } from "react-dom"
import { PowerIcon } from "@heroicons/react/24/outline"
import { usePathname } from "next/navigation"

export default function Navbar({ logout }){
  const status = useFormStatus()
  const pathname = usePathname()
  return (
    <nav className="fixed left-0 top-0 flex flex-col justify-between py-4 px-3 w-1/5 h-screen shadow-md">
      <ul className="flex flex-col gap-3">
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
      <form action={logout}>
        <button
          className="flex px-4 py-2 justify-center items-center gap-2 rounded-md bg-gray-600 w-full text-white disabled:opacity-40"
          type="submit"
          disabled={status.pending}
        >
          <span>Logout</span>
          <PowerIcon className="size-5" />
        </button>
      </form>
    </nav>
  )
}
