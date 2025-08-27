"use client"
import { Sidebar } from "@/sidebar/sidebar";
import { useLoginState } from "../../hooks/useLoginState";

export function Layout({ children }: { children: React.ReactNode }) {
    const { user } = useLoginState();

    return (
        <>
            {user && <Sidebar />}
            {children}
        </>
    );
}
