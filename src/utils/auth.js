
/**
 * @fileoverview Utility functions for handling authentication sessions using JWT.
 * @module utils/auth
 */

import { cookies } from "next/headers"
import { SignJWT, jwtVerify } from "jose"

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)
const alg = "HS256"

export const COOKIE_NAME = "__session__"

/**
 * Encrypts a payload into a JWT token.
 * @param {Object} payload - The payload to be encrypted.
 * @param {string} expirationTime - The expiration time of the token (e.g., "24h").
 * @returns {Promise<string>} The signed JWT token.
 */
export async function encrypt(payload, expirationTime) {
  return new SignJWT(payload)
    .setProtectedHeader({alg})
    .setIssuedAt()
    .setExpirationTime(expirationTime)
    .sign(encodedKey)
}

/**
 * Decrypts a JWT token and verifies its validity.
 * @param {string} session - The JWT token to be decrypted.
 * @returns {Promise<Object|null>} The decrypted payload if the token is valid, otherwise null.
 */
export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: [alg],
    })
    return payload
  } catch (error) {
    console.log(error)
    return null
  }
}

/**
 * Creates a new session for a user and sets a cookie with the session token.
 * @param {string} userId - The ID of the user for whom the session is created.
 * @returns {Promise<void>}
 */
export async function createSession(userId) {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)
  const session = await encrypt({ userId }, "24h")
  const allCookies = await cookies()

  allCookies.set(COOKIE_NAME, session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  })
}

/**
 * Deletes the session cookie.
 * @returns {Promise<void>}
 */
export async function deleteSession() {
  const allCookies = await cookies()
  allCookies.delete(COOKIE_NAME)
}

/**
 * Checks if a session is valid by decrypting the session token.
 * @param {string} cookieValue - The value of the session cookie.
 * @returns {Promise<boolean>} True if the session is valid, otherwise false.
 */
export async function isSessionValid(cookieValue){
  if (!cookieValue) return false
  const session = await decrypt(cookieValue)
  return Boolean(session)
}
