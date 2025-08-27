"use client";
import { useState } from "react";
import { useLoginState } from "../../../hooks/useLoginState";
import { loginUser } from "../../../lib/auth";
import { useRouter } from "next/navigation";


export default function LoginForm() {
  const { user, setUser } = useLoginState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const loggedInUser = loginUser({username, password})

    if (loggedInUser) {
      setUser(loggedInUser);
      router.replace("/")
    } else {
      alert("Wrong username or password");
    }
  }

  return (
    <form onSubmit={handleLogin} className="pt-6 flex flex-col gap-4">
      <input
        autoFocus
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="outline-none py-2 border border-gray-400 w-full px-2 rounded-md shadow-sm"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="outline-none py-2 border border-gray-400 w-full px-2 rounded-md shadow-sm"
      />
      <button type="submit" className="self-start bg-[#EA2A00] text-white font-semibold px-5 py-2 mt-4 cursor-pointer rounded-md hover:bg-red-400 hover:transition duration-300 hover:scale-110">Login</button>
    </form>
  );
}
