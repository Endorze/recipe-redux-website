"use client"
import { useLoginState } from "../../../hooks/useLoginState";
import { redirect } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { loggedIn } = useLoginState();
  if (!loggedIn) {
    return redirect("/login")
  }

  return children;

}