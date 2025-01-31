/**
 * Logs out the current user by deleting their session and redirecting them to the login page.
 *
 * @async
 * @function logout
 * @returns {Promise<void>} A promise that resolves when the session is deleted and the user is redirected.
 */
"use server"
import { deleteSession } from "@utils/auth"
import { redirect } from "next/navigation"

export async function logout() {
  await deleteSession()
  redirect("/login")
}
