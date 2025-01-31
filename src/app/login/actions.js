/**
 * Authenticates a user based on provided credentials and creates a session if successful.
 *
 * @param {Object} prev - Previous state or context (not used in this function).
 * @param {FormData} data - Form data containing user credentials.
 * @param {string} data.get("password") - The user's password.
 * @param {string} data.get("email") - The user's email.
 * @returns {Promise<Object>} - Returns an object with an error message if authentication fails.
 * @throws {Error} - Throws an error if session creation or redirection fails.
 */
"use server"
import { createSession } from "@utils/auth"
import { createHash, randomUUID } from "crypto"
import { redirect } from "next/navigation"

export async function login(prev, data) {
  const id = randomUUID()
  const hash = createHash("sha256")
  const password = data.get("password")
  const email = data.get("email")
  const hashedPassword = hash.update(password).digest("hex")
  if (hashedPassword !== process.env.PASSWORD || email !== process.env.EMAIL) {
    return { error: "Invalid credentials" }
  }
  await createSession(id)
  redirect("/dashboard")
}
  