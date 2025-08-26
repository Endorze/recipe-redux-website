"use client"
import { useLoginState } from "../../../hooks/useLoginState";
import { redirect } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useLoginState();
  if (!user) {
    return redirect("/login")
  }

  return children;

}