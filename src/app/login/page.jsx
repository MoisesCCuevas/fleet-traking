/**
 * LoginPage component renders the login page for the Fleet Tracking application.
 * It includes a form with email and password inputs, and a submit button.
 * The form uses the `useActionState` hook to manage the login action and error state,
 * and the `useFormStatus` hook to manage the form submission status.
 * 
 * @component
 * @returns {JSX.Element} The rendered login page component.
 * 
 * @example
 * // Usage example:
 * <LoginPage />
 */
"use client"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { login } from "./actions";
import Layout from '@components/Layout';
import Input from "@components/Input";
import Button from "@components/Button";
import NotificationAlert from "@components/NotificationAlert";
 
export default function LoginPage() {
  const [state, action] = useActionState(login, { error: "" })
  const status = useFormStatus()
  return (
    <main className="flex items-center h-screen w-screen justify-center select-none">
      <div className="flex flex-col items-center justify-between h-1/3">
        <h1 className="text-6xl font-bold mb-7 text-center">Fleet Tracking</h1>
        <form className="flex flex-col items-center gap-5 max-w-1/3" action={action}>
          <Input type="email" name="email" placeholder="Email" required />
          <Input type="password" name="password" placeholder="Password" required />
          <Button type="submit" disabled={status.pending}>Login</Button>
        </form>
        {
          state.error && <NotificationAlert message={state.error} type="error" />
        }
      </div>
    </main>
  )
}