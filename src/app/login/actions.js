
"use server"
import { createSession } from "@utils/auth";
import { redirect } from "next/navigation"

export async function login(prev, data) {
  const password = data.get("password")
  const email = data.get("email")
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getLogin`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" }
  })
  const sessionId = await response.json();
  if (!response.ok) {
    return { error: "Invalid credentials" }
  }
  await createSession(sessionId.data);
  redirect("/dashboard")
}
  