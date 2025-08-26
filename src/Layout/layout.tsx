"use client"
import { Sidebar } from "@/sidebar/sidebar";
import { useLoginState } from "../../hooks/useLoginState";
import LoginForm from "@/components/LoginForm/loginForm";
import { redirect } from "next/navigation";

export function Layout({ children }: { children: React.ReactNode }) {
    const { user } = useLoginState();

    return (
        <>
            {user && <Sidebar />}
            {children}
        </>
    );
}
