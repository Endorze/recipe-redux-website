"use client"
import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
   
    }

    return (
        <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <p>Login page</p>
            <div className="flex bg-gray-200 rounded-2xl overflow-hidden">
                <div className="min-w-[300px] mx-12">
                    <h4>Log in.</h4>
                    <p>Log in with your data that you entered during your registration.</p>
                    <form onSubmit={handleSubmit}>
                        <input value={username}></input>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password..."></input>
                        <button>Login</button>
                        {error && <p>{error}</p>}
                    </form>
                </div>

                <div>
                    <img src={"/images/login/recipe1.jpg"}></img>
                </div>
            </div>
        </div>
    )
}

export default Login;