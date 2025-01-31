/**
 * Logs out the current user by deleting the session and redirecting to the login page.
 * 
 * @async
 * @function logout
 * @returns {Promise<void>} A promise that resolves when the session is deleted and the user is redirected.
 */

/**
 * Retrieves the Google API key from the environment variables.
 * 
 * @async
 * @function getGoogleAPI
 * @returns {Promise<Object>} A promise that resolves to an object containing the Google API key.
 */
"use server"
import { deleteSession } from "@utils/auth"
import { redirect } from "next/navigation"

export async function logout() {
  await deleteSession()
  redirect("/login")
}

export async function getGoogleAPI(){
  return {
    key: process.env.GOOGLE_API_KEY
  }
}
